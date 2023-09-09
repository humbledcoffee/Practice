let obj = {
    name: 'lidong'
}

function test(arg: object) { }
//直接写object的话 没有办法具体限制内部的值 对key也没有约束 所以这时候可以采用Record
test(obj)
//清楚的可以看到类型的限制 同样也有键值键名的约束
function test2(arg: Record<'name' | 'age' | 'address', string | number>) { }
function test3(arg: Record<string, string | number>) { }
type Record<K extends keyof any, T> = {
    [P in K]: T;
};
//当record的泛型第一个写成string时 自动变成索引签名的数据格式
type Record_ = Record<string, string | number>
let Record_obj: Record_ = {
    name: '李东',
    100: 101,
    [Symbol('symbol')]: 1,
    true: 1,
    null: 2
}
//写成 number 时 就只能支持number和symbol
//写成 symbol 时 就只能支持symbol

let Record_0: Record<string, string | number> = { 0: 0, 1: 1, 2: 2 }
// [0,1,2]  这样写泛型第二个参数要替换成要替换成any
let Record_1: Record<string, any> = [0, 1, 2]

//ts写一个深拷贝


//所以当一个参数既要传数组又可以传object的时候 就可以用record类型表示这个参数
function deepCopy(data: Record<string, any> | string | number | boolean) {

}

export { }