const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
});

//Export the model
module.exports = mongoose.model("User", userSchema);
