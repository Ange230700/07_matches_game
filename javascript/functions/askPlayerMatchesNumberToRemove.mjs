// javascript\functions\askPlayerMatchesNumberToRemove.mjs

import gameStateVariables from "../variables/gameStateVariables.mjs";
import askUserInput from "./askUserInput.mjs";
import checkThatUserInputIsNumber from "./checkThatUserInputIsNumber.mjs";
import convertUserInputToNumber from "./convertUserInputToNumber.mjs";
import checkIfNumberOfMatchesToRemoveMeetsRequirements from "./checkIfNumberOfMatchesToRemoveMeetsRequirements.mjs";
import setGameStateVariable from "./setGameStateVariable.mjs";

function askPlayerMatchesNumberToRemove() {
  const currentPlayerNumber =
    (gameStateVariables.numberOfRemovals % gameStateVariables.numberOfPlayers) +
    1;

  let playerInput = askUserInput(
    `Let player ${currentPlayerNumber} play. How many matches do you want to remove?`,
  );

  while (checkThatUserInputIsNumber(playerInput) === false) {
    playerInput = askUserInput(
      `Let player ${currentPlayerNumber} play. How many matches do you want to remove?`,
    );
  }

  let numberOfMatchesToRemoveInputByPlayer =
    convertUserInputToNumber(playerInput);

  while (
    checkIfNumberOfMatchesToRemoveMeetsRequirements(
      numberOfMatchesToRemoveInputByPlayer,
    ) === false
  ) {
    playerInput = askUserInput(
      `Let player ${currentPlayerNumber} play. How many matches do you want to remove?`,
    );

    while (checkThatUserInputIsNumber(playerInput) === false) {
      playerInput = askUserInput(
        `Let player ${currentPlayerNumber} play. How many matches do you want to remove?`,
      );
    }

    numberOfMatchesToRemoveInputByPlayer =
      convertUserInputToNumber(playerInput);
  }

  return setGameStateVariable(
    "numberOfMatchesToRemove",
    numberOfMatchesToRemoveInputByPlayer,
  );
}

export default askPlayerMatchesNumberToRemove;
