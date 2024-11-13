// javascript\functions\askInstallerNumberMinimumOfMatchesToRemoveAllowed.mjs

import gameStateVariables from "../variables/gameStateVariables.mjs";

function askInstallerNumberMinimumOfMatchesToRemoveAllowed() {
    const installerInput = prompt(
        "What is the minimum number of matches that can be removed at a time?",
    );
    if (
        isNaN(installerInput) ||
        installerInput === "" ||
        installerInput === null ||
        installerInput === undefined
    ) {
        console.log("Please enter a number.");
        return;
    }
    const numberMinimumOfMatchesToRemoveAllowed = parseInt(installerInput);
    if (numberMinimumOfMatchesToRemoveAllowed < 1) {
        console.log("1 match minimum can be removed at a time.");
        return;
    }
    gameStateVariables.numberMinimumOfMatchesToRemoveAllowed = numberMinimumOfMatchesToRemoveAllowed;
    return numberMinimumOfMatchesToRemoveAllowed;
}

export default askInstallerNumberMinimumOfMatchesToRemoveAllowed;