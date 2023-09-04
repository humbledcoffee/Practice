//类型断言

let a: number = 1
let b: string = a as any //如果类型转换为string这种不符合大面积重叠的情况的话 是不能转换的

//比如声明了一个类A 类B继承类A 那么 就可以写 A as B 也就是父类转换成子类

//类型转换

class P {

}

class PP extends P{

}

let PPP:PP = <PP>P

export {}
