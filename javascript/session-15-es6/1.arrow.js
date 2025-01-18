const hello=()=>console.log('Hello World')
//for 1 parameter if you not use () bracket then its also fine
const greeting = name => console.log('Welcome ',name)
const add = (num1,num2) => num1+num2
//if you are writing a single statement arrow whatever value you mention it it going to
//return implicitly

//if you use {} block of code them return is explicitly

const calculate = (num1,num2) =>{
    const res= add(num1,num2);
    const mul = num1 * num2;
    return res + mul
}
//Call this functions
hello();
greeting('Sonam Soni');
console.log('Addition: ',add(34,78));
console.log('Calculation: ',calculate(3,4))
