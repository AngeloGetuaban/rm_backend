const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
  },
  verified: {
    type: Boolean,
    default: false,
  },
  verificationToken: String,
  liked: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  receivedLikes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  matches: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  profileImages: [
    {
      type: String,
    },
  ],
  description:{
    type: String,
  },
  preferences: [
    {
      type: String, //Array of String for preferences
    },
  ],
  lookingFor: [
    {
      type: String, //Array of String for lookingFor
    },
  ],
});


const User = mongoose.model("User",userSchema);

module.exports = User
