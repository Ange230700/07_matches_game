// javascript\functions\askInstallerNumberOfPlayers.mjs

import gameStateVariables from "../variables/gameStateVariables.mjs";

function askInstallerNumberOfPlayers() {
  const installerInput = prompt("How many players are there?");
  if (
    isNaN(installerInput) ||
    installerInput === "" ||
    installerInput === null ||
    installerInput === undefined
  ) {
    console.log("Please enter a number.");
    return;
  }
    const numberOfPlayers = parseInt(installerInput);
    if (numberOfPlayers < 2) {
      console.log("2 players minimum required to play the game.");
      return;
    }
    gameStateVariables.numberOfPlayers = numberOfPlayers;
    return numberOfPlayers;
}

export default askInstallerNumberOfPlayers;
