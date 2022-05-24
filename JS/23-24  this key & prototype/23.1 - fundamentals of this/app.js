//1:


// In your own words what will this point to and why?

console.log(this);

//when running this in html, 'this' will point to the 'window' which is where 'this' is nested.



//2:
// a. In your own words what will this point to and why.
// b. How can you fix this code.
// const myObj = {
//   name: "Timmy",
//   greet: () => {
//     console.log(`Hello ${this.name}`);
//   },
// };
// myObj.greet();

//a. 'this' output will be undefined because 'this' does'nt have a value when it is used in arrow functions, in order to fix the code I changed the function from arrow to a regular.

// fixed code:
const myObj = {
        name: "Timmy",
        greet() {
          console.log(`Hello ${this.name}`);
        },
};
      myObj.greet();


// Question 3:
// In your own words what will this point to and why?
const myFuncDec = function () {
  console.log(this);
};
// 'this' will point to the window scope , because this function is empty and there is nothing to print out so 'this' will refer to the bigger scope.


// Question 4:
// In your own words what will this point to and why?
const myFuncArrow = () => {
  console.log(this);
};
myFuncArrow();
//this will point to the window, the global scope because it is been activetied from the global scope.

// Question 5:
// a. In your own words what will this point to and why.
// b. How can you fix this code.
document.querySelector(".element").addEventListener(() => {
  console.log(this);
});
//this function will output an error because there is no event specifiedf in which it should be activeted.

//you can fix this issue by adding an event. 