//第一种写法
let info: (name: string, age: number) => number = function (name, age) {
    console.log(name, age)
    return 3
}
//第二种写法 直接写在函数上
function info2(name: string, age: number, ...rest: any) {
    console.log(name, age, rest)
    return rest
}
info2('1', 2, 3, 4)
export { }