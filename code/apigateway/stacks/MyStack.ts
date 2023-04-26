import { StackContext, Api, Table } from "sst/constructs";

export function API({ stack }: StackContext) {
  const table = new Table(stack, "oneTable_v0", {
    fields: {
      pk: "string",
      sk: "string",
      gs1pk: "string",
      gs1sk: "string",
    },
    primaryIndex: { partitionKey: "pk", sortKey: "sk" },
    globalIndexes: {
      gs1: { partitionKey: "gs1pk", sortKey: "gs1sk" },
    },
  });
  const api = new Api(stack, "api", {
    customDomain: {
      domainName: `${stack.stage}.sudanapi.tech`,
      hostedZone: `sudanapi.tech`,
      path: "public",
    },
    defaults: {
      function: {
        environment: {
          ONE_TABLE_NAME: table.tableName,
        },
        permissions: [table],
      },
    },
    routes: {
      "POST /service/multi/push":
        "packages/functions/src/multi-service.handler",
      "POST /config/{service}": "packages/functions/src/config-create.handler",
      "POST /service/push/{service}":
        "packages/functions/src/single-service.handler",
    },
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
