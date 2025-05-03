const arr=[1,2,3,4,5,6];

// find Min and Max
let max= Math.max(...arr);
let min= Math.min(...arr);

//Reverse an Arrray
let reversed = arr.reverse();

//Linear Search
function linearSearch(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target)
            return i;
    }
    return -1;
}

console.log(`Minimum ${min}`)
console.log(`Maximum ${max}`)
console.log(`reversed Array: ${reversed}`)

const res=linearSearch(arr,5);
if(res>=0)
    console.log(`Element Found at index ${res}`)
else 
    console.log(`Element not found`)