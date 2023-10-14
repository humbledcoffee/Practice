const http = require("http");
const https = require("https");
const url = require("url");
const cheerio = require("cheerio");
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json;charset=utf-8");
  res.setHeader("access-control-allow-origin", "*");
  let urlObj = url.parse(req.url, true);
  switch (urlObj.pathname) {
    case "/api/spider":
      httpsSpider((data) => {
        res.end(JSON.stringify(spider(data)));
      });
      break;
    default:
      res.end("404.");
  }
});
server.listen("8080", () => {
  console.log("爬虫");
});

function httpsSpider(cb) {
  let data = "";
  https.get("https://i.maoyan.com/", (res) => {
    res.on("data", (chunk) => {
      data += chunk;
    });
    res.on("end", () => {
      console.log("收集完毕");
      cb(data);
    });
  });
}
function spider(htmlData) {
  //cheerio
  let $ = cheerio.load(htmlData);
  let $movieListDOM = $(".column.content");
  let movieList = [];
  $movieListDOM.each((index, value) => {
    movieList.push($(value).find(".title").text());
  });
  console.log("🚀 ~ file: 爬虫.js:44 ~ spider ~ movieList:", movieList);
  return movieList;
}
