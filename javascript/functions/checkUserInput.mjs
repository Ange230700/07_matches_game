// javascript\functions\checkUserInput.mjs

function checkUserInput(userInput) {
  if (userInput === null || userInput === undefined || userInput === "") {
    alert("Please enter a valid input.");

    return false;
  }

  return true;
}

export default checkUserInput;
