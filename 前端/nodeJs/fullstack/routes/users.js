var express = require("express");
const UserController = require("../controllers/UserController");
var router = express.Router();

const multer = require("multer");
const upload = multer({ dest: "public/uploads/" });

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
/**
 *
 * @api {post} /api/user user
 * @apiName addUser
 * @apiGroup userGroup
 * @apiVersion 1.0.0
 *
 *
 * @apiBody  {String} username 用户名
 * @apiBody  {String} password 密码
 * @apiBody  {Number} age 年龄
 * @apiBody  {file} avatar 头像
 *
 * @apiSuccess (200) {Number} ok 标识成功字段
 *
 * @apiParamExample  {multipart/form-data} 请求实例:
 * {
 *     username : "lidong",
 *     password : '123',
 *     age : 28,
 *     avatar : file对象
 * }
 *
 *
 * @apiSuccessExample {Number} 返回实例:
 * {
 *     ok : 1
 * }
 *
 *
 */

//增
router.post("/user", upload.single("avatar"), UserController.addUser);
//删
router.delete("/user/:id", UserController.addUser);
//改
router.put("/user/:id", UserController.updateUser);
//查
router.get("/user", UserController.getUser);
//登录
router.post("/login", UserController.loginUser);
//退出登录
router.get("/logout", UserController.logoutUser);
module.exports = router;
