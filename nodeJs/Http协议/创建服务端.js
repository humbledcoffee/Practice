//1.导入http模块
const http = require('http')
// 导入url模块
const url = require('url')
//2.创建服务对象
const server = http.createServer((request,response)=>{
    //request 请求报文封装 
    //response 相应报文的封装
    //method获取请求方法
    console.log(request.method)
    //url 获取请求的url request.url
    //解析request.url url.parse 第二个参数可以让query属性变成对象
    let res = url.parse(request.url)
    let pathname = res.pathname
    //获取参数（get查询字符串） 
    let query = res.query  
    //也可以通过实例化url对象来获取参数
    let newUrl = new URL(request.url,'http://127.0.0.1:8080')
    // newUrl.pathname 路由
    // newUrl.searchParams.get('键名')
    //获取协议版本好 request.httpVersion
    //获取http的请求头 request.headers 对象

    //设置相应状态码 是可以覆盖的
    response.statusCode = 200
    //相应状态的描述 
    response.statusMessage = 'I love you'
    //响应头设置
    response.setHeader('content-type','text/html;charset=utf-8') //浏览器编码格式
    //响应体设置 可以多次调用累加   
    response.write('wirte')
    //获取请求体
    // 绑定data事件 
    let body = ''
    request.on('data',chunk =>{
        body += chunk
    })
    //本质chunk是一个buffer流
    request.on('end',()=>{
        console.log('body',body)
    })
    response.end('你好 李东') //设置相应内容

    
})

//3.监听端口，启动服务

server.listen(8080,()=>{
    console.log('服务已经启动')   
})