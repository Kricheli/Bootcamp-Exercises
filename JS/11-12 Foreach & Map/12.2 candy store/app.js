// Instructions
// Here is a candyStore object:

// 1. Implement the following getCandy function:
// The function should return the candy element with the specified id.

// 2. Implement the following getPrice function:
// The function should return the price (number) of the candy with the specified 
// id. 

// 3. Implement the following addCandy function:
// The function should add a new candy to the candy list in candyStore with a 
// default amount of 1. The function will not return anything. 

// 4. Implement the following buy function: The function should add the candy 
// price to the cashRegister, and decrease the amount property of the relevant 
// candy.

// function getCandy(candyStore, id){ 
//  your code
//  } 
// function getPrice(candyStore, id){ 
///your code 
// } 
// function addCandy(candyStore, id, name, price){
// /your code 
// } 
// function buy(candyStore, id){
//  /your code 
// }

const candyStore = {
    candies: [
        {
            name: "mint gum",
            id: "as12f",
            price: 2,
            amount: 2
        },
        {
            name: "twix",
            id: "5hd7y",
            price: 5,
            amount: 4
        },
    ],
    cashRegister: 200
}

const getCandy = (userInput) => {
            const candy = userInput.candies.filter(id => id.id === "5hd7y")
            return candy
}
console.log(getCandy(candyStore));

console.log('-------------------------------------  2  ------------------------------------------------------------');

// const getPrice = (userInput) => {
//         if( userInput.candies.id === "5hd7y"){
//                 return userInput.candies.price;
//        }
// }
// console.log(getPrice(candyStore))

const getPrice = (userInput) => {
        const candy = userInput.candies.find(element =>
        element.id === "5hd7y")
       return candy.price;
}
console.log(getPrice(candyStore));


const addCandy = (userInput, name, price, id) => {
        userInput.candies.push({
                name:name,
                price:price,
                id: id,
                amount:1
        });
}
addCandy(candyStore, "mars", 4, "1");
console.log(candyStore);

console.log('-------------------------------------  4  ------------------------------------------------------------');

const buy = (userInput, id) => {
        const candy =userInput.candies.find((element) => element.id === id);
                candy.amount--,
                userInput.cashRegister += candy.price;
}
buy(candyStore, "5hd7y");
console.log(candyStore);