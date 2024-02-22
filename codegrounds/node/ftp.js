const ftp = require('ftp');

// FTP服务器信息
const host = '10.203.10.1'; // FTP主机名或IP地址
const port = 21; // FTP端口号（默认为21）
const user = 'asry'; // FTP登录用户名
const password = 'Asry@2024'; // FTP登录密码

// 创建FTP客户端对象
const client = new ftp();

client.on('ready', () => {
    console.log('已成功连接到FTP服务器！');

    // 切换至指定路径
    const pathToList = '/path/to/list';
    client.cwd(pathToList);
});

client.connect({
    host: host,
    port: port,
    user: user,
    password: password
});

client.on('error', (err) => {
    console.error(`发生错误：${err}`);
});

client.on('end', () => {
    console.log('与FTP服务器断开连接。');
});