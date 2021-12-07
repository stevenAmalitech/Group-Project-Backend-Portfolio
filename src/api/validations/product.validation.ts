import Joi from "joi";

export const addProduct = Joi.object({
  name: Joi.string().required(),
  description: Joi.string(),
  price: Joi.number().required(),
});

export const updateProduct = (object: any) =>
  Joi.object({
    name: Joi.string(),
    description: Joi.string(),
    price: Joi.number(),
  }).validateAsync(object);
