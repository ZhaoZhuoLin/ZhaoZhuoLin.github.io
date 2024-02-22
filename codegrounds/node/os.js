const os = require('node:os');

// 它在 Linux 上返回 'Linux'，在 macOS 上返回 'Darwin'，在 Windows 上返回 'Windows_NT'
console.log(os.type())

//主机name
console.log(os.hostname())

//版本
console.log(os.release())

//用户主目录
console.log(os.homedir())

//CPU架构
console.log(os.arch())

// CPU运行状态
console.log(os.cpus())

//获取网路配置
// console.log(os.networkInterfaces())

// console.log(os.userInfo())

// console.log(os.version())