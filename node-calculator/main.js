
const readlineSync= require("readline-sync")

let num1 = readlineSync.questionInt("Please enter your first number: ");
let num2 = readlineSync.questionInt("Please enter your second number: ");
readlineSync.setDefaultOptions({limit:['add', 'sub', 'mul', 'div']});
let opp = readlineSync.question("Please enter the operation to preform: i.e. add, sub, mul, div\n ");
let result;

switch(opp){
    case 'add':
        result = add(num1, num2);
        break;
    case 'sub':
        result = sub(num1, num2);
        break;
    case 'mul':
        result = mul(num1, num2);
        break;
    case 'div':
        result = div(num1, num2);
        break;
}

console.log(`Your result is: ${result}`);

function mul(num1, num2){
    return num1 * num2;
}
function add(num1, num2){
    return num1 + num2;
}
function sub(num1, num2){
    return num1 - num2;
}
function div(num1, num2){
    return num1 / num2;
}