/**fs
 * 文件读取
 *  */

const fs = require("fs");
//异步读取 读取的内容是buffer
//导入的时候require("fs").promise返回的就是promise对象 可以用then catch接 同样可以使用async await
//同步读取 readFileSync
fs.readFile("./fs/fs练习.txt", (err, data) => {
  if (err) {
    console.log("读取失败", err, data);
  } else {
    console.log("读取成功", err + "\r\n", data.toString());
  }
});
