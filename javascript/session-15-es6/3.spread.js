//(...) spread operator it can expands array and object

const arr1=[1,2,3,4];
const arr2=[5,6,7];

result=arr1.concat(arr2); //one way to merge 2 arrays
console.log(result)

result1 = [...arr1,...arr2]; //to expand array use []
console.log(result1)

const obj1={name:'sonam',email:'sonam@gmail.com'}
const user = {...obj1, company:'Skill Academy'} //to expand object use {}
console.log(user)

//If you use this spread operator in function as parameter its called as rest parameter
// means this parameter can take any number of argument
function sum(...num){
    return num.reduce((acc,curr)=>acc+curr)
}
console.log(sum(1,2,3,4,5))
console.log(sum(1,2,3))
console.log(sum(1,2,3,4,5,6,7,8,9,10,11,12))
