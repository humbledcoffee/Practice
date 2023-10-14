interface Person {
    name: string,
    age: number,
    sex?: string
}

type must<T> = {
    [K in keyof T]+?: T[K]
}
//所有属性变成可选类型
type mustPerson = must<Person>
export { }