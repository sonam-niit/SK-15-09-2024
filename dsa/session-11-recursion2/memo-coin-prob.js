function minCoins(coins,amount,memo={}){
    if(amount in memo) return memo[amount]
    if(amount == 0) return 0
    if(amount<0) return Infinity

    let min = Infinity
    for(let coin of coins){
        let res= minCoins(coins,amount-coin,memo)
        min = Math.min(min,res+1)
    }
    return min
}

console.log(minCoins([1,2,5],11))
//time complexity: O (amount * no of coins)