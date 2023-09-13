import 'reflect-metadata'
type MyMethodDecoratorType = (targetClassProtoType: any, methodName: string, dataProps: PropertyDescriptor) => void
export default function RequestMethodDecorator(reqPath: string): MyMethodDecoratorType {
    return function (targetClassProtoType, methodName, dataProps) {
        Reflect.defineMetadata('Path', reqPath, targetClassProtoType, methodName)
    }
}