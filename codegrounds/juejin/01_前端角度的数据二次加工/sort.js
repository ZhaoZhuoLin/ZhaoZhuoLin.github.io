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