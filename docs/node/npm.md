# 包的安装机制

## 检查并获取 npm 配置
- 项目级的 .npmrc 文件 > 用户级的 .npmrc 文件> 全局级的 .npmrc 文件 > npm 内置的 .npmrc 文件

## 在package-lock.json查找包名

- 若有：检查 package-lock.json 和 package.json 中声明的依赖是否一致：一致就直接使用package-lock.json 中的信息，从缓存或网络资源中加载依赖；不一致，则依据npm的版本进行处理
- 若无：则根据 package.json 递归构建依赖树，按照构建好的依赖树下载完整的依赖资源，在下载时就会检查是否存在相关资源缓存：存在缓存，就会将缓存内容解压到node_modules 中；不存在缓存，就从npm远程仓库下载包，并会检验包的完整性，随后添加到缓存，解压到node_modules 中生成package-lock.json

