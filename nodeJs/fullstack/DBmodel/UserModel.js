const mongoose = require("mongoose");
const Schama = mongoose.Schema;
const UserType = {
  username: String,
  password: String,
  age: Number,
};
const UserModel = mongoose.model("user", new Schama(UserType));
module.exports = UserModel;
