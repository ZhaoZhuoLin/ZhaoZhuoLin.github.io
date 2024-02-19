import babel from "rollup-plugin-babel"
export default{
    input:"./src/index.js",
    output:{
        file:"./dist/vue.js",
        name:"Vue",
        format:"umd",//umd（commonjs,amd）
        sourcemap:true,//满足调试
    },
    plugin:{
        exclude:"node_modules/**"//排除node_modules
    }
}