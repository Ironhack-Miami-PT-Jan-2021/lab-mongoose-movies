const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userModel = Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/\S+@\S+\.\S+/, "Email must be in valid form"],
  },
  password: {
    type: String,
    required: true,
    match: [
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      "Password has to have one Alphabetic char one number or special char",
    ],
  },
});

module.exports = model("User", userModel);
