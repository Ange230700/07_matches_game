// javascript\functions\askPlayerMatchesNumberToRemove.mjs

import gameStateVariables from "../variables/gameStateVariables.mjs";

function askPlayerMatchesNumberToRemove() {
  const userInput = prompt(
    `It's ${
      gameStateVariables.numberOfRemovals % 2 === 0 ? "player 1" : "player 2"
    }'s turn. How many matches would ${
      gameStateVariables.numberOfRemovals % 2 === 0 ? "player 1" : "player 2"
    } like to remove?`,
  );
  if (
    isNaN(userInput) ||
    userInput === "" ||
    userInput === null ||
    userInput === undefined
  ) {
    console.log("Please enter a number.");
    return;
  }
  const numberOfMatchesToRemove = parseInt(userInput);
  if (numberOfMatchesToRemove < 1 || numberOfMatchesToRemove > 6) {
    console.log(
      "1 match minimum and 6 matches maximum can be removed at a time.",
    );
    return;
  }
  return numberOfMatchesToRemove;
}

export default askPlayerMatchesNumberToRemove;
