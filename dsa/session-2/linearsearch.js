function linearSearch(arr,search){
    let index=-1; 
    for(let i=0;i<arr.length;i++){
        if(arr[i]==search){
            index=i
            break;
        }
    }
    if(index>=0)
        console.log(`${search} found at index ${index}`);
    else
        console.log('element not found')
}
linearSearch([1,2,3,4,5,6,7],7)
linearSearch([23,45,2,4,1,8,10],90)