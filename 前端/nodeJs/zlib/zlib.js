const fs = require("fs");
const http = require("http");
const zlib = require("zlib");
const gzip = zlib.createGzip();
//压缩传输
http
  .createServer((req, res) => {
    const rs = fs.createReadStream("../package-lock.json");
    res.writeHead(200, {
      "Content-Type": "application/x-javascript;charset=utf-8",
      "Content-Encoding": "gzip",
    });
    rs.pipe(gzip).pipe(res);
  })
  .listen("8080", () => {
    console.log("gzip服务已经启动");
  });
