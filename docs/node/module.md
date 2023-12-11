# 模块化

- NodeJs-CommonJS规范
- NodeJs-ESM规范

## CommonJS规范
```javascript
const fs =require('node:fs');
export const name = "node"
module.exports = {

}
```
## ESM规范
- 引入模块必须写在头部
- 注意使用ESM模块必须开启package.json中type:"module"
```javascript
import * as all from 'xxx.js'
import fs from "node:fs"
export default name ="123"
export default {

}
```
##  二者不同
- 1.cjs是基于运行时的同步加载,esm是基于编译时的异步加载