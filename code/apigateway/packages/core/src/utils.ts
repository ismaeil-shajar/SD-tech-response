export * as Utils from "./utils";

// define service configuration with default values
export const defaultConfigurationMapper = {
  NidaaDemo: {
    protocol: "http",
    endpoint: "http://demo1.freedadel.com/api/ads-store",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    mapper: {
      details: "description",
    },
    default: {
      type: 1,
      description: "test",
    },
  },
};

// use bodyMapper to map data object to service body
export const bodyMapper = (data: any, mapper: any, defaults: any) => {
  let body: any = {};
  Object.keys(data).forEach((key) => {
    body[mapper[key] ?? key] = data[key];
  });

  return setDefaults(body, defaults);
};

const setDefaults = (data: any, defaults: any) => {
  console.log(defaults);
  if (defaults) {
    Object.keys(defaults).forEach((key) => {
      if (!data[key]) {
        data[key] = defaults[key];
      }
    });
  }
  return data;
};
