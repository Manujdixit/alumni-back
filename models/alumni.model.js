const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var alumniSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    batch: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//Export the model
module.exports = mongoose.model("Alumni", alumniSchema);
