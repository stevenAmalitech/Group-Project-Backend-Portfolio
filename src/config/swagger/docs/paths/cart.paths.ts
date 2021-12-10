import { errorCodes } from "./util";

export default {
  paths: {
    "/users/{userId}/cart": {
      put: {
        tags: ["Cart"],
        summary: "Add items to cart",
        operationId: "addToCart",
        parameters: [
          {
            name: "userId",
            in: "path",
            required: true,
            description: "ID of user",
            schema: {
              type: "number",
            },
          },
          {
            name: "items",
            in: "query",
            required: true,
            description: "Array of products",
            schema: {
              type: "number",
            },
          },
          {
            name: "total",
            in: "query",
            required: true,
            description: "total price of items",
            schema: {
              type: "number",
            },
          },
        ],
        responses: {
          200: {
            description: "successful operation",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Cart",
                  },
                },
              },
            },
          },
          ...errorCodes,
        },
      },
      get: {
        tags: ["Cart"],
        summary: "Get user cart",
        operationId: "getCart",
        parameters: [
          {
            name: "userId",
            in: "path",
            required: true,
            description: "ID of user",
            schema: {
              type: "number",
            },
          },
        ],
        responses: {
          200: {
            description: "successful operation",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Cart",
                  },
                },
              },
            },
          },
          ...errorCodes,
        },
      },
      delete: {
        tags: ["Cart"],
        summary: "Delete items from cart",
        operationId: "delete cart",
        parameters: [
          {
            name: "userId",
            in: "path",
            required: true,
            description: "ID of user",
            schema: {
              type: "number",
            },
          },
        ],
        responses: {
          200: {
            description: "successful operation",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Cart",
                  },
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
