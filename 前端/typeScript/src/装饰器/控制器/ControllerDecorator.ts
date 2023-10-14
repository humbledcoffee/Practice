export default function ControllerDecorator(rootPath: string) {
    return function <T extends { new(...args: any): any }>(targetClass: T) {
        Object.getOwnPropertyNames(targetClass.prototype).forEach((methodName) => {
            if (methodName !== 'constructor') {
                let reqPath = Reflect.getMetadata('Path', targetClass.prototype, methodName)
            }
        })
    }
}