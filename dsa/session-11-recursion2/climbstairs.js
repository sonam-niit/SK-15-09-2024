//n=3 steps
//at a time you can take 1 or 2 step
// [1,1,1] , [1,2], [2,1]

//n=4
//[1,1,1,1], [1,2,1],[2,1,1],[1,1,2],[2,2] == 5 ways

function countWays(n){
    if (n==0) return 1;
    if(n<0) return 0;
    return countWays(n-1) + countWays(n-2);
}
console.log(countWays(3))
console.log(countWays(4))

//countWays(4) = countWays(3)+countways(2) = 3 + 2 = 5
//countWays(3) = countWays(2)+countways(1) = 2 + 1 = 3
//countWays(2) = countWays(1)+countways(0) = 1 + 1 = 2
//countWays(1) = countWays(0)+countways(-1) = 1 + 0 =1

// This is called Plain Recursion which is very slow
//countWays(2) is calculated multiple times
//time complexity is exponetial O(2^n)
//recompute is the same sub problem multiple times

/* 
    how to solve this problem?
    -- Memoized version
    Memoization fixes this problem by storing (catching) already 
    computed results

    How it works??
    we can use cache (object or array) to store solutions for each n
    before computing, we check if n is already there in cache
    if yes --> then return cached value
    if no --> compute and store the value
*/

/*
    in JS create object {}

    if ( n in cache) --> return cache[n]

    else calculate and store

*/