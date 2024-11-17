// javascript\functions\installer\askInstallerNumberOfPlayers.mjs

import askUserInput from "../askUserInput.mjs";
import checkThatUserInputIsNumber from "../checkThatUserInputIsNumber.mjs";
import convertUserInputToNumber from "../convertUserInputToNumber.mjs";
import checkIfNumberOfPlayersMeetsRequirements from "../checkSetup/checkIfNumberOfPlayersMeetsRequirements.mjs";
import setGameStateVariable from "../setGameStateVariable.mjs";

function askInstallerNumberOfPlayers() {
  let installerInput = askUserInput("How many players are there?");

  while (checkThatUserInputIsNumber(installerInput) === false) {
    installerInput = askUserInput("How many players are there?");
  }

  let numberOfPlayersInputByInstaller =
    convertUserInputToNumber(installerInput);

  while (
    checkIfNumberOfPlayersMeetsRequirements(numberOfPlayersInputByInstaller) ===
    false
  ) {
    installerInput = askUserInput("How many players are there?");

    while (checkThatUserInputIsNumber(installerInput) === false) {
      installerInput = askUserInput("How many players are there?");
    }

    numberOfPlayersInputByInstaller = convertUserInputToNumber(installerInput);
  }

  return setGameStateVariable(
    "numberOfPlayers",
    numberOfPlayersInputByInstaller,
  );
}

export default askInstallerNumberOfPlayers;
