// javascript\functions\checkIfThereAreEnoughMatchesToRemove.mjs

import gameStateVariables from "../variables/gameStateVariables.mjs";

function checkIfThereAreEnoughMatchesToRemove(numberOfMatchesToRemove) {
  if (
    gameStateVariables.numberOfMatchesRemaining - numberOfMatchesToRemove <
    0
  ) {
    alert("There are not enough matches to remove.");

    return false;
  }

  return true;
}

export default checkIfThereAreEnoughMatchesToRemove;
