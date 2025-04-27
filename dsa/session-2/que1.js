//Given array [2,5,1,8,2,9]
//find out the first occurance if given element
//if not found return -1
//my target is 2
//this problem can be solved using lineear Search
function search(arr,target){
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]==target)
            return i
    }
    return -1;
}

console.log('Search element: ', search([2,5,1,8,2,9],5))
console.log('Search element: ', search([2,5,1,8,2,9],10))