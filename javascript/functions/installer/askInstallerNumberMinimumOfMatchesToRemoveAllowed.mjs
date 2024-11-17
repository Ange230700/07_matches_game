// javascript\functions\installer\askInstallerNumberMinimumOfMatchesToRemoveAllowed.mjs

import askUserInput from "../askUserInput.mjs";
import checkThatUserInputIsNumber from "../checkThatUserInputIsNumber.mjs";
import convertUserInputToNumber from "../convertUserInputToNumber.mjs";
import checkIfNumberMinimumOfMatchesToRemoveAllowedMeetsRequirements from "../checkSetup/checkIfNumberMinimumOfMatchesToRemoveAllowedMeetsRequirements.mjs";
import setGameStateVariable from "../setGameStateVariable.mjs";

function askInstallerNumberMinimumOfMatchesToRemoveAllowed() {
  let installerInput = askUserInput(
    "What is the minimum number of matches that can be removed in a turn?",
  );

  while (checkThatUserInputIsNumber(installerInput) === false) {
    installerInput = askUserInput(
      "What is the minimum number of matches that can be removed in a turn?",
    );
  }

  let numberMinimumOfMatchesToRemoveAllowedInputByInstaller =
    convertUserInputToNumber(installerInput);

  while (
    checkIfNumberMinimumOfMatchesToRemoveAllowedMeetsRequirements(
      numberMinimumOfMatchesToRemoveAllowedInputByInstaller,
    ) === false
  ) {
    installerInput = askUserInput(
      "What is the minimum number of matches that can be removed in a turn?",
    );

    while (checkThatUserInputIsNumber(installerInput) === false) {
      installerInput = askUserInput(
        "What is the minimum number of matches that can be removed in a turn?",
      );
    }

    numberMinimumOfMatchesToRemoveAllowedInputByInstaller =
      convertUserInputToNumber(installerInput);
  }

  return setGameStateVariable(
    "numberMinimumOfMatchesToRemoveAllowed",
    numberMinimumOfMatchesToRemoveAllowedInputByInstaller,
  );
}

export default askInstallerNumberMinimumOfMatchesToRemoveAllowed;
