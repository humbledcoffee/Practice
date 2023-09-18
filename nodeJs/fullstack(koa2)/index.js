import koa from "koa";
import router from "./routes/index.js";
import koaStatic from "koa-static";
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from "koa-bodyparser";
import views from "koa-views";
import session from "koa-session-minimal";
import JWT from "./util/JWT.js";

const app = new koa();

//应用级组件

//静态页面注册
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(koaStatic(path.join(__dirname, "public")));

//配置模版引擎
app.use(
  views(path.join(__dirname, "views"), {
    extension: "ejs",
  })
);

//post请求body解析注册
//加了这个方法之后 ctx.request.body 就可以拿到post请求的数据了
app.use(bodyParser());

//session处理
app.use(
  session({
    key: "sessionId",
    cookie: {
      maxAge: 1000 * 60 * 60,
    },
  })
);

app.use(async (ctx, next) => {
  if (ctx.url.includes("login")) {
    await next();
    return;
  }
  //JWT实现登录验证
  const token = ctx.headers["authorization"]?.split(" ")["1"];
  if (token) {
    const payload = JWT.verify(token);
    if (payload) {
      const newToken = JWT.generate(
        {
          _id: payload._id,
          user: payload.user,
        },
        "1d"
      );
      ctx.set("Authorization", token);
      await next();
    } else {
      ctx.status = 401;
      ctx.body = { errCode: -1, errInfo: "token过期" };
    }
  }

  // cookie session实现登录验证
  if (ctx.session.user) {
    //重新设置以下session
    ctx.session.myDate = Date.now();
    await next();
  } else {
    ctx.redirect("/login");
  }
});

//不加allowedMethods的话 前端会报404 加了请求方法不对会报405 前端更清楚问题
app.use(router.routes()).use(router.allowedMethods());
//ctx ==> context上下文
// app.use((ctx, next) => {
//   //express框架 request和response是分开的
//   //koa中 request和response就是放在第一个参数ctx里
//   ctx.response.body = "hello world";
// });

app.listen(3000);
