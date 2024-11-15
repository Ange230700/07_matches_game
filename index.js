// index.js

import gameStateVariables from "./javascript/variables/gameStateVariables.mjs";
import askPlayerMatchesNumberToRemove from "./javascript/functions/askPlayerMatchesNumberToRemove.mjs";
import removeMatches from "./javascript/functions/removeMatches.mjs";
import hasPlayerWon from "./javascript/functions/hasPlayerWon.mjs";
import askInstallerNumberOfPlayers from "./javascript/functions/askInstallerNumberOfPlayers.mjs";
import askInstallerNumberOfMatchesToStart from "./javascript/functions/askInstallerNumberOfMatchesToStart.mjs";
import askInstallerNumberMaximumOfMatchesToRemoveAllowed from "./javascript/functions/askInstallerNumberMaximumOfMatchesToRemoveAllowed.mjs";
import askInstallerNumberMinimumOfMatchesToRemoveAllowed from "./javascript/functions/askInstallerNumberMinimumOfMatchesToRemoveAllowed.mjs";

function setUpMatchesGame() {
  let isSetupComplete = false;
  while (!isSetupComplete) {
    const numberOfPlayers = askInstallerNumberOfPlayers();
    if (numberOfPlayers === undefined) continue;

    const numberOfMatchesToStart = askInstallerNumberOfMatchesToStart();
    if (numberOfMatchesToStart === undefined) continue;

    const numberMaximumOfMatchesToRemoveAllowed =
      askInstallerNumberMaximumOfMatchesToRemoveAllowed();
    if (numberMaximumOfMatchesToRemoveAllowed === undefined) continue;

    const numberMinimumOfMatchesToRemoveAllowed =
      askInstallerNumberMinimumOfMatchesToRemoveAllowed();
    if (numberMinimumOfMatchesToRemoveAllowed === undefined) continue;

    // Ensure minimum is less than or equal to maximum
    if (
      numberMinimumOfMatchesToRemoveAllowed >
      numberMaximumOfMatchesToRemoveAllowed
    ) {
      console.log(
        "Minimum number of matches to remove cannot be greater than the maximum.",
      );
      continue;
    }

    gameStateVariables.numberOfPlayers = numberOfPlayers;
    gameStateVariables.numberOfMatchesRemaining = numberOfMatchesToStart;
    gameStateVariables.numberMaximumOfMatchesToRemoveAllowed =
      numberMaximumOfMatchesToRemoveAllowed;
    gameStateVariables.numberMinimumOfMatchesToRemoveAllowed =
      numberMinimumOfMatchesToRemoveAllowed;

    isSetupComplete = true;
  }
}

function playMatchesGame() {
  while (gameStateVariables.numberOfMatchesRemaining > 0) {
    const numberOfMatchesToRemove = askPlayerMatchesNumberToRemove();

    // If the input is invalid, prompt the same player again
    if (numberOfMatchesToRemove === undefined) {
      continue;
    }

    removeMatches(numberOfMatchesToRemove);

    if (hasPlayerWon()) {
      break;
    }
  }
}

setUpMatchesGame();
playMatchesGame();
