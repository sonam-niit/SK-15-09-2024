const array=[1,2,3,4,5,6,7,8]

//Check if the element is existing in array or not
//if element is present it will return that element else it will return undefined
const result=array.find(function (val){ return val==5})
if(result)
    console.log('Number found ',result);
else
    console.log('Not found', result);

//Find Index function return index of the element if found, 
//if not found then it will return -1

const resultIndex=array.findIndex(function (val){ return val==7})
if(resultIndex!=-1)
    console.log('the index ',resultIndex);
else
    console.log('Not found', resultIndex);