// javascript\dom\manipulation.js

import {
  handleClickOnNavigationButton,
  handleFormSubmission,
} from "../events/handlers.js";

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

export {
  setMainSectionHtmlContent,
  waitForFormSubmission,
  waitForClickOnNavigationButton,
};
