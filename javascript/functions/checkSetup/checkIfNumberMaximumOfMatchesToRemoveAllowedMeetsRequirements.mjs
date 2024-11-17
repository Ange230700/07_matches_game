// javascript\functions\checkIfNumberMaximumOfMatchesToRemoveAllowedMeetsRequirements.mjs

import gameStateVariables from "../../variables/gameStateVariables.mjs";

function checkIfNumberMaximumOfMatchesToRemoveAllowedMeetsRequirements(
  numberMaximumOfMatchesToRemoveAllowedInputByInstaller,
) {
  if (
    numberMaximumOfMatchesToRemoveAllowedInputByInstaller < 1 ||
    (gameStateVariables.numberOfMatchesRemaining -
      (gameStateVariables.numberOfMatchesRemaining % 8)) /
      8 <
      numberMaximumOfMatchesToRemoveAllowedInputByInstaller
  ) {
    alert(
      `The maximum number of matches that can be removed in a turn must be at least 1 match and at most ${
        (gameStateVariables.numberOfMatchesRemaining -
          (gameStateVariables.numberOfMatchesRemaining % 8)) /
        8
      } matches.`,
    );

    return false;
  }

  if (
    gameStateVariables.numberMinimumOfMatchesToRemoveAllowed >=
    numberMaximumOfMatchesToRemoveAllowedInputByInstaller
  ) {
    alert(
      `The maximum number of matches that can be removed in a turn must be greater than the minimum number of matches that can be removed in a turn.`,
    );

    return false;
  }

  return true;
}

export default checkIfNumberMaximumOfMatchesToRemoveAllowedMeetsRequirements;
