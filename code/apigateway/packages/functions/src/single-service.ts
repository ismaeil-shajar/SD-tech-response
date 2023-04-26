import { ApiHandler, useHeader, useJsonBody, usePathParam } from "sst/node/api";
import { Time } from "@necess/core/time";
import { Service, ServiceType } from "@necess/core/services";
export const handler = ApiHandler(async (_evt) => {
  // switch functions base on path parameters fron _evt
  const service = usePathParam("service") as ServiceType;

  const requestBody = useJsonBody();
  if (service) {
    const processService = Service.controller(service); // get service controller depending on service name
    return await processService.handler(requestBody); // process service
  }

  return {
    statusCode: 400,
    body: `bad request  ${Time.now()}`,
  };
});
