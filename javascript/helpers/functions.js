// javascript\helpers\functions.js

function validateInstallerInputs() {
  if (
    parseInt(document.getElementById("numberOfPlayers").value, 10) < 2 ||
    parseInt(document.getElementById("numberOfPlayers").value, 10) > 5
  ) {
    alert("Number of players must be between 2 and 5.");
    return;
  }

  if (
    parseInt(document.getElementById("totalNumberOfMatches").value, 10) < 50 ||
    parseInt(document.getElementById("totalNumberOfMatches").value, 10) > 175
  ) {
    alert("Total number of matches must be between 50 and 175.");
    return;
  }

  if (
    parseInt(
      document.getElementById("numberMinimumOfMatchesToRemovePerTurn").value,
      10,
    ) < 1 ||
    parseInt(
      document.getElementById("numberMinimumOfMatchesToRemovePerTurn").value,
      10,
    ) >
      Math.floor(
        parseInt(document.getElementById("totalNumberOfMatches").value, 10) / 8,
      )
  ) {
    alert(
      `Minimum matches to remove per turn must be between 1 and ${Math.floor(
        parseInt(document.getElementById("totalNumberOfMatches").value, 10) / 8,
      )}.`,
    );
    return;
  }

  if (
    parseInt(
      document.getElementById("numberMaximumOfMatchesToRemovePerTurn").value,
      10,
    ) <
      parseInt(
        document.getElementById("numberMinimumOfMatchesToRemovePerTurn").value,
        10,
      ) ||
    parseInt(
      document.getElementById("numberMaximumOfMatchesToRemovePerTurn").value,
      10,
    ) >
      Math.floor(
        parseInt(document.getElementById("totalNumberOfMatches").value, 10) / 8,
      )
  ) {
    alert(
      `Maximum matches to remove per turn must be between ${parseInt(
        document.getElementById("numberMinimumOfMatchesToRemovePerTurn").value,
        10,
      )} and ${Math.floor(
        parseInt(document.getElementById("totalNumberOfMatches").value, 10) / 8,
      )}.`,
    );
    return;
  }
}

function saveSettingsToLocalStorage() {
  const settings = {
    numberOfPlayers: parseInt(
      document.getElementById("numberOfPlayers").value,
      10,
    ),
    totalNumberOfMatches: parseInt(
      document.getElementById("totalNumberOfMatches").value,
      10,
    ),
    numberMinimumOfMatchesToRemovePerTurn: parseInt(
      document.getElementById("numberMinimumOfMatchesToRemovePerTurn").value,
      10,
    ),
    numberMaximumOfMatchesToRemovePerTurn: parseInt(
      document.getElementById("numberMaximumOfMatchesToRemovePerTurn").value,
      10,
    ),
    isSetupComplete: true,
  };
  localStorage.setItem("matchesGameSettings", JSON.stringify(settings));
  alert("Settings saved successfully!");
}

export { validateInstallerInputs, saveSettingsToLocalStorage };
