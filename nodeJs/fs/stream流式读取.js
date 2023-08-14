//流式读取
const fs = require("fs");
const rs = fs.createReadStream("./fs/fs练习.txt");
rs.on("data", (chunk) => {
  console.log("chunk", chunk);
});
rs.on("end", () => {
  console.log("end");
});
rs.error("error", (err) => {
  console.log("err", err);
});
