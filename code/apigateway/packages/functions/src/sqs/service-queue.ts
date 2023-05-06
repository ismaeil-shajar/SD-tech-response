import { ApiHandler, useBody, useHeader, useJsonBody } from "sst/node/api";
import { Time } from "@necess/core/time";
import { Service, ServiceType } from "@necess/core/services";
export const handler = async (event: any) => {
  for (let record of event.Records) {
    try {
      if (record.attributes.MessageGroupId && record.body) {
        const service = record.attributes.MessageGroupId as ServiceType;
        const requestBody = JSON.parse(record.body); // parse request body
        const processService = Service.controller(service); // get service controller depending on service name
        return await processService.handler(requestBody); // process service
      }
    } catch (e) {
      console.error(e);
    }
  }
};
