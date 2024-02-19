const fs = require("node:fs");
const path = require("path")
const fs = require('node:fs');

// 异步读取文件
fs.readFile('./os.js',"utf-8",(err,data)=>{
    if(err){
        console.log(err)
    }
    console.log(data)
})

// 同步读取文件
let os = fs.readFileSync('./os.js',"utf-8")
console.log(os)


//读取目录
fs.readdir(__dirname, "utf-8", (err, files) => {
    if (err) {
        console.log(err)
    }
    console.log(files)
    for (let i = 0; i < files.length; i++) {
        console.log(path.resolve(__dirname, files[i]))
    }
})


// 写入文件
let writeFileUrl = path.resolve(__dirname, "text.txt")
let num = 0;
while (num < 100) {
    num++
    fs.writeFile(writeFileUrl, `我是第${num}个,Hello`+"\n",{
        flag:"a"
    },(err,res)=>{
        if(err){
            console.log(err)
        }
        console.log(res)
    })
}