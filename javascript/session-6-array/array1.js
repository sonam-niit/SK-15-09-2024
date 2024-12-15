const array=['alex','john','catty','devid','eela'];

console.log(array); //printing entire array object
console.log('first element ',array[0]);//access element based on index
console.log('Element at index 3 ',array[3]);
//How to print entire array elements 1 by 1
for(let i=0;i<array.length;i++){
    console.log(`${i} Element: `,array[i]);
}
