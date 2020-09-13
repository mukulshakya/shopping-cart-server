const express = require("express");
const router = new express.Router();
const { product } = require("../controllers");
const auth = require("../../../middleware/auth");
const validate = require("../../../middleware/validator");
const {
  schemas: { cartSchema },
} = require("../../../validations");

router.route("/products").get(product.getAllProducts);

router.route("/categories").get(product.getAllCategories);

router
  .route("/cart")
  .post(auth, validate({ body: cartSchema }), product.addToCart)
  .put(auth, validate({ body: cartSchema }), product.removeFromCart)
  .get(auth, product.getCart);

module.exports = router;
