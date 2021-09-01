const {
  Schema,
  model,
  SchemaTypes: { ObjectId },
} = require("mongoose");

const OrderSchema = new Schema(
  {
    userId: { type: ObjectId, ref: "users" },
    products: [
      {
        _id: false,
        productId: { type: ObjectId, ref: "products" },
        quantity: Number,
      },
    ],
  },
  { timestamps: true }
);

module.exports = model("order", OrderSchema);
