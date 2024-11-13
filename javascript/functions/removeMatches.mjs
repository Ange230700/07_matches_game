// javascript\functions\removeMatches.mjs

import gameStateVariables from "../variables/gameStateVariables.mjs";

function removeMatches(numberOfMatchesToRemove) {
  if (numberOfMatchesToRemove < 1 || numberOfMatchesToRemove > 6) {
    console.log(
      "1 match minimum and 6 matches maximum can be removed at a time.",
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
  gameStateVariables.numberOfMatchesRemaining -= numberOfMatchesToRemove;
  console.log(
    `${
      gameStateVariables.numberOfRemovals % 2 === 0 ? "Player 1" : "Player 2"
    } removed ${numberOfMatchesToRemove} matches.`,
  );
  console.log(
    `There are ${gameStateVariables.numberOfMatchesRemaining} matches remaining.`,
  );
  return gameStateVariables.numberOfMatchesRemaining;
}

export default removeMatches;
