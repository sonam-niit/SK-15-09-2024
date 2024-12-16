let num1=20;
let num2=30;
console.log('Before Swap: Num1: '+num1+" Num2: "+num2);
//Without temp variable
num2=num1+num2;
num1=num2-num1;
num2=num2-num1;
//with temp variable
// let temp= num1;
// num1=num2;
// num2=temp;
console.log('After Swap: Num1: '+num1+" Num2: "+num2);