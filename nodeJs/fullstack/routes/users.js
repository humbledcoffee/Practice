var express = require("express");
const UserController = require("../controllers/UserController");
var router = express.Router();

const multer = require("multer");
const upload = multer({ dest: "public/uploads/" });

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
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
