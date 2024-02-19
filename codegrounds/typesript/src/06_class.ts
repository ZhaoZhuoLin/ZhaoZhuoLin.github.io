interface Options{
    el:String | HTMLElement
}
interface VueCls{
    options:Options,
    init():void   
}

class Vue implements VueCls{
    options:Options
    constructor(options:Options){
        this.options =options;
    }
    init(): void{
        
    }
}
new Vue({
    el:"#app",
})