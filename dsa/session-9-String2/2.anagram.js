function areAnagrams(str1,str2){
    const s1 = str1.replace(/\s/g,'').toLowerCase();
    const s2 = str2.replace(/\s/g,'').toLowerCase();
    if(s1.length !== s2.length)
        return false;

    const count={}
    for(let char of s1){
        count[char]=(count[char]||0)+1
    }

    for(let char of s2){
        if(!count[char]) 
            return false;
        count[char]--;
    }
    return true;
}
console.log(areAnagrams('listen','silent'))
console.log(areAnagrams("triangle","Integral"))
console.log(areAnagrams("Sonam Soni","Sanam Soni"))