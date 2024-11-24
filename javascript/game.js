// javascript/game.js

import gameStateVariables from "./variables/gameStateVariables.mjs";
import { hasPlayerWon, isItDraw } from "./functions/endGameValidation.mjs";
import switchPlayer from "./functions/switchPlayer.mjs";

document.addEventListener("DOMContentLoaded", () => {
  // Load settings from localStorage
  const settings = JSON.parse(localStorage.getItem("matchesGameSettings"));
  if (!settings || !settings.isSetupComplete) {
    alert("Game settings not configured. Please go to the settings page.");
    window.location.href = "./settings.html";
    return;
  }

  // Initialize game state variables
  gameStateVariables.numberOfPlayers = settings.numberOfPlayers;
  gameStateVariables.totalNumberOfMatches = settings.totalNumberOfMatches;
  gameStateVariables.numberMinimumOfMatchesToRemovePerTurn =
    settings.numberMinimumOfMatchesToRemovePerTurn;
  gameStateVariables.numberMaximumOfMatchesToRemovePerTurn =
    settings.numberMaximumOfMatchesToRemovePerTurn;
  gameStateVariables.isSetupComplete = settings.isSetupComplete;

  gameStateVariables.numberOfMatchesRemaining =
    gameStateVariables.totalNumberOfMatches;
  gameStateVariables.currentPlayerNumber = 1;

  // Update UI with initial state
  updateUI();

  document.getElementById("submit-move").addEventListener("click", () => {
    const inputElement = document.getElementById("matches-to-remove");
    const numberOfMatchesToRemove = parseInt(inputElement.value, 10);

    if (
      isNaN(numberOfMatchesToRemove) ||
      numberOfMatchesToRemove <
        gameStateVariables.numberMinimumOfMatchesToRemovePerTurn ||
      numberOfMatchesToRemove >
        Math.min(
          gameStateVariables.numberMaximumOfMatchesToRemovePerTurn,
          gameStateVariables.numberOfMatchesRemaining,
        )
    ) {
      alert(
        `Invalid input. Please enter a number between ${gameStateVariables.numberMinimumOfMatchesToRemovePerTurn} and ${Math.min(gameStateVariables.numberMaximumOfMatchesToRemovePerTurn, gameStateVariables.numberOfMatchesRemaining)}.`,
      );
      return;
    }

    // Update game state
    gameStateVariables.numberOfMatchesRemaining -= numberOfMatchesToRemove;

    // Check for win or draw
    if (hasPlayerWon()) {
      alert(`Player ${gameStateVariables.currentPlayerNumber} wins!`);
      resetGame();
      return;
    }
    if (isItDraw()) {
      alert("Not enough matches left to continue the game! It's a draw!");
      resetGame();
      return;
    }

    // Switch player
    switchPlayer();

    // Clear input
    inputElement.value = "";

    // Update UI
    updateUI();
  });
});

function updateUI() {
  document.getElementById("current-player").textContent =
    `Player ${gameStateVariables.currentPlayerNumber}'s turn`;
  document.getElementById("matches-remaining").textContent =
    `Matches remaining: ${gameStateVariables.numberOfMatchesRemaining}`;
  document.getElementById("prompt").textContent =
    `How many matches do you want to remove? (minimum ${gameStateVariables.numberMinimumOfMatchesToRemovePerTurn}, maximum ${Math.min(gameStateVariables.numberMaximumOfMatchesToRemovePerTurn, gameStateVariables.numberOfMatchesRemaining)})`;
  const inputElement = document.getElementById("matches-to-remove");
  inputElement.min = gameStateVariables.numberMinimumOfMatchesToRemovePerTurn;
  inputElement.max = Math.min(
    gameStateVariables.numberMaximumOfMatchesToRemovePerTurn,
    gameStateVariables.numberOfMatchesRemaining,
  );
  inputElement.value = "";
}

function resetGame() {
  if (confirm("Do you want to play again?")) {
    // Reset game state
    gameStateVariables.numberOfMatchesRemaining =
      gameStateVariables.totalNumberOfMatches;
    gameStateVariables.currentPlayerNumber = 1;
    updateUI();
  } else {
    window.location.href = "../index.html";
  }
}
