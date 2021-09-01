const express = require("express");
const router = new express.Router();

router.use(require("./routes/user"));
router.use(require("./routes/product"));
router.use(require("./routes/upload"));

module.exports = router;
