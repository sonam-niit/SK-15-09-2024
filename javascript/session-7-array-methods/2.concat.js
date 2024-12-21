const array=[2,5,1,4,8,9];
const result=array.concat(10,12,13);
console.log('new array',result);
//concat can add multiple values in array and generate new array
console.log('original array',array);

const arr1=[1,2,3]; const arr2=[4,5,6];
const arr3=arr1.concat(arr2);
console.log(arr3); //merge array

console.log('element at index 3:',array.at(3));
console.log('element at index 3:',array[3]);
