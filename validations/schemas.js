const Joi = require("@hapi/joi");
Joi.objectId = require("joi-objectid")(Joi);

exports.userSchema = {
  email: Joi.string().email().min(10).required(),
  password: Joi.string().min(8).required(),
};

exports.cartSchema = {
  productId: Joi.objectId().required(),
  quantity: Joi.number().integer().greater(0).required(),
};
