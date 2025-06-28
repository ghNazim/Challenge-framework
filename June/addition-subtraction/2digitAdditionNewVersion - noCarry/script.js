// --- USER-PROVIDED CODE (MODIFIED) ---

// Helper object to map classes back to a column index and tag name
const classToColData = {
  "ten-visual": { index: 0, tag: "ten" },
  "unit-visual": { index: 1, tag: "unit" },
  "ten-number": { index: 0, tag: "ten" },
  "unit-number": { index: 1, tag: "unit" },
};
const columnMap = {
  1: "ten-visual",
  2: "unit-visual",
  3: "ten-number",
  4: "unit-number",
};
//IMPORT ITEMS
const steppers = document.querySelectorAll(".stepper");
const nextButton = document.querySelector(".next-button");
nextButton.addEventListener("click", () => playSound("click"));
const submitButton = document.querySelector("#fullscreenButton");
submitButton.textContent = texts.buttons.submit;
const problemStatement = document.querySelector(".problem-statement h1");
const highlightBox = document.querySelector("#highlight-box");

let u1, u2, t1, t2, u3, t3, sum, overflowUnits, filledContext;
//INITIALIZE VARIABLES
let current_number = [
    [0, 0], // Row 1: [tens, ones]
    [0, 0], // Row 2
  ],
  ans = [
    [0, 0], // Row 1: [tens, ones]
    [0, 0], // Row 2
  ],
  questionIndex = 0,
  unitsClone = null;

const contextMcqData = {
  questions: [
    {
      questionTag: "qsn_unit", // "How many ones are there in total?"
      correctAnswer: 14,
      options: [15, 12, 14, 17],
    },
    {
      // Question 1: For Tens
      questionTag: "qsn_ten", // "How many tens are there in total?"
      correctAnswer: 3,
      options: [2, 3, 4, 5],
    },
  ],
};

const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
const tensFirst = createUnitStackOnTenRod();

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
function setJaxpose(pose) {
  const zack = document.getElementById("character");
  zack.src = `assets/JAX${pose}.png`;
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
  cell.textContent = num;
}
function resetVisuals() {
  document
    .querySelectorAll(
      ".row-1 .ten-block, .row-1 .unit-block, .row-2 .ten-block, .row-2 .unit-block"
    )
    .forEach((el) => (el.innerHTML = ""));
  document
    .querySelectorAll(".row-3 .ten-block, .row-3 .unit-block")
    .forEach((el) => {
      el.querySelectorAll("img.appear").forEach((img) =>
        img.classList.remove("appear")
      );
    });
}
function updateDigitLabel(tag) {
  const extra = tag === "ten" ? 0 : unitsClone ? 1 : 0;
  const num = document.querySelectorAll(
    `.row-3 .${tag}-block img.appear`
  ).length;

  const total = num + (extra ? 1 : 0) * 10;
}
function resetNumbers() {
  document
    .querySelectorAll(".ten-number .number-display")
    .forEach((el) => (el.textContent = ""));
  document
    .querySelectorAll(".unit-number .number-display")
    .forEach((el) => (el.textContent = ""));
  document
    .querySelectorAll(".row-3 .number-display")
    .forEach((el) => (el.textContent = ""));
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
    playSound("click");
    current_number[rowIndex][colIndex]++;
    appendBlock(rowNum, tag);
  } else if (button.classList.contains("minus") && currentValue > 0) {
    vibrateOff();
    playSound("click");
    current_number[rowIndex][colIndex]--;
    removeBlock(rowNum, tag);
  }

  // Update the corresponding number display in the same row
}
function makeDull(src) {
  src.classList.add("transparent");
}
function initializeTextContents() {
  // Set Grid Headings
  const headings = document.querySelectorAll(
    ".grid-headings-container .grid-heading"
  );
  headings[0].textContent = headings[2].textContent = texts.headings.tens;
  headings[1].textContent = headings[3].textContent = texts.headings.ones;

  updateInstructionText("set1");
}
function updateInstructionText(key) {
  const text = texts.instructions[key];
  document.querySelector(".instruction-text").textContent = text;
}
/**
 * Initializes the applet with the first problem from the questions array.
 */

