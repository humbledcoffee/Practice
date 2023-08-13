//1.导入http模块
const http = require("http");
// 导入url模块
const url = require("url");
//2.创建服务对象
const server = http.createServer((request, response) => {
  //request 请求报文封装
  //method获取请求方法
  console.log(request.method);
  //url 获取请求的url request.url
  //request.url 是只有路由信息的这里要注意
  //解析request.url url.parse可以拿到路由和get请求的参数等
  //   {
  //   protocol: null,
  //   slashes: null,
  //   auth: null,
  //   host: null,
  //   port: null,
  //   hostname: null,
  //   hash: null,
  //   search: ?name=lidong&age=28,
  //   query: name=lidong&age=28,
  //   pathname: '/home',
  //   path: '/home?name=lidong&age=28',
  //   href: '/home?name=lidong&age=28'
  //   }
  //   如果传第二个参数query就会返回个JSON对象
  let req = url.parse(request.url, true);
  //url.format可以把对象结构逆转回原来的完整的url
  //url.resolve可以拼接路径 第一个参数不加斜杠的话会替换路径 加了的话会拼接路径
  //如果第一个参数是完整的域名的话 不论几级路由都会被第二个参数统一替代

  //pathname也能获取路径
  let pathname = req.pathname;
  //获取参数（get查询字符串）
  let query = req.query;
  //也可以通过实例化url对象来获取参数
  let newUrl = new URL(request.url, "http://127.0.0.1:8080");
  // newUrl.pathname 路由
  // newUrl.searchParams.get('键名')
  // 获取协议版本号 request.httpVersion
  // 获取http的请求头 request.headers 是一个对象

  //response 相应报文的封装
  //设置相应状态码 是可以覆盖的
  response.statusCode = 200;
  //相应状态的描述
  response.statusMessage = "I love you";
  // 响应头设置
  // 浏览器编码格式 不写这个会乱码
  // 也可以用writeHead设置响应头 response.writeHead(200,{content-type:"text/html;charset=utf-8"})
  response.setHeader("content-type", "text/html;charset=utf-8");
  // 响应体设置
  // 可以多次调用累加
  // 不能替代end
  // 不能写在end后面
  // 可以写html代码
  response.write("write");
  // 获取请求体
  // 绑定data事件
  let body = "";
  request.on("data", (chunk) => {
    body += chunk;
  });
  // 本质chunk是一个buffer流
  request.on("end", () => {
    console.log("body", body);
  });
  // 结束的方法 这个是一定要调用的 不然以为还没有写完
  response.end("end");
});

//3.监听端口，启动服务

server.listen(8080, () => {
  console.log("服务已经启动");
});
