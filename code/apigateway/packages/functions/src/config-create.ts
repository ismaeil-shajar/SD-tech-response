import { ApiHandler, useHeader, useJsonBody, usePathParam } from "sst/node/api";
import { Time } from "@necess/core/time";
import { Service, ServiceType } from "@necess/core/services";
export const handler = ApiHandler(async (_evt) => {
  const service = usePathParam("service") as ServiceType;
  const requestBody = useJsonBody();

  const result = await Service.createConfig(service, requestBody);

  return {
    body: JSON.stringify(result),
  };
});
