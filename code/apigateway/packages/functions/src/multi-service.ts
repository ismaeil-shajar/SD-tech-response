import { Time } from "@necess/core/time";
import { ServiceType } from "@necess/core/services";
import SqsService from "@necess/core/sqs.service";

const sqsService = new SqsService();

export const handler = async (event: any) => {
  const requestBody = JSON.parse(event.body); // parse request body
  const services = requestBody.services as ServiceType[];
  if (services) {
    const servicesSendingResult = await Promise.allSettled(
      services.map(async (service) => {
        if (process.env.SERVICE_QUEUE_URL) {
          await sqsService.sendMessage({
            QueueUrl: process.env.SERVICE_QUEUE_URL,
            MessageGroupId: service,
            MessageDeduplicationId: service + Time.now() + Math.random(),
            MessageBody: JSON.stringify(requestBody),
          });
        } else {
          throw new Error("QUEUE is not defined");
        }
      })
    );

    // ceack all  servicesSendingResult get promise settled status by service if success ot not and return result as array of object with service and status
    let result = servicesSendingResult.map((serviceSendingResult, index) => {
      return {
        service: services[index],
        status: serviceSendingResult.status,
      };
    });

    return { statusCode: 200, body: JSON.stringify(result) };
  }

  return {
    statusCode: 400,
    body: `bad request ${Time.now()}`,
  };
};
