"use strict";
/* 
  DOM Manipulation
  Mini game for practicing DOM manipulation using JavaScript
*/

// Generate a random number between 1 and 20
let number = Math.floor(Math.random() * 20 + 1);
let score = 20; // Initialize the score and the highscore*/
let highscore = 0;

// Add event listener to the "Check" button

document.querySelector("#check").addEventListener("click", function () {
  // Retrieve the user's guess from the input field
  let answer = Number(document.querySelector("#user-input").value);
  // Check if the user guessed the correct number
  if (answer === number) {
    document.querySelector(".message").textContent = "Correct Number 🥳";
    document.querySelector(".user-answer").textContent = number;
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".user-answer").style.width = "20rem";

    // Update the highscore if the current score is higher

    if (score > highscore) {
      highscore =
        score; /* If score > highscore then the highscore value is turned to the score value */
      document.querySelector(".highscore").textContent = highscore; // highscore is updated
    }
    // Handle cases where no number is entered
  } else if (!answer) {
    /* If there is not input then the message 'No Number' shows up in the screen */
    document.querySelector(".message").textContent = "No Number 🚫";
    // Handle cases where the guess is incorrect
  } else if (answer !== number) {
    if (score > 1) {
      // Provide feedback if the guess is too high or too low
      document.querySelector(".message").textContent =
        answer > number ? "Too High! 🙄" : "Too Low! 😒"; // Turnery Operator
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // Game over scenario when the score reaches 0
      document.querySelector(".message").textContent = "You Lost The Game 😢";
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".user-answer").textContent = number;
      document.querySelector("body").style.backgroundColor = "#be253d";
      document.querySelector(".user-answer").style.width = "20rem";
    }
  }
});

// Add event listener to the "Again!" button to reset the game while keeping the highscore

document.querySelector(".btn-text").addEventListener("click", function () {
  score = 20;
  document.querySelector("body").style.backgroundColor = "#000000";
  document.querySelector("#user-input").value = "";
  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector(".user-answer").textContent = "?";
  // Generate a new secret number
  number = Math.floor(Math.random() * 20 + 1);

  // Reset score display
  document.querySelector(".score").textContent = score;
  document.querySelector(".user-answer").style.width = "12rem";
});
