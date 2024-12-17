// javascript\dom\manipulation.js

import {
  handleClickOnNavigationButton,
  handleFormSubmission,
} from "../events/handlers.js";
import { submitMove } from "../helpers/functions.js";
import { gameStateVariables } from "../state/management.js";

function setMainSectionHtmlContent(htmlContent) {
  document.querySelector("main").innerHTML = htmlContent;
}

function waitForFormSubmission() {
  document
    .getElementById("settings-form")
    .addEventListener("submit", (event) => {
      handleFormSubmission(event);
    });
}

function waitForClickOnNavigationButton() {
  document.querySelectorAll(".navigation .btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      handleClickOnNavigationButton(event);
    });
  });
}

function waitForPlayerMoveSubmission() {
  document.getElementById("submit-move").addEventListener("click", () => {
    submitMove();
  });
}

function updateUI() {
  document.getElementById("current-player").textContent =
    `Player ${gameStateVariables.currentPlayerNumber}'s turn`;
  document.getElementById("matches-remaining").textContent =
    `Matches remaining: ${gameStateVariables.numberOfMatchesRemaining}`;
  document.getElementById("prompt").textContent =
    `How many matches do you want to remove? (minimum ${gameStateVariables.numberMinimumOfMatchesToRemovePerTurn}, maximum ${Math.min(gameStateVariables.numberMaximumOfMatchesToRemovePerTurn, gameStateVariables.numberOfMatchesRemaining)})`;
  document.getElementById("matches-to-remove").min =
    gameStateVariables.numberMinimumOfMatchesToRemovePerTurn;
  document.getElementById("matches-to-remove").max = Math.min(
    gameStateVariables.numberMaximumOfMatchesToRemovePerTurn,
    gameStateVariables.numberOfMatchesRemaining,
  );
  document.getElementById("matches-to-remove").value = "";
}

export {
  setMainSectionHtmlContent,
  waitForFormSubmission,
  waitForClickOnNavigationButton,
  waitForPlayerMoveSubmission,
  updateUI,
};
