// javascript\functions\hasPlayerWon.js

import gameStateVariables from "../variables/gameStateVariables.js";

function hasPlayerWon() {
    if (gameStateVariables.numberOfMatchesRemaining === 0) {
        console.log("You won!");
        return true;
    }
    return false;
}

export default hasPlayerWon;
