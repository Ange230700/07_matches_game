// javascript\functions\askInstallerNumberMaximumOfMatchesToRemoveAllowed.mjs

import gameStateVariables from "../variables/gameStateVariables.mjs";

function askInstallerNumberMaximumOfMatchesToRemoveAllowed() {
    const installerInput = prompt(
        "What is the maximum number of matches that can be removed at a time?",
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
    const numberMaximumOfMatchesToRemoveAllowed = parseInt(installerInput);
    if (numberMaximumOfMatchesToRemoveAllowed < 1) {
        console.log("1 match maximum can be removed at a time.");
        return;
    }
    gameStateVariables.numberMaximumOfMatchesToRemoveAllowed = numberMaximumOfMatchesToRemoveAllowed;
    return numberMaximumOfMatchesToRemoveAllowed;
}

export default askInstallerNumberMaximumOfMatchesToRemoveAllowed;