const jwt = require("jsonwebtoken");
const db = require("../models");
const {
  jwt: { secret },
} = require("config");

module.exports = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token) return res.error({}, "Auth token missing");

    const decoded = jwt.verify(token.replace("Bearer ", ""), secret);
    const user = await db.User.findById(decoded.id);
    if (!user) return res.error();

    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    return res.unAuth(e);
  }
};
