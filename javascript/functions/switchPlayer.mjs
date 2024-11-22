// javascript\functions\switchPlayer.mjs

import gameStateVariables from "../variables/gameStateVariables.mjs";

function switchPlayer() {
  gameStateVariables.currentPlayerNumber =
    (gameStateVariables.currentPlayerNumber %
      gameStateVariables.numberOfPlayers) +
    1;
}

export default switchPlayer;
