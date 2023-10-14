const http = require("http");
const url = require("url");
const server = http.createServer((req, res) => {
  let urlObj = url.parse(req.url, true);
  switch (urlObj.pathname) {
    case "/api /user":
      res.end(`${urlObj.query.cb}({"name":"lidong"})`);
    default:
      res.end("404.");
  }
});
server.listen("8080", () => {
  console.log("Jsonp应用");
});
