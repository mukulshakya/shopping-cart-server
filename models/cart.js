const {
  Schema,
  model,
  SchemaTypes: { ObjectId },
} = require("mongoose");

const CartSchema = new Schema(
  {
    userId: { type: ObjectId, ref: "users" },
    productId: { type: ObjectId, ref: "products" },
    quantity: Number,
  },
  { timestamps: true }
);

module.exports = model("cart", CartSchema);
