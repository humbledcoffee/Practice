/**
 * path模块
 * 
 */
const path = require('path')

//resolve解决路径斜杠不统一的问题 第一个参数为绝对路径 后面都是相对路径
path.resolve(__dirname,'index.html')
//sep 分隔符
path.sep //windows \ linux /
//parse方法解析路径 __filename 表示文件的绝对路径 
let str = '/Users/lidong/Library/Mobile Documents/com~apple~CloudDocs/MyCode/nodeJsCode/path/path.js'
console.log(path.parse(str))
//basename 获取文件名
//dirname获取文件路径
//extname 获取文件扩展名