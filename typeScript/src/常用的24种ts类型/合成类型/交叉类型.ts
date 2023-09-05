// 交叉类型
type Obj1 = { user: string }
type Obj2 = { age: number }
let obj1: Obj1 = { user: '李东' } //(不写是根类型 {}里边写内容就会变成普通的对象类型)
let obj2: Obj2 = { age: 28 } //(不写是根类型 {}里边写内容就会变成普通的对象类型)
let obj3: Obj1 & Obj2 = { user: '老谭', age: 27 }
// let str2: number & string = 4 //胡来类型 这两个是不可能并到一起的 自动就变成never了
//字面量数据类型
type Num = 1 | 2 | 3 | 'age'
let num: Num = 'age' //只能等于1,2,3 不能等于4 也可以等于字符串age
export { }
//type是可以通过交叉类型 合成一个新的类型的 接口是不行的 只能补充 或者继承

export { }
