const fs = require('node:fs');

// 读取流
const readStream = fs.createReadStream('./index.txt',{
    encoding:"utf8"
})
readStream.on('data',(chunk)=>{
    console.log(chunk)
})

readStream.on('end',()=>{
    console.log('close')
})

// 写入流
const writeStream = fs.createWriteStream('./text.txt',{encoding:"utf8"})
let num = 100;
while(num<200){
    num++
    writeStream.write(`我是第${num}个`+'\n')
}

writeStream.end()
writeStream.on('finish',()=>{
    console.log('写入完成')
})