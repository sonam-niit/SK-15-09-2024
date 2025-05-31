//you are climbing a staircase with n steps.
// you can climb 1 or 2 steps at a time
//Howmany diffrent ways can you reach the top??

// let say n=3
// [1,1,1], [2,1], [1,2] == total 3 ways
//n =4
// [1,1,1,1] , [1,1,2], [1,2,1],[2,1,1],[2,2] == 5 ways

//1,1,2,3,5,8

//Time Complexity exponential O(2^n)

function countWays(n){
    if (n===0) return 1;
    if(n<0) return 0;
    return countWays(n-1) + countWays(n-2)
}

console.log(countWays(6))