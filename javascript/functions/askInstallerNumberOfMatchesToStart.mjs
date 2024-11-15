// javascript\functions\askInstallerNumberOfMatchesToStart.mjs

import gameStateVariables from "../variables/gameStateVariables.mjs";

function askInstallerNumberOfMatchesToStart() {
  const installerInput = prompt("How many matches do you want to start with?");
  if (
    isNaN(installerInput) ||
    installerInput === "" ||
    installerInput === null ||
    installerInput === undefined
  ) {
    console.log("Please enter a number.");
    return;
  }
  const numberOfMatchesToStart = parseInt(installerInput);
  if (numberOfMatchesToStart < 50) {
    console.log("50 matches minimum required to start the game.");
    return;
  }
  gameStateVariables.numberOfMatchesRemaining = numberOfMatchesToStart;
  return numberOfMatchesToStart;
}

export default askInstallerNumberOfMatchesToStart;
