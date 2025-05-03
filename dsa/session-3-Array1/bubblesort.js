function bubblesort(arr){
    let swapped;
    for(let pass=1;pass<arr.length;pass++){
        swapped=false;
        for(let i=0;i<arr.length-pass;i++){
            if(arr[i]>arr[i+1]){
                [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
                swapped=true;
            }
        }
        if(!swapped) break; 
    }
}
const array= [1,2,3,7,5,6];
bubblesort(array);
console.log('Result',array)