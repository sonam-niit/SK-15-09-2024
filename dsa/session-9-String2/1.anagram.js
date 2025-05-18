function areAnagrams(str1,str2){

    const normalizedStr1= normalizeString(str1)
    const normalizedStr2= normalizeString(str2)
    return normalizedStr1 == normalizedStr2
}
function normalizeString(str){
    return str.replace(/\s/g,'').toLowerCase().split('').sort().join('');
}

console.log(areAnagrams('listen','silent'))
console.log(areAnagrams("triangle","Integral"))
console.log(areAnagrams('hello','helo'))

//first str.replace(/\s/g,'') removing all space
//then convert to lower case
//then split() will convert string to array so we can sort using
//inbuilt sort function
//join to make it string again