// ANIMATIONS
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// ANIMATIONS-------------------------------------------------
function animateCloneToTarget(
  sourceElement,
  targetElement,
  onStart,
  onComplete
) {
  const targetRect = targetElement.getBoundingClientRect();
  const clone = createClone(sourceElement);
  onStart?.();
  animateClone(clone, targetRect, onComplete);
}
function promiseWrapper(func, sourceEl, targetEl, onStart, onEnd) {
  return new Promise((resolve) => {
    func(
      sourceEl,
      targetEl,
      () => {
        onStart?.();
      },
      () => {
        onEnd?.();
        resolve();
      }
    );
  });
}
function createClone(sourceElement) {
  const clone = sourceElement.cloneNode(true);
  const styles = window.getComputedStyle(sourceElement);
  clone.id = "";
  const sourceRect = sourceElement.getBoundingClientRect();
  clone.style.position = "absolute";
  clone.style.margin = "0"; // Reset margins
  clone.style.boxSizing = "border-box"; // Consistent box model
  clone.style.zIndex = "50"; // Ensure it's on top during animation
  clone.style.backgroundColor = styles.backgroundColor;
  // Set initial size and position (relative to the document)
  clone.style.width = `${sourceRect.width}px`;
  clone.style.height = `${sourceRect.height}px`;
  clone.style.top = `${sourceRect.top + window.scrollY}px`;
  clone.style.left = `${sourceRect.left + window.scrollX}px`;
  clone.style.transitionProperty = "top, left, width, height";
  clone.style.transitionDuration = `500ms`;
  clone.style.transitionTimingFunction = "ease-in-out";
  document.body.appendChild(clone);
  return clone;
}

function animateClone(clone, targetRect, onComplete) {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      clone.style.top = `${targetRect.top + window.scrollY}px`;
      clone.style.left = `${targetRect.left + window.scrollX}px`;
      clone.style.width = `${targetRect.width}px`;
      clone.style.height = `${targetRect.height}px`;
    });
  });

  // Clean up after the animation
  clone.addEventListener(
    "transitionend",
    function handleTransitionEnd() {
      clone.removeEventListener("transitionend", handleTransitionEnd);
      clone.parentNode.removeChild(clone);
      onComplete?.();
    },
    { once: true }
  );
}

async function unitsTopToBottom() {
  const topBlocks = document.querySelectorAll(".row-1 .unit-block img");
  const bottomBlocks = document.querySelectorAll(".row-3 .unit-block img");
  const t = topBlocks.length;
  const b = bottomBlocks.length;
  for (let i = 0; i < t; i++) {
    const src = topBlocks[t - 1 - i];
    const dest = bottomBlocks[i];
    await promiseWrapper(
      animateCloneToTarget,
      src,
      dest,
      () => {
        makeDull(src);
        // src.remove();
      },
      () => {
        dest.classList.add("appear");
        updateDigitLabel("unit");
      }
    );
  }
}

async function unitsMiddleToBottom() {
  const topBlocks = document.querySelectorAll(".row-2 .unit-block img");
  const bottomBlocks = document.querySelectorAll(".row-3 .unit-block img");
  const t = topBlocks.length;
  const b = bottomBlocks.length;
  const overflow = u1 + u2 >= 10;
  const till = overflow ? 10 - u1 : t;
  for (let i = 0; i < till; i++) {
    const src = topBlocks[t - 1 - i];
    const dest = bottomBlocks[u1 + i];
    await promiseWrapper(
      animateCloneToTarget,
      src,
      dest,
      () => {
        makeDull(src);
      },
      () => {
        dest.classList.add("appear");
        updateDigitLabel("unit");
      }
    );
  }
}
async function unitsMiddleToBottomAgain() {
  const topBlocks = document.querySelectorAll(
    ".row-2 .unit-block img:not(.transparent)"
  );
  const bottomBlocks = document.querySelectorAll(".row-3 .unit-block img");
  const t = topBlocks.length;
  const b = bottomBlocks.length;
  for (let i = 0; i < t; i++) {
    const src = topBlocks[t - 1 - i];
    const dest = bottomBlocks[i];
    await promiseWrapper(
      animateCloneToTarget,
      src,
      dest,
      () => {
        makeDull(src);
      },
      () => {
        dest.classList.add("appear");
        updateDigitLabel("unit");
      }
    );
  }
}

