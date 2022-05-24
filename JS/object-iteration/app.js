// 1. Create a function that receives 1 argument, an object and returns a new 
// object with the properties and values swapped.
const objSwap = (obj) => {
        const swappedObj = {};
        for (let key in obj) {
          swappedObj[obj[key]] = key;
        }
        return swappedObj;
      };
      
      const obj = {
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        e: "5",
      };
      console.log(objSwap(obj));