/**
 * 文件夹操作
 */
const fs = require("fs");
//异步创建文件夹 参数（文件路径 选项 callback）mkdirSync为同步
fs.mkdir("./叫啥都行", (err) => {
  if (err) {
    console.log("创建失败", err);
  } else {
    console.log("创建成功", err);
  }
});
//递归创建 option下 recursive:true
//文件夹目录读取
fs.readdir("../fs", (err, data) => {
  if (err) {
    console.log("读取文件失败", err, data);
  } else {
    console.log("读取文件成功", err, data);
  }
});
//删除文件夹
fs.rmdir("./叫啥都行", { recursive: true }, (err) => {
  if (err) {
    console.log("删除文件夹失败", err);
  } else {
    console.log("删除文件夹成功", err);
  }
});
//递归删除文件夹 recursive:true
//删除建议用rm 未来版本 rmdir可能会移除
/**
 * 重命名与移动
 */
fs.rename("./fs练习.txt", "./fs/fs练习.txt", (err) => {
  if (err) {
    console.log("重命名失败", err);
  } else {
    console.log("重命名成功", err);
  }
});
