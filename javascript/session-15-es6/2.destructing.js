const array = ['alex','bob','catty','devid'];
const [name1,name2,name3,name4] = array; //array Destructing
console.log(name1, name2,name3,name4)

//We can also destructure objects
const user = {firstName: "Alex", age: 25, email: 'alex@outlook.com'}
const {firstName, email:emailID, age} = user
console.log(firstName, emailID, age)

//We can directly assign key to variables
//if you want to give different name then use key:variableName which you wnat to give


