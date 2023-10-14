import 'reflect-metadata'
type MyPropDecorator = (targetClassProtoType: any, propertyKey: string | symbol) => void
export function Inject(InjectId: string): MyPropDecorator {
    return (targetClassProtoType, propertyKey) => {
        //拿到这个装饰器 修饰的属性的类型 也就是拿到了 UserService
        let PropClass = Reflect.getMetadata('design:type', targetClassProtoType, propertyKey)
        let PropClassObj = new PropClass
    }
}