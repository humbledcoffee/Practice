import Router from "koa-router";
const router = new Router();

//路由简单使用 同样支持curd koa支持链式请求
//查
router.get("/", async (ctx, next) => {
  await ctx.render("login", { user: "li" });
});

export default router;
