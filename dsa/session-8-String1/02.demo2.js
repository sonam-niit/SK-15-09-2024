//commone String properties
let str = "hello"
console.log('Length: ',str.length); //5

//Character at index no
console.log('character at index 3', str.charAt(1));
console.log('Char Code',str.charCodeAt(1))//unicode

//slice 
console.log('slice start end',str.slice(1,4));  //ell 
console.log('slice only start',str.slice(2)); //llo
console.log('slice with negative start',str.slice(-3));//take last 2 letters

//sub string (same as slice but not taking negative indices)
console.log('Sub String',str.substring(1,4));

//convert to upper case and lowercase
console.log('UpperCase: ',str.toUpperCase())
console.log('LowerCase: ',str.toLowerCase())

//Indexof (first occurance)
//LastindexOf (Last Occurance)
console.log('Index Of: ',str.indexOf('l'))
console.log('Index Of: ',str.lastIndexOf('l'))

//includes, startWith, endsWith
console.log(str.includes('el'));
console.log(str.startsWith('he'));
console.log(str.endsWith('lo'));

//split and join
let arr = str.split(""); //split all characters
console.log(arr.join('-'));

//replace the single match
//replaceAll (replace all matches)
console.log("abcabc".replace('a','x'))
console.log("abcabc".replaceAll('a','x'))

console.log(str.concat(' world'))
console.log(str.match(/[a-z]+/))
console.log(str.repeat(2))
//trim remove strat and end extra space
console.log('         sonam soni       '.trim())
