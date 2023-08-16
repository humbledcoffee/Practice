const express = require("ex press");
// 创建应用对象
const app = express();
//解析post参数的中间件 form表单格式的
app.use(express.urlencoded({ extended: false }));
//解析post参数的中间件 相应json格式的数据
app.use(express.json());
// get请求
app.get("/get", (req, res) => {
  //原生操作
  //req.method 获取请求方法
  //req.url 获取请求链接
  //req.httpVersion 获取请求协议版本
  //req.headers 获取请求头
  //req.path 获取请求路径
  //req.query 获取请求参数
  //req.ip 获取请求地址
  //req.get('') 单独获取某一个请求头
  //获取商品id req.params.id

  //原生响应
  //statusCode 状态码设置
  //statusMessage 状态备注
  //setHeader 设置相应头
  //write  追加响应体
  //send 追加响应头 自动设置 utf-8
  //redirect('')重定向
  // download() 下载响应 需要传入文件的绝对路径
  //json json响应 里边传json
  // sendfile 发送文件 简化了readfile的步骤
  //以上都可以进行链式调用
  res.send("hello get");
});
app.post("/post", (req, res) => {
  //req.body 获取请求参数 要配中间件
  res.send("hello post");
});
//监听端口 启动服务
app.listen(8080, () => {
  console.log("启动8080");
});
