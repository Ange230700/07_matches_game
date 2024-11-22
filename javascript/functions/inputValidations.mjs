// javascript\functions\inputValidations.mjs

const validateNumbersOfPlayers = (parsedInput) =>
  2 <= parsedInput && parsedInput <= 5;

const validateTotalNumberOfMatches = (parsedInput) =>
  50 <= parsedInput && parsedInput <= 175;

const validateNumberMinimumOfMatchesToRemovePerTurn = (
  parsedInput,
  totalNumberOfMatches,
) =>
  1 <= parsedInput &&
  parsedInput <= (totalNumberOfMatches - (totalNumberOfMatches % 8)) / 8;

const validateNumberMaximumOfMatchesToRemovePerTurn = (
  parsedInput,
  numberMinimumOfMatchesToRemovePerTurn,
  totalNumberOfMatches,
) =>
  numberMinimumOfMatchesToRemovePerTurn <= parsedInput &&
  parsedInput <= (totalNumberOfMatches - (totalNumberOfMatches % 8)) / 8;

const validateNumberOfMatchesToRemoveInputByPlayer = (
  parsedInput,
  numberMinimumOfMatchesToRemovePerTurn,
  numberMaximumOfMatchesToRemovePerTurn,
  numberOfMatchesRemaining,
) =>
  numberMinimumOfMatchesToRemovePerTurn <= parsedInput &&
  parsedInput <=
    Math.min(numberMaximumOfMatchesToRemovePerTurn, numberOfMatchesRemaining);

export {
  validateNumbersOfPlayers,
  validateTotalNumberOfMatches,
  validateNumberMinimumOfMatchesToRemovePerTurn,
  validateNumberMaximumOfMatchesToRemovePerTurn,
  validateNumberOfMatchesToRemoveInputByPlayer,
};
