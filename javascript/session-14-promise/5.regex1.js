const pattern1= /[A-Z]at/

console.log(pattern1.test('Bat'))
console.log(pattern1.test('Cat'))
console.log(pattern1.test('Hat'))
console.log(pattern1.test('Asat'))

const pattern2 = /^[6-9]{3}-[0-9]{3}-[0-9]{4}/
console.log(pattern2.test('787-912-3456'))
console.log(pattern2.test('858-791-23456'))