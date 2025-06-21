function isbalanced(expr) {
    const stack = []
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    for (let char of expr) {
        if (['(', '{', '['].includes(char)) {
            stack.push(char);
        } else if ([')', '}', ']'].includes(char)) {
            if (stack.pop() !== map[char]) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(isbalanced("({[]})"))//true
console.log(isbalanced("({[})"))//false