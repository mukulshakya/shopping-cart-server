const express = require("express");
const router = new express.Router();
const { user } = require("../controllers");
const auth = require("../../../middleware/auth");
const validate = require("../../../middleware/validator");
const {
  schemas: { userSchema },
} = require("../../../validations");

router.route("/register").post(validate({ body: userSchema }), user.register);
router.route("/login").post(validate({ body: userSchema }), user.login);
router.route("/profile").get(auth, user.getProfile);

module.exports = router;
