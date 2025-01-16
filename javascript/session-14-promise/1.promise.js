function checkAge(age){
    const promise= new Promise(function(resolve,reject){
        if(age>=18)
            //Big process
            resolve('Valid for Vote')
        else
            reject('Not Valid for vote')
    })

    return promise;
}
const result=checkAge(78) //in result you will get pending promise

result
.then(function(resp){console.log(resp)})
.catch(function(err){console.log(err)})


console.log('Program Completed') //line no 18 will not wait for line 13 to completed