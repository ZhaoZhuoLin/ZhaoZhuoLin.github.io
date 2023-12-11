# 运行环境

## 构建
[NodeJs](http://www.nodejs.com.cn/)是构建喜在V8引擎之上的，V8引擎由C/C++编写，因此我们的JavaScript代码需要由C/C++转化之后再执行
## JS层
JS 层提供面向用户的调用底层能力的接口，即各种 NodeJS 原生模块，如 net、http、fs、DNS 以及 path 等
## C++层
C++ 层主要通过 ![V8](https://github.com/v8/v8.git) 为 JS 层提供与底层交互的能力，起到类似桥梁的作用，通过 V8 不仅实现 JS 的解释执行，还扩展的 JS 的能力边界
## C层
C 层主要包括 ![Libuv](https://github.com/libuv/libuv.git) 这一跨平台的异步 IO 库以及其他第三方 C 库

## 包管理工具
使用[NPM](https://www.npmjs.com/package/npm)进行管理,对标python的[pip](https://pypi.org/project/pip/)，java的[Maven](https://maven.apache.org/)

## 应用场景前端
Vue React nuxtjs nextjs Angular