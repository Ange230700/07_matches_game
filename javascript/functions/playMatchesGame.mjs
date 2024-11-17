// javascript\functions\playMatchesGame.mjs

import setUpMatchesGame from "./setUpMatchesGame.mjs";
import gameStateVariables from "../variables/gameStateVariables.mjs";
import askPlayerMatchesNumberToRemove from "./askPlayerMatchesNumberToRemove.mjs";
import removeMatches from "./removeMatches.mjs";
import hasPlayerWon from "./hasPlayerWon.mjs";

function playMatchesGame() {
  alert("Welcome to the Matches Game!");

  alert("Let the installer set up the game.");

  while (setUpMatchesGame() === false) {
    alert(
      "The game setup is not complete. Please make sure the installer sets up the game properly.",
    );
  }

  alert("The settings are properly done. Let's play the game!");

  let numberOfMatchesToRemove = askPlayerMatchesNumberToRemove();

  removeMatches(numberOfMatchesToRemove);

  if (hasPlayerWon()) {
    return;
  }

  while (gameStateVariables.numberOfMatchesRemaining > 0) {
    numberOfMatchesToRemove = askPlayerMatchesNumberToRemove();

    removeMatches(numberOfMatchesToRemove);

    if (hasPlayerWon()) {
      return;
    }
  }
}

export default playMatchesGame;
