// Instructions
// Please make the following changes to the html file while navigating the DOM.
// Create a variable that holds the <li> element with the class “start-here”.
// Use traverse methods to complete these tasks:
// 1. Change the text from “title 2” to “main title”
// 2. Add another sub title with the text “sub title 4”
// 3. Delete the last <li> element from the list.
// 4. Change the <title> element text to “Master Of The Dom”.
// 5. Change the text of the <p> element ot something else of your


//1
var newLi = document.createElement('li');

newLi.classList.add("start-here");

const title2TextChange = document.querySelectorAll("li")[1];

title2TextChange.innerText = "main-title";

//2
const parenUl = document.querySelector("ul ul")

const newLi2 = document.createElement("li")

newLi2.innerText = "sub title 4"

parenUl.appendChild(newLi2)

//3
const firstUl = document.querySelector("ul");

const title3 = firstUl.getElementsByTagName("li")[7]

title3.remove()

//4
const firstLi = document.querySelector("li")

firstLi.innerText = "I can type here whatever I want"

//5
document.querySelector("P");
​
const p = document.querySelector("P");

p.innerText = "goodbye";