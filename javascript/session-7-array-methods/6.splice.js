//Splice method is used to add a new element in between
const array=[2,5,1,4,8,9];
//Let's insert 6,7 between 1 and 4
array.splice(3,0,6,7); //insert 6,7 between 1 and 4
console.log(array);
//first parameter is index: where to start
//2nd parameter is delete count: how many values you want to delete
//last parameters are inserting values
array.splice(3,1,10);//it wil delete 6 and insert 10 //replacement
console.log(array);
//if you want to delete only //delete 10
array.splice(3,2);
console.log(array);


