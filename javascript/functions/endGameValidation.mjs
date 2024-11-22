// javascript\functions\endGameValidation.mjs

import gameStateVariables from "../variables/gameStateVariables.mjs";

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

export { hasPlayerWon, isItDraw };
