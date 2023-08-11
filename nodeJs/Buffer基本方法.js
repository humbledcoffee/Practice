/**
 * Buffer
 */
// 一.操作内存 创建10个字节的buffer 清空原有内存数据（二进制位会归零）
let buf = Buffer.alloc(10)
// 二.操作内存 创建10个字节的buffer 不会清空原有数据 由于未清空 速度会变快
let buf2 = Buffer.allocUnsafe(10)
// 三. from 可以让一段字符串 或者数组 转为buffer 会以unicode码表转换为二进制存到buffer里
let buf3 = Buffer.from('你好')
let buf4 = Buffer.from([105,108,111,118,101,121,111,117])
let buf5 = Buffer.from('hello')
//buffer与字符串之间的转换 toString 默认uft-8转换
console.log('转换',buf5[0].toString(2)) //默认10进制 传参2进制
buf5[0] = 95 //可以更改 0-255范围 超过溢出会丢失