const http = require("http");
const https = require("https");
const url = require("url");
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json;charset=utf-8");
  res.setHeader("access-control-allow-origin", "*");
  let urlObj = url.parse(req.url, true);
  switch (urlObj.pathname) {
    case "/api/get":
      httpsGet(res);
      break;
    default:
      res.end("404.");
  }
});
server.listen("8080", () => {
  console.log("get请求");
});

function httpsGet(response) {
  let data = "";
  https.get(
    "https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=%E9%9D%92%E5%B2%9B&ci=60&channelId=4",
    (res) => {
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        console.log("收集完毕");
        response.end(data);
      });
    }
  );
}
