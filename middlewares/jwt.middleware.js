const jwt = require("jsonwebtoken");

const jwtMiddleware = async (req, res, next) => {
  const token = req.headers.authorization; /*.split(" ")[1]*/
  if (!token) {
    return res.status(401).json({ message: "Token not found" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

const generateToken = (userData) => {
  return jwt.sign({ userData }, process.env.JWT_SECRET);
};

module.exports = { jwtMiddleware, generateToken };
