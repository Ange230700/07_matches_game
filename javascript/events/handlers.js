// javascript\events\handlers.js

import {
  createGamePage,
  createLandingPage,
  createSettingsPage,
} from "../components/creation.js";
import {
  setMainSectionHtmlContent,
  waitForClickOnNavigationButton,
  waitForFormSubmission,
} from "../dom/manipulation.js";
import {
  saveSettingsToLocalStorage,
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
    setMainSectionHtmlContent(`${createGamePage()}`);
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
