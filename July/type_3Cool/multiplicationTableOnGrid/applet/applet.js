// applet/applet.js

// --- DOM ELEMENTS ---
const gridContainer = document.getElementById("grid-container");
const numpadButtons = document.querySelectorAll(".numpad-btn");
const feedbackSection = document.getElementById("feedback-section");
const restartButton = document.getElementById("restart-btn");
const context = document.querySelector("#context");
const instruction = document.getElementById("instruction");
const numpad = document.getElementById("numpad");

// --- GAME CONFIG ---
const gridSize = 10;
const questions = [
  { num1: 3, num2: 6, answer: 18 },
  { num1: 4, num2: 7, answer: 28 },
  { num1: 5, num2: 8, answer: 40 },
  { num1: 6, num2: 9, answer: 54 },
  { num1: 6, num2: 7, answer: 42 },
  { num1: 8, num2: 6, answer: 48 },
  { num1: 9, num2: 7, answer: 63 },
  { num1: 3, num2: 8, answer: 24 },
  { num1: 4, num2: 9, answer: 36 },
  { num1: 5, num2: 9, answer: 45 },
  { num1: 6, num2: 6, answer: 36 },
  { num1: 7, num2: 7, answer: 49 },
  { num1: 8, num2: 8, answer: 64 },
  { num1: 9, num2: 9, answer: 81 },
  { num1: 7, num2: 8, answer: 56 },
  { num1: 2, num2: 8, answer: 16 },
  { num1: 3, num2: 7, answer: 21 },
  { num1: 4, num2: 5, answer: 20 },
  { num1: 5, num2: 6, answer: 30 },
  { num1: 4, num2: 4, answer: 16 },
];
const questionCoords = new Set(questions.map((q) => `${q.num1}-${q.num2}`));

// --- GAME STATE ---
let currentQuestionIndex = 0;
let activeCell = null;
let gridCells = [];
let incorrectAttempts = 0;
let isWaitingForProceed = false;
let isFirstQuestion = true; // Flag for first question

/**
 * Helper function to update feedback text in the context box.
 * @param {string} text - The HTML string to display.
 * @param {string} className - A class to add for styling (e.g., 'correct', 'wrong').
 */
function updateFeedbackText(text, className) {
  instruction.innerHTML = text;
  // instruction.classList.remove("red", "green", "blue");
  
}

/**
 * Initializes and creates the multiplication grid.
 */
function createGrid() {
  gridContainer.innerHTML = "";
  gridCells = [];
  for (let row = 0; row < gridSize; row++) {
    const rowCells = [];
    for (let col = 0; col < gridSize; col++) {
      const cell = document.createElement("div");
      cell.classList.add("grid-cell");
      cell.dataset.row = row;
      cell.dataset.col = col;

      if (row === 0 && col > 0) {
        cell.textContent = col;
        cell.classList.add("header");
      } else if (col === 0 && row > 0) {
        cell.textContent = row;
        cell.classList.add("header");
      } else if (row > 0 && col > 0) {
        cell.dataset.answer = row * col;
      }

      gridContainer.appendChild(cell);
      rowCells.push(cell);
    }
    gridCells.push(rowCells);
  }
}

/**
 * Pre-fills some cells with answers that are not part of the main questions.
 */
function prefillGrid() {
  const prefillCount = 30;
  let filled = 0;
  while (filled < prefillCount) {
    const r = Math.floor(Math.random() * 9) + 1;
    const c = Math.floor(Math.random() * 9) + 1;
    const coord = `${r}-${c}`;
    const cell = gridCells[r][c];

    if (!questionCoords.has(coord) && !cell.classList.contains("prefilled")) {
      cell.textContent = r * c;
      cell.classList.add("prefilled");
      filled++;
    }
  }
}

/**
 * Loads the current question and sets up the UI for it.
 */
function loadQuestion() {
  setJAXpose("normal");
  incorrectAttempts = 0;
  isWaitingForProceed = false;

  // Clear previous highlights and states
  document.querySelectorAll(".highlight, .target, .active").forEach((el) => {
    el.classList.remove("highlight", "target", "active");
  });

  if (activeCell) {
    activeCell.classList.remove("active", "target");
    activeCell = null;
  }

  if (currentQuestionIndex >= questions.length) {
    context.querySelector("h3").textContent =
      leftInstructions.activity_complete;
    updateFeedbackText(leftInstructions.well_done);
    hideFtue();
    setTimeout(() => triggerFullScreenOverlay(true), 500);
    return;
  }

  const question = questions[currentQuestionIndex];
  const { num1, num2 } = question;

  context.querySelector("h3").textContent = `${dataForQuestions.question} ${
    currentQuestionIndex + 1
  }`;
  context.querySelector(
    "p:first-of-type"
  ).textContent = `${dataForQuestions.what_is} ${num1} × ${num2}?`;

  // Highlight row up to (and including) the target
  for (let i = 1; i <= num2; i++) {
    gridCells[num1][i].classList.add("highlight");
  }
  // Highlight column up to (and including) the target
  for (let i = 1; i <= num1; i++) {
    gridCells[i][num2].classList.add("highlight");
  }
  // Highlight the specific headers
  gridCells[0][num2].classList.add("highlight");
  gridCells[num1][0].classList.add("highlight");

  // Set target cell
  activeCell = gridCells[num1][num2];
  activeCell.textContent = ""; // Clear for input
  activeCell.classList.add("target");

  if (isFirstQuestion) {
    numpad.style.pointerEvents = "none";
    context.querySelector("h3").style.display = "none";

    context.querySelector("p:first-of-type").style.display = "none";
    updateFeedbackText(leftInstructions.initial_prompt);
    showFtue(activeCell);
    activeCell.classList.add("active");
    isFirstQuestion = false; // Set flag to false after first question
  } else {
    activeCell.classList.add("active");
    updateFeedbackText(leftInstructions.solve_the_problem);
    hideFtue();
  }
}

