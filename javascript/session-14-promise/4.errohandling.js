
function test(num1,num2){
    if(num2==0)
        throw new Error('Cannot divide by 0'); //throw keyword used for user defined errors
    return (num1/num2);
}

try {
    console.log('Connection Opened....');
    const result= test(45,0);
    console.log('Result: ',result)
} catch (error) {
    console.log('Error Occured: ',error.message)
}finally{
    console.log('Close Connection');
}
//in try block write the code which can throw and error
//In catch write error handling code
//in finally write the code which you want to run in both the cases
//like close the resouse which may leak the data