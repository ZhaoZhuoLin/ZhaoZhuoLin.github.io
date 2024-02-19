export function observer(data) {

    if (typeof data != 'object' || data === null) {
        return data
    }
    //调用主要劫持方法
    return new Observer(data);
}
import {
    ArrayMethods
} from './arr'

class Observer {
    constructor(value) {
        
        Object.defineProperty(value, "__ob__", {
            enumerable: false,
            value: this
        })
        //处理数组
        if (Array.isArray(value)) {

            // 指定原型链,函数劫持
            value.__proto__ = ArrayMethods
            // 处理数组对象
            this.observeArray(value)
        } else {
            this.walk(value)
        }
    }
    walk(data) {
        let keys = Object.keys(data)
        for (let i = 0; i < keys.length; i++) {

            //对每个属性进行劫持
            let key = keys[i]
            let value = data[key]
            defineReactive(data, key, value)
        }
    }
    observeArray(value) {
        for (let i = 0; i < value.length; i++) {
            observer(value[i])
        }
    }
}
// 对对象中的属性进行劫持
function defineReactive(data, key, value) {
    //深度递归
    observer(value)
    Object.defineProperty(data, key, {
        get() {
            console.log('get ' + key)
            return value
        },
        set(newVal) {
            console.log("set " + key)
            if (newVal == value) return
            observer(newVal)
            value = newVal
        }
    })
}
// 针对对象的劫持
// 1.object.defineProperty只能对对象中的一个属性进行劫持
// 2.对第一层的对象进行劫持，之后递归所有对象的属性，进行set和get
//{a:{},toDolist:[]}

// 针对数组的劫持