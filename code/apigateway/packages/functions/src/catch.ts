export const handler = async (event: any) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "please contact your admin to get your api key",
    }),
  };
};
