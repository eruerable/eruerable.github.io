"use strict";

// Initialise random secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// DEBUG   document.querySelector(".number").textContent = secretNumber;

// Initialise  scoring
let score = 20;
let highScore = 0;

// Factors out message updates
const updateMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// Factors out secret number reveal
const revealNumber = function () {
  document.querySelector(".number").style.width = "30rem";
  document.querySelector(".number").textContent = secretNumber;
};

// GAME LOGIC
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // INVALID INPUT
  if (!guess) {
    updateMessage("⛔ No number!");
    // CORRECT GUESS
  } else if (guess === secretNumber && score != "0") {
    updateMessage("🎉 Correct!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    revealNumber();
    // Sets high score
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    // INCORRECT GUESS
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // Notifies user of error valence
      updateMessage(guess > secretNumber ? "👆 Too high!" : "👇 Too low!");
      score--;
      // USER LOSES
    } else {
      updateMessage("💀 You loser!");
      score = 0;
      revealNumber();
    }
    document.querySelector(".score").textContent = score;
  }
});

//GAME RESET
document.querySelector(".again").addEventListener("click", function () {
  // Initialises page
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
  updateMessage("Start guessing...");
  document.querySelector(".number").textContent = "?";
  // Initialises score
  score = 20;
  document.querySelector(".score").textContent = score;
  // Generates a new random number to guess
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
