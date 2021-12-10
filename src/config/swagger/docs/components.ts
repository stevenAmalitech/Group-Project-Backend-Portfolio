export default {
  components: {
    schemas: {
      User: {
        type: "object",
        properties: {
          id: {
            type: "number",
            description: "ID of user",
            example: 1,
          },
          firstName: {
            type: "string",
            description: "First name of user",
          },
          lastName: {
            type: "string",
            description: "Last name of user",
          },
          email: {
            type: "string",
            description: "User's email",
          },
          telephone: {
            type: "number",
            description: "User's telephone number",
          },
          address: {
            type: "string",
            description: "User's shipping address",
          },
        },
      },
      UserRegister: {
        type: "object",
        properties: {
          firstName: {
            type: "string",
            description: "First name of user",
          },
          lastName: {
            type: "string",
            description: "Last name of user",
          },
          email: {
            type: "string",
            description: "User's email",
          },
          telephone: {
            type: "number",
            description: "User's telephone number",
          },
          address: {
            type: "string",
            description: "User's shipping address",
          },
        },
      },
      Product: {
        type: "object",
        properties: {
          id: {
            type: "string",
            description: "ID of product",
          },
          name: {
            type: "string",
            description: "Name of product",
          },
          description: {
            type: "string",
            description: "product description",
          },
          sku: {
            type: "string",
            description: "SKU of product",
          },
          price: {
            type: "number",
            description: "unit price",
          },
          createdAt: {
            type: "string",
            description: "unit price",
          },
        },
      },
      CreateProduct: {
        type: "object",
        properties: {
          name: {
            type: "string",
          },
          description: {
            type: "string",
          },
          price: {
            type: "number",
          },
        },
      },
      CreateInventory: {
        type: "object",
        properties: {
          productId: {
            type: "number",
          },
          quantity: {
            type: "number",
          },
        },
      },
      Inventory: {
        type: "object",
        properties: {
          id: {
            type: "number",
          },
          productId: {
            type: "number",
          },
          quantity: {
            type: "number",
          },
          createdAt: {
            type: "string",
          },
        },
      },
      Order: {
        type: "object",
        properties: {
          id: {
            type: "number",
          },
          items: {
            type: "array",
            items: { $ref: "#/components/schemas/Product" },
          },
          total: {
            type: "number",
          },
          createdAt: {
            type: "string",
          },
        },
      },
      CreateOrder: {
        type: "object",
        properties: {
          items: {
            type: "array",
            items: { $ref: "#/components/schemas/Product" },
          },
          total: {
            type: "number",
          },
        },
      },
      Cart: {
        type: "object",
        properties: {
          id: {
            type: "number",
          },
          userId: {
            type: "number",
          },
          items: {
            type: "array",
            items: { $ref: "#/components/schemas/Product" },
          },
          total: {
            type: "number",
          },
        },
      },
      AddCart: {
        type: "object",
        properties: {
          userId: {
            type: "number",
          },
          items: {
            type: "array",
            items: { $ref: "#/components/schemas/Product" },
          },
          total: {
            type: "number",
          },
        },
      },
    },
  },
};
