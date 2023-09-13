//单例设计模式的储存器
class Collection<T = any>{
    static collection: Collection = new Collection()

    private constructor() {
        console.log('Collection构造函数')
    }

    public static test() {
        console.log('test...')
    }

    private containerMap = new Map<string | symbol, any>();
    set(id: string | symbol, value: T): void {
        Reflect.set(this.containerMap, id, value)
    }

    get(id: string | symbol): T {
        return Reflect.get(this.containerMap, id)
    }
}
export default Collection.collection