// javascript\functions\checkIfNumberMinimumOfMatchesToRemoveAllowedMeetsRequirements.mjs

import gameStateVariables from "../../variables/gameStateVariables.mjs";

function checkIfNumberMinimumOfMatchesToRemoveAllowedMeetsRequirements(
  numberMinimumOfMatchesToRemoveAllowedInputByInstaller,
) {
  if (
    numberMinimumOfMatchesToRemoveAllowedInputByInstaller < 1 ||
    (gameStateVariables.numberOfMatchesRemaining -
      (gameStateVariables.numberOfMatchesRemaining % 8)) /
      8 <
      numberMinimumOfMatchesToRemoveAllowedInputByInstaller
  ) {
    alert(
      `The minimum number of matches that can be removed in a turn must be at least 1 match and at most ${
        (gameStateVariables.numberOfMatchesRemaining -
          (gameStateVariables.numberOfMatchesRemaining % 8)) /
        8
      } matches.`,
    );

    return false;
  }

  return true;
}

export default checkIfNumberMinimumOfMatchesToRemoveAllowedMeetsRequirements;
