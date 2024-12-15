const array=[4,7,1,8,9,2,4,6];
//find sum and average

let total=0;
for(let num of array){
    total+=num; // total = total + num;
}
console.log('Sum is '+total);
const avg = total/array.length
console.log('Average is ', avg);

