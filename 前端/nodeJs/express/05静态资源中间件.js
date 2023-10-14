const express = require("express");
// 创建应用对象
const app = express();

//静态资源中间件设置 自动加utf-8字符集的header
//当你希望客户端通过static路由访问到public下的文件的话 可以这么写
app.use("/static", express.static(__dirname + "/public"));
//创建路由 路由一般是响应动态资源
app.get("/", (req, res) => {
  res.end("我才是首页 我和静态资源中间件谁先匹配谁先响应");
});
//监听端口 启动服务
app.listen(8080, () => {
  console.log("启动8080");
});
