// javascript\functions\checkIfNumberOfMatchesToStartMeetsRequirements.mjs

function checkIfNumberOfMatchesToStartMeetsRequirements(
  numberOfMatchesToStartInputByInstaller,
) {
  if (
    numberOfMatchesToStartInputByInstaller < 50 ||
    175 < numberOfMatchesToStartInputByInstaller
  ) {
    alert(
      "The number of matches to start with must be at least 50 and at most 175 matches to start with.",
    );

    return false;
  }

  return true;
}

export default checkIfNumberOfMatchesToStartMeetsRequirements;
