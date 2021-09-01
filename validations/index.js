const Joi = require("@hapi/joi");

const joiValidate = (joiSchema, data) => {
  const validation = joiSchema.validate(data, { abortEarly: false });
  if (validation.error && validation.error.details) {
    let errors = {};
    validation.error.details.forEach((item) => {
      errors[item.path[0]] = item.message.replace(/"/g, "");
    });
    return errors;
  }
  return true;
};

const schemas = require("./schemas");
const joiObjects = () => {
  const objects = {};
  Object.keys(schemas).forEach(
    (key) => (objects[key] = Joi.object(schemas[key]))
  );
  return { ...objects };
};

module.exports = { joiValidate, schemas: joiObjects() };
