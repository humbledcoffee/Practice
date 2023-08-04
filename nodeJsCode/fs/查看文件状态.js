/**
 * 查看文件状态
 * @method stat
 * 
 */
const fs = require('fs')
fs.stat('./fs练习.txt',(err,data)=>{
    if(err){
        console.log('读取状态失败',err,data)
    }else{
        console.log('读取状态成功',err,data)
        //是否是一个文件
        data.isFile()
        //是否是一个文件夹
        data.isDirectory()
    }
})