# Node包管理工具

<p style="color: #7e7e7e;">更新时间：2023-10-28</p>

:::tip npm和yarn都是JavaScript的包管理器，它们主要用于Node.js的插件管理和模块管理，包括安装、卸载、更新、查看、搜索、发布等。
总的来说，npm和yarn都是为了方便JavaScript开发者快速安装、更新、卸载和管理Node.js模块而诞生的工具，它们提供了丰富的命令和功能，让开发者可以更加高效地管理和使用Node.js生态系统中的资源。
在一个Node.js项目中，package.json几乎是一个必须的文件，它的主要作用就是管理项目中所使用到的外部依赖包，同时它也是npm命令的入口文件。
::: 
## 不同点

1. 安装速度：通常，yarn的安装速度比npm快。这是因为在包的下载和安装过程中，yarn使用了并行下载和缓存等优化策略，而npm则是串行化处理这些操作。
2. 缓存机制：yarn具有更强大的缓存机制，能够更好地利用缓存，减少重复下载。这对于团队协作和构建机器上的重复构建是有益的，可以节省时间和带宽。
3. 版本控制：yarn解决了由于语义版本控制而导致的npm的不确定性问题，通过安装时创建的默认文件，确保使用的库的版本相同。
4. 安全性：yarn在包的下载和安装过程中更加注重安全性。它通过使用yarn.lock文件来锁定依赖项的版本，确保在不同环境下使用的是相同的依赖版本，从而减少由于依赖项版本不一致导致的问题。
5. 用户界面：yarn提供了更友好和直观的命令行界面，显示更详细的信息，如安装进度、依赖关系树等。相比之下，npm的命令行界面较为简洁。
6. 生态系统：npm是Node.js生态系统的默认包管理工具，拥有庞大的包库和活跃的社区支持。大多数开源项目和文档都以npm为主要依赖管理工具。虽然yarn的用户数量在不断增加，但npm仍然是广泛使用的。

## npm命令

::: code-group
```sh [npm]
#安装pnpm
npm install -g pnpm
#查看版本号
pnpm -v

#安装cnpm包管理器
npm install -g cnpm --registry=https://registry.npmmirror.com 
# 全局安装nrm
npm i -g nrm 

# nrm其实就是npm registry manager,管理npm源的简单cmd工具
# 切换为淘宝镜像
nrm use taobao 
# 切换到npm
nrm use npm    
# 查看源有哪些并且当前使用的是哪个
nrm ls         

# 安装指定的包
npm install <package name>
# 安装指定的包,并将其添加到package.json文件的依赖列中
npm install <package name> --save
# 安装指定的包,并将其添加到package.json文件的开发依赖列中
npm install <package name> --save-dev
# 全局安装指定的依赖包
npm install <package name> -g
# 更新指定包
npm update <package name>
# 卸载指定包
npm uninstall <package name>
# 列出当前项目中安装的所有包
npm list
# 运行当前package.json文件中定义的脚本命令
npm run <sript-name>
# 列出当前项目中需要更新的包名
npm outdated
# 列出当前项目中的依赖项是否存在安全漏洞
npm audit
# 发布开发包到npm库中
npm publish
# 登录到npm账号
npm login
# 注销当前npm账号 
npm logout


# 使用命令 设置npm命令服务器源
npm config set registry https://registry.npmmirror.com/ 
# 使用命令 设置淘宝源镜像
npm config set registry https://registry.npm.taobao.org/
# 使用命令 获取npm命令服务器源
npm config get registry
# 列出所有的npm配置信息 
npm config list
# 查看全局安装了哪些包  
npm ls -g
```
:::

## yarn命令

::: code-group
```sh [yarn]
#-y 初始化包
yarn init/yarn init
# 添加依赖包 
yarn add source 
# 添加开发依赖包
yarn add source --save 
# 全局安装依赖包
yarn global add source 
# 删除依赖包
yarn remove source 
# 全局删除依赖包
yarn global remove source
# 设置淘宝镜像 
yarn config set registry https://registry.npmmirror.com/
# 查看 yarn 的配置项 
yarn config list 
```
:::

## nvm命令

::: code-group
```sh [nvm]
# 安装指定版本node.js
nvm install
# 切换指定版本 
nvm use 
# 当前正在使用版本
nvm current
# 列出已经安装的版本
nvm ls
# 卸载版本
nvm uninstall
# 切换版本后，重新安装全局的npm包
nvm reinstall-packages
# nvm自动切换 
nvm on
# nvm启动切换关闭 
nvm off 
```
:::


## pnpm
[管理依赖项](https://www.pnpm.cn/cli/remove)
::: code-group
```sh [pnpm]
# 安装
npm install -g pnpm
# 安装xx到dependencies  
pnpm add sax	
# 保存到 devDependencies 配置项下
pnpm add -D sax	
# 安装软件包到全局环境中
pnpm add -g sax 
# 安装标记为 next 的版本
pnpm add sax@next	
# 安装指定版本 3.0.0
pnpm add sax@3.0.0	
```
:::

# Package.json

::: code-group
```sh [Package] 
# 项目名称
name
# 版本号
version
# 项目描述
description
# 项目主入口
main
# 项目的关键字列表，方便他人搜索和发现该项目
keywords
# 作者
author
# 项目许可证，如MIT ISC
license
# 项目所依赖包的列表,这些包会在项目运行时安装
dependencies
# 开发过程中需要的包列表，不会随项目发布
devDependencies
# 项目代码仓库的信息，包括类型、网址等。
repository
# 项目的 bug 报告地址。
bugs：
# 项目的官方网站地址或者文档地址。
homepage：
```
:::

version 三段式版本号一般是1.0.0 大版本号 次版本号 修订号， 大版本号一般是有重大变化才会升级， 次版本号一般是增加功能进行升级， 修订号一般是修改bug进行升级
