const Auth = require("../models/auth.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const register = async (req, res) => {
  try {
    const { password, email, isAdmin } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const newUser = new Auth({
      password: hash,
      email,
      isAdmin,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Auth.findOne({ email });
    if (!user) return res.status(400).json({ msg: "User does not exist." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials." });

    const token = jwt.sign({ id: user._id }, JWT_SECRET);
    delete user.password;
    res.status(200).json({
      token,
      /*, user
       */
      msg: "login success",
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
const logout = async (req, res) => {
  try {
    // Clear the JWT token from localStorage or any other client-side storage
    // For example, in a web browser, you would use:
    localStorage.removeItem("jwtToken");

    // Return a success message indicating that the user has been logged out
    return res.status(200).json({ msg: "User has been logged out." });
  } catch (error) {
    // Handle any errors that occur during the logout process
    res.status(500).json(error);
  }
};

module.exports = { register, login, logout };
