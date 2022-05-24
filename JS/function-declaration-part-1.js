/*
    JavaScript - Declaring Functions

    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function declarations to function expression.
        * Please reformat the following function expressions to function declarations.

    Submit the file to Hive

*/

// From function declarations to function expressions
function welcome() {
    let welcome = 'Welcome to Appleseeds Bootcamp!';
    return welcome;
}
// Function Decloration//
let greet =  () => 'Welcome to Appleseeds Bootcamp!';


const power(a) {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
}
// Function Decloration//
const power = a => Math.pow(a, 2);

function add(a, b = 5) {
    let myNumber = a;
    let sum = myNumber + b;
    return sum;
}
// Function Decloration//
const add = (a, b) =>{
    return a+b;
}


// From function expressions to function declarations
const hello = () => "Hello!";
//Function declarionts//
function greet() {
    let hello = 'hello!';
    return hello;

const squareRoot = a => Math.sqrt(a);

//Function declarionts//
function squareRoot(a) {
    let myNumber = a;
    let result = Math.sqrt(a)
    return result;


const randomNumbers = (a, b) => Math.random() * (a - b) + b;

//Function declarionts//
function randomNumbers(a, b) {
    let number1 = a;
    let number2 = b;
    let result = Math.random()*(number1 - number2)+number2;
    return result;



