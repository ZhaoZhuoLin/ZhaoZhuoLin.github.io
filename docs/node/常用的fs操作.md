# 常用的fs操作
fs底层：通过c++的FSReqCallback类对libuv的uv_fs_t的一个封装。
使用的时候就是将fs定义参数传递给libuv层，再执行，之后返回结果。

## 异步读取文件
```javascript
fs.readFile('./os.js',"utf-8",(err,data)=>{
    if(err){
        console.log(err)
    }
    console.log(data)
})
```
## 同步读取文件
```javascript
let os = fs.readFileSync('./os.js',"utf-8")
console.log(os)
```

## 读取目录
```javascript
fs.readdir(__dirname, "utf-8", (err, files) => {
    if (err) {
        console.log(err)
    }
    console.log(files)
    for (let i = 0; i < files.length; i++) {
        console.log(path.resolve(__dirname, files[i]))
    }
})
```
## 写入文件
```javascript
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
```
## 文件读取流
```javascript
const readStream = fs.createReadStream('./index.txt',{
    encoding:"utf8"
})
readStream.on('data',(chunk)=>{
    console.log(chunk)
})

readStream.on('end',()=>{
    console.log('close')
})
```

## 文件写入流
```javascript
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
```