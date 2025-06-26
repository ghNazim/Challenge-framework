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

//IMPORT ITEMS
const nextButton = document.querySelector(".next-button");
const submitButton = document.querySelector("#submit-container button");
const ansDisplay = document.querySelector("#ans-display");

const questions = [
  {
    num1: 167,
    num2: 256,
  },
  {
    num1: 225,
    num2: 295,
  },
  {
    num1: 199,
    num2: 299,
  },
];
let u1, t1, h1, u2, t2, h2, u3, t3, h3;
//INITIALIZE VARIABLES
let current_number = [
    [0, 0, 0], // Row 1: [hundreds, tens, ones]
    [0, 0, 0], // Row 2
    [0, 0, 0], // Row 3
  ],
  ans = [
    [0, 0, 0], // Row 1: [hundreds, tens, ones]
    [0, 0, 0], // Row 2
    [0, 0, 0], // Row 3
  ],
  questionIndex = 0;

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

function setSteppersVisibility(rowNum, includeStr) {
  const elements = document.querySelectorAll(
    `.row-${rowNum}[class*="${includeStr}"]`
  );
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
  cell.textContent = String(num * multiplier).padStart(
    tag === "unit" ? 1 : tag === "ten" ? 2 : 3,
    "0"
  );
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
    .querySelectorAll(".hundred-block, .ten-block, .unit-block")
    .forEach((el) => (el.innerHTML = ""));
}
function resetNumbers() {
  for (let rowNum = 1; rowNum <= 2; rowNum++) {
    setNumberDisplay(rowNum, "hundred", 0);
    setNumberDisplay(rowNum, "ten", 0);
    setNumberDisplay(rowNum, "unit", 0);
  }
  document
    .querySelectorAll(".corner-badge")
    .forEach((el) => (el.textContent = "0"));
}
function setAnsDisplay() {
  const [h, t, u] = current_number[2];
  const fullNumber = String(h) + String(t) + String(u);
  ansDisplay.textContent = fullNumber.padStart(3, "0");
}

function handleStepperClick(event) {
  const button = event.target.closest(".stepper-btn");
  if (!button) return;

  const gridItem = button.closest(".grid-item");
  let rowNum, colData;

  gridItem.classList.forEach((cls) => {
    if (cls.startsWith("row-")) {
      rowNum = parseInt(cls.split("-")[1]);
    }
    if (classToColData[cls]) {
      colData = classToColData[cls];
    }
  });

  if (rowNum !== 3 || !colData) return; // Only process clicks for row 3

  const rowIndex = 2; // We are always changing the 3rd row.
  const colIndex = colData.index;
  const tag = colData.tag;
  let currentValue = current_number[rowIndex][colIndex];

  if (button.classList.contains("plus") && currentValue < 9) {
    vibrateOff();
    setColorToAnsDisplay();
    current_number[rowIndex][colIndex]++;
    appendBlock(rowNum, tag);
  } else if (button.classList.contains("minus") && currentValue > 0) {
    vibrateOff();
    setColorToAnsDisplay();
    current_number[rowIndex][colIndex]--;
    removeBlock(rowNum, tag);
  }

  setCornerBadge(rowNum, tag, current_number[rowIndex][colIndex]);
  setAnsDisplay();
}

function initializeTextContents() {
  document.querySelector(".next-button").textContent = "Next";
  document.querySelector("#submit-container button").textContent = "Submit";
  updateInstructionText("set");
}
function updateInstructionText(key) {
  const texts = {
    set: "Use the blocks in the bottom row to build the answer.",
    correct: "That's right! Great job!",
    wrong: "Not quite, try again!",
  };
  const text = texts[key];
  document.querySelector(".instruction-text").textContent = text;
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
      const wrongBlock = document.querySelector(
        `.row-3.${tag}-visual .block-placeholder`
      );
      if (wrongBlock) {
        vibrateElement(wrongBlock);
      }
    }
  }

  if (isCorrect) {
    playSound("correct");
    updateInstructionText("correct");
    setColorToAnsDisplay("green");
    nextButton.disabled = false;
    submitButton.disabled = true;
    hideAllSteppers();
  } else {
    playSound("wrong");
    setColorToAnsDisplay("red");
    updateInstructionText("wrong");
  }

  return isCorrect;
}

function initializeBoard() {
  nextButton.disabled = true;
  submitButton.disabled = false;
  setColorToAnsDisplay();
  initializeTextContents();

  const problem = questions[questionIndex];
  const num1 = problem.num1;
  const num2 = problem.num2;
  const sum = num1 + num2;

  [h1, t1, u1] = num1.toString().padStart(3, "0").split("").map(Number);
  [h2, t2, u2] = num2.toString().padStart(3, "0").split("").map(Number);
  [h3, t3, u3] = sum.toString().padStart(3, "0").split("").map(Number);

  document.querySelector(
    ".problem-statement h1"
  ).textContent = `${num1} + ${num2} = `;

  ans = [
    [h1, t1, u1],
    [h2, t2, u2],
    [h3, t3, u3],
  ];

  current_number = [ans[0], ans[1], [0, 0, 0]];

  resetVisuals();
  resetNumbers();

  // Populate number displays for row 1 and 2
  for (let rowNum = 1; rowNum <= 2; rowNum++) {
    const [h, t, u] = ans[rowNum - 1];
    setNumberDisplay(rowNum, "hundred", h);
    setNumberDisplay(rowNum, "ten", t);
    setNumberDisplay(rowNum, "unit", u);
  }

  setAnsDisplay();
  hideAllSteppers();
  setSteppersVisibility(3, "-visual");

  const gridContainer = document.querySelector(".grid-container");
  gridContainer.addEventListener("click", handleStepperClick);
}

// --- START THE APP ---
initializeBoard();
function handleNext() {
  questionIndex = (questionIndex + 1) % questions.length;
  initializeBoard();
}
nextButton.addEventListener("click", handleNext);
submitButton.addEventListener("click", checkAnswer);
