/*
    given coins [1,2,5] and amount n
    find minimum number of coins to make amount n
*/

function minCoins(coins,amount){
    if(amount == 0) return 0
    if(amount<0) return Infinity

    let min = Infinity
    for(let coin of coins){
        let res= minCoins(coins,amount-coin)
        min = Math.min(min,res+1)
    }
    return min
}

console.log(minCoins([1,2],4))

/*
    if amount = 0 ==> we need 0 coins
    if amount < 0 --> invalid return infinity 

    mincoins(4) --> min(1+minCoins(3), 1+minCoins(2)) --> 
    mincoins(3) --> min(1+minCoins(2), 1+minCoins(1)) -->  
    mincoins(2) --> min(1+minCoins(1), 1+minCoins(0) ) --> 
    mincoins(1) --> min(1+minCoins(0), 1+minCoins(-1)) -->  
    mincoins(0) --> 0
    minCoins(1) --> 1 + 0 --> 1
    minCoins(2) --> 1 + 1 --> 2 or 1 + 0 => 1 min(2,1) -->1
    minCoins(3) --> 1 + 1 --> 2 or 1 + 1 => 2 min(2,2) -->2
    minCoins(4) --> 1 + 2 --> 3 or 1 + 1 => 2 min(3,2) -->2 
*/

//complexity: 2 ^ amount
