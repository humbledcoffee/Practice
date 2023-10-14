//装饰器就是一个函数
//泛型工厂类继承装饰器实现

//装饰器函数
function 类装饰器函数<T extends { new(...args: any): any }>(继承目标类: T) {
    //这里这个中间类可以不写了 就像匿名函数一样 就成了匿名类了 
    class 中间类 extends 继承目标类 {
        constructor(...arg: any) {
            super(...arg)
            console.log('测试被继承')
        }
    }
    return 中间类
}

@类装饰器函数
class 测试 {
    name!: string
    constructor(name: string) {
        this.name = name
    }

    eat() {
        console.log(`${this.name}在吃东西`)
    }
}

let test = new 测试('李')