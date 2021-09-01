const { joiValidate } = require("../validations");

module.exports = (obj) => async (req, res, next) => {
  try {
    const [param, schema] = Object.entries(obj)[0];
    const errors = joiValidate(schema, req[param]);
    if (errors !== true) return res.error(errors, "Validation error");
    next();
  } catch (e) {
    return res.error(e);
  }
};
