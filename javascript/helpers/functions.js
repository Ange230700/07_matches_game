// javascript\helpers\functions.js

import { updateUI } from "../dom/manipulation.js";
import { gameStateVariables } from "../state/management.js";

function validateInstallerInputs() {
  if (
    parseInt(document.getElementById("numberOfPlayers").value, 10) < 2 ||
    parseInt(document.getElementById("numberOfPlayers").value, 10) > 5
  ) {
    alert("Number of players must be between 2 and 5.");
    return;
  }

  if (
    parseInt(document.getElementById("totalNumberOfMatches").value, 10) < 50 ||
    parseInt(document.getElementById("totalNumberOfMatches").value, 10) > 175
  ) {
    alert("Total number of matches must be between 50 and 175.");
    return;
  }

  if (
    parseInt(
      document.getElementById("numberMinimumOfMatchesToRemovePerTurn").value,
      10,
    ) < 1 ||
    parseInt(
      document.getElementById("numberMinimumOfMatchesToRemovePerTurn").value,
      10,
    ) >
      Math.floor(
        parseInt(document.getElementById("totalNumberOfMatches").value, 10) / 8,
      )
  ) {
    alert(
      `Minimum matches to remove per turn must be between 1 and ${Math.floor(
        parseInt(document.getElementById("totalNumberOfMatches").value, 10) / 8,
      )}.`,
    );
    return;
  }

  if (
    parseInt(
      document.getElementById("numberMaximumOfMatchesToRemovePerTurn").value,
      10,
    ) <
      parseInt(
        document.getElementById("numberMinimumOfMatchesToRemovePerTurn").value,
        10,
      ) ||
    parseInt(
      document.getElementById("numberMaximumOfMatchesToRemovePerTurn").value,
      10,
    ) >
      Math.floor(
        parseInt(document.getElementById("totalNumberOfMatches").value, 10) / 8,
      )
  ) {
    alert(
      `Maximum matches to remove per turn must be between ${parseInt(
        document.getElementById("numberMinimumOfMatchesToRemovePerTurn").value,
        10,
      )} and ${Math.floor(
        parseInt(document.getElementById("totalNumberOfMatches").value, 10) / 8,
      )}.`,
    );
    return;
  }
}

function saveSettingsToLocalStorage() {
  const settings = {
    numberOfPlayers: parseInt(
      document.getElementById("numberOfPlayers").value,
      10,
    ),
    totalNumberOfMatches: parseInt(
      document.getElementById("totalNumberOfMatches").value,
      10,
    ),
    numberMinimumOfMatchesToRemovePerTurn: parseInt(
      document.getElementById("numberMinimumOfMatchesToRemovePerTurn").value,
      10,
    ),
    numberMaximumOfMatchesToRemovePerTurn: parseInt(
      document.getElementById("numberMaximumOfMatchesToRemovePerTurn").value,
      10,
    ),
    isSetupComplete: true,
  };
  localStorage.setItem("matchesGameSettings", JSON.stringify(settings));
  alert("Settings saved successfully!");
}

function setUpGame() {
  const settings = JSON.parse(localStorage.getItem("matchesGameSettings"));
  if (!settings || !settings.isSetupComplete) {
    alert("Game settings not configured. Please go to the settings page.");
    return;
  }

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
}

function resetGame() {
  if (confirm("Do you want to play again?")) {
    gameStateVariables.numberOfMatchesRemaining =
      gameStateVariables.totalNumberOfMatches;
    gameStateVariables.currentPlayerNumber = 1;
    updateUI();
  }
}

function submitMove() {
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

  // clear input
  inputElement.value = "";

  // Update UI
  updateUI();

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
}

function switchPlayer() {
  gameStateVariables.currentPlayerNumber =
    (gameStateVariables.currentPlayerNumber %
      gameStateVariables.numberOfPlayers) +
    1;
}

function hasPlayerWon() {
  if (gameStateVariables.numberOfMatchesRemaining === 0) {
    return true;
  }

  return false;
}

function isItDraw() {
  if (
    gameStateVariables.numberOfMatchesRemaining <
    gameStateVariables.numberMinimumOfMatchesToRemovePerTurn
  ) {
    return true;
  }

  return false;
}

function updateGameState(numberOfMatchesToRemove) {
  gameStateVariables.numberOfMatchesRemaining -= numberOfMatchesToRemove;

  alert(
    `Player ${gameStateVariables.currentPlayerNumber} removed ${numberOfMatchesToRemove} match(es).\n${gameStateVariables.numberOfMatchesRemaining} match(es) remaining.`,
  );
}

export {
  validateInstallerInputs,
  saveSettingsToLocalStorage,
  setUpGame,
  resetGame,
  submitMove,
  updateGameState,
};
