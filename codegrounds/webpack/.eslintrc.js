module.exports = {
  // 环境配置
  env: {
    browser: true,
    es2021: true,
    // es6: true,
  },

  // 扩展配置
  //eslint:recommended继承Eslint中推荐的（打钩的）规则项http://eslint.cn/docs/rules/
  extends: ["eslint:recommended", "plugin:vue/vue3-essential"],

  // 覆盖特定文件或目录的配置
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["vue"],
  rules: {
    semi: [2, "always"],
    "no-const-assign": 2,
    "no-redeclare": 2,
    strict: 2,
  },
  //配置要忽略的文件和目录的匹配模式
  ignore: ["node_modules/", "dist/"],
};
