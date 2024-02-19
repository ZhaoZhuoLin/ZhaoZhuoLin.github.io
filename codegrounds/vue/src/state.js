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