// Create a function that takes one argument, an array.
// Use this array:
// to count over all the letters and return an object with the 
// letter as the key and the letter count as the value.
// Expected output:
// { h: 3, e: 4, l: 3, o: 7, g: 3, d: 3, a: 2, y: 2, u: 2, r: 3, w: 1, c: 
// 1, m: 2, t: 1, b: 1, s: 1 }
// Note:
// that it shouldn’t be case sensitive
// const array = ["Hello", "Good Day", "Your Welcome", "hotdog", 



const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

const countLetters = (arr) => {
  const obj = {};
  let arrString = arr.join("").split(" ").join("").toLowerCase();
  for (letter of arrString) {
    if (obj[letter]) {
      obj[letter] += 1;
    } else {
      obj[letter] = 1;
    }
  }
  let maxCount = Math.max(...Object.values(obj));
  obj.mostOccurrences = {};
  for (letter in obj) {
    if (obj[letter] === maxCount) {
      obj.mostOccurrences[letter] = maxCount;
    }
  }
  return obj;
};
console.log(countLetters(array));