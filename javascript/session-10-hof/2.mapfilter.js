//map function iterates an array and form a new array from it with same length
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newArray = array.map(function (value) { return value * 3 })
console.log(newArray);

const squareArray= array.map(function(val){ return val*val})
console.log(squareArray);

const cubeArray= array.map(function(val){ return val*val*val})
console.log(cubeArray);
//filter functions filters the data based on condition
//means it forms a new array but with those element which satisfies the condition

const evenArray= array.filter(function(value){ return value%2 == 0})
console.log(evenArray);

const data= array.filter(function(value){ return value%4 !== 0})
console.log(data);

