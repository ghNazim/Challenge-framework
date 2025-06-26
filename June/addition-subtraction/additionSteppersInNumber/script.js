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
let u1, u2, t1, t2, h1, h2, u3, t3, h3, overflowUnits, overflowTens;
//INITIALIZE VARIABLES
let current_number = [
    [0, 0, 0], // Row 1: [hundreds, tens, ones]
    [0, 0, 0], // Row 2
  ],
  ans = [
    [0, 0, 0], // Row 1: [hundreds, tens, ones]
    [0, 0, 0], // Row 2
  ],
  questionIndex = 0,
  unitsClone = null,
  tensClone = null;

const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
const tensFirst = createUnitStackOnTenRod();
const hundredsFirst = createTensStackOnHundredBlock();

let stepForQ = 0;
let stepQ = [];
let buttonsQ = [];
document
  .querySelectorAll(".stepper-btn")
  .forEach((button) =>
    button.addEventListener("click", () => playSound("click"))
  );
opButtons.forEach((button) =>
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
// toggleFullScreenOverlay(true)
function selectElements(fixedClass, includesString) {
  const elements = document.querySelectorAll(
    `.${fixedClass}[class*="${includesString}"]`
  );
  return elements;
}
function highlightColumn(num) {
  const highlightedElements = document.querySelectorAll(".highlight");
  const elements = document.querySelectorAll(`.${columnMap[num]}`);
  highlightedElements.forEach((element) => {
    element.classList.remove("highlight");
  });
  if (num < 0) return;
  elements.forEach((element) => {
    element.classList.add("highlight");
  });
}
function highlightRow(num) {
  const highlightedElements = document.querySelectorAll(".highlight");
  const elements = document.querySelectorAll(`.row-${num}`);
  highlightedElements.forEach((element) => {
    element.classList.remove("highlight");
  });
  if (num < 0) return;
  elements.forEach((element) => {
    element.classList.add("highlight");
  });
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
  document
    .querySelectorAll(".row-3 .number-display")
    .forEach((el) => (el.textContent = ""));
  document
    .querySelectorAll(".row-3 .corner-badge")
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
    current_number[rowIndex][colIndex]++;
    appendBlock(rowNum, tag);
  } else if (button.classList.contains("minus") && currentValue > 0) {
    vibrateOff();
    current_number[rowIndex][colIndex]--;
    removeBlock(rowNum, tag);
  }

  // Update the corresponding number display in the same row
  setNumberDisplay(rowNum, tag, current_number[rowIndex][colIndex]);
  setCornerBadge(rowNum, tag, current_number[rowIndex][colIndex]);
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
  headings[0].textContent = headings[3].textContent = texts.headings.hundreds;
  headings[1].textContent = headings[4].textContent = texts.headings.tens;
  headings[2].textContent = headings[5].textContent = texts.headings.ones;

  // Set Static Buttons
  document.querySelector(".next-button").textContent = texts.buttons.next;
  setBtn1.textContent = texts.buttons.set;
  setBtn2.textContent = texts.buttons.set;

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
function createTensStackOnHundredBlock() {
  // 1. Find the target element: the first hundred-block image in the third row.
  const targetElement = document.querySelector(".row-3 .hundred-block img");

  function createAndPositionStack(targetElement) {
    const targetRect = targetElement.getBoundingClientRect();
    const container = document.createElement("div");
    container.className = "ten-rod-stack-container"; // For styling
    container.style.position = "absolute";
    container.style.top = `${targetRect.top + window.scrollY}px`;
    container.style.left = `${targetRect.left + window.scrollX}px`;
    container.style.width = `${targetRect.width}px`;
    container.style.height = `${targetRect.height}px`;
    container.style.display = "flex";
    container.style.flexDirection = "row"; // Flexed row-wise

    for (let i = 0; i < 10; i++) {
      const rod = document.createElement("div");
      rod.className = "ten-rod-in-stack"; // For styling
      container.appendChild(rod);
    }

    document.body.appendChild(container);
    return container;
  }
  createAndPositionStack(targetElement);
}

async function animateUnitsCloneToTen() {
  unitsClone.classList.remove("wiggle");
  const topBlocks = unitsClone.querySelectorAll("img");
  const bottomBlocks = document.querySelectorAll(".unit-in-stack");

  // 1. Create an array to hold all the animation promises.
  const animationPromises = [];

  // 2. Loop through each source block to START the animation and collect the promise.
  //    We use forEach here because we don't want to 'await' inside the loop.
  topBlocks.forEach((src, i) => {
    const dest = bottomBlocks[i];
    // If there's no matching destination for a source block, skip it.
    if (!dest) return;

    // 3. Call your promiseWrapper WITHOUT await. This starts the animation immediately.
    //    Then, push the returned promise into our array.
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
  console.log("All unit-to-ten animations are complete!");
  document.querySelector(".row-3 .ten-block img").classList.add("appear");
  unitsClone.remove();
  unitsClone = null;
}
async function animateTensCloneToHundred() {
  tensClone.classList.remove("wiggle");
  const topBlocks = tensClone.querySelectorAll("img");
  const bottomBlocks = document.querySelectorAll(".ten-rod-in-stack");
  const animationPromises = [];

  topBlocks.forEach((src, i) => {
    const dest = bottomBlocks[i];
    const promise = promiseWrapper(
      animateCloneToTarget,
      src,
      dest,
      () => {
        // As soon as the animation starts, hide the source image in the clone.
        src.style.visibility = "hidden";
      },
      () => {}
    );
    animationPromises.push(promise);
  });

  // 4. Use Promise.all() to wait for EVERY promise in the array to be resolved.
  await Promise.all(animationPromises);

  document.querySelector(".row-3 .hundred-block img").classList.add("appear");
  tensClone.remove();
  tensClone = null;
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
  const till = overflowTens ? 10 - t1 - overflowUnits : t;
  for (let i = 0; i < till; i++) {
    const src = topBlocks[t - 1 - i];
    const dest = bottomBlocks[t1 + 1 + i];
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
async function tensMiddleToBottomAgain() {
  const topBlocks = document.querySelectorAll(
    ".row-2 .ten-block img:not(.transparent)"
  );
  const bottomBlocks = document.querySelectorAll(".row-3 .ten-block img");
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
        // src.remove();
        makeDull(src);
      },
      () => {
        dest.classList.add("appear");
        updateDigitLabel("ten");
      }
    );
  }
}
async function hundredsTopToBottom() {
  const topBlocks = document.querySelectorAll(".row-1 .hundred-block img");
  const bottomBlocks = document.querySelectorAll(".row-3 .hundred-block img");
  const t = topBlocks.length;
  const b = bottomBlocks.length;

  // Calculate if there was a carry-over from the tens column, following your pattern
  const unitsCarry = u1 + u2 >= 10;
  const tensCarry = t1 + t2 + (unitsCarry ? 1 : 0) >= 10;

  for (let i = 0; i < t; i++) {
    const src = topBlocks[t - 1 - i];
    // The destination index is shifted by 1 if there was a carry from the tens
    const dest = bottomBlocks[tensCarry + i];
    await promiseWrapper(
      animateCloneToTarget,
      src,
      dest,
      () => {
        // src.remove();
        makeDull(src);
      },
      () => {
        dest.classList.add("appear");
        updateDigitLabel("ten");
      }
    );
  }
}

async function hundredsMiddleToBottom() {
  const topBlocks = document.querySelectorAll(".row-2 .hundred-block img");
  const bottomBlocks = document.querySelectorAll(".row-3 .hundred-block img");
  const t = topBlocks.length; // This is h2
  const b = bottomBlocks.length;

  // Calculate carry-overs from previous columns
  const unitsCarry = u1 + u2 >= 10;
  const tensCarry = t1 + t2 + (unitsCarry ? 1 : 0) >= 10;

  // Determine if the hundreds column will overflow
  const hundredsOverflow = h1 + h2 + (tensCarry ? 1 : 0) > 10;

  // Determine how many blocks to move from the middle row
  // This exactly replicates the logic from your tensMiddleToBottom function
  const till = hundredsOverflow ? h2 - 10 + h1 + 1 : t;

  for (let i = 0; i < till; i++) {
    const src = topBlocks[t - 1 - i];
    // This destination logic exactly replicates the pattern from your tensMiddleToBottom function
    const dest = bottomBlocks[h1 + 1 + i];
    await promiseWrapper(
      animateCloneToTarget,
      src,
      dest,
      () => {
        makeDull(src);
      },
      () => {
        dest.classList.add("appear");
      }
    );
  }
}
function popInNumber(tag, num) {
  // 1. Set the number using your existing function.
  setNumberDisplay(3, tag, num);
  setCornerBadge(3, tag, num);

  // 2. Find the specific number-display element to animate.
  const cell = document.querySelector(`.row-3.${tag}-number .number-display`);

  if (cell) {
    // 3. Define the keyframes for the animation.
    const keyframes = [
      { transform: "scale(0)", opacity: 0 },
      { transform: "scale(1.2)", opacity: 1, offset: 0.8 }, // 80% mark
      { transform: "scale(1)", opacity: 1 },
    ];

    // 4. Define the timing options for the animation.
    const timing = {
      duration: 400, // 400 milliseconds
      easing: "ease-out",
    };

    // 5. Call the animate() method on the element.
    cell.animate(keyframes, timing);
  }
}

async function translateNumberOverflow(tag = "unit") {
  const dest = tag === "unit" ? "ten" : "hundred";
  return new Promise(async (resolve) => {
    // 1. Define the source (unit number) and target (ten number) elements in row 3.
    const sourceEl = document.querySelector(
      `.row-3.${tag}-number .number-display`
    );
    const targetEl = document.querySelector(
      `.row-3.${dest}-number .number-display`
    );

    // 2. Create a temporary '10' element to be animated.
    const overflowClone = document.createElement("span");
    overflowClone.textContent = tag === "unit" ? "10" : "100";
    // Apply existing class for font styles and position it absolutely.
    overflowClone.classList.add("number-display");
    overflowClone.style.position = "absolute";
    overflowClone.style.zIndex = "100"; // Ensure it's on top of everything.

    // 3. Position the clone exactly on top of the source element.
    const sourceRect = sourceEl.getBoundingClientRect();
    overflowClone.style.top = `${sourceRect.top + window.scrollY}px`;
    overflowClone.style.left = `${sourceRect.left + window.scrollX}px`;
    document.body.appendChild(overflowClone);

    // 4. Get the target position.
    const targetRect = targetEl.getBoundingClientRect();
    const d = tag === "unit" ? u3 : t3;
    setNumberDisplay(3, tag, d);
    // 5. Define the animation using the Web Animations API.
    const keyframes = [
      {
        // Start at the source position, fully opaque
        transform: "translate(0, 0)",
        opacity: 1,
      },
      {
        // End over the target position, scaled down and faded out
        transform: `translate(${targetRect.left - sourceRect.left}px, ${0}px) `,
        opacity: 0.6,
      },
    ];

    const timing = {
      duration: 500, // Animation duration in milliseconds
      easing: "ease-in",
    };

    // 6. Run the animation on the clone.
    const animation = overflowClone.animate(keyframes, timing);

    // 7. When the animation finishes, remove the clone and resolve the promise.
    animation.onfinish = () => {
      overflowClone.remove();
      setNumberDisplay(3, dest, 1);

      resolve();
    };
  });
}
// ANIMATION END --------------------------------------------------

async function units1() {
  popInNumber("unit", u1 + u2);
  await unitsTopToBottom();
  await wait(200);
  await unitsMiddleToBottom();
  await wait(200);
  unitsClone = await cloneAndTranslateElement(
    document.querySelector(".row-3 .unit-block")
  );
  await wait(200);
  await unitsMiddleToBottomAgain();
  
  updateInstructionText("unitsCarry");
}
async function units2() {
  await Promise.all([
    animateUnitsCloneToTen(),
    translateNumberOverflow("unit"),
  ]);
  updateDigitLabel("unit");
  updateDigitLabel("ten");
  await wait(200);
  highlightColumnBorder("ten-number");
  updateInstructionText("tens1");
}
async function tens1() {
  popInNumber("ten", t1 + t2 + overflowUnits);
  await tensTopToBottom();
  await wait(200);

  await tensMiddleToBottom();
  await wait(200);

  tensClone = await cloneAndTranslateElement(
    document.querySelector(".row-3 .ten-block")
  );
  await wait(200);

  await tensMiddleToBottomAgain();
  updateInstructionText("tensCarry");
  
}
async function tens2() {
  await Promise.all([
    animateTensCloneToHundred(),
    translateNumberOverflow("ten"),
  ]);
  updateDigitLabel("ten");
  updateDigitLabel("hundred");
  highlightColumnBorder("hundred-number");
  updateInstructionText("hundreds1");
}
async function hundreds1() {
  popInNumber("hundred", h3);
  await hundredsTopToBottom();
  await hundredsMiddleToBottom();
  
  unhighlightColumn();
  updateInstructionText("combine");
}

async function handleOpsButtonClick() {
  updateVisibleButton();
  await stepQ[stepForQ]();
  stepForQ++;
  if (stepForQ < stepQ.length) {
    setUpStep();
  }
}

opButtons.forEach((button) => {
  button.addEventListener("click", handleOpsButtonClick);
});
function updateVisibleButton(buttonToShow) {
  [hVisual, tVisual, uVisual, hNumber, tNumber, uNumber].forEach((btn) => {
    btn.style.visibility = "hidden";
    btn.disabled = false;
  });

  if (buttonToShow) {
    buttonToShow.style.visibility = "visible";
  }
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
  highlightColumnBorder("unit-number");
  setUpStep();
}
function setUpStep() {
  updateVisibleButton(buttonsQ[stepForQ].button);
  buttonsQ[stepForQ].button.textContent = buttonsQ[stepForQ].text;
}
function setUpStepQAndButtons() {
  stepForQ = 0;
  stepQ = [];
  buttonsQ = [];
  stepQ.push(units1);
  buttonsQ.push({ button: uNumber, text: texts.buttons.add_unit });
  if (overflowUnits) {
    stepQ.push(units2);
    buttonsQ.push({ button: uNumber, text: texts.buttons.carryOver_unit });
  }
  stepQ.push(tens1);
  buttonsQ.push({ button: tNumber, text: texts.buttons.add_tens });
  if (overflowTens) {
    stepQ.push(tens2);
    buttonsQ.push({ button: tNumber, text: texts.buttons.carryOver_tens });
  }
  stepQ.push(hundreds1);
  buttonsQ.push({ button: hNumber, text: texts.buttons.add_hundreds });
}

function hideAllSteppers() {
  document.querySelectorAll(".stepper").forEach((stepper) => {
    stepper.style.visibility = "hidden";
  });
}

function updateActiveSetButton(buttonToShow) {
  const allButtons = [setBtn1, setBtn2];

  allButtons.forEach((btn) => {
    btn.style.display = "none";
  });

  if (buttonToShow) {
    buttonToShow.style.display = "flex";
  }
}

function checkRow(rowNum) {
  const rowIndex = rowNum - 1;
  const userRow = current_number[rowIndex];
  const correctRow = ans[rowIndex];
  let isRowCorrect = true;

  // Check each column (hundred, ten, unit)
  for (let i = 0; i < 3; i++) {
    if (userRow[i] !== correctRow[i]) {
      isRowCorrect = false;
      // Find the corresponding visual block and wiggle it.
      const tag = i === 0 ? "hundred" : i === 1 ? "ten" : "unit";
      const wrongBlock = document.querySelector(
        `.row-${rowNum}.${tag}-number .block-placeholder`
      );
      const wrongNumber = document.querySelector(
        `.row-${rowNum}.${tag}-number .number-display`
      );
      if (wrongNumber) {
        vibrateElement(wrongNumber);
      }
    }
  }
  if (isRowCorrect) {
    playSound("correct");
  } else {
    playSound("wrong");
  }
  return isRowCorrect;
}

function runSetupWorkflow() {
  // --- Step 1: Setup for Row 1 ---
  function setupForRow1() {
    updateInstructionText("set1");
    highlightRowBorder(1);
    hideAllSteppers();
    setSteppersVisibility(1, "-number");
    updateActiveSetButton(setBtn1);
  }

  // --- Step 2: Setup for Row 2 ---
  function setupForRow2() {
    updateInstructionText("set2");
    highlightRowBorder(2);
    hideAllSteppers();
    setSteppersVisibility(2, "-number");
    updateActiveSetButton(setBtn2);
  }

  // --- Event Listeners for Set Buttons ---
  setBtn1.addEventListener("click", () => {
    if (checkRow(1)) {
      // If correct, move to setting up the next row.
      setupForRow2();
    }
  });

  setBtn2.addEventListener("click", () => {
    if (checkRow(2)) {
      // If correct, hide all setup elements and proceed.
      hideAllSteppers();
      highlightRow(0); // Removes highlight from all rows
      updateActiveSetButton(null); // Hides setBtn2
      next(); // Call the next function to start the main logic
    }
  });

  // --- Start the workflow ---
  setupForRow1();
}

function highlightColumnBorder(className) {
  const elements = document.querySelectorAll(`.${className}`);
  const box = document.getElementById("highlight-box");
  box.style.display = "block"; // show box

  const firstRect = elements[0].getBoundingClientRect();
  const lastRect = elements[elements.length - 1].getBoundingClientRect();
  const left = firstRect.left;
  const top = firstRect.top;
  const right = firstRect.right;
  const bottom = lastRect.bottom;
  const offsetX = 0;
  box.style.left = `${left - offsetX}px`;
  box.style.top = `${top + scrollY}px`;
  box.style.width = `${right - left}px`;
  box.style.height = `${bottom - top}px`;
}

function unhighlightColumn() {
  const box = document.getElementById("highlight-box");
  box.style.display = "none";
}

function highlightRowBorder(rowNum) {
  const elements = document.querySelectorAll(`.row-${rowNum}`);
  const box = document.getElementById("highlight-box");
  box.style.display = "block"; // show box

  const firstRect = elements[0].getBoundingClientRect();
  const lastRect = elements[elements.length - 1].getBoundingClientRect();
  const left = firstRect.left;
  const top = firstRect.top;
  const right = lastRect.right;
  const bottom = firstRect.bottom;
  const offset = 2;
  box.style.left = `${left - offset}px`;
  box.style.top = `${top - offset}px`;
  box.style.width = `${right - left + 2 * offset}px`;
  box.style.height = `${bottom - top + 2 * offset}px`;
}

function initializeBoard() {
  initializeTextContents();
  const problem = questions[questionIndex];
  const num1 = problem.num1;
  const num2 = problem.num2;
  [h1, t1, u1] = num1.toString().split("").map(Number);
  [h2, t2, u2] = num2.toString().split("").map(Number);
  [h3, t3, u3] = (num1 + num2).toString().split("").map(Number);
  overflowUnits = u1 + u2 > 9 ? 1 : 0;
  overflowTens = t1 + t2 + overflowUnits > 9 ? 1 : 0;
  // Set the problem statement in the header
  document.querySelector(
    ".problem-statement h1"
  ).textContent = `${num1} + ${num2}`;
  current_number = [
    [0, 0, 0],
    [0, 0, 0],
  ];
  ans = [
    [h1, t1, u1],
    [h2, t2, u2],
  ];

  resetVisuals();
  resetNumbers();

  const gridContainer = document.querySelector(".grid-container");
  gridContainer.addEventListener("click", handleStepperClick);
  runSetupWorkflow();
  updateVisibleButton();
  setUpStepQAndButtons();
}

// --- START THE APP ---
initializeBoard();
function handleNext() {
  questionIndex++;
  initializeBoard();
}
nextButton.addEventListener("click", handleNext);
