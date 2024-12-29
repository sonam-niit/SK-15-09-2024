const array=[1,2,3,4,5,6,7,8,9,10]

const result=array.reduce(function(prev,curr){
    return prev+curr;
})
console.log(result);
const product=array.reduce(function(prev,curr){
    return prev*curr;
})
console.log(product);
const max=array.reduce(function(prev,curr){
    return prev>curr?prev:curr;
})
console.log('Max: ',max);
const min=array.reduce(function(prev,curr){
    return prev<curr?prev:curr;
})
console.log('Min: ',min);
