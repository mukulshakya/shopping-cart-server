const {
  Schema,
  model,
  SchemaTypes: { ObjectId },
} = require("mongoose");

const trimmedStr = { type: String, trim: true };

const ProductSchema = new Schema(
  {
    name: trimmedStr,
    images: [trimmedStr],
    categoryId: { type: ObjectId, ref: "categories" },
    actualPrice: Number,
    discountedPrice: Number,
    features: [trimmedStr],
    description: trimmedStr,
    views: { type: Number, default: 0 },
    stockCount: Number,
    sizes: { type: [{ ...trimmedStr, uppercase: true }], default: [] },
  },
  { timestamps: true }
);

module.exports = model("products", ProductSchema);
