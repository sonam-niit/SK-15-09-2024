const array=[4,7,1,8,9,2,4,6];
//find out Max number using your logic 
let max=array[0];
for(let i=1;i<array.length;i++){
    if(array[i]>max)
        max=array[i];
}

console.log('Max number is ',max);
