function countVowels(str){
    let count=0
    for(let char of str.toLowerCase()){
        if('aeiou'.includes(char))
            count++;
    }
    return count
}
console.log(countVowels('hello'))
function charFrequency(str){
    let map={}
    for(let char of str){
        map[char]= (map[char] || 0)+1;
    }
    return map
}
console.log(charFrequency('malayalam'))