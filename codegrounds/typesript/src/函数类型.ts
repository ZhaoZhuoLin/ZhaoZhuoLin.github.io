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