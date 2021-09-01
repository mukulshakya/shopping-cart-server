const { Schema, model } = require("mongoose");

const trimmedStr = { type: String, trim: true };

const CategorySchema = new Schema(
  {
    email: trimmedStr,
    password: trimmedStr,
  },
  { timestamps: true }
);

module.exports = model("users", CategorySchema);
