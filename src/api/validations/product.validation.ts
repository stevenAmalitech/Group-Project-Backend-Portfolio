import Joi from "joi";

export const addProduct = Joi.object({
  name: Joi.string().required().required(),
  description: Joi.string(),
  price: Joi.number().required(),
});
