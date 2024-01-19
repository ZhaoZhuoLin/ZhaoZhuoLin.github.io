# TypeScript
TypeScript 是一种由微软开发的自由和开源的编程语言，它是 JavaScript 的一个超集，扩展了 JavaScript 的语法。- [官网](https://ts.nodejs.cn/docs/handbook/2/everyday-types.html) 

## 与JavaScript的区别
- avaScript 代码可与 TypeScript 一起工作无需任何修改，
- TypeScript 通过类型注解提供编译时的静态类型检查。
- TypeScript 可处理已有的 JavaScript 代码，并只对其中的 TypeScript 代码进行编译。
## 优势
- **静态类型检查**,开发环境自动检查类型错误**,提高代码质量
- **更好的开发工具支持**,包括代码补全,类型推断,重构工具等

## 使用和安装
```bash
npm i -g typescript
编写test.js文件
终端 tsc test.js
```

## ts类型
- 原始类型：**number/string/bollean/null/nudefined/symbol**
- 对象类型：**Object(array,object,function)**

## ts日常类型
## String
``` ts
let str:String = "name";
```
## Number
``` ts
let a:Number = 123213;
let b:Number = 0b111;
let c:Number = 0x123;
let d:Number = 125;
```
## boolean
``` ts
let flag: boolean = false;
let flag1: boolean = true;
```
## Array
``` ts
let list:number[] = [12,13,14];
```
## Array泛型
``` ts
let list1:Array<number> = [12,13,14]
let dirnk:any = "123"
dirnk= 456
dirnk= [7,8,9]
```
## unknown只能赋值给自身
``` ts
let dirnk1:unknown = "123"
dirnk= 456
dirnk= [7,8,9]
dirnk= false
console.log(dirnk);
```

## 枚举
``` ts
enum Color {Red, Green, Blue}
let itemColor: Color = Color.Green;
```

## 联合类型
``` ts
let myLove :String|number;
myLove = "you";
myLove = 521;
console.log(myLove)
```

## 对象类型
``` ts
type PersonInfo= {
    name:String,
    age:Number,
    add():void
}
let myInfo:PersonInfo={
    name:"John",
    age:12,
    add(){}
}
```
## 函数类型
``` ts
// 定义参数类型
function add(a:number,b:number):number{
    return a+b 
}
console.log(add(1,2))


// 函数参数
interface User{
    age:number
}
function addUser(user:User){
    return user.age
}
console.log(addUser({
    age:17
}))
```
## 数组类型
``` ts
//number[]
let arr:number[] = [1,2,3]
let arr1:boolean[] = [true,false]
let arr2:String[] = ["AA","BB"]

// 泛型
let arr3:Array<number> = [1,2,3]
let arr4:Array<boolean> = [true,false]
let arr5:Array<String> = ["AA","BB"]

// 数组普通类型
interface Phone{
    name:string,
    price?:Number
}
let phoneList:Phone[] = [
    {name:"小米",price:3500},
    {name:"华为"},
    {name:"OPPO"},
    {name:"VIVO"}
]

// 定义多维数组
let numList:number[][] = [[1,2],[1,2]]
let numList1:Array<Array<number>> = [[1,2],[1,2]]

function func(...args:any){
    console.log(args)
}
func({name:123})
func(false)
```