function add(num1,num2){
    return num1+num2;
}
function sub(num1,num2){
    return num1-num2;
}
function mul(num1,num2){
    return num1*num2;
}
function div(num1,num2){
    return num1/num2;
}
function userInput(){
    let num1= Number(prompt('enter first number'))
    let num2= Number(prompt('enter second number'))
    let op= prompt('Enter any operator')
    let result=''
    switch(op){
        case '+': result= `${num1}+ ${num2} = ${add(num1,num2)}`; break;
        case '-': result= `${num1}- ${num2} = ${sub(num1,num2)}`; break;
        case '/': result= `${num1}/ ${num2} = ${div(num1,num2)}`; break;
        case '*': result= `${num1}* ${num2} = ${mul(num1,num2)}`; break;
    }
    alert(result);
}