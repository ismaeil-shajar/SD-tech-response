import { ApiHandler, useBody, useHeader, useJsonBody } from "sst/node/api";
import { Time } from "@necess/core/time";
import { Service, ServiceType } from "@necess/core/services";
export const handler = ApiHandler(async (_evt) => {
  // switch functions base on path parameters fron _evt

  const requestBody = useJsonBody(); // parse request body
  const services = requestBody.services as ServiceType[];
  if (services) {
    await Promise.allSettled(
      services.map(async (service) => {
        const processService = Service.controller(service); // get service controller depending on service name
        await processService.handler(requestBody.data); // process service
      })
    );
    return { statusCode: 200, cookies: undefined, body: "success" };
  }

  return {
    statusCode: 400,
    cookies: undefined,
    body: `bad request ${Time.now()}`,
  };
});
