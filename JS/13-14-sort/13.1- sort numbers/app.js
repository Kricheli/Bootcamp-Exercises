// 1. Sort the array of numbers from descending to ascending 
// order
// 2. Sort the array of numbers from ascending to decending 
// order.



const numbers = [1, -5, 666, 2, 400, 11];

//1
const ascending = numbers.sort((a, b) => a - b);

//2
const descending = numbers.sort((a, b) => b - a);

console.log(descending);