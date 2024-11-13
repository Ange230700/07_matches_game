// javascript\functions\removeMatches.mjs

import gameStateVariables from "../variables/gameStateVariables.js";

function removeMatches(numberOfMatchesToRemove) {
  if (numberOfMatchesToRemove < 1 || numberOfMatchesToRemove > 6) {
    console.log("You can only remove between 1 and 6 matches.");
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
  console.log(`You removed ${numberOfMatchesToRemove} matches.`);
  console.log(
    `There are ${gameStateVariables.numberOfMatchesRemaining} matches remaining.`,
  );
  return gameStateVariables.numberOfMatchesRemaining;
}

export default removeMatches;
