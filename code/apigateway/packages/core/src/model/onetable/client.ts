import Dynamo from "dynamodb-onetable/Dynamo";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
let client: Dynamo|null = null;

export const getClient = (): Dynamo => {
  if (client) return client;
  client = new Dynamo({
    client: new DynamoDBClient({}),
  });
  return client;
};
