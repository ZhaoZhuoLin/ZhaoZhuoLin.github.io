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