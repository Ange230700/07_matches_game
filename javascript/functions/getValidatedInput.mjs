// javascript\functions\getValidatedInput.mjs

function getValidatedInput(messageToPrompt, validationFunction, errorMessage) {
  let userInput;
  let parsedInput;

  do {
    userInput = prompt(messageToPrompt);

    if (userInput === null) {
      alert("You have canceled the game.");
      return;
    }

    parsedInput = parseInt(userInput, 10);

    if (
      isNaN(parsedInput) === true ||
      validationFunction(parsedInput) === false
    ) {
      alert(`Invalid input: ${parsedInput}. ${errorMessage}`);
      parsedInput = null;
    }
  } while (parsedInput === null);

  return parsedInput;
}

export default getValidatedInput;
