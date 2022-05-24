// a. Array of words
// a.1. Sort the array of strings from descending to ascending 
// order
// a.2. Sort the array of strings from ascending to descending 
// order.

const foods = ["falafel","sabich", "hummus", "pizza with extra pineapple"];

//a.1
const foodsReverse = foods.sort((a, b) => (a > b) ? -1 : 1);
console.log(foodsReverse);

//a.2
console.log('---------------------------------------------- a.2 ----------------------------')


const foodsReverse2 = foods.sort((a, b) => (a < b) ? -1 : 1);
     
console.log(foodsReverse2);


// b. Lets sort an array of words that includes a word with an 
// uppercase:

console.log('---------------------------------------------- b.1 ----------------------------');
const foodsWithUpperCase = [
        "falafel",
        "Sabich",
        "hummus",
        "pizza with extra pineapple",
      ];

const foodsWithUpperCaseRevrse =foodsWithUpperCase.sort((a, b) => a.toLowerCase > b.toLowerCase ? -1 : 1 )
console.log(foodsWithUpperCaseRevrse)

console.log('---------------------------------------------- b.2 ----------------------------');
const foodsWithUpperCaseRevrse2 =foodsWithUpperCase.sort((a, b) => a.toLowerCase < b.toLowerCase ? -1 : 1 )
console.log(foodsWithUpperCaseRevrse2);



console.log('---------------------------------------------- c.1 ----------------------------');
// c. Longest word
// c.1. Sort the array of strings from the longest word to the 
// shortest word only using the sort function

const words = ["apple", "supercalifragilisticexpialidocious", 
"hi", "zoo"];

const wordsLongestToShortest = words.sort((a, b) => a.length > b.length ? -1 : 1);
console.log(wordsLongestToShortest);