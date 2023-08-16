const express = require("express");
// 创建应用对象
const app = express();
//创建路由 send方法相当于把write end 封装了 不需要调用两个了 还有自动会加很多响应头
//返回数据的时候也会自动转变成json字符串 我们不需要加很多的头或者对数据进行转换了
app.get("/home", (req, res) => {
  res.send("hello express");
});
//监听端口 启动服务
app.listen(8080, () => {
  console.log("启动8080");
});
