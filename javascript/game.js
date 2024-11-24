// javascript/game.js

import gameStateVariables from "./variables/gameStateVariables.mjs";
import { submitMove, updateUI } from "./UI/feature";

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
    submitMove();
  });
});
