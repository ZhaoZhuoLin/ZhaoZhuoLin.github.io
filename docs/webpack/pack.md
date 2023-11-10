# 理解打包流程
::: tip 欢迎Star⭐
仿Vue CLI的脚手架工程,满足Vue3+TS等项目开发模板。Github: https://github.com/ZhaoZhuoLin/webpack-case.git
:::


将开发阶段的代码编译，打包成适合网络分发，客户端运行的应用产物
仿Vue CLI的脚手架工程,满足Vue3+TS等项目开发模板。


## Webpack流程说明
- 输入：从文件系统读取代码文件
- 模块递归处理：通过调用loader转移module内容，并将结果转为AST，从中分析出模块的依赖关系，进一步递归调用模块处理过程，知道所有依赖文件处理完毕。
- 后处理：所有模块递归处理完毕后开始执行后处理，包括模块合并、注入运行时、产物优化等，最终输出 Chunk 集合；
- 输出：将Chunk写到外部文件系统
## 列举常见的脚手架工具
 - Vue CLI：用于帮助用户快速创建、运行 Vue.js 项目脚手架的命令行具；
 - create-react-app：用于创建 React 项目脚手架的命令行工具；
 - @angular/cli：用于创建 angular 项目的命令行工具；
 - webpack-cli：Webpack 官方提供的命令行工具，提供了一套交互式生成置文件的指令集，以及项目编译、开发、迁移等功能；
 - Neutrino：用于快速创建、运行现代 JavaScript 应用的工具，同时支持React、Preact、Vue、Web、Node.js、Library 等场景；
 - react-starter-kit：用于创建 React + Relay + GraphQL 应用的脚手工具，内置 SSR 支持。
 - Grunt：是一个前端打包构建工具。
- Gulp：用代码方式来写打包脚本。
- Rollup：ES6模块化打包工具。
- Browserify：支持Node.js正在使用的CommonJS模块，它将所有模块编译成单个浏览器兼容的文件。
- RequireJS：是一个JavaScript文件和模块加载器。它针对浏览器内使用进行了优化，但可以在其他JavaScript环境中使用，例如Rhino和Node。使用像RequireJS这样的模块化脚本加载器将提高代码的速度和质量。