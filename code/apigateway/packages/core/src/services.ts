export * as Service from "./services";
import axios from "axios";
import { ConfigurationModel } from "./model/configuration-repo";
import { RequestsLogModel } from "./model/request-log";
import { Utils } from "./utils";

export type ServiceType = keyof typeof Utils.defaultConfigurationMapper;

export const controller = (name: ServiceType) => {
  return {
    handler: serviceMapper(name),
  };
};

/*
    createConfig is a function that takes a service name and a configuration object then save it in database and returns a configuration object
    */
export const createConfig = (name: ServiceType, config: any) =>
  ConfigurationModel.create({ configName: name, configValue: config });

/*
    serviceMapper is a function that takes a service name and returns a function that takes a request body and returns a response
    serviceMapper is a higher order function
    serviceMapper is a function that returns a function
    */
let serviceMapper = (name: ServiceType) => {
  let configuration: any = Utils.defaultConfigurationMapper[name];
  return async (requestData: any) => {
    if (!configuration) {
      configuration = (await ConfigurationModel.get({ configName: name }))
        ?.configValue;
      if (!configuration) {
        throw new Error("Service not found");
      }
    }
    let response = { status: 400, data: { done: true }, headers: {} };
    console.log("configuration", configuration);

    if (configuration.protocol == "http" || configuration.protocol == "https") {
      const sendData = Utils.bodyMapper(
        requestData,
        configuration.mapper,
        configuration.defaults ?? configuration.default
      );
      console.log("bodyMapper", sendData);
      const [responseAxios, databaseResult] = await Promise.all([
        axios({
          method: configuration.method,
          url: configuration.endpoint,
          data: sendData,
          headers: configuration.headers,
        }),
        RequestsLogModel.create({ requestBody: requestData, configName: name }),
      ]);
      response = responseAxios;
    }
    return {
      statusCode: response.status,
      cookies: undefined,
      body: JSON.stringify(response.data),
      headers: response.headers,
    };
  };
};
