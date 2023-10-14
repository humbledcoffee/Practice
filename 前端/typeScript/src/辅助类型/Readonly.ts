interface readonlyPerson {
    readonly name: string,
    readonly age: number,

}

let person: readonlyPerson = {
    name: '李东',
    age: 28
}
//属性就不允许被修改了
//基于Person接口可以改写readonly属性
type Person<T> = {
    -readonly [K in keyof T]: T[K]
}
//ts利用vscode集成了这个方法 就叫大写的 Readonly
export { }