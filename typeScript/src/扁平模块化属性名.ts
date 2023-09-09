type Module = {
    A: {
        A1: (index: string) => void
        A2: (index: string) => void
        A3: (index: string) => void
    }
    B: {
        B1: (index: string) => void
        B2: (index: string) => void
        B3: (index: string) => void
    }
}
//ts模版字符类型
type MB<T, U> = `${T & string}/${U & string}`
type testMB = MB<'module', 'A' | 'B'>
//扁平化属性名
type ModulesSpliceKeys<T> = {
    [K in keyof T]: MB<K, keyof T[K]>
}[keyof T] //向外输出 泛型T的key 而不是输出T

type testModulesSpliceKeys = ModulesSpliceKeys<Module>