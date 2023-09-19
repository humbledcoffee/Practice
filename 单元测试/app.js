import koa from "koa";

let app = new koa();
app.use((ctx) => {
  ctx.body = "曹书美";
});
// app.listen(3000);
export default app;
