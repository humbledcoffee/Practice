let str = "name=lidong&age=100&location=qingdao";
const querySting = require("querystring");
let queryObj = querySting.parse(str);
//parse将字符串参数转换成对象
console.log(queryObj);
let queryObj2 = {
  a: 1,
  b: 2,
  c: 3,
};
//stringify将对象转换成字符串
console.log(querySting.stringify(queryObj2));
//将特殊符号进行编码 escape
//将编码后的特殊符号进行解码 一般都是和数据库联用的时候 避免代码失效的时候使用
