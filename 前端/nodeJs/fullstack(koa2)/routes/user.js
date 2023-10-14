import Router from "koa-router";
import JWT from "../util/JWT.js";
const router = new Router();

//路由简单使用 同样支持curd koa支持链式请求
//增
router
  .post("/", (ctx, next) => {
    //获取cookie
    //ctx.cookies.get(name,[options])
    //写入cookie
    // ctx.cookies.set(name, value, [options]);
    ctx.body = { ok: 1, info: "添加成功" };
  })
  //查
  .get("/", (ctx, next) => {
    ctx.body = { ok: 1, info: "查找成功" };
  })
  //改
  .put("/:id", (ctx, next) => {
    ctx.body = { ok: 1, info: "更新成功" };
  })
  //删
  .del("/:id", (ctx, next) => {
    ctx.body = { ok: 1, info: "更新成功" };
  })

  .post("/login", (ctx, next) => {
    const { user, password } = ctx.request.body;
    if (user === "李" && password === "1234567890") {
      ctx.session.user = { username: "李" };
      const token = JWT.generate(
        {
          _id: "1",
          user,
        },
        "1d"
      );
      ctx.set("Authorization", token);
      ctx.body = { ok: 1 };
    } else {
      ctx.body = { ok: 0 };
    }
  });

export default router;
