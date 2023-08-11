const express = require('express')
// 创建应用对象
const app = express()
//创建路由
app.get('/:id',(req,res)=>{
    //原生操作
    //req.method 获取请求方法
    //req.url 获取请求链接
    //req.httpVersion 获取请求协议版本
    //req.headers 获取请求头
    //req.path 获取请求路径
    //req.query 获取请求参数
    //req.ip 获取请求地址
    //req.get('') 单独获取某一个请求头
    //获取商品id req.params.id
    res.setHeader('content-type','text/html;charset=utf-8')
    //req.statusCode 状态码
    res.end('hello home')
    return
})
//监听端口 启动服务
app.listen(8080,()=>{
    console.log('启动8080')
})
//默认请求路径 相当于总路由 all方法响应所有请求方法 
// 第一个参数写*代表通配符 所有的意思 同源下通配符可以兜底
app.all('/',(req,res)=>{
    res.end('hello 总路由')
})