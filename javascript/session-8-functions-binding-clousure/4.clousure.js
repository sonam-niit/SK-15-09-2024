function outerfunction(outerVar){
    return function innerFunction(innerVar){
        console.log('Outter Variable:'+outerVar);
        console.log('Inner Variable:'+innerVar);
    }
}

const closureFunction=outerfunction("outer")
closureFunction("inner")

