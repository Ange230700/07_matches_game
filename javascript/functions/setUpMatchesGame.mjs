// javascript\functions\setUpMatchesGame.mjs

import gameStateVariables from "../variables/gameStateVariables.mjs";
import askInstallerNumberOfPlayers from "./installer/askInstallerNumberOfPlayers.mjs";
import askInstallerNumberOfMatchesToStart from "./installer/askInstallerNumberOfMatchesToStart.mjs";
import askInstallerNumberMinimumOfMatchesToRemoveAllowed from "./installer/askInstallerNumberMinimumOfMatchesToRemoveAllowed.mjs";
import askInstallerNumberMaximumOfMatchesToRemoveAllowed from "./installer/askInstallerNumberMaximumOfMatchesToRemoveAllowed.mjs";
import setGameStateVariable from "./setGameStateVariable.mjs";

function setUpMatchesGame() {
  if (gameStateVariables.isSetupComplete === true) {
    alert(
      "The game setup is already complete. No need to set up the game again.",
    );

    return true;
  }

  let numberOfPlayersSet = askInstallerNumberOfPlayers();

  alert(`The number of players has been set to ${numberOfPlayersSet} players.`);

  let numberOfMatchesToStartSet = askInstallerNumberOfMatchesToStart();

  alert(
    `The number of matches to start has been set to ${numberOfMatchesToStartSet} matches.`,
  );

  let numberMinimumOfMatchesToRemoveAllowedSet =
    askInstallerNumberMinimumOfMatchesToRemoveAllowed();

  alert(
    `The number minimum of matches to remove allowed has been set to ${numberMinimumOfMatchesToRemoveAllowedSet} matches.`,
  );

  let numberMaximumOfMatchesToRemoveAllowedSet =
    askInstallerNumberMaximumOfMatchesToRemoveAllowed();

  alert(
    `The number maximum of matches to remove allowed has been set to ${numberMaximumOfMatchesToRemoveAllowedSet} matches.`,
  );

  setGameStateVariable("isSetupComplete", true);

  return true;
}

export default setUpMatchesGame;
