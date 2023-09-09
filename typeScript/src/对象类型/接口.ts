//接口是另一种定义对象类型的类型
interface Pet {
    name: string,
    love: number,
    health: number,
    // [x:string]:any //可索引的未知属性的签名 索引签名的值必须兼容确定索引签名的值
}
//同名接口不会报错 会合并
interface Pet {
    death: number,
}
//type可以提取接口的类型断言
type A = Pet['name' | 'health']
//type获取所有接口类型
type B = keyof Pet
let bKeys: B = "death"
//也可以用泛型
type allKeys<T> = T extends any ? T : never
type C = allKeys<keyof Pet>
interface Dog extends
    Pet {
    strain: string,
    guardHome(): void
}
//接口是可以继承的 用起来比type相对方便一点
interface List {
    add(): void,
    remove(): void
}

class dataList implements List {
    add(): void {
        throw new Error("Method not implemented.")
    }
    remove(): void {
        throw new Error("Method not implemented.")
    }

}
export { }
//也可以为多个同类别的类提供统一的方法和属性声明
// 当要继承多个接口的时候 用,隔开即可

//interface只能定义对象类型或接口当名字的函数类型 type可以定义任何类型,包括基础类型,联合类型,交叉类型,元祖

//接口可以继承 一个或多个接口或类实现一个或者多个接口,也可以继承type,但type类型是没有继承功能,

//type交叉类型 & 可以让类型中的成员合并成一个新的type类型,但接口是不能交叉合并的

