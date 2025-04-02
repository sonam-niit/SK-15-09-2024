function f1(){
    console.log("Hello World")
}
function f2(){
    setTimeout(()=>{
        console.log("Waited for 2 seconds")
    },2000)
}
function f3(){
    console.log("F3 completed")
}
f1()
f2()
f3()