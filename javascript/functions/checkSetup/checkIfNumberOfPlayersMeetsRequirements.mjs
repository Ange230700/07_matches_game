// javascript\functions\checkSetup\checkIfNumberOfPlayersMeetsRequirements.mjs

function checkIfNumberOfPlayersMeetsRequirements(
  numberOfPlayersInputByInstaller,
) {
  if (
    numberOfPlayersInputByInstaller < 2 ||
    5 < numberOfPlayersInputByInstaller
  ) {
    alert(
      "2 players minimum and 5 players maximum are required to play the game.",
    );

    return false;
  }

  return true;
}

export default checkIfNumberOfPlayersMeetsRequirements;
