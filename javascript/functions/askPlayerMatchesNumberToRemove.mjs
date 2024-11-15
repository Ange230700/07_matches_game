// javascript\functions\askPlayerMatchesNumberToRemove.mjs

import gameStateVariables from "../variables/gameStateVariables.mjs";

function askPlayerMatchesNumberToRemove() {
  const currentPlayerNumber =
    (gameStateVariables.numberOfRemovals % gameStateVariables.numberOfPlayers) +
    1;
  const playerInput = prompt(
    `It's player ${currentPlayerNumber}'s turn. How many matches would player ${currentPlayerNumber} like to remove?`,
  );
  if (
    isNaN(playerInput) ||
    playerInput === "" ||
    playerInput === null ||
    playerInput === undefined
  ) {
    console.log("Please enter a number.");
    return;
  }
  const numberOfMatchesToRemove = parseInt(playerInput);
  if (
    numberOfMatchesToRemove <
      gameStateVariables.numberMinimumOfMatchesToRemoveAllowed ||
    numberOfMatchesToRemove >
      gameStateVariables.numberMaximumOfMatchesToRemoveAllowed
  ) {
    console.log(
      `${gameStateVariables.numberMinimumOfMatchesToRemoveAllowed} match(es) minimum and ${gameStateVariables.numberMaximumOfMatchesToRemoveAllowed} matches maximum can be removed at a time.`,
    );
    return;
  }
  return numberOfMatchesToRemove;
}

export default askPlayerMatchesNumberToRemove;
