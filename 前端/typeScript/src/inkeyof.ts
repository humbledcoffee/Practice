//按照遍历去进行理解
interface Person {
    name: string,
    age: number,
    phone: string
}

type extPerson = {
    [P in keyof Person]: Person[P]
}
export { }