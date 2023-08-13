const http = require("http");
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json;charset=utf-8");
  res.setHeader("access-control-allow-origin", "*");
});
server.listen("8080", () => {
  console.log("cors");
});
