const array=[1,2,3,4,5,6,7,8,9,10]

const multiply=array.map(item=>item*3);
console.log('Multiply by 3',multiply);

const evenNumbers= array.filter(item=>item%2==0)
console.log('Even Array',evenNumbers);

const sum = array.reduce((acc,curr)=>acc+curr)
console.log('Sum: ',sum);
const mul = array.reduce((acc,curr)=>acc*curr)
console.log('Multiply: ',mul);
const max = array.reduce((acc,curr)=>acc>curr?acc:curr)
console.log('Maximum: ',max);
const min = array.reduce((acc,curr)=>acc<curr?acc:curr)
console.log('Minimum: ',min);