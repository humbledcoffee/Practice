class CommercialBank {
    public address: string = '青岛'
    public name: string = '李东'
    static count: number
    constructor(name: string, address: string) {
        this.name = name
        this.address = address
    }
    loan(): void {
        console.log(this.name + '银行贷款')
    }
}
//可以通过new 作为类生成一个实例对象
//也可以作为对象 使用内部定义的方法 CommercialBank.loan()

//泛型工厂函数定义:可以代表任意一个类构造函数的函数类型
type ConstructorType = new (...args: any) => CommercialBank
//也可以这样写
interface constructorInter {
    new(...args:any) : CommercialBank
}


function createFactoryConstructor(constructor: ConstructorType) {
    //当不允许在原来的类里添加新的代码的时候 可以采用这种方式的一种中转站 
    new constructor()
}

//泛型函数工厂的应用
createFactoryConstructor(CommercialBank)