function cloneAndTranslateElement(sourceElement) {
  return new Promise((resolve) => {
    const clone = createClone(sourceElement);
    sourceElement
      .querySelectorAll("img")
      .forEach((img) => img.classList.remove("appear"));
    const cloneRect = clone.getBoundingClientRect();
    const originalRect = sourceElement.getBoundingClientRect();
    clone.style.top = `${originalRect.top + window.scrollY + rem}px`;
    clone.style.left = `${originalRect.left + window.scrollX - rem}px`;
    const computedStyle = window.getComputedStyle(sourceElement);

    // Copy layout-related styles to ensure the clone looks the same
    clone.style.display = computedStyle.display;
    clone.style.gap = computedStyle.gap;

    // For flex containers
    clone.style.flexDirection = computedStyle.flexDirection;
    clone.style.justifyContent = computedStyle.justifyContent;
    clone.style.alignItems = computedStyle.alignItems;

    // For grid containers (like the units-cell)
    clone.style.gridTemplateColumns = computedStyle.gridTemplateColumns;
    clone.style.gridAutoRows = computedStyle.gridAutoRows;
    clone.style.rowGap = computedStyle.rowGap;
    clone.style.columnGap = computedStyle.columnGap;
    clone.classList.add("wiggle");
    clone.classList.add("clone");
    resolve(clone);
  });
}
function createUnitStackOnTenRod() {
  // 1. Find the target element: the first ten-rod in the third row.
  const targetElement = document.querySelector(".row-3 .ten-block img");

  // 2. Get its position and dimensions.
  const targetRect = targetElement.getBoundingClientRect();

  // 3. Create the main container div.
  const container = document.createElement("div");
  container.className = "unit-stack-container"; // For styling
  container.style.position = "absolute";
  container.style.top = `${targetRect.top + window.scrollY}px`;
  container.style.left = `${targetRect.left + window.scrollX}px`;
  container.style.width = `${targetRect.width}px`;
  container.style.height = `${targetRect.height}px`;
  container.style.display = "flex";
  container.style.flexDirection = "column";

  // 4. Create and append the 10 inner squares.
  for (let i = 0; i < 10; i++) {
    const square = document.createElement("div");
    square.className = "unit-in-stack"; // For styling
    container.appendChild(square);
  }

  // 5. Append the container to the body.
  document.body.appendChild(container);

  return container; // Return the container in case it needs to be manipulated further
}
async function animateUnitsCloneToTen() {
  unitsClone.classList.remove("wiggle");
  const topBlocks = unitsClone.querySelectorAll("img");
  const bottomBlocks = document.querySelectorAll(".unit-in-stack");
  const animationPromises = [];
  topBlocks.forEach((src, i) => {
    const dest = bottomBlocks[i];
    // If there's no matching destination for a source block, skip it.
    if (!dest) return;
    const promise = promiseWrapper(
      animateCloneToTarget,
      src,
      dest,
      () => {
        // As soon as the animation starts, hide the source image in the clone.
        src.style.visibility = "hidden";
      },
      () => {
        // When this single animation is done, make the destination slot appear.
        // Make it look filled
      }
    );
    animationPromises.push(promise);
  });

  // 4. Use Promise.all() to wait for EVERY promise in the array to be resolved.
  await Promise.all(animationPromises);

  // 5. This code will only run after ALL animations are complete.
  document.querySelector(".row-3 .ten-block img").classList.add("appear");
  unitsClone.remove();
  unitsClone = null;
}

async function tensTopToBottom() {
  const topBlocks = document.querySelectorAll(".row-1 .ten-block img");
  const bottomBlocks = document.querySelectorAll(".row-3 .ten-block img");
  const t = topBlocks.length;
  const b = bottomBlocks.length;
  const overflow = u1 + u2 >= 10;
  for (let i = 0; i < t; i++) {
    const src = topBlocks[t - 1 - i];
    const dest = bottomBlocks[overflow + i];
    await promiseWrapper(
      animateCloneToTarget,
      src,
      dest,
      () => {
        makeDull(src);
      },
      () => {
        dest.classList.add("appear");
        updateDigitLabel("ten");
      }
    );
  }
}
async function tensMiddleToBottom() {
  const topBlocks = document.querySelectorAll(".row-2 .ten-block img");
  const bottomBlocks = document.querySelectorAll(".row-3 .ten-block img");
  const t = topBlocks.length;
  const b = bottomBlocks.length;
  const till = t;
  for (let i = 0; i < till; i++) {
    const src = topBlocks[t - 1 - i];
    const dest = bottomBlocks[t1 + overflowUnits + i];
    await promiseWrapper(
      animateCloneToTarget,
      src,
      dest,
      () => {
        makeDull(src);
      },
      () => {
        dest.classList.add("appear");
        updateDigitLabel("ten");
      }
    );
  }
}

