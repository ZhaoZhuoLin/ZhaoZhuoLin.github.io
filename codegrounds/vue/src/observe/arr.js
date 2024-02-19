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