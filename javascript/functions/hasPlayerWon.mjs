// javascript\functions\hasPlayerWon.mjs

import gameStateVariables from "../variables/gameStateVariables.mjs";

function hasPlayerWon() {
  if (gameStateVariables.numberOfMatchesRemaining === 0) {
    const currentPlayerNumber =
      (gameStateVariables.numberOfRemovals %
        gameStateVariables.numberOfPlayers) +
      1;

    alert(`Player ${currentPlayerNumber} won!`);

    return true;
  }

  gameStateVariables.numberOfRemovals++;

  return false;
}

export default hasPlayerWon;
