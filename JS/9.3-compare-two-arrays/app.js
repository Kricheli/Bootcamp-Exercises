// You are given two arrays:
// Create a function that takes these two arrays as 
// arguments.
// Compare these two arrays using 2 for loops and return the 
// items that are the same. If none are the same return false.
// const food = ["Noodle", "Pasta", "Ice-cream", "Meat", 
// "Cucumber", "Olives"];
// const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", 
// "Hamburgers"]



const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives",  "Hamburgers"]


function foody(array , array1) {

        let newArr = []; 

        for (let i = 0; i < array.length; i++){

           for(let j = 0; j < array1.length; j++){

                if( array[i] === array1[j]){

                 newArr.push(array[i]);
               
            }
    }  
    
}
if (newArr.length === 0){
        return false;
}
return newArr;
}
console.log(foody(food, food1));
