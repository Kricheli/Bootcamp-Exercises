// 1. Recreate the challenge from the exercise 6.3-
// looping_with_arrays ,but this time using a while loop.
// 2. Reflect on what solution you like better for this task: the 
// for loop or the while loop?

const exampleArr = ["boo", "doooo", "hoo", "ro"];
const arr = [];
let i =0;
while(exampleArr[i]){
        arr.push(exampleArr[i].length);
        i++;
}
console.log(arr);