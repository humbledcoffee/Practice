var express = require("express");
const UserModel = require("../DBmodel/UserModel");
var router = express.Router();
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
//增
router.post("/user", (req, res) => {
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
//删
router.delete("/user/:id", (req, res) => {
  UserModel.deleteOne({ _id: req.params.id }).then(() => {
    res.send({
      ok: 1,
    });
  });
});
//改
router.put("/user/:id", (req, res) => {
  console.log(req.body, req.params.id);
  const { username, password, age } = req.body;
  //插入数据库
  //1.创建一个模型 user 限制插入类型 一一对应数据库的集合
  UserModel.updateOne({ _id: req.params.id }, { username, password, age })
    .then((data) => {
      res.send({
        ok: 1,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
//查
router.get("/user", (req, res) => {
  // find 第一个参数是一个对象
  // 第二个参数数组可以控制返回什么名字的域
  // 可以链式调用
  // sort({ age: 1 })可以排序
  // skip 从第几个开始取
  // limit 要几个数据
  UserModel.find().then((data) => {
    res.send(data);
  });
});
module.exports = router;
