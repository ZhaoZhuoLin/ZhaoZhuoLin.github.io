# 包的安装机制



## .npmrc文件
用于配置npm行为的文件,允许自定义npm的各种配置，主要控制npm安装、发布、更新、和管理包的行为。例如：镜像源、代理、认证信息、依赖管理等。
.npmrc位置：用户主目录下，项目根目录下，分别会影响全局npm的行为和指定项目的npm行为操作。

## 安装地址Windows
![test](../public/npm.png)

## .npmrc文件配置
::: code-group
```sh [npm]
# 镜像源地址
registry=https://registry.npmjs.org/

# 设置代理服务器，用于加速指定包的下载。这在首先网络环境下工作有很大作用
proxy=http://proxy.example.com/

# 与proxy类似，但用于HTTPS请求的代理。
https-proxy=https://proxy.example.com/

# prefix：定义全局安装包的目录。默认情况下，全局包将安装在
C:\Users\<username>\AppData\Roaming\npm（Windows）
/usr/local（linux）


# userconfig：指定用户级别的配置文件路径，用于覆盖全局配置。
userconfig=/path/to/custom/user-config-file

# cache：设置npm包的缓存目录，可以加快包的查找速度和减少下载次数。
cache=/path/to/npm/cache

# production：指示npm只安装生产依赖包。在部署生产环境时，这可确保不会安装开发依赖包。
production=true

# loglevel：设置npm的日志级别，以控制输出的详细程度。
loglevel=warn
```

:::

## npm install流程

## 检查并获取 npm 配置
- 项目级的 .npmrc 文件 > 用户级的 .npmrc 文件> 全局级的 .npmrc 文件 > npm 内置的 .npmrc 文件

## 在package-lock.json查找包名

- 若有：检查 package-lock.json 和 package.json 中声明的依赖是否一致：一致就直接使用package-lock.json 中的信息，从缓存或网络资源中加载依赖；不一致，则依据npm的版本进行处理
- 若无：则根据 package.json 递归构建依赖树，按照构建好的依赖树下载完整的依赖资源，在下载时就会检查是否存在相关资源缓存：存在缓存，就会将缓存内容解压到node_modules 中；不存在缓存，就从npm远程仓库下载包，并会检验包的完整性，随后添加到缓存，解压到node_modules 中生成package-lock.json

## package-lock.json
![alt text](../public/package-lock.png)
```
vesion:指定包的版本
resolved：指定包的下载地址
integrity：验证包的完整性
dev：是否是一个开发依赖包
bin：指定当前包中可执行的文件路径和名称
engines：指定当前包依赖的node版本号
```

## package-lock.json作用
提供缓存作用,默认会通过name+version+integrity信息生成唯一key,基于key寻找对应的index-v5的缓存记录
如果发现存在缓存，就会找到tar包的hash值，然后将对应的二进制文件解析到当前项目的node_modules
![tesxt](../public/package-lock-cache.png)
![tesxt](../public/package-lock-cache1.png)