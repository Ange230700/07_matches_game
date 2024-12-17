// javascript\events\handlers.js

import {
  createGamePage,
  createLandingPage,
  createSettingsPage,
} from "../components/creation.js";
import {
  setMainSectionHtmlContent,
  updateUI,
  waitForClickOnNavigationButton,
  waitForFormSubmission,
  waitForPlayerMoveSubmission,
} from "../dom/manipulation.js";
import {
  saveSettingsToLocalStorage,
  setUpGame,
  validateInstallerInputs,
} from "../helpers/functions.js";

const handleFormSubmission = (event) => {
  event.preventDefault();
  validateInstallerInputs();
  saveSettingsToLocalStorage();
};

const handleClickOnNavigationButton = (event) => {
  if (event.target.innerText === "Settings") {
    setMainSectionHtmlContent(`${createSettingsPage()}`);
    waitForFormSubmission();
    waitForClickOnNavigationButton();
  } else {
    setUpGame();
    setMainSectionHtmlContent(`${createGamePage()}`);
    updateUI();
    waitForPlayerMoveSubmission();
    waitForClickOnNavigationButton();
  }
};

const handleGameDisplay = () => {
  setMainSectionHtmlContent(`${createLandingPage()}`);
  waitForClickOnNavigationButton();
};

export {
  handleGameDisplay,
  handleFormSubmission,
  handleClickOnNavigationButton,
};
