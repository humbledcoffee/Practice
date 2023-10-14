interface Todo {
    title: string,
    complied: boolean,
    describe: string
}

//这样写是不出提示的
type Omit<T, K> = {
    [p in keyof T]: T[p]
}
type myOmit = Omit<Todo, 'title'>

//这样就有提示了
type OmitPlus<T, K extends keyof T> = {
    [p in keyof T]: T[p]
}

//排除属性实现原理
type OmitPlusMax<T, K extends keyof T> = {
    [P in keyof T as P extends K ? never : P]: T[P]
}
//优化 用exclude语法糖替代
type OmitPlusMaxPro<T, K extends keyof T> = {
    [P in keyof T as Exclude<P, K>]: T[P]
}

type myOmitPlus = OmitPlusMaxPro<Todo, 'complied'>

export { }