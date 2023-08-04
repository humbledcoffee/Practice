const express = require('express')
// 创建应用对象
const app = express()
//创建路由
app.get('/home',(req,res)=>{
    res.end('hello express')
})
//监听端口 启动服务
app.listen(8080,()=>{
    console.log('启动8080')
}) 