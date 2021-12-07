import Joi from "joi";

export const addUser = Joi.object({
  firstName: Joi.string().lowercase().required(),
  lastName: Joi.string().lowercase().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  telephone: Joi.string().required(),
  address: Joi.string().required(),
});
