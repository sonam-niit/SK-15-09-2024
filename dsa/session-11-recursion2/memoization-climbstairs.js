function countWays(n, memo={}){
    if (n==0) return 1;
    if(n<0) return 0;
    if(n in memo){
        return memo[n]
    }
    memo[n] = countWays(n-1,memo)+
    countWays(n-2,memo);
    console.log(n,memo[n])
    return memo[n]
}
// console.log(countWays(4))//5
console.log(countWays(10))

//countWays(4) = countWays(3) + countWays(2)
//countWays(3) = countWays(2) + countWays(1)
//countWays(2) = countWays(1) + countWays(0)
//countWays(1) = countWays(0) + countWays(-1)
    //check memo --> not there --> computer

// memo = {1:1,2:2, 3:3,4:5 } 
//complexity --> O(n) -- linear
//each unique n is calculated only once
// cached result is avoiding redundant calls

