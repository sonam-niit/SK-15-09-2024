function binarySearch(arr, search) {
    arr.sort((a,b)=>a-b);
    let index = -1;
    let lb = 0; let ub = arr.length - 1
    while (lb <= ub) {
        let m = Math.floor((lb + ub) / 2)
        if (arr[m] == search){
            index = m;
            break;
        }
        if(arr[m]<search) lb=m+1;
        else ub=m-1;
    }
    if(index>=0)
        console.log(`element ${search} found at index ${index}`)
    else
        console.log('not found')
}

binarySearch([3,1,5,2,7,9,11],7)