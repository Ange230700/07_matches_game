// javascript\functions\getPlayerInput.mjs

import gameStateVariables from "../variables/gameStateVariables.mjs";
import getValidatedInput from "./getValidatedInput.mjs";
import { validateNumberOfMatchesToRemoveInputByPlayer } from "./inputValidations.mjs";

function getPlayerInput() {
  return getValidatedInput(
    `Player ${gameStateVariables.currentPlayerNumber}, it's your turn.\nThere are ${gameStateVariables.numberOfMatchesRemaining} match(es) left.\nHow many match(es) do you want to remove? (minimum ${gameStateVariables.numberMinimumOfMatchesToRemovePerTurn}, maximum ${gameStateVariables.numberMaximumOfMatchesToRemovePerTurn}):`,
    (parsedInput) =>
      validateNumberOfMatchesToRemoveInputByPlayer(
        parsedInput,
        gameStateVariables.numberMinimumOfMatchesToRemovePerTurn,
        gameStateVariables.numberMaximumOfMatchesToRemovePerTurn,
        gameStateVariables.numberOfMatchesRemaining,
      ),
    `Please enter a number between ${gameStateVariables.numberMinimumOfMatchesToRemovePerTurn} and ${Math.min(
      gameStateVariables.numberMaximumOfMatchesToRemovePerTurn,
      gameStateVariables.numberOfMatchesRemaining,
    )}.`,
  );
}

export default getPlayerInput;
