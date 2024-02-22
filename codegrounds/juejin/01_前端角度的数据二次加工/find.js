const list = [{
    name: "A",
    list: ['1', '2']
}, {
    name: "B",
    list: ['1', '2']
}]
const current = list.find((item) => item.name == "A")
console.log(current) //{ name: 'A', list: [ '1', '2' ] }