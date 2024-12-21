const array=[2,5,1,4,8,9];
console.log('original array',array);
array.push(12);//inserted at last index
array.push(23);
console.log('After Push',array);
console.log(array.pop(), 'removed');//23 //removed from last index
console.log(array.pop(), 'removed');//12
console.log('After POP',array);
const data=array.shift()//removing from 0 index
console.log(data,'removed');
console.log('After Shift',array);
array.unshift(7); //inserting at first index (0 index)
console.log('After unShift',array);


