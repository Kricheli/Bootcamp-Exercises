// Instructions
// Answer the questions below and use the map or the 
// forEach method :
// 1. Write a function called doubleValues which accepts an 
// array of integers and returns a new array with all the 
// values in the array passed to the function doubled.
// 2. Write a function called onlyEvenValues which accepts an 
// array and returns a new array with only the even values in 
// the array passed to the function.
// 3. Write a function called showFirstAndLast which accepts 
// an array as an argument and returns a new array with only 
// the first and last elements from the function’s argument 
// array. The returned array should only contain elements that
// are strings.
// 4. Write a function called vowelCount which accepts a 
// string as an argument. The function should return an object
// which has the count of the number of vowel’s that are in 
// the string. The key should be the vowel and the value 
// should be the count. e.g. {a:3, o:2,u:4}.
// Should not be case sensitive.
// 5. Write a function capitalize that takes a string as an 
// argument and will return the whole string capitalized.
// 6. Write a function called shiftLetters that takes a string as 
// an argument and return’s an encoded string with each 
// letter shifted down the alphabet by one.
// 7. Create a function called swapCase that takes a string as 
// an argument and returns a string that every other word is 
// capitalized. (you can use the fifth’s exercise's function to 
// keep it dry)

//1

const array = [1, 300, 400, 2, 7, 48];
const arrayMap = array.map(doubleValues)

function doubleValues(num) {
  return (num * 2);
}
console.log(arrayMap);

console.log('---------------------- 2 -------------------------------------------------------------')

//2
const onlyEvenValues = (userInput) => {
        const newArr = [];
        userInput.forEach(num => {
                if(num % 2 === 0){
                newArr.push(num);
                }
        });
        return newArr;
}
const evenNumArr = [1, 300, 400, 2, 7, 48];
console.log(onlyEvenValues(evenNumArr));

console.log('---------------------- 3 -------------------------------------------------------------')

//3


// Write a function called showFirstAndLast which accepts 
// an array as an argument and returns a new array with only 
// the first and last elements from the function’s argument 
// array. The returned array should only contain elements that
// are strings.


 const firstNLastArr = ['hi there','whats up?', 'fine', 27, 42, 'bye there'];
 const showFirstAndLast = (userInput) =>{
         const newArr = [];
         userInput.forEach((elemnt, idx) => {
                 if((idx === 0 || idx === userInput.length -1) && typeof elemnt === 'string'){
                         newArr.push(elemnt);
                 }
                
         });
         return newArr;
 }
console.log(showFirstAndLast(firstNLastArr));

console.log('---------------------- 4 -------------------------------------------------------------')
// 4. Write a function called vowelCount which accepts a 
// string as an argument. The function should return an object
// which has the count of the number of vowel’s that are in 
// the string. The key should be the vowel and the value 
// should be the count. e.g. {a:3, o:2,u:4}.
// Should not be case sensitive.

const str = 'I have nothing to type';
const vowelCount = (string) => {
      const newObj = {};
      const arr = string.toLowerCase().split('');
      arr.forEach(letter => {
              if(letter === 'a' ||letter === 'e' ||letter === 'o' ||letter === 'u' ||letter === 'i' ){
                      if(!newObj[letter]){
                      newObj[letter] = 1
                      }else{
                              newObj[letter] += 1;
                      }
                }
      }); 
      return newObj;
}
console.log(vowelCount(str));


console.log('---------------------- 5 -------------------------------------------------------------')
//5.
// Write a function capitalize that takes a string as an 
// argument and will return the whole string capitalized.


const capStr = 'why every capitalized word looks like someone is yelling at you?';
const capitalize = (userInput) =>{
        const arr = userInput.split(' ').map((letter) =>{
              return  letter.toUpperCase()
        });
        return arr.join(' ');
}
console.log(capitalize(capStr));

console.log('---------------------- 6 -------------------------------------------------------------')

// 6. Write a function called shiftLetters that takes a string as 
// an argument and return’s an encoded string with each 
// letter shifted down the alphabet by one.

const shiftStr = 'gFrgh Fdhvdu';
const shiftLetters = (userInput) => {
        const arr = userInput.split('').map((letter) => {
                const charAtStr = letter.charCodeAt(0) - 1;
                return String.fromCharCode(charAtStr);
        });
        return arr.join(' ');
}
console.log(shiftLetters(shiftStr));


console.log('---------------------- 7 -------------------------------------------------------------')

// 7. Create a function called swapCase that takes a string as 
// an argument and returns a string that every other word is 
// capitalized. (you can use the fifth’s exercise's function to 
// keep it dry)

const swapCaseStr = 'why every capitalized word looks like someone is yelling at you';
const swapCase = (userInput) =>{
        const arr = userInput.split(' ').map((letter, idx) =>{
                if(idx % 2 === 0){
              return  letter.toUpperCase();
                }else{
                        return letter.toLowerCase();
                }
        });
        return arr.join(' ');
}
console.log(swapCase(swapCaseStr));
