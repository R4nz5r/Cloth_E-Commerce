import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// route for user login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ sucess: false, message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = createToken(user._id);
      res.json({ sucess: true, token });
    } else {
      res.json({ sucess: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    res.json({ sucess: false, message: error.message });
  }
};
// route for user registation
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // checking if user is already registered
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ sucess: false, message: "User already exists" });
    }
    //  validate email and strong password
    if (!validator.isEmail(email)) {
      return res.json({ sucess: false, message: "please enter a valid email" });
    }
    if (password.length < 8) {
      return res.json({
        sucess: false,
        message: "please enter a strong password",
      });
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create new user
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });
    const user = await newUser.save();

    const token = createToken(user._id);
    res.json({ sucess: true, token });
  } catch (error) {
    console.log(error);
    res.json({ sucess: false, message: error.message });
  }
};
// route for admin login
const adminLogin = async (req, res) => {
  res.json({ msg: "Admin Login API working" });
};

export { loginUser, registerUser, adminLogin };
