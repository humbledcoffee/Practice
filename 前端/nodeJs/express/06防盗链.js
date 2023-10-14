const express = require('express')
// 创建应用对象
const app = express()

//声明中间件
app.use((req,res,next)=>{
    let referer = req.get('referer')
    console.log(referer)
    if(referer){
        let url = new URL(referer)
        const {hostname} = url
        console.log("🚀 ~ file: 06防盗链.js:11 ~ app.use ~ hostname:", hostname)
        if(hostname !== '127.0.0.1'){
            res.status(404).send('<h1>404 6666<h1>')
            return
        }
    }
    next()
})
//静态资源中间件设置 自动加utf-8字符集的header
app.use(express.static(__dirname + '/public'))
//监听端口 启动服务
app.listen(8080,()=>{
    console.log('启动8080')
}) 