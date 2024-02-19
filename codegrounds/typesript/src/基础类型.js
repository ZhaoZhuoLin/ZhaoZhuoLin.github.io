// String
var str = "name";
// Number
var a = 123213;
var b = 7;
var c = 0x123;
var d = 125;
//boolean
var flag = false;
var flag1 = true;
// Array
var list = [12, 13, 14];
// Array泛型
var list1 = [12, 13, 14];
var dirnk = "123";
dirnk = 456;
dirnk = [7, 8, 9];
//unknown只能赋值给自身
var dirnk1 = "123";
dirnk = 456;
dirnk = [7, 8, 9];
dirnk = false;
console.log(dirnk);
// 枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var itemColor = Color.Green;
// 联合类型
var myLove;
myLove = "you";
myLove = 521;
console.log(myLove);
