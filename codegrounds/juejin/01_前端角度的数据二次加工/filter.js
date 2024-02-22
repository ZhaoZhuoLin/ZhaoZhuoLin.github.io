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