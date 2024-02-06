# Vue3项目模板
- 未约定好的规范就会积累很多的技术债务
## 目的
- 为新项目提供统一的开发技术栈规范,方便快速启动、团队协作、保障质量。
- 约定项目规范,提高代码可读性,方便团队新成员快速加入项目开发。

## TypeScript
tsconfig.json
``` Javascript
{
  "compilerOptions": {
    "target": "ES2020", // 将代码编译为最新版本的 JS
    "useDefineForClassFields": true, 
    "module": "ESNext", // 使用 ES Module 格式打包编译后的文件
    "lib": ["ES2020", "DOM", "DOM.Iterable"],  // 引入 ES 最新特性和 DOM 接口的类型定义
    "skipLibCheck": true,// 跳过对 .d.ts 文件的类型检查

    /* Bundler mode */
    "moduleResolution": "bundler",  // 使用 JS 的模块解析策略
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,// 允许引入 JSON 文件
    "isolatedModules": true,//// 要求所有文件都是 ES Module 模块。
    "noEmit": true,// 不输出文件,即编译后不会生成任何js文件
    "jsx": "preserve",

    /* Linting */
    "strict": true, // 开启所有严格的类型检查
    "noUnusedLocals": true,//报告未使用的局部变量的错误
    "noUnusedParameters": true,//报告函数中未使用参数的错误
    "noFallthroughCasesInSwitch": true//确保switch语句中的任何非空情况都包含
  },

  //需要检测的文件
  "include": ["src/**/*.ts","src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"],
  "references": [{ "path": "./tsconfig.node.json" }]
}

```
tsconfig.node.json
``` Javascript
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
```

## 配置 ESLint 和 prettier
- [ESLint](https://eslint.org/)静态分析您的代码以快速发现问题
``` bash
eslint 安装
pnpm add eslint -D

eslint vue插件安装
pnpm add eslint-plugin -D

eslint 识别ts语法
pnpm add @typescript-eslint/parser -D

eslint ts默认规则补充
pnpm add @typescript-eslint/eslint-config -D

eslnt pretitier 插件
pnpm add eslint-config-prettier -D

用来解决与eslint的冲突
pnpm add eslint-plugin-prettier -D

安装prettier
pnpm add prettier -D
```
## .eslintrc.cjs 配置
``` JavaScript
module.exports = {
    // 此项是用来告诉 eslint 找当前配置文件不能往父级查找
    "root": false,
    // 全局环境
    "env": {
        "browser": true,
        "es2021": true
    },
    // 指定如何解析语法，eslint-plugin-vue 插件依赖vue-eslint-parser解析器
    parser: "vue-eslint-parser",

    "extends": [
        // 引入ESLint的核心功能并且报告一些常见错误
        "eslint:recommended",

        "plugin:@typescript-eslint/recommended",
        "plugin:vue/vue3-essential",
        //prettier 放在最后
        "prettier"
    ],
    "plugins": ["prettier"],
    "overrides": [{
        "env": {
            "node": true
        },
        "files": [
            ".eslintrc.{js,cjs}"
        ],
        "parserOptions": {
            "sourceType": "script"
        }
    }],
    // 优先级低于parse定义规则的语法解析配置
    "parserOptions": {
        // 允许使用ECMA的最新版本
        "ecmaVersion": "latest",
        // 指定ESLint的解析器
        "parser": "@typescript-eslint/parser",
        // 允许使用import
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "vue"
    ],
    "rules": {
        "prettier/prettier": "error",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "no-undef": "off",
    }
}
```

## 新建.eslintignore
- eslint运行时,先去查照.eslintignore文件
- 存在文件，则遍历目录
``` JavaScript
node_modules
dist
```
## prettierrc.js配置
``` JavaScript
module.exports = {
  // 更多规则详见：https://prettier.io/docs/en/options.html
  printWidth: 120, // 单行长度
  tabWidth: 2, // 缩进长度
  useTabs: false, // 使用空格代替tab缩进
  semi: true, // 句末使用分号
  singleQuote: true, // 使用单引号
  bracketSpacing: true, // 在对象前后添加空格-eg: { foo: bar }
  quoteProps: 'consistent', // 对象的key添加引号方式
  trailingComma: 'all', // 多行时尽可能打印尾随逗号
  jsxBracketSameLine: true, // 多属性html标签的‘>’折行放置
  arrowParens: 'always', // 单参数箭头函数参数周围使用圆括号-eg: (x) => x
  jsxSingleQuote: true, // jsx中使用单引号
  proseWrap: 'preserve',
  htmlWhitespaceSensitivity: 'ignore', // 对HTML全局空白不敏感
}; 
```
## 新建.prettierignore
```
# 忽略格式化文件  (根据项目需要自行添加)
node_modules
dist
```