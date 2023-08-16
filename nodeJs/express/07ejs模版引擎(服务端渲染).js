//导入ejs
const ejs = require('ejs')
const fs = require('fs')
//字符串

let lp = '老婆'
let str = fs.readFileSync('./public/index.html').toString()

//使用ejs渲染
let result = ejs.render(str,{lp})
console.log(result)