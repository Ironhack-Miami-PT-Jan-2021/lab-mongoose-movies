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
    // since we are hashing the password we don't match it here
    // match: [
    //   /^(?=.*[a-z])(?=.*[A-Z]).{8,32}$/,
    //   "Password has to has to be between 8 and 32 characters long",
    // ],
  },
});

module.exports = model("User", userModel);
