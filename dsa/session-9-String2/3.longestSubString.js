function lengthOfLongestSubString(str){
    let left =0
    let seen = new Set();

    let maxLen=0
    for(let right=0;right<str.length;right++){
        while(seen.has(str[right])){
            seen.delete(str[left])
            left++
        }
        seen.add(str[right])
        maxLen = Math.max(maxLen,right-left+1)
    }
    return maxLen;
}

console.log(lengthOfLongestSubString("abcabcbb"));
console.log(lengthOfLongestSubString("abcabcg"));