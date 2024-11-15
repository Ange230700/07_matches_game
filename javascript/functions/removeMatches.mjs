// javascript\functions\removeMatches.mjs

import gameStateVariables from "../variables/gameStateVariables.mjs";

function removeMatches(numberOfMatchesToRemove) {
  if (
    numberOfMatchesToRemove <
      gameStateVariables.numberMinimumOfMatchesToRemoveAllowed ||
    numberOfMatchesToRemove >
      gameStateVariables.numberMaximumOfMatchesToRemoveAllowed
  ) {
    console.log(
      `${gameStateVariables.numberMinimumOfMatchesToRemoveAllowed} match minimum and ${gameStateVariables.numberMaximumOfMatchesToRemoveAllowed} matches maximum can be removed at a time.`,
    );
    return;
  }
  if (
    gameStateVariables.numberOfMatchesRemaining - numberOfMatchesToRemove <
    0
  ) {
    console.log("There are not enough matches to remove.");
    return;
  }
  const currentPlayerNumber =
    (gameStateVariables.numberOfRemovals % gameStateVariables.numberOfPlayers) +
    1;
  gameStateVariables.numberOfMatchesRemaining -= numberOfMatchesToRemove;
  console.log(
    `Player ${currentPlayerNumber} removed ${numberOfMatchesToRemove} matches.`,
  );
  console.log(
    `There are ${gameStateVariables.numberOfMatchesRemaining} matches remaining.`,
  );
  return gameStateVariables.numberOfMatchesRemaining;
}

export default removeMatches;
