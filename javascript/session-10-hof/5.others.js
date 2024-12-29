const array=[35,67,89,45,90,98,100];

//Check  all students passed in exam
const res= array.every(function(val){ return val>=35})
console.log(res);

//Check if any one student secured 100 marks
const res1= array.some(function(val){ return val==100})
console.log(res1);