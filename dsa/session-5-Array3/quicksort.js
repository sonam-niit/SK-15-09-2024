function quicksort(arr,lb=0,up=arr.length-1){
    if(lb<up){
        const pi = partition(arr,lb,up)
        quicksort(arr,lb,pi-1);//left
        quicksort(arr,pi+1,up);//right
    }
    return arr
}
function partition(arr,lb,up){
    const pivot = arr[up]; //taking last element as pivot
    let i = lb-1;
    console.log(arr)
    for(let j=lb;j<up;j++){
        if(arr[j]<pivot){
            i++;
            [arr[i],arr[j]]=[arr[j],arr[i]]//swap
        }
    }
    //we will put the pivot to its correct position
    [arr[i+1],arr[up]]=[arr[up],arr[i+1]]
    return i+1;
}

const array= [6,1,4,9,2,8]
console.log('Sorted array: ', quicksort(array))