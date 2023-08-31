let str: string = '李东'
export {}
//如果不加export 默认ts 将str识别为全局变量 那么其他页面定义str的时候就会抛出错误
//浏览器和node环境是不支持ts代码的 需要先编译成js代码
//用tsc命令可以将ts先编译成符合cjs规范的js代码