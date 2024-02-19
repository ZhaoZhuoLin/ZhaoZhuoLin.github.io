
interface World {
    live:String
}

interface Person extends World{
    name:String,   
    age:Number,
    [propName:string]:any  //不会进行强校验,索引签名，使用any，不确定其他propName是什么类型
    status?:Number,  //可选参数
 }


let my:Person={
    live:"USA",
    name:"John",
    age:18,
    height:180,
}


let my1:Person={
    live:"CHINA",
    name:"John",
    age:18,
    stauts:1,
}
console.log(my)
console.log(my1)
