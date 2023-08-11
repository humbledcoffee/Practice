/**fs
 * 文件读取
 *  */

const fs = require('fs')
//异步读取 读取的内容是buffer
fs.readFile('./fs/fs练习.txt',(err,data)=>{
    if(err){
        console.log('读取失败',err,data)
    }else{
        console.log('读取成功',err + '\r\n',data.toString())
    }
})
//同步读取 readFileSync
//流式读取 
const rs = fs.createReadStream('./fs/fs练习.txt')
rs.on('data',chunk =>{
    console.log('chunk',chunk)
})