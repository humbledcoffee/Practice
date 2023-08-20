const DBUserModel = require("../DBmodel/DBUserModel.js");
const UserModel = {
  addUser: (username, password, age, avatar) =>
    DBUserModel.create({
      username,
      password,
      age,
      avatar,
    }),
  delUser: (_id) => DBUserModel.deleteOne({ _id }),
  updateUser: (username, password, age, params) =>
    DBUserModel.updateOne({ _id: params.id }, { username, password, age }),
  getUser: () =>
    // find 第一个参数是一个对象
    // 第二个参数数组可以控制返回什么名字的域
    // 可以链式调用
    // sort({ age: 1 })可以排序
    // skip 从第几个开始取
    // limit 要几个数据
    DBUserModel.find(),
  loginUser: (username, password) => DBUserModel.find({ username, password }),
};
module.exports = UserModel;
