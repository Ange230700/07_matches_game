// javascript\components\creation.js

function createNavbar() {
  return `
    <ul class="navigation">
      <li>
        <button type="button" class="btn">Settings</a>
      </li>
      <li>
        <button type="button" class="btn">Play Game</button>
      </li>
    </ul>
  `;
}

function createLandingPage() {
  return `
    <h1>Welcome to the Matches Game!</h1>
    <p>
      This is a turn-based game where players remove matches from a pile. The
      player who removes the last match wins!
    </p>
    ${createNavbar()}
  `;
}

function createSettingsPage() {
  return `
    <h1>Settings</h1>
    <form id="settings-form">
      <label for="numberOfPlayers">Number of players (2-5):</label>
      <input
        type="number"
        id="numberOfPlayers"
        name="numberOfPlayers"
        min="2"
        max="5"
        required
      />

      <label for="totalNumberOfMatches"
        >Total number of matches (50-175):</label
      >
      <input
        type="number"
        id="totalNumberOfMatches"
        name="totalNumberOfMatches"
        min="50"
        max="175"
        required
      />

      <label for="numberMinimumOfMatchesToRemovePerTurn"
        >Minimum matches to remove per turn:</label
      >
      <input
        type="number"
        id="numberMinimumOfMatchesToRemovePerTurn"
        name="numberMinimumOfMatchesToRemovePerTurn"
        min="1"
        required
      />

      <label for="numberMaximumOfMatchesToRemovePerTurn"
        >Maximum matches to remove per turn:</label
      >
      <input
        type="number"
        id="numberMaximumOfMatchesToRemovePerTurn"
        name="numberMaximumOfMatchesToRemovePerTurn"
        required
      />

      <button type="submit">Save Settings</button>
    </form>

    ${createNavbar()}
  `;
}

function createGamePage() {
  return `
    <h1>Matches Game</h1>
    <div id="game-state">
      <p id="current-player"></p>
      <p id="matches-remaining"></p>
      <p id="prompt"></p>
      <input type="number" id="matches-to-remove" required />
      <button id="submit-move">Remove Matches</button>
    </div>

    ${createNavbar()}
  `;
}

export { createLandingPage, createSettingsPage, createGamePage };
