//首字母变成大写
type Test = 'do'
type TestCap = Capitalize<Test>
//Uppercase Lowercase Uncapitalize 等参照源码 整体大写 整体小写 首字母小写功能 
interface Person {
    name: string
    eat: () => void
    run: () => void
    pull: () => void
}

//拿到函数类型并更改名字 写成一个新的接口 as是重映射的意思 附加到P上的一个新的条件
type Degree<T extends Record<string, any>> = {
    [P in keyof T as T[P] extends Function ? `do${Capitalize<P & string>}` : never]: T[P]
}

type DegreeTodo = Degree<Person>
//因为泛型约束了只能传数组类型 和对象类型 这时候如果我们传递数组类型进去 会发现一个很有意思的点
//所有数组上的方法都被改变了
type DegreeTodoArray = Degree<Array<any>>
//如果只想传递对象 数组的话不显示可以给T再加一个约束
type exceptArray<T> = Exclude<T, Array<any>>
//替换表达式中的T就行
export { }