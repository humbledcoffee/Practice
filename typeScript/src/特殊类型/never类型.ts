// 使用never是为了避免出现未来扩展新的类没有对应类型的实现,目的就是为了写出绝对安全的代码
type DataFLow = string | number
function test(dataflow: DataFLow) {
    if (typeof dataflow === 'string') {
        dataflow.split('') //在这里dataflow的提示就只有字符串了
    } else if (typeof dataflow === 'number') {
        dataflow.toFixed(2) //这里就只有number方法了 
    } else {
        // 没有其他情况了 这里就是never了 你写任何方法都是不对的 
        console.log(dataflow)
    }
}
export {}