const express = require("express");

const app = express();

app.get("/server", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send("接口返回get");
});
app.all("/server", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.send("接口返回post");
});

app.listen(8080, () => {
  console.log("服务启动成功");
});
