// javascript\functions\setUpMatchesGame.mjs

import gameStateVariables from "../variables/gameStateVariables.mjs";
import getValidatedInput from "./getValidatedInput.mjs";
import {
  validateNumberMaximumOfMatchesToRemovePerTurn,
  validateNumberMinimumOfMatchesToRemovePerTurn,
  validateNumbersOfPlayers,
  validateTotalNumberOfMatches,
} from "./inputValidations.mjs";

function setUpMatchesGame() {
  alert("Let's set up the game!");

  gameStateVariables.numberOfPlayers = getValidatedInput(
    "Enter the number of players (minimum: 2, maximum: 5):",
    (parsedInput) => validateNumbersOfPlayers(parsedInput),
    "Please enter a number between 2 and 5.",
  );
  if (gameStateVariables.numberOfPlayers === undefined) {
    return;
  }

  gameStateVariables.totalNumberOfMatches = getValidatedInput(
    "Enter the total number of match(es) (minimum 50, maximum 175):",
    (parsedInput) => validateTotalNumberOfMatches(parsedInput),
    "Please enter a number between 50 and 175.",
  );
  if (gameStateVariables.totalNumberOfMatches === undefined) {
    return;
  }

  gameStateVariables.numberMinimumOfMatchesToRemovePerTurn = getValidatedInput(
    `Enter the minimum number of match(es) to remove per turn (minimum 1, maximum ${(gameStateVariables.totalNumberOfMatches - (gameStateVariables.totalNumberOfMatches % 8)) / 8}):`,
    (parsedInput) =>
      validateNumberMinimumOfMatchesToRemovePerTurn(
        parsedInput,
        gameStateVariables.totalNumberOfMatches,
      ),
    `Please enter a number between 1 and ${(gameStateVariables.totalNumberOfMatches - (gameStateVariables.totalNumberOfMatches % 8)) / 8}.`,
  );
  if (gameStateVariables.numberMinimumOfMatchesToRemovePerTurn === undefined) {
    return;
  }

  gameStateVariables.numberMaximumOfMatchesToRemovePerTurn = getValidatedInput(
    `Enter the maximum number of match(es) to remove per turn (minimum ${gameStateVariables.numberMinimumOfMatchesToRemovePerTurn}, maximum ${(gameStateVariables.totalNumberOfMatches - (gameStateVariables.totalNumberOfMatches % 8)) / 8}):`,
    (parsedInput) =>
      validateNumberMaximumOfMatchesToRemovePerTurn(
        parsedInput,
        gameStateVariables.numberMinimumOfMatchesToRemovePerTurn,
        gameStateVariables.totalNumberOfMatches,
      ),
    `Please enter a number between ${gameStateVariables.numberMinimumOfMatchesToRemovePerTurn} and ${(gameStateVariables.totalNumberOfMatches - (gameStateVariables.totalNumberOfMatches % 8)) / 8}.`,
  );
  if (gameStateVariables.numberMaximumOfMatchesToRemovePerTurn === undefined) {
    return;
  }

  gameStateVariables.numberOfMatchesRemaining =
    gameStateVariables.totalNumberOfMatches;

  gameStateVariables.isSetupComplete = true;

  alert("The game settings have been properly configured.");
  return gameStateVariables;
}

export default setUpMatchesGame;