function popInNumber(tag, num) {
  setNumberDisplay(3, tag, num);

  const cell = document.querySelector(`.row-3.${tag}-number .number-display`);

  if (cell) {
    const keyframes = [
      { transform: "scale(0)", opacity: 0 },
      { transform: "scale(1.2)", opacity: 1, offset: 0.8 },
      { transform: "scale(1)", opacity: 1 },
    ];
    const timing = {
      duration: 400,
      easing: "ease-out",
    };
    cell.animate(keyframes, timing);
    if (num >= 10) {
      cell.classList.add("vibrate-x");
    }
  }
}

async function translateNumberOverflow(tag = "unit") {
  const dest = "ten";
  return new Promise(async (resolve) => {
    const sourceEl = document.querySelector(
      `.row-3.${tag}-number .number-display`
    );
    sourceEl.classList.remove("vibrate-x");
    const targetEl = document.querySelector(
      `.row-3.${dest}-number .number-display`
    );

    const overflowClone = document.createElement("span");
    overflowClone.textContent = "10";
    overflowClone.classList.add("number-display");
    overflowClone.style.position = "absolute";
    overflowClone.style.color = getComputedStyle(sourceEl).color;
    overflowClone.style.zIndex = "100";

    const sourceRect = sourceEl.getBoundingClientRect();
    overflowClone.style.top = `${sourceRect.top + window.scrollY}px`;
    overflowClone.style.left = `${sourceRect.left + window.scrollX}px`;
    document.body.appendChild(overflowClone);

    const targetRect = targetEl.getBoundingClientRect();
    const [final_t, final_u] = sum
      .toString()
      .padStart(2, "0")
      .split("")
      .map(Number);
    setNumberDisplay(3, tag, final_u);

    const keyframes = [
      { transform: "translate(0, 0)", opacity: 1 },
      {
        transform: `translate(${targetRect.left - sourceRect.left}px, ${0}px) `,
        opacity: 0.6,
      },
    ];

    const timing = { duration: 500, easing: "ease-in" };
    const animation = overflowClone.animate(keyframes, timing);

    animation.onfinish = () => {
      overflowClone.remove();
      const currentTens = document.querySelectorAll(
        ".row-3 .ten-block img.appear"
      ).length;
      setNumberDisplay(3, dest, currentTens + 1);
      resolve();
    };
  });
}
// ANIMATION END --------------------------------------------------

async function units1() {
  setJaxpose("normal");
  nextButton.disabled = true;
  await unitsTopToBottom();
  await wait(200);
  await unitsMiddleToBottom();
  await wait(200);
  if (overflowUnits) {
    unitsClone = await cloneAndTranslateElement(
      document.querySelector(".row-3 .unit-block")
    );
    await wait(200);
    await unitsMiddleToBottomAgain();
    updateSpeechBubble("unit_overflow");
    nextButton.onclick = units2;
    setNextButtonText("carryOver_unit");
    nextButton.disabled = false;
  } else {
    popInNumber("unit", u3);
    highlightColumnBorder("ten-visual");
    textHighlightColumn(0);
    nextButton.onclick = tens1;
    setNextButtonText("add_ten");
    loadContextMcq(1);
    setJaxpose("thinking");
  }
}
async function units2() {
  setJaxpose("normal");
  nextButton.disabled = true;
  await Promise.all([animateUnitsCloneToTen()]);
  await wait(200);
  popInNumber("unit", u3);
  popInNumber("ten", 1);
  highlightColumnBorder("ten-visual");
  textHighlightColumn(0);
  nextButton.onclick = tens1;
  setNextButtonText("add_ten");
  loadContextMcq(1);
  setJaxpose("thinking");
}
async function tens1() {
  setJaxpose("normal");
  nextButton.disabled = true;
  await tensTopToBottom();
  await wait(200);
  await tensMiddleToBottom();
  await wait(200);
  const finalTens = t1 + t2 + (overflowUnits ? 1 : 0);
  popInNumber("ten", finalTens);
  highlightRowBorder(`.row-3.ten-visual, .row-3.unit-visual`);
  textHighlightColumn(-1);
  setAnswer();
  nextButton.onclick = handleNext;
  if (questionIndex < questions.length - 1) {
    setNextButtonText("next");
  } else {
    setNextButtonText("start_over");
  }

  nextButton.disabled = false;
  updateSpeechBubble("final_page");
}

