//类
class People {
    name: string;//如果有可能没有 写?就可以
    age: number;
    addr: string;
    static count: number = 0
    constructor(_name: string, _age: number,_addr:string) {
        this.name = _name
        this.age = _age
        this.addr = _addr
        People.count++
    }
    doEat(){}
    doStep(){}
}

let p = new People('李东', 28, '青岛')

//单例模式 1
class People2 {
    static people2 = new People2() //立即式创建单例模式 也叫饿汉式创建单例模式 这时候外部是不能再new了
    private constructor() { //当创建这个类的时候 构造函数就会立即执行 因为在内部进行new了
        
    }
    say() {
        console.log('Hi')
    }
}
//单例模式2
class People3 {
    static people3: People3  //什么时候调用 需要用 什么时候创建 节省内存空间
    static getInstance() {
        if (this.people3) {
            return this.people3
        } else {
            this.people3 = new People3
        }
    }
    private constructor() { //当创建这个类的时候 构造函数就会立即执行 因为在内部进行new了
        
    }
    say() {
        console.log('Hi')
    }

}
let p2 = People2.people2
// p2.say()
//写个前后置拦截
class People4 {
    name: string
    constructor(name:string) {
        this.name = name
    }
    sayHi() {
        console.log(`Hi! ${this.name}`)
    }
}

let sayHi = Object.getOwnPropertyDescriptor(People4.prototype, 'sayHi')
let sayHiClassFunction = sayHi?.value
sayHi!.value = function beforeAndAfterSayHi(...argument: any[]) {
    console.log('前置拦截')
    sayHiClassFunction.apply(this, argument)
    console.log(this)
    console.log('后置拦截')
}
Object.defineProperty(People4.prototype,'sayHi',sayHi!)
let p4 = new People4('李东')
p4.sayHi()

