// String
let str:String = "name";

// Number
let a:Number = 123213;
let b:Number = 0b111;
let c:Number = 0x123;
let d:Number = 125;

//boolean
let flag: boolean = false;
let flag1: boolean = true;

// Array
let list:number[] = [12,13,14];

// Array泛型
let list1:Array<number> = [12,13,14]
let dirnk:any = "123"
dirnk= 456
dirnk= [7,8,9]

//unknown只能赋值给自身
let dirnk1:unknown = "123"
dirnk= 456
dirnk= [7,8,9]
dirnk= false
console.log(dirnk);

// 枚举
enum Color {Red, Green, Blue}
let itemColor: Color = Color.Green;

// 联合类型
let myLove :String|number;
myLove = "you";
myLove = 521;
console.log(myLove)