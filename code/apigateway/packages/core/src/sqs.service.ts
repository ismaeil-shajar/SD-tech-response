import { SQS } from "aws-sdk";

const sqs = new SQS();

export default class SqsService {
  sendMessage = async (params: AWS.SQS.Types.SendMessageRequest) => {
    try {
      return await sqs.sendMessage(params).promise();
    } catch (error) {
      errorHandler("SQS", params.QueueUrl, error);
    }
  };
}

function errorHandler(description: string, params: string, error: unknown) {
  console.error(`sqs-error  -  ${description}:  ${params}`);
  console.error(`sqs-error:  ${error}`);
  let Error = JSON.parse(JSON.stringify(error));
  throw new Error(`sqs-error:  ${error}`);
}
