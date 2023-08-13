const http = require("http");
const server = http.createServer((req, res) => {
  const myUrl = new URL(req.url, "http://127.0.0.1:3000"); //这里其实就resolve拼接了
  // URL类 里边可以拿到很多url信息
  console.log(myUrl);
  //myUrl.searchParams 可以拿到URLSearchParams类 主要是用来操作get参数的一个类
  res.end("新版url使用");
});
server.listen("8080", () => {
  console.log("新版url使用");
});
