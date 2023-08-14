// 是一个加密模块 用js实现也是可以的 但是运行速度会非常慢 所以nodejs底层用
//c/c++实现的 通过cypto暴漏为js接口 用起来方便 运行速度也快
const crypto = require("crypto");
const { buffer } = require("stream/consumers");
const md5 = crypto.createHash("md5");
const sha1 = crypto.createHash("sha1");
const sha256 = crypto.createHash("sha256");
const Hmac = crypto.createHmac("md5", "lidong");
md5.update("hello word");
console.log(md5.digest("hex"));

//加密解密函数示例

function encrypt(key, iv, data) {
  let dep = crypto.createCipheriv("aes-128-cbc", key, iv);
  return dep.update(data, "binary", "hex") + dep.final("hex");
}

function decrypt(key, iv, crypted) {
  tempCrypted = Buffer.from(crypted, "hex").toString("binary");
  let dep = crypto.createDecipheriv("aes-128-cbc", key, iv);
  return dep.update(tempCrypted, "binary", "utf-8") + dep.final("utf-8");
}
let key = "abcdef1234567890";
let iv = "tbcdey1234567890";
let data = "lidong";

let crypted = encrypt(key, iv, data);
console.log(crypted);
let decrypted = decrypt(key, iv, crypted);
console.log("解密", decrypted);
