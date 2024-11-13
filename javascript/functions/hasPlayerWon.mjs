// javascript\functions\hasPlayerWon.mjs

import gameStateVariables from "../variables/gameStateVariables.mjs";

function hasPlayerWon() {
  if (gameStateVariables.numberOfMatchesRemaining === 0) {
    console.log(
      `${
        gameStateVariables.numberOfRemovals % 2 === 0 ? "Player 1" : "Player 2"
      } won!`,
    );
    return true;
  }
  gameStateVariables.numberOfRemovals++;
  return false;
}

export default hasPlayerWon;
