
function 方法装饰器(方法装饰器传参: string) {
    return function (目标类原型对象: any, 目标类方法名: string, 目标类方法的数据属性: PropertyDescriptor) {
        const 目标类方法 = 目标类方法的数据属性!.value
        目标类方法的数据属性!.value = function (...参数: any[]) {
            参数 = 参数.map((每个参数) => {
                if (typeof 每个参数 === 'string') return 每个参数.replace(/\s+/g, '') //就是去除空格 没什么实际意义 体现前置拦截可以做的事情
                return 每个参数
            })
            console.log('前置拦截')
            目标类方法.apply(this, 参数)
            console.log('后置拦截')
        }
    }
}

class 目标类 {
    public name: string = '李'
    constructor() {

    }
    @方法装饰器('方法装饰器')
    目标类方法() {
        console.log('目标类方法')
    }
}

let 测试 = new 目标类()
测试.目标类方法()

export { }