function vibrateElement(element) {
  element.classList.add("vibrate-x");
}
function vibrateOff() {
  document.querySelectorAll(".vibrate-x").forEach((element) => {
    element.classList.remove("vibrate-x");
  });
}

function next() {
  updateInstructionText("units1");
  highlightColumnBorder("unit-visual");
  textHighlightColumn(1); // 0=tens, 1=units
}

function hideAllSteppers() {
  document.querySelectorAll(".stepper").forEach((stepper) => {
    stepper.style.visibility = "hidden";
  });
}

function highlightColumnBorder(className) {
  const elements = document.querySelectorAll(`.${className}`);
  if (!elements.length) return;
  const box = document.getElementById("highlight-box");
  box.style.display = "block"; // show box

  const firstRect = elements[0].getBoundingClientRect();
  const lastRect = elements[elements.length - 1].getBoundingClientRect();
  const left = firstRect.left;
  const top = firstRect.top;
  const right = firstRect.right;
  const bottom = lastRect.bottom;

  box.style.left = `${left}px`;
  box.style.top = `${top + scrollY}px`;
  box.style.width = `${right - left}px`;
  box.style.height = `${bottom - top}px`;
}

function unhighlightColumn() {
  const box = document.getElementById("highlight-box");
  box.style.display = "none";
  textHighlightColumn(-1);
}

function highlightRowBorder(q) {
  const elements = document.querySelectorAll(q);
  if (!elements.length) return;
  const box = document.getElementById("highlight-box");
  box.style.display = "block"; // show box

  const firstRect = elements[0].getBoundingClientRect();
  const lastRect = elements[elements.length - 1].getBoundingClientRect();
  const left = firstRect.left;
  const top = firstRect.top;
  const right = lastRect.right;
  const bottom = firstRect.bottom;
  const offset = 1;
  box.style.left = `${left - offset}px`;
  box.style.top = `${top - offset}px`;
  box.style.width = `${right - left + 2 * offset}px`;
  box.style.height = `${bottom - top + 2 * offset}px`;
}
function textHighlightColumn(columnNo) {
  const spans = problemStatement.querySelectorAll("span");

  if (columnNo < 0 || columnNo >= 2) {
    spans.forEach((span) => {
      span.classList.remove("text-transparent");
    });
    return;
  }
  spans.forEach((span) => {
    span.classList.add("text-transparent");
  });
  spans[2].classList.remove("text-transparent"); // The '+' sign

  if (columnNo >= 0 && columnNo < 2) {
    spans[columnNo].classList.remove("text-transparent");
    spans[3 + columnNo].classList.remove("text-transparent");
  }
}

function handleNext() {
  questionIndex = (questionIndex + 1) % questions.length;
  initializeBoard();
}

function setNextButtonText(tag) {
  nextButton.textContent = texts.buttons[tag];
}

function showResult() {
  const [t_ans, u_ans] = sum.toString().padStart(2, "0").split("").map(Number);
  const sumText = ` ${t_ans * 10} + ${u_ans} = ${sum}`;
  document.querySelector(".instruction-text").textContent =
    texts.instructions.result + sumText;
}

function toggleFullScreenOverlay(show) {
  const overlay = document.querySelector("#fullscreenOverlay");
  if (show) {
    overlay.classList.add("show");
  } else {
    overlay.classList.remove("show");
  }
}

