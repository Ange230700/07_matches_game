// javascript\functions\removeMatches.mjs

import gameStateVariables from "../variables/gameStateVariables.mjs";
import checkIfThereAreEnoughMatchesToRemove from "./checkIfThereAreEnoughMatchesToRemove.mjs";

function removeMatches(numberOfMatchesToRemove) {
  if (checkIfThereAreEnoughMatchesToRemove(numberOfMatchesToRemove) === false) {
    return;
  }

  const currentPlayerNumber =
    (gameStateVariables.numberOfRemovals % gameStateVariables.numberOfPlayers) +
    1;

  gameStateVariables.numberOfMatchesRemaining -= numberOfMatchesToRemove;

  alert(
    `Player ${currentPlayerNumber} removed ${numberOfMatchesToRemove} matches.`,
  );

  alert(
    `There are ${gameStateVariables.numberOfMatchesRemaining} matches remaining.`,
  );

  return;
}

export default removeMatches;
