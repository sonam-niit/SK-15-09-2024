//using recursion to calculate factorial of a number
//recursive approach
function factorial(n){
    if(n==0 || n==1){
        return 1;
    }
    return n*factorial(n-1);
}
console.log(factorial(5)); 
//iterative approach
function calculateFact(n){
    let product=1;

    for(let i=1;i<=n;i++){
        product*=i;
    }
    return product;
}
console.log(calculateFact(5)); // 120