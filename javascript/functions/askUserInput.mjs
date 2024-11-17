// javascript\functions\askUserInput.mjs

import checkUserInput from "./checkUserInput.mjs";

function askUserInput(message) {
  let userInput = prompt(`${message} (Please enter a number)`);

  while (checkUserInput(userInput) === false) {
    userInput = prompt(`${message} (Please enter a number)`);
  }

  return userInput;
}

export default askUserInput;
