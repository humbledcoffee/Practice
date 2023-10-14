import Router from "koa-router";
const router = new Router();

//路由简单使用 同样支持curd koa支持链式请求
//增
router
  .post("/", (ctx, next) => {
    //获取参数
    //无论是urlencoded格式还是post body格式 配合插件都可以实现 不装的话就没有
    console.log(ctx.request.body);
    ctx.body = { ok: 1, info: "添加成功" };
  })
  //查
  .get("/", (ctx, next) => {
    //获取get参数
    console.log(ctx.query); //{a:1,b:2}
    console.log(ctx.querystring); //a=1&b=2

    ctx.body = { ok: 1, info: "查找成功" };
  })
  //改
  .put("/:id", (ctx, next) => {
    ctx.body = { ok: 1, info: "更新成功" };
  })
  //删
  .del("/:id", (ctx, next) => {
    ctx.body = { ok: 1, info: "更新成功" };
  });

export default router;
