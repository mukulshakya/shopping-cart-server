const bcrypt = require("bcrypt");
const generateJwtToken = require("../../../utils/generateJwtToken");
const db = require("../../../models");

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await db.User.findOne({ email });
    if (!user) return res.error({}, "Email not found");

    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) return res.error({}, "Incorrect password");

    const token = await generateJwtToken({ id: user._id });
    return res.success({ token: "Bearer " + token, user }, "Login success");
  } catch (e) {
    console.log(e);
    return res.error(e);
  }
};

exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const alreadyRegistered = await db.User.findOne({ email });
    if (alreadyRegistered) return res.error({}, "Email already registered");

    const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    const user = await new db.User({
      ...req.body,
      password: hashedPassword,
    }).save();
    const token = await generateJwtToken({ id: user._id });
    return res.success(
      { token: "Bearer " + token, user },
      "User registered successfully"
    );
  } catch (e) {
    console.log({ e });
    return res.error(e);
  }
};

exports.getProfile = async (req, res) => {
  try {
    const { _id: userId } = req.user;
    const user = await db.User.findById(userId);
    if (!user) return res.error({}, "User not found");
    return res.success(user);
  } catch (e) {
    console.log(e);
    return res.error(e);
  }
};
