// 具有以下特点的数据类型叫泛型
// 特点1 定义时不明确使用时必须明确成魔咒具体数据类型的数据类型
// 特点2 编译期间进行数据类型检查的数据类型

interface Ref<V> {
    value: V
}

let ref: Ref<string> = {
    value: '1234'
}
type Student = { name: string, age: number }

let ref2: Ref<Student> = {
    value: { name: '李东', age: 29 }
}
export { }
//泛型默认值

class Demo<T = any>{

}
let d = new Demo() //这里声明的时候如果不给泛型写值的话 那么就会采取默认any

//泛型约束
class Order {
    orderId!: number
    orderName!: string
    static count: number
    printId() { }
    static getCount() { }
}

// type OrderIdType = Order['orderId'] //拿取类中的属性注解
// type OrderAttrNames = keyof Order //拿取可被实例获取的所有属性注解
// let order:OrderAttrNames = 'orderId' //拿到其中一个属性注解

type instancePropKeys<T extends Object> = keyof T //从泛型中拿取 属性名 并限制在object类型中
type OrderPropKeys = instancePropKeys<Order> //属性名 用order接口通过泛型再做限制
type DirectKeys<T> = T extends any ? T : never
type CusKeys = DirectKeys<keyof Order>

//vue3 中的泛型约束例子 类型泛型反向推断值

class ObjectRefImpl<T extends object, K extends keyof T>{
    constructor(private readonly _object: T, private readonly _key: K) { }
    get value() {
        return this._object[this._key]
    }
    set value(newVal) {
        this._object[this._key] = newVal
    }
}

type ObjectType = { username: string; age: number }
const obj = new ObjectRefImpl<ObjectType, 'age'>({ username: '李东', age: 28 }, 'age')


