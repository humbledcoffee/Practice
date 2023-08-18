const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserType = {
  username: String,
  password: String,
  age: Number,
};
const DBUserModel = mongoose.model("user", new Schema(UserType));
module.exports = DBUserModel;
