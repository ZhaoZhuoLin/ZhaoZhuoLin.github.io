# Node包管理工具

<p style="color: #7e7e7e;">更新时间：2023-10-28</p>

::: tip
https://www.npmjs.com/
:::


## 简介
npm和yarn都是JavaScript的包管理器，它们主要用于Node.js的插件管理和模块管理，包括安装、卸载、更新、查看、搜索、发布等。
总的来说，npm和yarn都是为了方便JavaScript开发者快速安装、更新、卸载和管理Node.js模块而诞生的工具，它们提供了丰富的命令和功能，让开发者可以更加高效地管理和使用Node.js生态系统中的资源。
在一个Node.js项目中，package.json几乎是一个必须的文件，它的主要作用就是管理项目中所使用到的外部依赖包，同时它也是npm命令的入口文件。

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
# 切换为淘宝镜像
nrm use taobao 
# 切换到npm
nrm use npm    
# 查看源有哪些并且当前使用的是哪个
nrm ls         
# 使用命令 设置npm命令服务器源
npm config set registry https://registry.npmmirror.com/ 
# 使用命令 获取npm命令服务器源
npm config get registry
# 查看当前配置的源是哪一个 
npm config list  
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
