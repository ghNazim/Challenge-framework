// The DOMContentLoaded listener has been removed as the script is loaded at the end of the body.

const levels = [
  // Level 1
  [
    { num1: 30, num2: 5, missing: "product" },
    { num1: 200, num2: 3, missing: "num2" },
    { num1: 70, num2: 8, missing: "product" },
    { num1: 600, num2: 10, missing: "num1" },
    { num1: 60, num2: 7, missing: "product" },
  ],
  // Level 2
  [
    { num1: 800, num2: 4, missing: "product" },
    { num1: 400, num2: 5, missing: "num2" },
    { num1: 700, num2: 2, missing: "num1" },
    { num1: 6000, num2: 3, missing: "num2" },
    { num1: 100, num2: 9, missing: "product" },
  ],
  // Level 3
  [
    { num1: 300, num2: 7, missing: "num1" },
    { num1: 1000, num2: 5, missing: "num2" },
    { num1: 500, num2: 6, missing: "product" },
    { num1: 90, num2: 9, missing: "num2" },
    { num1: 800, num2: 10, missing: "num1" },
  ],
];

const problemGrid = document.getElementById("problem-grid");
const numpad = document.getElementById("numpad");
const numpadButtons = document.querySelectorAll(".numpad-btn");
// Using the main nextButton from app.js
// const nextButton = document.getElementById("next-button");

let activeCell = null;
let currentLevel = 0;
let correctAnswers = 0;

/**
 * Loads a level by generating the problem grid.
 * @param {number} levelIndex - The index of the level to load.
 */
function loadLevel(levelIndex) {
  const problems = levels[levelIndex];
  problemGrid.innerHTML = "";
  correctAnswers = 0;
  nextButton.disabled = true;

  if (!problems) {
    // All levels are completed
    problemGrid.innerHTML = `<h2 class="completion-message">${leftInstructions.all_levels_complete} ${leftInstructions.well_done}</h2>`;
    updateInstruction(
      leftInstructions.all_levels_complete,
      leftInstructions.well_done
    );
    setJAXpose("happy");
    playSound("congrats");
    nextButton.style.display = "none";
    triggerFullScreenOverlay(true); // Show the final overlay
    return;
  }

  // Set initial instructions and character pose for the level
  updateInstruction(leftInstructions.click_a_box, "");
  setJAXpose("normal");

  problems.forEach((p) => {
    const product = p.num1 * p.num2;
    const row = document.createElement("div");
    row.className = "problem-row";

    const cellsData = [
      { value: p.num1, type: "num1" },
      { value: "×", type: "operator" },
      { value: p.num2, type: "num2" },
      { value: "=", type: "operator" },
      { value: product, type: "product" },
    ];

    cellsData.forEach((c) => {
      const cellEl = document.createElement("div");
      cellEl.textContent = c.value;
      if (c.type === "operator") {
        cellEl.className = "operator-cell";
      } else {
        cellEl.className = "cell";
        if (c.type === p.missing) {
          cellEl.classList.add("missing-cell");
          cellEl.dataset.answer = c.value;
          cellEl.textContent = "";
          cellEl.addEventListener("click", handleCellClick);
        }
      }
      row.appendChild(cellEl);
    });
    problemGrid.appendChild(row);
  });
}

function showNumpad() {
  numpad.classList.add("visible");
}

function hideNumpad() {
  numpad.classList.remove("visible");
  if (activeCell) {
    activeCell.classList.remove("active");
    activeCell = null;
  }
}

/**
 * Handles clicks on the missing cells in the problem grid.
 * @param {Event} event - The click event.
 */
function handleCellClick(event) {
  const clickedCell = event.currentTarget;
  if (clickedCell.classList.contains("correct")) {
    return;
  }

  playSound("click");
  updateInstruction(leftInstructions.enter_answer, "");
  setJAXpose("normal");

  if (activeCell && activeCell !== clickedCell) {
    activeCell.classList.remove("active");
  }

  activeCell = clickedCell;
  activeCell.classList.add("active");
  showNumpad();
}

/**
 * Handles clicks on the numpad buttons.
 * @param {Event} event - The click event.
 */
function handleNumpadClick(event) {
  if (!activeCell) {
    return;
  }
  const key = event.currentTarget.dataset.key;
  playSound("click");

  if (key === "submit") {
    checkAnswer();
  } else if (key === "clear") {
    activeCell.textContent = "";
  } else if (activeCell.textContent.length < 7) {
    activeCell.textContent += key;
  }
}

/**
 * Checks the user's answer against the correct answer.
 */
function checkAnswer() {
  if (!activeCell) {
    return;
  }
  const userAnswer = activeCell.textContent;
  const correctAnswer = activeCell.dataset.answer;

  if (userAnswer === correctAnswer) {
    playSound("correct");
    setJAXpose("happy");
    updateInstruction(
      leftInstructions.correct_answer,
      leftInstructions.good_job
    );

    activeCell.classList.remove("active", "wrong");
    activeCell.classList.add("correct");
    activeCell.textContent = correctAnswer;
    activeCell.removeEventListener("click", handleCellClick);

    correctAnswers++;
    hideNumpad();

    if (correctAnswers === levels[currentLevel].length) {
      nextButton.disabled = false;
      showFtue(nextButton);
      updateInstruction(
        leftInstructions.level_complete,
        leftInstructions.click_next
      );
      setJAXpose("happy");
      playSound("congrats");
      confettiBurst();
    }
  } else {
    playSound("wrong");
    setJAXpose("sad");
    updateInstruction(leftInstructions.wrong_answer, "");
    activeCell.classList.add("wrong");
    activeCell.textContent = "";
    setTimeout(() => {
      if (activeCell) {
        activeCell.classList.remove("wrong");
      }
    }, 500);
  }
}

// Event listener for the main "Next" button to advance levels.
nextButton.addEventListener("click", () => {
  if (!nextButton.disabled) {
    playSound("click");
    hideFtue();
    currentLevel++;
    loadLevel(currentLevel);
  }
});

// Initial load of the first level.
loadLevel(currentLevel);

// Add event listeners to all numpad buttons.
numpadButtons.forEach((button) => {
  button.addEventListener("click", handleNumpadClick);
});

// Logic to hide numpad when clicking outside the interactive areas.
document.body.addEventListener(
  "click",
  (e) => {
    const isClickInsideApp = e.target.closest(".app-container");
    const isClickInsideNumpad = e.target.closest(".numpad");

    if (!isClickInsideApp && !isClickInsideNumpad) {
      hideNumpad();
    } else {
      const isMissingCell = e.target.closest(".missing-cell");
      if (!isMissingCell && !isClickInsideNumpad) {
        hideNumpad();
      }
    }
  },
  true
);
// triggerFullScreenOverlay(true)
