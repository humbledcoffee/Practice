const http = require("http");
const https = require("https");
const url = require("url");
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json;charset=utf-8");
  res.setHeader("access-control-allow-origin", "*");
  let urlObj = url.parse(req.url, true);
  switch (urlObj.pathname) {
    case "/api/post":
      httpsPost(res);
      break;
    default:
      res.end("404.");
  }
});
server.listen("8080", () => {
  console.log("post请求");
});

function httpsPost(response) {
  let data = "";
  var options = {
    hostname: "m.xiaomiyoupin.com",
    path: "/mtop/market/search/placeHolder",
    port: "443",
    method: "POST",
    Headers: {
      "Content-Type": "application/json",
    },
  };
  let req = https.request(options, (res) => {
    res.on("data", (chunk) => {
      data += chunk;
    });
    res.on("end", () => {
      console.log("收集完毕");
      response.end(data);
    });
  });
  req.end(JSON.stringify([{}, { baseParam: { ypClient: 1 } }]));
}
