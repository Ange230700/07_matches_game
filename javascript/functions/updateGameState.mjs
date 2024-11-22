// javascript\functions\updateGameState.mjs

import gameStateVariables from "../variables/gameStateVariables.mjs";

function updateGameState(numberOfMatchesToRemove) {
  gameStateVariables.numberOfMatchesRemaining -= numberOfMatchesToRemove;

  alert(
    `Player ${gameStateVariables.currentPlayerNumber} removed ${numberOfMatchesToRemove} match(es).\n${gameStateVariables.numberOfMatchesRemaining} match(es) remaining.`,
  );
}

export default updateGameState;