// --- NEW WORKFLOW ---
function updateSpeechBubble(tag) {
  const context = document.querySelector("#context>p");
  if (context) {
    context.innerHTML = filledContext[tag];
  }
}
function highlightCell(row, col) {
  const tag = col === 0 ? "ten-visual" : "unit-visual";
  const cell = document.querySelector(`.row-${row}.${tag}`);
  if (!cell) return;

  const rect = cell.getBoundingClientRect();
  highlightBox.style.display = "block";
  highlightBox.style.left = `${rect.left}px`;
  highlightBox.style.top = `${rect.top}px`;
  highlightBox.style.width = `${rect.width}px`;
  highlightBox.style.height = `${rect.height}px`;
}
function checkCellCorrect(row, col) {
  const correctAnswer = ans[row][col];
  const userAnswer = current_number[row][col];
  const tag = col === 0 ? "ten-visual" : "unit-visual";
  const elem = document.querySelector(`.row-${row + 1}.${tag}`);
  const correct = userAnswer === correctAnswer;

  if (correct) {
    playSound("correct");
    setJaxpose("happy");
    return true;
  } else {
    if (elem) vibrateElement(elem);
    playSound("wrong");
    setJaxpose("sad");
    return false;
  }
}
function setUpStep0() {
  unhighlightColumn();
  problemStatement.innerHTML = "&nbsp;";
  updateSpeechBubble("lets_add");
  setNextButtonText("start");
  hideAllSteppers();
  nextButton.onclick = setupStep1;
}
function setAnswer() {
  document.querySelector(".ans-span").textContent = sum;
}
function setupStep1() {
  problemStatement.innerHTML = `<span>${t1}</span><span>${u1}</span><span>&nbsp;+&nbsp;</span><span>${t2}</span><span>${u2}</span><span>&nbsp;=&nbsp;</span><span class="ans-span">&nbsp;</span>`;
  updateSpeechBubble("put_unit");
  setNextButtonText("submit");
  hideAllSteppers();

  highlightCell(1, 1); // Highlight row 1, unit-visual
  setSteppersVisibility(1, "unit-visual");
  nextButton.onclick = checkUnits1;
}

function checkUnits1() {
  if (checkCellCorrect(0, 1)) {
    setNumberDisplay(1, "unit", current_number[0][1]);

    // Check row 1 (index 0), units (index 1)
    updateSpeechBubble("put_ten");
    hideAllSteppers();
    highlightCell(1, 0); // Highlight row 1, ten-visual
    setSteppersVisibility(1, "ten-visual");
    nextButton.onclick = checkTens1;
  } else {
    updateSpeechBubble("wrong_unit");
  }
}

function checkTens1() {
  if (checkCellCorrect(0, 0)) {
    setNumberDisplay(1, "ten", current_number[0][0]);

    // Check row 1 (index 0), tens (index 0)
    updateSpeechBubble("put_unit2");
    hideAllSteppers();
    highlightCell(2, 1); // Highlight row 2, unit-visual
    setSteppersVisibility(2, "unit-visual");
    nextButton.onclick = checkUnits2;
  } else {
    updateSpeechBubble("wrong_ten");
  }
}

function checkUnits2() {
  if (checkCellCorrect(1, 1)) {
    setNumberDisplay(2, "unit", current_number[1][1]);

    // Check row 2 (index 1), units (index 1)
    updateSpeechBubble("put_ten2");
    hideAllSteppers();
    highlightCell(2, 0); // Highlight row 2, ten-visual
    setSteppersVisibility(2, "ten-visual");
    nextButton.onclick = checkTens2;
  } else {
    updateSpeechBubble("wrong_unit2");
  }
}

function checkTens2() {
  if (checkCellCorrect(1, 0)) {
    setNumberDisplay(2, "ten", current_number[1][0]);

    // Check row 2 (index 1), tens (index 0)
    unhighlightColumn();
    hideAllSteppers();
    // All inputs are correct, start the main addition sequence
    startMainAdditionSequence();
  } else {
    updateSpeechBubble("wrong_ten2");
  }
}

// Placeholder for the next phase
function startMainAdditionSequence() {
  setNextButtonText("add_unit");
  highlightColumnBorder("unit-visual");
  textHighlightColumn(1);
  nextButton.onclick = units1;
  nextButton.disabled = true;
  loadContextMcq(0);
  setJaxpose("thinking");
}

