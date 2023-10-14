import koa from "koa";
import Router from "koa-router";
import path from "path";
import koaStatic from "koa-static";
import { fileURLToPath } from "url";
import WebSocket, { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function connection(ws) {
  ws.on("error", console.error);

  ws.on("message", function message() {
    console.log("message", data.toString());
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  });

  ws.send("欢迎来到聊天室");
});
const app = new koa();
const router = new Router();

export default router;

//静态页面注册
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(koaStatic(path.join(__dirname, "public")));

//不加allowedMethods的话 前端会报404 加了请求方法不对会报405 前端更清楚问题
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
