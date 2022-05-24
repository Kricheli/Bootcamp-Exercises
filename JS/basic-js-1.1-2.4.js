//=============================================1.1===============================
//String
let word = 'appleseeds';
//Number
let number = 99;
//Object
Function enter_name(){
//Boolean
let boolean = true;
//Null
let it = null;
//Undefined
let name = ;
//Symbol
let X = Symbol();
//==============================================1.2==============================
/*
--Delete the wrong answers--
1. Which of the following is/are strings?

c) '4'

2. Which of the following is/are numbers?
a) 4
b) 4.0

d) -4

3. Which of the following is/are booleans?
a) true
b) false

4. What is the result of 80 + 71.2?
a) 151.2

5. What is the result of "80" + 71.2?
c) "8071.2"

6. Does 100 + 30 produce a number or a string?
a) number


7. Does "100" + 30 produce a number or a string?

b)string

*/

//------Submit your answers under the question------//

//create three different ways to declare variables
var
const
let
//declare a variable and reassign a value to it
let name = 'eden';
//create a variable and after that assign a string with its value being: He's got it!
let something = 'Johnny';
console.log(`${something} He\'s got it!`);

/*
1. create a variable and assign a value on how much a restaurant bill is.
let bill = 2$;


2. create a variable and assign a value on how much tax they should pay.
let tax = 1$;

3. create a variable that will calculate the bill * tax and its output would be:
let total = tax * bill;
console.log(`Your total bill is ${total}$`);
 Your total bill is <total bill> $.
 */

// Round the number 50.6 to its nearest integer
let number =  50.6;
let outcome = Math.ceil(number);
//Create a variable that is undefined
let something2 = (blank);

//================================================= 2.1===========================================//
function describeCountry(country, population, capitalCity) {
        console.log(`${country} has ${population} million people and its capital city is ${capitalCity}`);
      }
      describeCountry("Georgia", 3, "Tbilisi");
      describeCountry("USA", 800, "Washington");
      describeCountry("Israel", 8, "Jerusalem");


// ===============================================2.2==============================================//

function tellFortune(){
        let partnerName = 'Alicia';
        let jobTitle = 'Farmer';
        let location = 'Sudan';
        let numberOfCholdren = '10';
        return `You will be a ${jobTitle} in ${location} married to ${partnerName} with ${numberOfCholdren} kids! how exciting! ` 
}
//===============================================2.3===============================================//
function circle_Area(a){
let circleArea = a*a;
console.log (circleArea);
let rounded = Math.round(circleArea)*100;
console.log(rounded);
}
//===============================================2.4===============================//
function cur_date(){

        let year =  new Date().getFullYear();
        let month =  new Date().getMonth()+1;
        let day =  new Date().getDate();
        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
       let day_name = weekday[new Date().getDay()];
       let monthNames = ["January", "February", "March", "April", "May", "June",
       "July", "August", "September", "October", "November", "December"];
       let month_name= monthNames[new Date().getMonth()];
       console.log(`Today is ${day_name} the 0${day} of ${month_name}, ${year}`);
}