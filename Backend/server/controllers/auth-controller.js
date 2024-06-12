const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
  try {
    res.status(200).send("getting this msg using router in auth-controller");
  } catch (error) {
    console.log(error);
  }
};

////////////////////////////////////////
///   Sign-Up / Register            ///

const register = async (req, res) => {
  try {
    const { firstname, lastname, mobile, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ msg: "email already exists" });
    }

    const userCreated = await User.create({
      firstname,
      lastname,
      mobile,
      email,
      password,
    });
    console.log(res);
    res.status(200).json({
      msg: "Registration Succesfull",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Bad Request: Page not found " });
  }
};

////////////////////////////////////////
///   Login                         ///

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    // const user = await bcrypt.compare(password, userExist.password);

    const user = await userExist.comparePassword(password);

    if (user) {
      res.status(200).json({
        msg: "Login Succesfull",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ msg: "Invalid email or password" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Bad Request: Page not found " });
  }
};

////////////////////////////////////////
/// to send user data - User logic  ///

const user = async (req, res) => {
  try {
    const userData = req.user;
    console.log(userData);
    return res.status(200).json({ msg: userData });
  } catch (error) {
    console.log(`error from user route ${error}`);
  }
};

module.exports = { home, register, login, user };
