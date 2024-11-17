// javascript\functions\checkIfNumberOfMatchesToRemoveMeetsRequirements.mjs

import gameStateVariables from "../variables/gameStateVariables.mjs";

function checkIfNumberOfMatchesToRemoveMeetsRequirements(
  numberOfMatchesToRemoveInputByPlayer,
) {
  if (
    numberOfMatchesToRemoveInputByPlayer <
      gameStateVariables.numberMinimumOfMatchesToRemoveAllowed ||
    gameStateVariables.numberMaximumOfMatchesToRemoveAllowed <
      numberOfMatchesToRemoveInputByPlayer
  ) {
    alert(
      `${gameStateVariables.numberMinimumOfMatchesToRemoveAllowed} match(es) minimum and ${gameStateVariables.numberMaximumOfMatchesToRemoveAllowed} matches maximum can be removed at a time.`,
    );

    return false;
  }
  return true;
}

export default checkIfNumberOfMatchesToRemoveMeetsRequirements;
