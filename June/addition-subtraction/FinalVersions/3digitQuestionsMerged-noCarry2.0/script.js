// --- USER-PROVIDED CODE (PRESERVED) ---
// Helper object to map classes back to a column index and tag name
const classToColData = {
  "hundred-visual": { index: 0, tag: "hundred" },
  "ten-visual": { index: 1, tag: "ten" },
  "unit-visual": { index: 2, tag: "unit" },
  "hundred-number": { index: 0, tag: "hundred" },
  "ten-number": { index: 1, tag: "ten" },
  "unit-number": { index: 2, tag: "unit" },
};
const columnMap = {
  1: "hundred-visual",
  2: "ten-visual",
  3: "unit-visual",
  4: "hundred-number",
  5: "ten-number",
  6: "unit-number",
};
//IMPORT ITEMS
const steppers = document.querySelectorAll(".stepper");
const [hVisual, tVisual, uVisual, hNumber, tNumber, uNumber] =
  document.querySelectorAll(".operations-container>button");
const [setBtn1, setBtn2] = document.querySelectorAll(".setBtn");
const opButtons = [hVisual, tVisual, uVisual, hNumber, tNumber, uNumber];
const nextButton = document.querySelector(".next-button");
const submitButton = document.querySelector("#submit-container button");
const ansDisplay = document.querySelector("#ans-display");
const instructionText = document.querySelector(".instruction-text");
// nextButton.disabled = false;
// submitButton.disabled = false;
const questions = [
  {
    num1: 171,
    num2: 225,
  },
  {
    num1: 322,
    num2: 455,
  },
  {
    num1: 331,
    num2: 333,
  },
];
let u1, u2, t1, t2, h1, h2, u3, t3, h3, overflowUnits, overflowTens;
//INITIALIZE VARIABLES
let current_number = [
    [0, 0, 0], // Row 1: [hundreds, tens, ones]
    [0, 0, 0], // Row 2
    [0, 0, 0], // Row 3
  ],
  ans = [
    [0, 0, 0], // Row 1: [hundreds, tens, ones]
    [0, 0, 0], // Row 2
  ],
  questionIndex = 0,
  unitsClone = null,
  tensClone = null;

const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);

let stepForQ = 0;
let stepQ = [];
let buttonsQ = [];
document
  .querySelectorAll(".stepper-btn")
  .forEach((button) =>
    button.addEventListener("click", () => playSound("click"))
  );

//UTILITY FUNCTIONS
function playSound(name) {
  const file = `sound/${name}.mp3`;
  const audio = new Audio(file);
  audio.play();
}
function toggleFullScreenOverlay(show) {
  const overlay = document.querySelector("#fullscreenOverlay");
  if (show) {
    overlay.classList.add("show");
  } else {
    overlay.classList.remove("show");
  }
}

function selectElements(fixedClass, includesString) {
  const elements = document.querySelectorAll(
    `.${fixedClass}[class*="${includesString}"]`
  );
  return elements;
}

