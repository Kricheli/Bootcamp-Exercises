// We are not getting the data as we want it. We are going to need to massage 
// the data.
// Create separate functions for each questions below:
// 1. Create a function that returns all the names from the array.
// 2. Create a function that returns all the objects that are born before 1990.
// 3. Create a function that returns an object of all the different foods from all 
// the objects as the key and the number of times that food is present in all the 
// objects as the value.
// Example:
// { hamburgers: 3,
//   sausages: 1,
//   salmon: 3,
//   pike: 2,
//   steak: 1,
//   lamb: 2,
//   tuna: 2,
//   barracuda: 1,
//   ham: 1,
//   chicken: 1,
//   bird: 1,
//   rooster: 1,
//   anchovies: 1 }


const data = [
        {
          name: "John",
          birthday: "1-1-1995",
          favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"],
          },
        },
        {
          name: "Mark",
          birthday: "10-5-1980",
          favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"],
          },
        },
        {
          name: "Mary",
          birthday: "1-10-1977",
          favoriteFoods: {
            meats: ["ham", "chicken"],
            fish: ["pike"],
          },
        },
        {
          name: "Thomas",
          birthday: "1-10-1990",
          favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"],
          },
        },
        {
          name: "Mary",
          birthday: "1-10-1977",
          favoriteFoods: {
            meats: ["hamburgers", "lamb"],
            fish: ["anchovies", "tuna"],
          },
        },
      ];


const getNames = (userInput) => {
     const name = userInput.map((element) => {
             return element.name
     });
     return name;
}
console.log(getNames(data));

console.log('---------------------------------------   2   -----------------------------------------------------------');

const getBirthDay = (userInput) => {
        const newArr = [];
        const birthdayMap =  userInput.map((element) => {
                if(element.birthday.split('-')[2] < 1990){
                        newArr.push(element);
                }
        })
        return newArr;
}
   console.log(getBirthDay(data));


console.log('---------------------------------------   3   -----------------------------------------------------------');
const getFood = (userInput) => {
        const newObj = {};
        userInput.forEach(obj => {
                obj.favoriteFoods.meats.forEach(food => {
                        if(newObj[food]){
                                newObj[food] ++
                        }else{
                                newObj[food] = 1
                        }
                });
                obj.favoriteFoods.fish.forEach(food => {
                        if(newObj[food]){
                                newObj[food] ++
                        } else{
                                newObj[food] = 1
                        }
                });});
                return newObj
}
console.log(getFood(data));
