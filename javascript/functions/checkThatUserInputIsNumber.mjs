// javascript\functions\checkThatUserInputIsNumber.mjs

function checkThatUserInputIsNumber(userInput) {
  if (isNaN(userInput)) {
    alert("Please enter a number.");

    return false;
  }

  return true;
}

export default checkThatUserInputIsNumber;
