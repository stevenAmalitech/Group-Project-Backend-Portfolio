import { errorCodes } from "./util";

export default {
  paths: {
    "/users/{userId}/orders/order": {
      post: {
        tags: ["Order"],
        summary: "Create new product in app",
        description: "Add order to database and return order",
        operationId: "createOrder",
        parameters: [
          {
            name: "userId",
            in: "path",
            required: true,
            description: "ID of user creating the order",
            schema: {
              type: "number",
            },
          },
        ],
        requestBody: {
          description: "Order object to save to app",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  items: {
                    type: "array",
                    items: {
                      $ref: "#/component/schemas/Product",
                    },
                  },
                  total: { type: "number" },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "successful operation",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Order" },
              },
            },
          },
          ...errorCodes,
        },
      },
    },
    "/users/{userId}/orders": {
      get: {
        tags: ["Order"],
        summary: "Get orders",
        description: "Returns all orders made by a user",
        operationId: "getAllOrders",
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
      },
      delete: {
        tags: ["Order"],
        summary: "Delete orders",
        description: "Delete all orders made by a user",
        operationId: "deleteOrders",
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
      },
    },
    "/users/{userId}/orders/{orderId}": {
      put: {
        tags: ["Order"],
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
            name: "orderId",
            in: "path",
            required: true,
            description: "ID of order",
            schema: {
              type: "number",
            },
          },
          {
            name: "items",
            in: "query",
            description: "strigified JSON object of products",
            schema: {
              type: "string",
            },
          },
          {
            name: "total",
            in: "query",
            description: "total price of products",
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
                  items: { $ref: "#/components/schemas/Order" },
                },
              },
            },
          },
          ...errorCodes,
        },
      },
      get: {
        tags: ["Order"],
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
            name: "orderId",
            in: "path",
            required: true,
            description: "ID of order",
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
                schema: { $ref: "#/components/schemas/Order" },
              },
            },
          },
          ...errorCodes,
        },
      },
      delete: {
        tags: ["Order"],
        summary: "Delete one order",
        description: "Delete one order made by a user",
        operationId: "deleteOrderById",
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
            name: "orderId",
            in: "path",
            required: true,
            description: "ID of order",
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
                schema: { $ref: "#/components/schemas/Order" },
              },
            },
          },
          ...errorCodes,
        },
      },
    },
    "/users/{userId}/cart/checkout": {
      post: {
        tags: ["Order"],
        summary: "Checkout order",
        // description: "Add order to database and return order",
        operationId: "checkoutOrder",
        parameters: [
          {
            name: "userId",
            in: "path",
            required: true,
            description: "ID of user checking out cart",
            schema: {
              type: "number",
            },
          },
        ],
        requestBody: {
          // description: "Order object to save to app",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/CreateOrder"

              },
            },
          },
        },
        responses: {
          200: {
            description: "successful operation",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Order" },
              },
            },
          },
          ...errorCodes,
        },
      },
    },
  },
};
