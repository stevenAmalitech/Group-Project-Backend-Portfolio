import { errorCodes } from "./util";

export default {
  paths: {
    "/inventory": {
      post: {
        tags: ["Inventory"],
        summary: "Add batch of products to inventory",
        operationId: "addInventory",
        requestBody: {
          description: "Inventory object to add to application",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/CreateInventory",
              },
            },
          },
        },
        responses: {
          200: {
            description: "successful operation",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Inventory",
                  type: "object",
                  properties: {},
                },
              },
            },
          },
          ...errorCodes,
        },
      },
    },
  },
};
