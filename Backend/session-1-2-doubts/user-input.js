import readLine from 'readline-sync';

const input1 = readLine.question('Enter any number: ');
const input2 = readLine.question('Enter any number: ');
const op = readLine.question('Enter any op: ');
const num1 = Number(input1); const num2 = Number(input2)
switch (op) {
    case '+':
        console.log(num1 + num2); break;
    case '-':
        console.log(num1 - num2); break;
    case '*':
        console.log(num1 * num2); break;
    case '/':
        console.log(num1 / num2); break;
    default:
        console.log('Enter Correct Operator')
}