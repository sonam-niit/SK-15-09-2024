function f1(){
    console.log("Function 1 executed");
}
function f2(){
    setTimeout(function(){
        console.log("Function 2 executed");
    },2000)
}
function f3(){
    console.log("Function 3 executed");
}
function f4(){
    console.log("Function 4 executed");
}
f1()
f2()
f3()
f4()