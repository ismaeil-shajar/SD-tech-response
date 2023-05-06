import { Service, ServiceType } from "@necess/core/services";
export const handler = async (event: any) => {
  const service = event.pathParameters.service as ServiceType;
  const requestBody = JSON.parse(event.body);

  const result = await Service.createConfig(service, requestBody);

  return {
    body: JSON.stringify(result),
  };
};
