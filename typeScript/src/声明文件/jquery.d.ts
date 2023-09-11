declare function $(ready: () => void): void
//declare是全局声明
//.d.ts文件 声明必须以export和declare开头
//interface和type 不需要 加和不加都没有问题
//也就是说 凡事js能识别出来的 就要加declare 否则编译的时候会当js运行 那么肯定是报错的

//防止命名重名 所以可以采用命名空间
//外部写了命名空间 内部就不能写declare了
declare namespace $ {

}
//模块声明

declare module 'jqueryModule' {

}