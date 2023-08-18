var express = require("express");
const UserModel = require("../DBmodel/UserModel");
var router = express.Router();
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
router.post("/user/add", (req, res) => {
  console.log(req.body);
  const { username, password, age } = req.body;
  //插入数据库
  //1.创建一个模型 user 限制插入类型 一一对应数据库的集合
  UserModel.create({
    username,
    age,
    password,
  })
    .then((data) => {
      res.send({
        ok: 1,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;
