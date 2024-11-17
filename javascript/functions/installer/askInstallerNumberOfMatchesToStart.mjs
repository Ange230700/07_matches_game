// javascript\functions\installer\askInstallerNumberOfMatchesToStart.mjs

import askUserInput from "../askUserInput.mjs";
import checkThatUserInputIsNumber from "../checkThatUserInputIsNumber.mjs";
import convertUserInputToNumber from "../convertUserInputToNumber.mjs";
import checkIfNumberOfMatchesToStartMeetsRequirements from "../checkSetup/checkIfNumberOfMatchesToStartMeetsRequirements.mjs";
import setGameStateVariable from "../setGameStateVariable.mjs";

function askInstallerNumberOfMatchesToStart() {
  let installerInput = askUserInput(
    "How many matches do you want to start with?",
  );

  while (checkThatUserInputIsNumber(installerInput) === false) {
    installerInput = askUserInput(
      "How many matches do you want to start with?",
    );
  }

  let numberOfMatchesToStartInputByInstaller =
    convertUserInputToNumber(installerInput);

  while (
    checkIfNumberOfMatchesToStartMeetsRequirements(
      numberOfMatchesToStartInputByInstaller,
    ) === false
  ) {
    installerInput = askUserInput(
      "How many matches do you want to start with?",
    );

    while (checkThatUserInputIsNumber(installerInput) === false) {
      installerInput = askUserInput(
        "How many matches do you want to start with?",
      );
    }

    numberOfMatchesToStartInputByInstaller =
      convertUserInputToNumber(installerInput);
  }

  return setGameStateVariable(
    "numberOfMatchesRemaining",
    numberOfMatchesToStartInputByInstaller,
  );
}

export default askInstallerNumberOfMatchesToStart;
