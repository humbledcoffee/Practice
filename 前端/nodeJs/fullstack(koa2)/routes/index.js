import Router from "koa-router";
import UserRouter from "./user.js";
import ListRouter from "./list.js";
import HomeRouter from "./home.js";
import LoginRouter from "./login.js";

const router = new Router();

//对路由进行统一管理和修改
// router.prefix("/api");

//注册路由级组件
router.use("/user", UserRouter.routes(), UserRouter.allowedMethods());
router.use("/list", ListRouter.routes(), ListRouter.allowedMethods());

// 静态资源
router.use("/home", HomeRouter.routes(), HomeRouter.allowedMethods());
router.use("/login", LoginRouter.routes(), LoginRouter.allowedMethods());

//重定向
router.redirect("/", "/home");

export default router;
