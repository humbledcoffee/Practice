/**
 * 重命名与移动
 */
const fs = require('fs')
fs.rename('./fs练习.txt','./fs/fs练习.txt',err =>{
    if(err){
        console.log('重命名失败',err)
    }else{
        console.log('重命名成功',err)
    }
})