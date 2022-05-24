
const realLetter = document.querySelector(".real-letter");
const message = document.querySelector(".message");
const guessedLetters = document.querySelector(".guessed-letters");
const h2 = document.querySelector("h2");
const btn = document.querySelector("button");
let lettersObj = {};
const alphabet = "abcdefghijklmnopqrstuvwxyz";
let randomLetter;

const displayBeenGuessed = (key) => {
  message.style.color = "red";
  message.innerText = `${key} has already been guessed!`;
};
const displayWinning = () => {
  message.style.color = "green";
  message.innerText = "Right letter!";
  realLetter.innerText = randomLetter;
  h2.innerText = "Would you like to play again?";
  btn.style.display = "inline-block";
  guessedLetters.textContent = "";
};
const displayInvalid = () => {
  message.style.color = "red";
  message.innerText = "Please enter a valid letter";
};
const eventHandler = ({ key }) => {
  if (key.toLowerCase() != key.toUpperCase()) {
    if (lettersObj[key]) {
      displayBeenGuessed(key);
    } else {
      lettersObj[key] = key;
      guessedLetters.innerText = guessedLetters.innerText
        ? guessedLetters.innerText + `,${key}`
        : key;
      if (key === randomLetter) {
        displayWinning();
      }
    }
  } else {
    displayInvalid();
  }
};
const startGame = () => {
  lettersObj = {};
  randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
  window.removeEventListener("keyup", eventHandler);
  realLetter.innerText = "?";
  h2.innerText = "Key Guessed";
  btn.style.display = "none";
  message.innerText = "Guess a letter";
  message.style.color = "black";
  console.log(`randomLetter: ${randomLetter}`);
  window.addEventListener("keyup", eventHandler);
};
startGame();
