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
