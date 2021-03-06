import Joi from "joi";

export const productSchemas = {
  addProduct: (object: any) =>
    Joi.object({
      name: Joi.string().required(),
      description: Joi.string(),
      price: Joi.number().required(),
    }).validateAsync(object),

  updateProduct: (object: any) =>
    Joi.object({
      name: Joi.string(),
      description: Joi.string(),
      price: Joi.number(),
    }).validateAsync(object),
};

export const inventorySchemas = {
  addInventory: (object: any) =>
    Joi.object({
      productId: Joi.number().required(),
      quantity: Joi.number().required(),
    }).validateAsync(object),
};

export const orderSchemas = {
  addOrder: (object: any) =>
    Joi.object({
      userId: Joi.number().required(),
      items: Joi.array().required(),
      total: Joi.number().required(),
    }).validateAsync(object),

  updateOrder: (object: any) =>
    Joi.object({
      orderId: Joi.number().required(),
      userId: Joi.number(),
      items: Joi.array(),
      total: Joi.number(),
    }).validateAsync(object),

  getOrder: (object: any) =>
    Joi.object({
      orderId: Joi.number(),
      userId: Joi.number().required(),
    }).validateAsync(object),

  deleteOrder(object: any) {
    return this.getOrder(object);
  },

  checkout(object: any) {
    return this.addOrder(object);
  },
};

export const userSchemas = {
  addUser: (object: any) =>
    Joi.object({
      firstName: Joi.string().lowercase().required(),
      lastName: Joi.string().lowercase().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      telephone: Joi.string().max(10).required(),
      address: Joi.string().required(),
    }).validateAsync(object),

  updateUser: (object: any) =>
    Joi.object({
      id: Joi.number().required(),
      firstName: Joi.string().lowercase(),
      lastName: Joi.string().lowercase(),
      email: Joi.string().email(),
      password: Joi.string(),
      telephone: Joi.string().max(10),
      address: Joi.string(),
    })
      .rename("userId", "id")
      .validateAsync(object),
};

export const cartSchemas = {
  addCart: (object: any) =>
    Joi.object({
      items: Joi.array().required(),
      total: Joi.number().required(),
      userId: Joi.number().required(),
    }).validateAsync(object),
};
