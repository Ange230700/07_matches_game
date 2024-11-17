// javascript\functions\setGameStateVariable.mjs

import gameStateVariables from "../variables/gameStateVariables.mjs";

function setGameStateVariable(variableName, variableValue) {
  gameStateVariables[variableName] = variableValue;

  return gameStateVariables[variableName];
}

export default setGameStateVariable;
