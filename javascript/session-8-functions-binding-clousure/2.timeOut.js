function f1(){
    console.log("Function 1 executed");
}
function f2(){
    console.log("Function 2 executed");
}
function f3(){
    setTimeout(function(){
        console.log("Function 3 executed");
    },
    3000)
}
function f4(){
    console.log("Function 4 executed");
}
f1();
f2();
f3();
f4();