const express = require("express");
// 创建应用对象
const app = express();
const router = express.Router();
//创建路由 第二个参数可以写多个函数  可以调用next() 执行下一个函数 不至于每个函数显得过于臃肿 但是调用send之后 next就失效了
// 第二个参数也可以这样写 [func1,func2] 更加简化
router.get("/:id", (req, res) => {
  //匹配acd 和abcd ’/ab?cd‘
  //匹配/ab/***** /ab/:id
  //匹配abcd abbcd abbbcd /ab+cd
  //匹配 abcd abxcd abRADOMcd ab123cd /ab*cd
  //匹配 abe abcde /ab(cd)?e
  //支持正则表达式

  res.setHeader("content-type", "text/html;charset=utf-8");
  //req.statusCode 状态码
  res.send("hello home");
  return;
});
//默认请求路径 相当于总路由 all方法响应所有请求方法
// 第一个参数写*代表通配符 所有的意思 同源下通配符可以兜底
router.all("/", (req, res) => {
  res.end("hello 总路由");
});
//监听端口 启动服务
app.listen(8080, () => {
  console.log("启动8080");
});
