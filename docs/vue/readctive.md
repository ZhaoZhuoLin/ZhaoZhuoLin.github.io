# Vue2.0响应式数据原理

## Vue实例化
vue实例化的过程,使用vue操作符,并传入options(选项)
``` Javascript
var vm = new Vue({
    data() {
        return { 
            desc: {
                age: 18,
                height: 180
            }, 
        }
    }
})
```
## Vue构造函数
``` Javascript
./src/index.js
import { initMixin } from "./init";

// Vue本身的构造函数,通过new进行实例化
function Vue(options){
    
    //进行初始化
    this._init(options);
}

initMixin(Vue)

export default Vue
```

## initMixin初始化入口
``` Javascript
./src/init.js
import initState from "./state";

export function initMixin(Vue){
    Vue.prototype._init = function(options) {
        
        const vm = this;
        //$表示vue内部的变量
        vm.$options = options

        //初始化状态
        initState(vm);
    }
}
```
## 初始化所有options
observers为重要的数据监听逻辑
``` Javascript
./src/state.js
import {
    observer
} from "./observe/index";

//vue源码内部的初始化循序=》  prop>methods>data>computed>watch
export default function initState(vm) {

    // 获取实例化的所有参数
    const opts = vm.$options;

    if (opts.prop) {

    }

    if (opts.methods) {

    }

    if (opts.data) {
        initData(vm);
    }

    if (opts.computed) {

    }

    if (opts.watch) {
        
    }
}

function initData(vm) {
    let data = vm.$options.data;

    // 是否是函数,vue默认推荐使用函数
    data = vm._data = typeof data === 'function' ? data.call(vm) : data

    // 对数据进行劫持
    // data{} [] {list:[1,2,3]}
    // 对象劫持 数组劫持
    observer(data)
}
```
## 监听对象和数组
``` JavaScript
./src/observe/index.js
// 劫持数组方法 函数劫持

// 获取数组本身的数组方法
let oldArrayProtoMethods = Array.prototype;

// 继承数组所有的方法
export let ArrayMethods = Object.create(oldArrayProtoMethods)

// 劫持数组
let methods = [
    'push',
    'pop',
    'unshift',
    'shift',
    'splice'
]

methods.forEach(item => {
    ArrayMethods[item] = function (...args) {
        console.log("劫持数组");

        // 进行函数劫持   
        let result = oldArrayProtoMethods[item].apply(this, args)

        // 处理了数组追加值情况,调用监听方法
        let inserted;
        switch (item) {
            case 'unshift':
            case 'push':
                inserted = args
                break;
            case "splice":
                inserted = args.splice(2)
            default:
                break;
        }
        //this的数据本身,有observeArray方法
        let ob = this.__ob__;
        
        //如果有新增的元素,必须调用observeArray对数组每一项进行观测
        if(inserted){
            ob.observeArray(inserted)
        }
        return result
    }
})
```
## 数组的函数劫持
``` Javascript
./src/observe/arr.js
// 劫持数组方法 函数劫持

// 获取数组本身的数组方法
let oldArrayProtoMethods = Array.prototype;

// 继承数组所有的方法
export let ArrayMethods = Object.create(oldArrayProtoMethods)

// 劫持数组
let methods = [
    'push',
    'pop',
    'unshift',
    'shift',
    'splice'
]

methods.forEach(item => {
    ArrayMethods[item] = function (...args) {
        console.log("劫持数组");

        // 进行函数劫持   
        let result = oldArrayProtoMethods[item].apply(this, args)

        // 处理了数组追加值情况,调用监听方法
        let inserted;
        switch (item) {
            case 'unshift':
            case 'push':
                inserted = args
                break;
            case "splice":
                inserted = args.splice(2)
            default:
                break;
        }
        let ob = this.__ob__;
        if(inserted){
            ob.observeArray(inserted)
        }
        return result
    }
})
```

## 提供实例的data数据访问
::: tip
外部访问 vm.list
:::
``` JavaScript
./src/state.js
function initData(vm) {
    let data = vm.$options.data;

    // 是否是函数,vue默认推荐使用函数
    data = vm._data = typeof data === 'function' ? data.call(vm) : data
    for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
            // const element = data[key];
            proxy(vm, "_data", key)
        }
    }
    // 对数据进行劫持
    // data{} [] {list:[1,2,3]}
    observer(data)
}

function proxy(vm, srouce, key) {
    Object.defineProperty(vm, key, {
        get() {
            return vm[srouce][key]
        },
        set(newValue) {
            vm[srouce][key] = newValue
        }
    })
}
```
