const express = require("express");
const router = new express.Router();
const { upload } = require("../controllers");
const auth = require("../../../middleware/auth");

router.route("/upload").post(auth, upload.uploadFile);

module.exports = router;
