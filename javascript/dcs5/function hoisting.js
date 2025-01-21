print()
//add(5,6) //you cannot call the function before initialization

//function declaration
function print(){
    console.log('Hello World');
}
//function express  //hoisting is not possible
const add = function(num1,num2){
    console.log(num1+num2)
}

add(7,8)