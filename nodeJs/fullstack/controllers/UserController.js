const UserModel = require("../models/UserModel");
const JWT = require("../util/JWT");

const UserController = {
  addUser: async (req, res) => {
    const { username, password, age } = req.body;
    const avatar = `/uploads/${req?.file?.filename ?? "default.jpg"}`;
    await UserModel.addUser(username, password, age, avatar);
    res.send({ ok: 1 });
  },
  delUser: async (req, res) => {
    await UserModel.delUser(req.pramas.id);
    res.send({ ok: 1 });
  },
  updateUser: async (req, res) => {
    const { username, password, age, params } = req.body;
    await UserModel.updateUser(username, password, age, params);
    res.send({ ok: 1 });
  },
  getUser: async (req, res) => {
    const userList = await UserModel.getUser();
    res.send(userList);
  },
  loginUser: async (req, res) => {
    const { username, password } = req.body;
    const data = await UserModel.loginUser(username, password);
    if (data.length) {
      //设置token
      const token = JWT.generate(
        {
          _id: data[0]._id,
          username: data[0].username,
        },
        "1h"
      );
      //将token 返回在header中
      res.header("Authorization", token);
      res.send({ ok: 1 });
      return;
    } else {
      res.send({ ok: 0 });
    }
  },
  logoutUser: async (req, res) => {
    res.send({ ok: 1 });
  },
};
module.exports = UserController;
