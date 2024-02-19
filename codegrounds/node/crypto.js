const crypto = require('node:crypto');
const key = crypto.randomBytes(32);
console.log(key)

const iv = Buffer.from(crypto.randomBytes(16));
// 对输入数据进行加密，并输出加密结果的十六进制表示
const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
cipher.update("赵卓林", "utf-8", "hex");
const result = cipher.final("hex");
console.log(result)