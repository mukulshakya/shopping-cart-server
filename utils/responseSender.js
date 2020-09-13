module.exports = {
  success: function (data = {}, message = "Action completed successfully") {
    return this.status(200).json({ status: true, message, data });
  },
  error: function (errors = {}, message = "Unexpected error") {
    return this.status(errors.statusCode || 400).json({
      status: false,
      message,
      errors: Object.getOwnPropertyNames(errors).includes("message" || "stack")
        ? {
            name: errors.name || "",
            message: errors.message || "",
            stack: errors.stack || "",
          }
        : errors,
    });
  },
  unAuth: function (errors = {}, message = "Unable to authenticate") {
    return this.status(401).json({
      status: false,
      message,
      errors: Object.getOwnPropertyNames(errors).includes("message" || "stack")
        ? {
            name: errors.name || "",
            message: errors.message || "",
            stack: errors.stack || "",
          }
        : errors,
    });
  },
};
