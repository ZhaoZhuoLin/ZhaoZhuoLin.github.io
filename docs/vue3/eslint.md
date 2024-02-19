# 工程化之代码规范-Eslint
## Eslint
::: tip 一套规范的代码质量检查机制，理解&实践。[Eslint](https://eslint.cn/)
:::
## 是什么
一个开源的JavaScript代码静态分析工具，用于找出代码中的问题，并提供一致的的编码风格。扫码代码，根据预定的规则进行分析，然后给出警告或和错误提示。
## 为什么要用
代码质量保证
统一代码风格
提高代码可读性
节省时间和精力
## 处理过程
Eslint本质是一个内置有解析器的工具，将项目中代码解析成AST抽象语法数，并从中分析出代码存在的问题然后给出警告和错误。例如：声明变量未使用，修改const值，代码中存在debugger。eslint的初衷就是在代码编写阶段尽早发现存的问题，除了语法检查外，eslint也具备代码格式化的能力，但不是主重心（prettier在代码格式化方面比较中用）


安装&初始化
``` Javascript
全局安装eslint依赖
npm i eslint -g

给项目初始化eslint，包括安装devDependencies依赖& 按照引导配置选项生成.eslintrc.cjs
npx eslint --init
```
## .eslintrc.cjs-配置项-parser & parserOptions
通过parse指定项目所使用的语法解析器，parserOptions就相当于给出解析器更详细的解析配置
## .eslintrc.cjs-配置项-rules & plugins & extends
rules是eslint具体对语法检查所依据的规则，但是官方只提供了官员标准js的检查规则，所以需要plugin来拓展规则集合。而extends就相当于一组配置好的rules和plugins组合，避免了编写大量的rules规则
rules中规则优先级最高，会覆盖扩展以及插件中引入的规则。
rules规则参考：https://zh-hans.eslint.org/docs/latest/rules/
``` Javascript
off || 0 ：关闭规则
warn || 1: 开启规则，warn级别的错误（不会导致程序退出）
erroe || 2：开启规则，error级别错误（影响程序退出）
```
## .eslintrc.cjs-常见的rules
```javascript
rules: {
    "no-console": "off", // 允许使用console
    "no-debugger": "off", // 允许使用debugger
    "no-unused-vars": "off", // 允许声明未使用变量
    "no-undef": "off", // 允许使用未定义变量
    "no-irregular-whitespace": "off", // 允许使用不规则的空白符
    "no-mixed-spaces-and-tabs": "off", // 允许混用tab和空格
    "no-tabs": "off", // 允许使用tab
    "no-trailing-spaces": "off", // 允许行尾有空白
    "no-multiple-empty-lines": "off", // 允许多行空白
    "no-prototype-builtins": "off", // 允许使用hasOwnProperty
    "no-async-promise-executor": "off", // 允许使用异步函数作为Promise执行器
    "no-useless-escape": "off", // 允许使用无用的转义符
    "no-useless-catch": "off", // 允许使用无用的catch
    "no-constant-condition": "off", // 允许使用常量作为判断条件
    "no-empty": "off", // 允许空的代码块
    "no-unsafe-finally": "off", // 允许在finally中使用控制流语句
    "no-throw-literal": "off", // 允许抛出字面量错误
    "no-sequences": "off", // 允许使用逗号操作符
    "no-unreachable": "off", // 允许在return、throw、continue和break语句后出现不可达代码
    "no-unsafe-negation": "off", // 允许对关系运算符的左操作数使用否定操作符
    "no-unsafe-optional-chaining": "off", // 允许使用不安全的可选链
    "no-unused-expressions": "off", // 允许使用未使用的表达式
    "no-useless-backreference": "off", // 允许使用无用的反向引用
    "no-unsafe-regex": "off", // 允许使用无效的正则表达式
    "no-regex-spaces": "off", // 允许正则表达式中使用多个空格
    "no-empty-character-class": "off", // 允许在正则表达式中使用空字符集
    "no-control-regex": "off", // 允许在正则表达式中使用控制字符
    "no-else-return": "off", // 允许在else代码块中return
    "no-empty-pattern": "off", // 允许解构中出现空的模式
    "no-extra-boolean-cast": "off", // 允许不必要的布尔类型转换
    "no-extra-semi": "off", // 允许不必要的分号
    "no-extra-parens": "off", // 允许不必要的括号
    "no-extra-bind": "off", // 允许不必要的函数绑定
    "no-extra-label": "off", // 允许不必要的标签
    "no-extra-boolean-cast": "off", // 允许不必要的布尔类型转换
  }
```
## .eslintignore忽略文件
```javascript 
node_modules
dist
```