// Instructions
// 1. Write a a function called ‘isString’ that receives 2 
// arguments, a string and a callback function.
// The function checks that the string is indeed a string.
// If the string is a string, pass the string to a callback 
// function which logs that string to the console.
// 2.  Create a function called ‘firstWordUpperCase’ that 
// receives 2 arguments, a string and a callback function.
// The function will capitalize the first word in the sentence 
// and pass the string to a callback function which will create 
// dashes between the words.
// 3. Call the ‘firstWordUpperCase’ function with a callback of 
// your choice.
// 4. Create your own function that will receive from one of its
// arguments a callback function.





// 1. Write a a function called ‘isString’ that receives 2 
// arguments, a string and a callback function.
// The function checks that the string is indeed a string.
// If the string is a string, pass the string to a callback 
// function which logs that string to the console.
const printString = (str) =>{
        console.log(str)
}
const isString = (str, func) => {
      if('string' === typeof str) {
              func(`${str}`);
      }
};
isString(`hi`, printString);



// 2.  Create a function called ‘firstWordUpperCase’ that 
// receives 2 arguments, a string and a callback function.
// The function will capitalize the first word in the sentence 
// and pass the string to a callback function which will create 
// dashes between the words.


const firstWordUpperCase = (str1, func) =>{
        let wordArr = str1.split(" ");
        let word = wordArr[0].tpUpperCase();
        return func(word);
};
const stringDash = (str1) =>{
        const dash = str1.split('').join('-');
        return dash;
}
console.log(firstWordUpperCase('hola here', stringDash));
      