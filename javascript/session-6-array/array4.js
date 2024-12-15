//heterogeneous array
const array=[1,true,'sonam',null,undefined];
console.log(array); //printing as object
let result=''
for(let data in array)
    result+=array[data]+' ';

console.log(result); //printing as String

    