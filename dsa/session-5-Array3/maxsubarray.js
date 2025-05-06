//sliding window approach

function maxSubArraySum(arr,k){
    let maxSum=0;
    let windowSum=0;

    //first window
    for(let i=0;i<k;i++){
        windowSum+=arr[i]
    }
    maxSum=windowSum //8

    //slide the window
    for(let i=k;i<arr.length;i++){
        windowSum+= arr[i]-arr[i-k];
        console.log('Max: ',maxSum, 'Window Sum',windowSum)
        maxSum= Math.max(maxSum,windowSum)
    }
    return maxSum
}

const arr=[2,1,5,1,3,2];
const k=3;
console.log("Max sum of sub array of size k: ",maxSubArraySum(arr,k))