
//own login
function reverseString01(str) {
    let result=''
    for (let i = str.length - 1; i >= 0; i--) 
        result+= str[i]

    return result
}   
//using some inbuilt function
function reverseString02(str){
    return str.split('').reverse().join('');
}
//check the string is palindrom or not
function isPalindrome(str){
    return str == str.split('').reverse().join('')
}

console.log(reverseString01("hello world"))
console.log(reverseString02("hello world"))
console.log(isPalindrome('jahaj'))