export const errorCodes = {
  400: {
    description: "bad request",
    content: { "application/json": {} },
  },
  422: {
    description: "parameter error",
    content: {
      "application/json": {
        schema: {
          type: "string",
          example: "'firstName' is required",
        },
      },
    },
  },
};
