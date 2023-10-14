//这样写的话是一次进行比较
type Test = string | number | boolean extends string | number ? string : never
//下面这种泛型的方式是一种迭代的比较 
type CondType<T> = T extends string | number ? T : never
type TestCondType = CondType<string | number | boolean>
//这样条件类型加泛型就可以做一层封装
//例如
type example<T> = T extends object ? T : never

// function f1<T extends object, U extends object>(arg1: T, arg2: U): T & U
// function f2<T extends object, U extends object,Z extends object>(arg1: T, arg2: U): T & U & Z
//可以写成以下这种形式 更加语义话 增加代码 可读性
// function f1< T,U >(arg1: example<T>, arg2: example<U>): T & U
// function f2< T,U ,Z >(arg1: example<T>, arg2: example<U>,arg3?:example<Z>): T & U & Z

//条件类型的复杂应用 如果下面这个接口在很多地方都要引用 可能属于基础接口 后续还有新的属性进来 这时候除了用?的形式
//还可以用条件类型来进行构造 因为我们不想在基础接口上增加许多冗余的属性
interface Customer {
    name: string
    age: number
    phone?: number //不可能来一个属性我加一个
}

type addAttrToObj<T, K extends string, V> = {
    [P in keyof T | K]: P extends keyof T ? T[P] : V
}

type exampleAdd = addAttrToObj<Customer, 'weChat', string>
//怎么往接口一次性添加多个属性呢 纯自己研究 写的不好请指正

type addAttrToObjMany<T, OBJ extends object> = {
    [Key in keyof T | keyof OBJ]: Key extends keyof T ?
    T[Key] :
    Key extends keyof OBJ ?
    OBJ[Key] : never
}
type exampleAddAttrToObjMany = addAttrToObjMany<Customer, { mail: string, address: string, sex: string, money: number }>

export { }