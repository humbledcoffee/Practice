const UserModel = require("../models/UserModel");

const UserController = {
  addUser: async (req, res) => {
    const { username, password, age } = req.body;
    await UserModel.addUser(username, password, age);
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
      req.session.user = data[0];
      res.send({ ok: 1 });
      return;
    } else {
      res.send({ ok: 0 });
    }
  },
  logoutUser: async (req, res) => {
    req.session.destroy(() => {
      res.send({ ok: 1 });
    });
  },
};
module.exports = UserController;