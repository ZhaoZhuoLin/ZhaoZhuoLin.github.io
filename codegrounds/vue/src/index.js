import { initMixin } from "./init";

// Vue本身的构造函数,通过new进行实例化
function Vue(options){
    
    //进行初始化
    this._init(options);
}

initMixin(Vue)

export default Vue