const array=  [3,6,7,8,4,10,45,22,64,9,12]

const evenArray=[]; //initialize as empty array
const oddArray=[]; //initialize as empty array
for(let data of array){
    if(data%2==0)
        evenArray.push(data);
    else
        oddArray.push(data)
}

console.log('original Array',array);
console.log('Even Array',evenArray);
console.log('Odd Array',oddArray);
