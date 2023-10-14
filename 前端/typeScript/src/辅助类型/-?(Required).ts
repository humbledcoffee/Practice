interface Person {
    name: string,
    age: number,
    sex?: string
}

type must<T> = {
    [K in keyof T]-?: T[K]
}
//去掉所有可选类型
type mustPerson = must<Person>
export { }