function initializeBoard() {
  setJaxpose("normal");
  const problem = questions[questionIndex];
  const num1 = problem.num1;
  const num2 = problem.num2;
  sum = num1 + num2;

  [t1, u1] = num1.toString().padStart(2, "0").split("").map(Number);
  [t2, u2] = num2.toString().padStart(2, "0").split("").map(Number);
  [t3, u3] = sum.toString().padStart(2, "0").split("").map(Number);
  overflowUnits = u1 + u2 >= 10 ? 1 : 0;

  initializeTextContents();
  current_number = [
    [0, 0],
    [0, 0],
  ];
  ans = [
    [t1, u1],
    [t2, u2],
  ];
  resetVisuals();
  resetNumbers();
  filledContext = fillContextData({
    t1,
    u1,
    t2,
    u2,
    t3,
    u3,
    sum,
    num1,
    num2,
    uSum: u1 + u2,
  });
  console.log(filledContext);

  // Start the new workflow
  setUpStep0();
}
// --- START THE APP ---
initializeBoard();
const gridContainer = document.querySelector(".grid-container");
gridContainer.addEventListener("click", handleStepperClick);
// --- CONTEXT MCQ SETUP ---

// Data object for the context-based MCQs

let currentContextMcq = -1; // To track which MCQ is currently active

/**
 * Dynamically loads an MCQ into the #context panel.
 * @param {number} qIndex - The index of the question from contextMcqData.
 */
function loadContextMcq(qIndex) {
  currentContextMcq = qIndex;

  const questionTag = qIndex === 0 ? "qsn_unit" : "qsn_ten";
  // Update the speech bubble with the question text
  updateSpeechBubble(questionTag);

  // Find the #context div to add our options container
  const contextDiv = document.getElementById("context");
  if (!contextDiv) return;

  // Remove old options container if it exists, then create a new one
  let optionsContainer = document.getElementById("context-options");
  if (optionsContainer) {
    optionsContainer.remove();
  }
  optionsContainer = document.createElement("div");
  optionsContainer.id = "context-options";

  // Generate and add the option buttons
  const options =
    questionMcqOptions[currentContextMcq + 2 * questionIndex].options;
  options.forEach((optionValue) => {
    const optionButton = document.createElement("button");
    optionButton.className = "context-option";
    optionButton.textContent = optionValue;
    optionButton.dataset.value = optionValue; // Store the answer in a data attribute
    optionsContainer.appendChild(optionButton);
  });

  // Add the new options container to the context panel
  contextDiv.appendChild(optionsContainer);

  // Add a single event listener to the container
  optionsContainer.addEventListener("click", handleContextMcqAnswer);
}

/**
 * Handles the click event on an MCQ option button.
 * @param {Event} event The click event.
 */
function handleContextMcqAnswer(event) {
  const clickedButton = event.target.closest(".context-option");
  // Do nothing if the click wasn't on a button or if it's already answered correctly
  if (
    !clickedButton ||
    clickedButton.disabled ||
    clickedButton.classList.contains("correct")
  )
    return;

  const correctAnswer =
    questionMcqOptions[currentContextMcq + 2 * questionIndex].correctAnswer;
  const userAnswer = parseInt(clickedButton.dataset.value, 10);

  if (userAnswer === correctAnswer) {
    playSound("correct"); // Play correct sound
    setJaxpose("happy");
    clickedButton.classList.remove("wrong"); // Remove wrong class if it was there
    clickedButton.classList.add("correct");

    // Disable all buttons since the correct answer was found
    const allButtons = document.querySelectorAll(".context-option");
    allButtons.forEach((btn) => (btn.disabled = true));

    // After a short delay, proceed to the next step in the lesson
    setTimeout(() => {
      document.getElementById("context-options").innerHTML = ""; // Clear options
      nextButton.disabled = false;
      if (currentContextMcq === 0) {
        updateSpeechBubble("add_units");
      } else if (currentContextMcq === 1) {
        updateSpeechBubble("add_tens");
      }
    }, 500);
  } else {
    playSound("wrong"); // Play wrong sound
    setJaxpose("sad");
    clickedButton.classList.add("wrong");
    clickedButton.disabled = true; // Disable only the wrong option

    // Show wrong answer feedback
    const wrongFeedbackTag =
      currentContextMcq === 0 ? "unit_wrong_feedback" : "ten_wrong_feedback";
    updateSpeechBubble(wrongFeedbackTag);
  }
}

function fillContextData(values) {
  const template = texts.context_data;
  const filledContext = {};

  for (const key in template) {
    filledContext[key] = template[key].replace(
      /{{(.*?)}}/g,
      (_, k) => values[k]
    );
  }
  return filledContext;
}
