// javascript/settings.js

document.getElementById("settings-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const numberOfPlayers = parseInt(
    document.getElementById("numberOfPlayers").value,
    10,
  );
  const totalNumberOfMatches = parseInt(
    document.getElementById("totalNumberOfMatches").value,
    10,
  );
  const numberMinimumOfMatchesToRemovePerTurn = parseInt(
    document.getElementById("numberMinimumOfMatchesToRemovePerTurn").value,
    10,
  );
  const numberMaximumOfMatchesToRemovePerTurn = parseInt(
    document.getElementById("numberMaximumOfMatchesToRemovePerTurn").value,
    10,
  );

  // Validate inputs
  if (numberOfPlayers < 2 || numberOfPlayers > 5) {
    alert("Number of players must be between 2 and 5.");
    return;
  }
  if (totalNumberOfMatches < 50 || totalNumberOfMatches > 175) {
    alert("Total number of matches must be between 50 and 175.");
    return;
  }
  const maxMatchesPerTurn = Math.floor(totalNumberOfMatches / 8);
  if (
    numberMinimumOfMatchesToRemovePerTurn < 1 ||
    numberMinimumOfMatchesToRemovePerTurn > maxMatchesPerTurn
  ) {
    alert(
      `Minimum matches to remove per turn must be between 1 and ${maxMatchesPerTurn}.`,
    );
    return;
  }
  if (
    numberMaximumOfMatchesToRemovePerTurn <
      numberMinimumOfMatchesToRemovePerTurn ||
    numberMaximumOfMatchesToRemovePerTurn > maxMatchesPerTurn
  ) {
    alert(
      `Maximum matches to remove per turn must be between ${numberMinimumOfMatchesToRemovePerTurn} and ${maxMatchesPerTurn}.`,
    );
    return;
  }

  // Save settings to localStorage
  const settings = {
    numberOfPlayers,
    totalNumberOfMatches,
    numberMinimumOfMatchesToRemovePerTurn,
    numberMaximumOfMatchesToRemovePerTurn,
    isSetupComplete: true,
  };
  localStorage.setItem("matchesGameSettings", JSON.stringify(settings));
  alert("Settings saved successfully!");
});
