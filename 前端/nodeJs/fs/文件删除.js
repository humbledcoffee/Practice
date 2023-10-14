/**
 * fs删除文件
 */

const fs = require("fs");
fs.unlink("./fs练习.txt", (err) => {
  if (err) {
    console.log("删除失败", err);
  } else {
    console.log("删除成功", err);
  }
});
//rm方法 14.4版本更新的 参数回调是一样的
