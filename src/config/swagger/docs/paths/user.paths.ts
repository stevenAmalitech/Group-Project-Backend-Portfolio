import { errorCodes } from "./util";

export default {
  paths: {
    "/register": {
      post: {
        tags: ["User"],
        summary: "Add user to database and return user",
        operationId: "registerUser",
        requestBody: {
          description: "User object that needs to be add to the application",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/UserRegister" },
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
                  items: {
                    $ref: "#/components/schemas/User",
                  },
                },
              },
            },
          },
          ...errorCodes,
        },
      },
    },
    "/login": {
      post: {
        tags: ["User"],
        summary: "Log into application",
        description: "Returns session cookie",
        operationId: "login",
        requestBody: {
          description: "User object to needed to access api",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  email: {
                    type: "string",
                    description: "Email used to register user",
                    required: true,
                  },
                  password: {
                    type: "string",
                    description: "Password used to register user",
                    required: true,
                  },
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
                schema: { $ref: "#/components/schemas/User" },
              },
              "Set-cookie": {
                schema: { type: "string" },
              },
            },
          },
          ...errorCodes,
        },
      },
    },
    "/users": {
      get: {
        tags: ["User"],
        summary: "Get all users",
        operationId: "getUser",
        responses: {
          200: {
            description: "successful operation",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#components/schemas/User",
                  },
                },
              },
            },
          },
        },
      },
    },
    "/users/{userId}": {
      get: {
        tags: ["User"],
        summary: "Get user by ID",
        description: "Returns a single user",
        operationId: "getUserById",
        parameters: [
          {
            name: "userId",
            in: "path",
            description: "ID of user to return",
            required: true,
            schema: {
              type: "number",
              description: "User ID",
            },
          },
        ],
        responses: {
          200: {
            description: "succeful operation",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: { $ref: "#components/schemas/User" },
                },
              },
            },
          },
          400: {
            description: "invalid ID",
            content: {},
          },
        },
      },
      put: {
        tags: ["User"],
        summary: "Update existing user",
        description: "Returns a single user",
        operationId: "updateUser",
        parameters: [
          {
            name: "userId",
            in: "path",
            description: "ID of user to return",
            required: true,
            schema: {
              type: "number",
            },
          },
          {
            name: "firstName",
            in: "query",
            description: "new first name",
            schema: {
              type: "string",
            },
          },
          {
            name: "lastName",
            in: "query",
            description: "new last name",
            schema: {
              type: "string",
            },
          },
          {
            name: "email",
            in: "query",
            description: "new email",
            schema: {
              type: "string",
            },
          },
          {
            name: "password",
            in: "query",
            description: "new password",
            schema: {
              type: "string",
            },
          },
          {
            name: "address",
            in: "query",
            description: "new address",
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "succeful operation",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: { $ref: "#components/schemas/User" },
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
