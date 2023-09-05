//定义 在编写时对未知类型的推断，在使用时按照给定泛型的匹配关系推断出正确类型
interface Person {
    name: string
    money: number
}

type Fn = (params: Person) => string
type paramsType = Fn extends (params: infer P) => any ? P : Fn

//结合泛型使用

type EleOfArr<T> = T extends Array<infer P> ? P : never
type EleOfArrTest = EleOfArr<Array<string>>
export { }