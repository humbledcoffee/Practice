const express = require("express");
const fs = require("fs");
const path = require("path");
// 创建应用对象
const app = express();
//声明中间件
function recordMidWare(req, res, next) {
  let { url, ip } = req;
  fs.appendFileSync(
    path.resolve(__dirname, "./access.log"),
    `${url} ${ip}\r\n`
  );
  next();
}
//导入中间件
app.use(recordMidWare); //应用级中间件
//创建路由 use是全局 这里写只控制部分路径 路由级别的中间件
app.get("/home", recordMidWare, (req, res) => {
  res.send("hello express");
});
app.get("/admin", (req, res) => {
  res.send("hello express");
});
//错误中间件
app.use((err, req, res, next) => {
  res.status(404).send("坏了");
});
//监听端口 启动服务
app.listen(8080, () => {
  console.log("中间件8080");
});
