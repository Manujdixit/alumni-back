const { default: mongoose } = require("mongoose");

const dbconnect = () => {
  try {
    const connect = mongoose.connect(process.env.MONGODB_URI);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database not connected");
  }
};
module.exports = dbconnect;
