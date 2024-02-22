# 前端角度的数据二次加工数组篇
前端角度的数据加工是一个复杂的过程，涉及到数据的格式化、转换、筛选、过滤、整合、校验等多个方面。
前端工程师需要根据业务需求和技术要求，对后端返回的数据适当的处理和转换，确保前端能够正确的展示数据。

## Array.forEach()
- 多用于对数据自身的改变和各元素的相关统计的计算。
- 可以改变数组自身，没有返回值。
- 中途不能用break,continue,return跳出循环，可以用try/catch方式抛出异常。
**注意：数组元素为基本数据类型时，foreach不生效。数据元素为引用数据类型生效**
```code 
const arr = [1, 2, 3]
arr.map(i => i = i + 1)

const nameList = [{
    name: "z",
}, {
    name: "z",
}, {
    name: "l",
}]
nameList.map(item => item.name += item.name)
console.log(nameList) //[ { name: 'zz' }, { name: 'zz' }, { name: 'll' } ]
```

## Array.map()
- 使用map会产生一个新数组。
- 将原数组中每一个元素都调用一次指定逻辑(具体根据业务编写)的返回值组成。
**注意: 如果不想使用新数组，可以采用原数组=map()。。。map必须存在return**
```
let arr = [1, 2, 3, 4, 5]
arr = arr.map(item => item + 1)
console.log(arr) //[ 2, 3, 4, 5, 6 ]
```

## Array.filter()
- map遍历之后(根据业务需求),再去进行筛选使用filter。
- 创建新数组，新数组中的元素是筛选出来符合条件的元素。
```
let newArr = [1, 2, 3, 4, 5].filter(item => {
    if (item > 3) return item
})
console.log(newArr) //[ 4, 5 ]

let nameList = [{
    name: "A",
    height: 175,
    like: ["music"]
}, {
    name: "B",
    height: 180,
    like: ["music"]
}, {
    name: "C",
    height: 180,
    like: ["music"]
}, {
    name: "D",
    height: 165,
    like: ["music"]
}]

//身高大于或等于180且喜欢音乐的人
const personList = nameList.map(item => {
    item.height += 5
    return item
}).filter((item) => {
    if (item.height >= 180 && item.like.includes("music")) {
        return item
    }
})
console.log(personList)
// [
//     { name: 'A', height: 180, like: [ 'music' ] },
//     { name: 'B', height: 185, like: [ 'music' ] },
//     { name: 'C', height: 185, like: [ 'music' ] }
//   ]
```
## Array.sort()
- 默认根据Unicode进行排序。
**注意：sort排序会直接对原数组产生影响(根据业务需求进行使用)。a-b(从小到大排序) b-a(大到小排序)**
```
console.log(["b", "AC", "ASD"].sort())
//[ 'AC', 'ASD', 'b' ]
console.log([3000, 2000, 10].sort())
// [ 10, 2000, 3000 ]

let userList = [{
    name: "A",
    workYear: 5
}, {
    name: "B",
    workYear: 3
}, {
    name: "C",
    workYear: 1
}]

// userList.sort((a, b) => {
//     return a.workYear - b.workYear
// })
// console.log(userList)
//[
//     { name: 'C', workYear: 1 },
//     { name: 'B', workYear: 3 },
//     { name: 'A', workYear: 5 }
//   ]
userList.sort((a, b) => {
    return b.workYear > a.workYear
})
console.log(userList)
//[
//     { name: 'A', workYear: 5 },
//     { name: 'B', workYear: 3 },
//     { name: 'C', workYear: 1 }
//   ]
```
## Array.reduce()
- arr.reduce(( acc,current)=>{},0) 。
- acc为累加器，current为当算遍历元素。0为累加器的初始值。
```
const arr = [1, 2, 3, 4, 5];
const total = arr.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
console.log(total)
```

## Array.some() 
- 用于检测数组中是否有某些符合条件
**注意：返回的是布尔值**
```
//对数组基本数据类型和引用数据类型都生效
const like = ["bilibili", "xiaohongshu", "youtube"].some((item) => item == "youtube")
console.log(like)

const likeList = [{
    name: "bilibili",
}, {
    name: "xiaohongshu",
}, {
    name: "youtube"
}]
const result = likeList.some((item) => item.name == "bilibili")
console.log(result) //true
```
## Array.every()
- 用于检测数组中每项元素都满足某个条件 。
**注意：返回的是布尔值**
``` 
const result = [{
    name: 'A',
    age: 15
}, {
    name: 'A',
    age: 18
}].every((item) => item.age > 18)
console.log(result) //false
```

## Array.find()
- 查找数据中满足条件的元素 。
``` 
const list = [{
    name: "A",
    list: ['1', '2']
}, {
    name: "B",
    list: ['1', '2']
}]
const current = list.find((item) => item.name == "A")
console.log(current) //{ name: 'A', list: [ '1', '2' ] }
```