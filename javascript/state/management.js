// javascript\state\management.js

const gameStateVariables = {
  // game state variables to set up before starting the game
  numberOfPlayers: 2,
  totalNumberOfMatches: 50,
  numberMinimumOfMatchesToRemovePerTurn: 1,
  numberMaximumOfMatchesToRemovePerTurn: (50 - (50 % 8)) / 8,
  isSetupComplete: false,

  // game state variables to update during the game
  currentPlayerNumber: 1,
  numberOfMatchesRemaining: 50,
};

export { gameStateVariables };
