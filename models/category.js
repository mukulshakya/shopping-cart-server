const { Schema, model } = require("mongoose");

const trimmedStr = { type: String, trim: true };

const CategorySchema = new Schema(
  {
    name: trimmedStr,
    image: trimmedStr,
  },
  { timestamps: true }
);

module.exports = model("categories", CategorySchema);
