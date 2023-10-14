import 'reflect-metadata'
import Collection from './Collection';
type MyParameterDecorator = (target: Object, paramName: string | symbol | undefined, parameterIndex: number) => void;
export function InjectConstructor(injectId?: string): MyParameterDecorator {
    return (targetClass, paramName, index) => {
        console.log('targetClass', targetClass)
        console.log('paramName', paramName)
        console.log('index', index)
        //targetClass是使用这个装饰器的类
        let constructorParamArr = Reflect.getMetadata('design:paramtypes', targetClass)
        let constructorParamTypeObj = new constructorParamArr[index]()
        Collection.set(injectId!, constructorParamTypeObj)
    }
}