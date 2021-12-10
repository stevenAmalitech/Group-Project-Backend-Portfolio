import { errorCodes } from "./util";

export default {
  paths: {
    "/products/product": {
      post: {
        tags: ["Product"],
        summary: "Add product to database and return product",
        operationId: "createProduct",
        requestBody: {
          description: "Product object to save to app",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/CreateProduct" },
            },
          },
        },
        responses: {
          200: {
            description: "successful operation",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: { $ref: "#/components/schemas/Product" },
                },
              },
            },
          },
          ...errorCodes,
        },
      },
    },
    "/products": {
      get: {
        tags: ["Product"],
        summary: "Get all products",
        description: "Returns an array of all products",
        operationId: "getProducts",
        parameters: [],
        responses: {
          200: {
            description: "successful operation",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: { $ref: "#/components/schemas/Product" },
                },
              },
            },
          },
          ...errorCodes,
        },
      },
    },

    "/products/{productId}": {
      get: {
        tags: ["Product"],
        summary: "Get product by ID ",
        description: "Returns a single product",
        operationId: "getProductById",
        parameters: [
          {
            name: "productId",
            in: "path",
            description: "ID of product to return",
            required: true,
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
                  $ref: "#/components/schemas/Product",
                  type: "object",
                },
              },
            },
          },
          ...errorCodes,
        },
      },
      put: {
        tags: ["Product"],
        summary: "Update an existing product",
        operationId: "updateProduct",
        parameters: [
          {
            name: "productId",
            in: "path",
            description: "ID of product to update",
            required: true,
            schema: { type: "number" },
          },
          {
            name: "name",
            in: "query",
            description: "new name of product",
            schema: { type: "string" },
          },
          {
            name: "description",
            in: "query",
            description: "new decription of product",
            schema: { type: "string" },
          },
          {
            name: "price",
            in: "query",
            description: "new price of product",
            schema: { type: "number" },
          },
        ],
        responses: {
          200: {
            description: "successful operation",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  $ref: "#/components/schemas/Product",
                },
              },
            },
          },
          ...errorCodes,
        },
      },
      delete: {
        tags: ["Product"],
        summary: "Delete one product",
        description: "Delete product by ID",
        operationId: "deleteProductById",
        parameters: [
          {
            name: "productId",
            in: "path",
            description: "ID of product to delete",
            schema: { type: "number" },
          },
        ],
        responses: {
          200: {
            description: "successful operation",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                    },
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
