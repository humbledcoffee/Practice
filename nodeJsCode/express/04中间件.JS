const express = require('express')
const fs = require('fs')
const path = require('path')
// 创建应用对象
const app = express()
//声明中间件
function recordMidWare(req,res,next){
    let {url,ip} = req
    fs.appendFileSync(path.resolve(__dirname,'./access.log'),`${url} ${ip}\r\n`)
    next()

}
//导入中间件
app.use(recordMidWare)
//创建路由 use是全局 这里写只控制部分路径
app.get('/home',recordMidWare,(req,res)=>{
    res.send('hello express')
})
app.get('/admin',(req,res)=>{
    res.send('hello express')  
})
app.all('*',(req,res)=>{
    res.send('404')
})
//监听端口 启动服务
app.listen(8080,()=>{
    console.log('中间件8080')
}) 