function setSteppersVisibility(rowNum, includeStr) {
  const elements = selectElements("row-" + rowNum, includeStr);
  elements.forEach((element) => {
    const stepper = element.querySelector(".stepper");
    if (stepper) {
      stepper.style.visibility = "visible";
    }
  });
}
function hideAllSteppers() {
  document.querySelectorAll(".stepper").forEach((stepper) => {
    stepper.style.visibility = "hidden";
  });
}
function appendBlock(rowNum, tag) {
  const cell = document.querySelector(`.row-${rowNum} .${tag}-block`);
  if (!cell) return;
  const img = document.createElement("img");
  let src = "";
  src = "assets/" + tag + ".png";
  img.src = src;
  cell.appendChild(img);
}
function removeBlock(rowNum, tag) {
  const cell = document.querySelector(`.row-${rowNum} .${tag}-block`);
  if (cell && cell.lastElementChild) {
    cell.lastElementChild.remove();
  }
}
function setNumberDisplay(rowNum, tag, num) {
  const cell = document.querySelector(
    `.row-${rowNum}.${tag}-number .number-display`
  );
  if (!cell) return;
  let multiplier = 1;
  if (tag === "hundred") multiplier = 100;
  if (tag === "ten") multiplier = 10;
  cell.textContent = num * multiplier;
}
function setCornerBadge(rowNum, tag, num) {
  const cell = document.querySelector(
    `.row-${rowNum}.${tag}-visual .corner-badge`
  );
  if (!cell) return;
  cell.textContent = num;
}
function resetVisuals() {
  document
    .querySelectorAll(
      ".row-1 .hundred-block, .row-1 .ten-block, .row-1 .unit-block, .row-2 .hundred-block, .row-2 .ten-block, .row-2 .unit-block"
    )
    .forEach((el) => (el.innerHTML = ""));
  document
    .querySelectorAll(
      ".row-3 .hundred-block, .row-3 .ten-block, .row-3 .unit-block"
    )
    .forEach((el) => {
      el.querySelectorAll("img.appear").forEach((img) =>
        img.classList.remove("appear")
      );
    });
}
function updateDigitLabel(tag) {
  const extra =
    tag === "hundred" ? null : tag === "ten" ? tensClone : unitsClone;
  const num = document.querySelectorAll(
    `.row-3 .${tag}-block img.appear`
  ).length;

  const total = num + (extra ? 1 : 0) * 10;
  setCornerBadge(3, tag, total);
}
function resetNumbers() {
  document
    .querySelectorAll(".corner-badge")
    .forEach((el) => (el.textContent = "0"));
  document
    .querySelectorAll(".hundred-number .number-display")
    .forEach((el) => (el.textContent = "000"));
  document
    .querySelectorAll(".ten-number .number-display")
    .forEach((el) => (el.textContent = "00"));
  document
    .querySelectorAll(".unit-number .number-display")
    .forEach((el) => (el.textContent = "0"));
}
function setAnsDisplay() {
  ansDisplay.innerHTML = `<span>${current_number[2][0]}</span><span>${current_number[2][1]}</span><span>${current_number[2][2]}</span>`;
}
function fillAnswerDisplay(){
  const spans = document.querySelectorAll("#ans-display span");
  spans[0].textContent = current_number[2][0];
  spans[1].textContent = current_number[2][1];
  spans[2].textContent = current_number[2][2];
}
function colorHeader(){
  const problemStatementSpans = document.querySelectorAll(".problem-statement h1 span");
  const ansSpans = document.querySelectorAll("#ans-display span");
  problemStatementSpans[0].classList.add("orange")
  problemStatementSpans[1].classList.add("blue")
  problemStatementSpans[2].classList.add("pink")
  problemStatementSpans[4].classList.add("orange");
  problemStatementSpans[5].classList.add("blue");
  problemStatementSpans[6].classList.add("pink");
  ansSpans[0].classList.add("orange");
  ansSpans[1].classList.add("blue");
  ansSpans[2].classList.add("pink");
}
function handleStepperClick(event) {
  const button = event.target.closest(".stepper-btn");
  if (!button) return;

  const gridItem = button.closest(".grid-item");
  let rowNum, colData;

  // Find the row number and column data from the element's classes
  gridItem.classList.forEach((cls) => {
    if (cls.startsWith("row-")) {
      rowNum = parseInt(cls.split("-")[1]);
    }
    if (classToColData[cls]) {
      colData = classToColData[cls];
    }
  });

  if (!rowNum || !colData) return;

  const rowIndex = rowNum - 1;
  const colIndex = colData.index;
  const tag = colData.tag;
  let currentValue = current_number[rowIndex][colIndex];

  // Update state and call user's functions to update the DOM
  if (button.classList.contains("plus") && currentValue < 9) {
    vibrateOff();
    setColorToAnsDisplay();
    current_number[rowIndex][colIndex]++;
  } else if (button.classList.contains("minus") && currentValue > 0) {
    vibrateOff();
    setColorToAnsDisplay();
    current_number[rowIndex][colIndex]--;
  }

  // Update the corresponding number display in the same row
  setNumberDisplay(rowNum, tag, current_number[rowIndex][colIndex]);
  // setAnsDisplay();
  fillAnswerDisplay()
}
function makeDull(src) {
  src.src = `assets/tenSemi.png`;
  src.classList.add("transparent");
}
function initializeTextContents() {
  // Set Grid Headings
  const headings = document.querySelectorAll(
    ".grid-headings-container .grid-heading"
  );
  headings[0].textContent = texts.headings.hundreds;
  headings[1].textContent = texts.headings.tens;
  headings[2].textContent = texts.headings.ones;
  const problemStatement = document.querySelector(".problem-statement h1");
  problemStatement.innerHTML = `<span>${h1}</span><span>${t1}</span><span>${u1}</span><span>&nbsp;+&nbsp;</span><span>${h2}</span><span>${t2}</span><span>${u2}</span><span>&nbsp;=&nbsp;</span>`;
  
  // Set Static Buttons
  document.querySelector(".next-button").textContent = texts.buttons.next;

  updateInstructionText("set");
}

