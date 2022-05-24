/*
    JavaScript - Declaring Functions

    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function expressions to IIFE functions.
        * Please reformat the following function declarations in two ways, explicit return and implicit return functions.

    Submit the file to Hive

*/

// From function declarations to explicit and implicit return functions (one of each).
function welcome() {
    let welcome = 'Welcome to Appleseeds Bootcamp!';
    return welcome;
}
//Function implicit return//
const welcome = ('Welcome to Appleseeds Bootcamp!') => 'Welcome to Appleseeds Bootcamp!'

function power(a) = a => {
   let result Math.pow(myNumber, 2);
    return result;
}

// From function expressions to IIFE functions.
const squareRoot = a => Math.sqrt(a);


(const squareRoot(a) => {
    let result = Math,sqrt(a);
    return result; 
  })()

const randomNumbers = (a, b) => Math.random() * (a - b) + b;
(const squareRoot = (a, b){
    let result = Math.random()*(a - b)+b;
}
