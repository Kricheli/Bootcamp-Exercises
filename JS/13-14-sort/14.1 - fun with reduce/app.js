// Write the following functions using the reduce built-in function. 
// 1. max
// 2. sum of even numbers
// 3. averagev

const nums = [1, 6, 8, 9, 7];

//1
console.log('----------------------------------- 1 -----------------------------------------');

const max1 = (userInput) => {
        const maxVal = userInput.reduce((max, currentVal) => {
                return Math.max(max, currentVal)
        });
        return maxVal
}

console.log(max1(nums));


console.log('----------------------------------- 2 -----------------------------------------');
const sumEven = (userInput) => {
       const showEven  = userInput.reduce((previewVal, curVal) => {
                if(curVal % 2 === 0){
                        return previewVal + curVal
                }else{
                        return previewVal
                }
        } 
        ,0)
        return showEven;
}
console.log(sumEven(nums));
console.log('----------------------------------- 3 -----------------------------------------');
const findAverage = (userInput) => {
        const arrAverage = userInput.reduce((previewVal, currentVal) => (previewVal + currentVal) / userInput.length);
        return arrAverage;
}
console.log(findAverage(nums));