function updateInstructionText(key) {
  const text = texts.instructions[key];
  document.querySelector(".instruction-text").textContent = text;
}

// ANIMATIONS
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function vibrateElement(element) {
  element.classList.add("vibrate-x");
}

function vibrateOff() {
  document.querySelectorAll(".vibrate-x").forEach((element) => {
    element.classList.remove("vibrate-x");
  });
}
function setColorToAnsDisplay(text) {
  if (text === "red") {
    ansDisplay.classList.remove("green");
    ansDisplay.classList.add("red");
    return;
  }
  if (text === "green") {
    ansDisplay.classList.add("green");
    ansDisplay.classList.remove("red");
    return;
  }
  ansDisplay.classList.remove("green");
  ansDisplay.classList.remove("red");
}
function checkAnswer() {
  vibrateOff();
  let isCorrect = true;
  const userAns = current_number[2];
  const correctAns = ans[2];

  for (let i = 0; i < 3; i++) {
    if (userAns[i] !== correctAns[i]) {
      isCorrect = false;
      const tag = i === 0 ? "hundred" : i === 1 ? "ten" : "unit";
      const wrongNumberDisplay = document.querySelector(
        `.row-3.${tag}-number .number-display`
      );
      if (wrongNumberDisplay) {
        vibrateElement(wrongNumberDisplay);
      }
    }
  }

  if (isCorrect) {
    playSound("correct");
    confettiBurst();
    updateInstructionText("correct");
    instructionText.classList.remove("red");
    instructionText.classList.add("green");
    setColorToAnsDisplay("green");
    setNextButtonText("next");
    nextButton.onclick = handleNext;
    hideAllSteppers();
  } else {
    playSound("wrong");
    setColorToAnsDisplay("red");
    updateInstructionText("wrong");
    instructionText.classList.add("red");
  }

  return isCorrect;
}
function setNextButtonText(tag) {
  nextButton.textContent = texts.buttons[tag];
}
function initializeBoard() {
  const problem = questions[questionIndex];
  if (!problem) {
    window.location = "./answerInBlocks2.0/index.html";
    return;
  }
  nextButton.onclick = checkAnswer;
  setColorToAnsDisplay();
  
  const num1 = problem.num1;
  const num2 = problem.num2;
  [h1, t1, u1] = num1.toString().split("").map(Number);
  [h2, t2, u2] = num2.toString().split("").map(Number);
  [h3, t3, u3] = (num1 + num2).toString().split("").map(Number);
  overflowUnits = u1 + u2 > 9 ? 1 : 0;
  overflowTens = t1 + t2 + overflowUnits > 9 ? 1 : 0;
  // document.querySelector(
  //   ".problem-statement h1"
  // ).textContent = `${num1} + ${num2} = `;
  current_number = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  setAnsDisplay();
  ans = [
    [h1, t1, u1],
    [h2, t2, u2],
    [h3, t3, u3],
  ];
  initializeTextContents();
  colorHeader()

  resetVisuals();
  resetNumbers();
  for (let rowNum = 1; rowNum <= 2; rowNum++) {
    const rowIndex = rowNum - 1;
    const [h, t, u] = ans[rowIndex];
    const tags = ["hundred", "ten", "unit"];
    const values = [h, t, u];

    for (let i = 0; i < 3; i++) {
      const tag = tags[i];
      const value = values[i];
      // Add visual blocks
      for (let j = 0; j < value; j++) {
        appendBlock(rowNum, tag);
      }
      // Update corner badge and number display
      setCornerBadge(rowNum, tag, value);
    }
  }
  setSteppersVisibility(3, "-number");
  setNextButtonText("submit");
  instructionText.classList.remove("green");
}

// --- START THE APP ---
initializeBoard();
const gridContainer = document.querySelector(".grid-container");
gridContainer.addEventListener("click", handleStepperClick);
function handleNext() {
  questionIndex++;
  initializeBoard();
}

function confettiBurst() {
  const duration = 1 * 1000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 360,
      origin: { x: 0.5, y: 0.5 },
    });
    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}
