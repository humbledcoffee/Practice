//满足以下三点的数组就是元祖
//1.在定义时每个元素的类型都确定
//2.元素值的数据类型必须是当前元素定义的类型
//3.元素值的个数必须和定义时个数相同 
let arr: [string, number, number] = ['1', 2, 4]
export { }
const account = [1, 2, 3, 4, 5, 6] as const //这样写了之后 堆里边的内容也不允许被更改了
//数组与元祖类型结合 叫可变元祖
let arr2 :[string,number,string,...any[]] = ['1',2,'3',4,5,6]
export {} 