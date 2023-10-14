//返回后者不包含前者的类型
type Example = Exclude<number | string | boolean, number | string>
type Exclude_<T> = Exclude<T, Array<any> | string | number | boolean | null | undefined | symbol>
//示范应用场景 应用交叉方法
function cross<Q, W, E>(arg1: Exclude_<Q>, arg2: Exclude_<W>, arg3: Exclude_<E>): Q & W & E {
    const combine = {} as Q & W & E
    union(combine, arg1)
    union(combine, arg2)
    union(combine, arg3)
    return combine
}

function union(combine: any, curObj: any) {
    for (let K in curObj) combine[K] = curObj[K]
    return combine
}
export { }