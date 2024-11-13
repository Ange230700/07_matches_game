// javascript\functions\askPlayerMatchesNumberToRemove.mjs

function askPlayerMatchesNumberToRemove() {
  const userInput = prompt("How many matches would you like to remove?");
  if (
    isNaN(userInput) ||
    userInput === "" ||
    userInput === null ||
    userInput === undefined
  ) {
    console.log("Please enter a number.");
    return;
  }
  const numberOfMatchesToRemove = parseInt(userInput);
  if (numberOfMatchesToRemove < 1 || numberOfMatchesToRemove > 6) {
    console.log("You can only remove between 1 and 6 matches.");
    return;
  }
  return numberOfMatchesToRemove;
}

export default askPlayerMatchesNumberToRemove;
