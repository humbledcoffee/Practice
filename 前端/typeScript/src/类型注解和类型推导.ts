//类型注解 定义的时候进行约束
let data: number = 3;
interface Student {
    name: string,
    age:number
}
//如果定义的对象不符合接口类型 那么直接会抛出错误
let student: Student = {
    name: '李东',
    age:28
}
//类型推导 赋值的时候进行约束
let money = '3'
let student2 = {
    name: '李东',
    age:28
}
