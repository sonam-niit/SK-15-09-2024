function sumOfN(n){
   let sum=0;
   while(n>0){
        sum+=n;
        n--;
   }
   return sum;
}
console.log(sumOfN(10));

//Another way using for loop
function sumOfNum(n){
    let sum=0;
    for(let i=0;i<=n;i++){
        sum+=i;
    }
    return sum;
 }
console.log(sumOfNum(10));