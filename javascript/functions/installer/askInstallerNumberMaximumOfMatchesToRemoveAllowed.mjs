// javascript\functions\askInstallerNumberMaximumOfMatchesToRemoveAllowed.mjs

import askUserInput from "../askUserInput.mjs";
import checkThatUserInputIsNumber from "../checkThatUserInputIsNumber.mjs";
import convertUserInputToNumber from "../convertUserInputToNumber.mjs";
import checkIfNumberMaximumOfMatchesToRemoveAllowedMeetsRequirements from "../checkSetup/checkIfNumberMaximumOfMatchesToRemoveAllowedMeetsRequirements.mjs";
import setGameStateVariable from "../setGameStateVariable.mjs";

function askInstallerNumberMaximumOfMatchesToRemoveAllowed() {
  let installerInput = askUserInput(
    "What is the maximum number of matches that can be removed in a turn?",
  );

  while (checkThatUserInputIsNumber(installerInput) === false) {
    installerInput = askUserInput(
      "What is the maximum number of matches that can be removed in a turn?",
    );
  }

  let numberMaximumOfMatchesToRemoveAllowedInputByInstaller =
    convertUserInputToNumber(installerInput);

  while (
    checkIfNumberMaximumOfMatchesToRemoveAllowedMeetsRequirements(
      numberMaximumOfMatchesToRemoveAllowedInputByInstaller,
    ) === false
  ) {
    installerInput = askUserInput(
      "What is the maximum number of matches that can be removed in a turn?",
    );

    while (checkThatUserInputIsNumber(installerInput) === false) {
      installerInput = askUserInput(
        "What is the maximum number of matches that can be removed in a turn?",
      );
    }

    numberMaximumOfMatchesToRemoveAllowedInputByInstaller =
      convertUserInputToNumber(installerInput);
  }

  return setGameStateVariable(
    "numberMaximumOfMatchesToRemoveAllowed",
    numberMaximumOfMatchesToRemoveAllowedInputByInstaller,
  );
}

export default askInstallerNumberMaximumOfMatchesToRemoveAllowed;
