// console.log(process)
// 当前目录
console.log(__dirname)

// 当前文件目录
console.log(__filename)

//这是一个包含命令行参数的数组。第一个元素是Node.js的执行路径，第二个元素是当前执行的JavaScript文件的路径，之后的元素是传递给脚本的命令行参数
console.log(process.argv)

// 操作系统的环境变量
console.log(process.env)

//返回当前工作目录的路径
console.log(process.cwd())

// 当前进程的pid
console.log(process.pid)

//当前PC的架构
console.log(process.argv)

// 退出当前的nodejs进程
setTimeout(()=>{
    console.log("exit")
    process.exit(100)
},3000)