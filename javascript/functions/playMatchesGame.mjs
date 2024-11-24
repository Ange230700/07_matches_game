// javascript\functions\playMatchesGame.mjs

import gameStateVariables from "../variables/gameStateVariables.mjs";
import setUpMatchesGame from "./setUpMatchesGame.mjs";
import getPlayerInput from "./getPlayerInput.mjs";
import updateGameState from "./updateGameState.mjs";
import {hasPlayerWon, isItDraw} from "./endGameValidation.mjs";
import switchPlayer from "./switchPlayer.mjs";

function playMatchesGame() {
  alert("Welcome to the Matches Game!");

  if (gameStateVariables.isSetupComplete === false) {
    const setupResult = setUpMatchesGame();

    if (setupResult === undefined) {
      return;
    }
  }

  alert("Let's play the game, shall we?");

  let numberOfMatchesToRemove;

  while (gameStateVariables.numberOfMatchesRemaining > 0) {
    numberOfMatchesToRemove = getPlayerInput();
    if (numberOfMatchesToRemove === undefined) {
      return;
    }

    updateGameState(numberOfMatchesToRemove);

    if (hasPlayerWon() === true) {
      alert(`Player ${gameStateVariables.currentPlayerNumber} wins!`);

      return;
    }

    if (isItDraw() === true) {
      alert("There are not enough match(es) to continue the game! It's a draw!");

      return;
    }

    switchPlayer();
  }

  return;
}

export default playMatchesGame;
