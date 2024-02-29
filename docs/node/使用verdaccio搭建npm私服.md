# 使用verdaccio搭建npm私服


## verdaccio使用说明
::: tip
 Verdaccio 是一个流行的 Node.js 包管理器的代理工具，它允许您在本地或私有网络上轻松地创建和管理 npm 包仓库。通过 Verdaccio，开发团队可以建立自己的 npm 包仓库，以更好地控制和管理其依赖项，同时还可以提供更快速的包下载速度，减轻 npm 中心服务器的负载。
:::
## 工作原理
- 代表npm注册表：当我们尝试安装、发布或访问npm包时，verdaccio先查看本地缓存，存在则返回，反之向上游注册表发送亲够，获取包后将其缓存到本地使用。
- 本地包存储：满足本地创建和发布自己的npm包
## 作用
- 安全性：Verdaccio 支持访问控制、身份验证和权限管理
- 本地开发：可以使用本地缓存，而不必每次都从公共 npm 注册表下载依赖项，从而提高开发效率。方便内容使用
- 离线环境：创建本地的npm缓存，不受网络现实
## 操作指令
# 常用工具
|        操作         |                                官网文档                                |
| :-----------------: | :--------------------------------------------------------------------: |
|        安装        |                    npm i -g vcerdaccio                    |
| 启动 | vcerdaccio |
|     配置私有源      |                Npm set registry http://xx.xx.xx.xx:4873               |
|        创建用户         |                 npm adduser --registry http://xx.xx.xx.xx:4873               |
|        发布npm包        |                 npm adduser --registry http://xx.xx.xx.xx:4873|
 
## 本地服务搭建
### 启动
![启动](../public/verdaccio02.png)
### web页面
![web页面](../public/verdaccio01.png)

