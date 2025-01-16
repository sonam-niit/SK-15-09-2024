async function myfunction(){
    return "Hello World";
}
//async function always return promise
myfunction()
.then(function(resp){console.log(resp)})