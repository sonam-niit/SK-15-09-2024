function removeDuplicates(str){
    const stack=[];
    for(let char of str){
        if(stack.length && stack[stack.length-1]===char){
            stack.pop();
        }else{
            stack.push(char)
        }
    }
    return stack.join('');
}

console.log(removeDuplicates("abbaca")); //ca