/**
 * Clears feedback when a number is pressed.
 */
function clearFeedback() {
  if (instruction.classList.contains("red")) {
    updateFeedbackText(leftInstructions.solve_the_problem);
  }
}

/**
 * Handles numpad button clicks for input.
 */
function handleNumpadClick(event) {
  if (
    !activeCell ||
    !activeCell.classList.contains("active") ||
    isWaitingForProceed
  )
    return;

  playSound("click");
  const key = event.currentTarget.dataset.key;

  if (key === "submit") {
    checkAnswer();
  } else if (key === "clear") {
    activeCell.textContent = "";
  } else {
    clearFeedback();
    if (activeCell.textContent.length < 4) {
      activeCell.textContent += key;
    }
  }
}

/**
 * Checks if the user's answer is correct.
 */
function checkAnswer() {
  if (!activeCell || !activeCell.classList.contains("active")) return;

  const userAnswer = activeCell.textContent;
  const { num1, num2, answer } = questions[currentQuestionIndex];
  const correctAnswer = answer.toString();

  if (userAnswer === correctAnswer) {
    playSound("correct");
    setJAXpose("happy");
    updateFeedbackText(leftInstructions.correct_feedback, "correct");

    activeCell.classList.remove("target", "active", "wrong");
    activeCell.classList.add("correct");
    activeCell.textContent = correctAnswer;

    // Remove all highlights
    document
      .querySelectorAll(".highlight")
      .forEach((el) => el.classList.remove("highlight"));

    activeCell = null;
    currentQuestionIndex++;

    setTimeout(() => {
      loadQuestion();
    }, 1500);
  } else {
    incorrectAttempts++;
    playSound("wrong");
    setJAXpose("sad");

    activeCell.classList.add("wrong");
    if (incorrectAttempts >= 2) {
      isWaitingForProceed = true; // Set state to wait for click
      updateFeedbackText(
        leftInstructions.twice_incorrect
          .replace("{{num1}}", num1)
          .replace("{{num2}}", num2)
          .replace("{{answer}}", answer),
        "wrong"
      );
      activeCell.textContent = answer;
      // activeCell.classList.add("correct", "active");
      // activeCell.classList.remove("wrong");
      // Keep .active class to show it's the focus, but isWaitingForProceed will block numpad
      showFtue(activeCell); // Nudge user to click the cell
    } else {
      updateFeedbackText(leftInstructions.wrong_feedback, "wrong");
      setTimeout(() => {
        activeCell.classList.remove("wrong");
      }, 500);
      activeCell.textContent = "";
    }
  }
}

/**
 * Starts or restarts the game.
 */
function startGame() {
  currentQuestionIndex = 0;
  activeCell = null;
  isWaitingForProceed = false;
  isFirstQuestion = true; // Reset flag on start
  createGrid();
  prefillGrid();
  loadQuestion();
}

/**
 * Handles clicks on the grid to activate cells or proceed.
 */
function handleGridClick(event) {
  const clickedCell = event.target.closest(".grid-cell");
  // Only care about clicks on the current target cell
  if (!clickedCell || clickedCell !== activeCell) return;

  // Case 1: Waiting for user to click to proceed after 2 wrong answers.
  if (isWaitingForProceed) {
    playSound("click");
    hideFtue();
    isWaitingForProceed = false;
    currentQuestionIndex++;
    loadQuestion();
    return;
  }

  // Case 2: User clicks the target cell to start answering (only for first question).
  if (clickedCell.classList.contains("target")) {
    numpad.style.pointerEvents = "auto";
    context.querySelector("h3").style.display = "block";
    context.querySelector("p:first-of-type").style.display = "block";
    playSound("click");
    hideFtue();
    clickedCell.classList.add("active");
    updateFeedbackText(leftInstructions.solve_the_problem);
  }
}

// --- EVENT LISTENERS ---
numpadButtons.forEach((button) =>
  button.addEventListener("click", handleNumpadClick)
);
gridContainer.addEventListener("click", handleGridClick);

// --- INITIALIZE GAME ---
startGame();
