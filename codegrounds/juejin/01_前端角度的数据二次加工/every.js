const result = [{
  name: 'A',
  age: 15
}, {
  name: 'A',
  age: 18
}].every((item) => item.age > 18)
console.log(result) //false
