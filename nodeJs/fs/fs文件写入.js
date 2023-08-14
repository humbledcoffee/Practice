/**
 * fs文件写入
 */

//导入fs模块
const fs = require("fs");
//写入文件（重写）如果配置对象（第三个参数）{flag:'a'} 就变成追加了
fs.writeFile("fs练习.txt", "加油加油", (err) => {
  // 写入成功会为null 写入失败会返回错误对象
  if (err) {
    console.log("写入失败", err);
  } else {
    console.log("写入成功", err);
  }
});
//同步写入与异步写入 writefile是异步的 writeFileSync是同步的
fs.writeFileSync("fs练习.txt", "努力过好每一天"); //重写
//追加写入（异步）
fs.appendFile("fs练习.txt", "追加内容", (err) => {
  // 写入成功会为null 写入失败会返回错误对象
  if (err) {
    console.log("追加写入失败", err);
  } else {
    console.log("追加写入成功", err);
  }
});
//同步写入 appendFileSync
