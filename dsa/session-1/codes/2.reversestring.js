function reverseString(str){
    let reversed = '';
    let n = str.length - 1;
    for(let i = n; i >= 0; i--){
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString('hello')); // 'olleh'

function palindrome(str){
    let reversed = reverseString(str); //calling above created function
    if(reversed === str)
        console.log(`${str} is a palindrome`);
    else
        console.log(`${str} is not a palindrome`);
}
palindrome('madam'); // 'madam is a palindrome'
palindrome('racecar'); // 'racecar is a palindrome'
palindrome('malayalam'); // 'malayalam is a palindrome'