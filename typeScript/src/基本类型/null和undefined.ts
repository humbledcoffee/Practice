let str: string | undefined
console.log(str)
//如果上面不加undefined 会报错 因为设定了string类型
//但是打印的时候相当于读了值 发现是undefined 所以ts会报错
function fn(params?: string) {
    params!.toString() //非空断言操作符 忽略null和undefined 但其实真undefined进来会报错的
    params?.toString //es2011的语法 如果data为null或者undefined 就不会往后执行了
    if (params) params.toString() //最笨的写法
}
//加了?  即不传参数ts也不会报错了 认为参数是可选的 但是和联合类型是不一样的
fn()
//any,unknown,undefined 可以接受undefined
// any,unknown,null可以接受 null
let data2: undefined = undefined
export { }