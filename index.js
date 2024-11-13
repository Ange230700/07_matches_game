// index.js

import gameStateVariables from "./javascript/variables/gameStateVariables.mjs";
import askPlayerMatchesNumberToRemove from "./javascript/functions/askPlayerMatchesNumberToRemove.mjs";
import removeMatches from "./javascript/functions/removeMatches.mjs";
import hasPlayerWon from "./javascript/functions/hasPlayerWon.mjs";

(function playMatchesGame() {
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
})();
