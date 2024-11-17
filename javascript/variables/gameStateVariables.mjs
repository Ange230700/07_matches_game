// javascript\variables\gameStateVariables.mjs

const gameStateVariables = {
  // game state variables to set up before starting the game
  numberOfPlayers: 2,
  numberOfMatchesRemaining: 50,
  numberMinimumOfMatchesToRemoveAllowed: 1,
  numberMaximumOfMatchesToRemoveAllowed: 6,
  isSetupComplete: false,

  // game state variables to update during the game
  numberOfMatchesToRemove: 0,
  numberOfRemovals: 0,
};

export default gameStateVariables;
