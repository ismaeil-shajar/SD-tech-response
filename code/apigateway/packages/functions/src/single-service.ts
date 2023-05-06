import { Time } from "@necess/core/time";
import { ServiceType } from "@necess/core/services";
import SqsService from "@necess/core/sqs.service";

const sqsService = new SqsService();
export const handler = async (event: any) => {
  console.log(event.headers);
  // switch functions base on path parameters fron _evt

  const service = event.pathParameters.service as ServiceType;

  const requestBody = JSON.parse(event.body);
  if (service) {
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
    return {
      statusCode: 200,
      body: JSON.stringify(requestBody),
    };
  } else {
    return {
      statusCode: 400,
      body: `bad request ${Time.now()}`,
    };
  }
};
