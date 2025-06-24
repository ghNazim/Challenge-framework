const unitWidget = document.getElementById("unit-widget");
const tenWidget = document.getElementById("ten-widget");
const unitNumberTab = document.querySelector("#unit-widget .number-tab");
const tenNumberTab = document.querySelector("#ten-widget .number-tab");
const unitSquaresContainer = document.querySelector(
  "#unit-widget .squares-container"
);
const tenSquaresContainer = document.querySelector(
  "#ten-widget .squares-container"
);
const unitInnerCard = document.querySelector("#unit-widget .inner-card");
const tenInnerCard = document.querySelector("#ten-widget .inner-card");
const unitTextDisplay = document.querySelector("#unit-widget .text-display");
const tenTextDisplay = document.querySelector("#ten-widget .text-display");
const unitsPlus = document.getElementById("units-plus");
unitsPlus.classList.add("pulse-highlight");
const unitsMinus = document.getElementById("units-minus");
const tensPlus = document.getElementById("tens-plus");
const tensMinus = document.getElementById("tens-minus");
const ac1 = document.getElementById("ac1");
const leftDir = document.querySelector("#unit-widget .left-dir");
leftDir.style.display = "none";
const rightDir = document.querySelector("#unit-widget .right-dir");

const leftDir2 = document.querySelector("#ten-widget .left-dir");
const rightDir2 = document.querySelector("#ten-widget .right-dir");
const boxContainer = document.querySelector("#box-container");
const submitButton = document.getElementById("submitButton");
const commentElement = document.querySelector(".comment");
const numberText = document.querySelector("#numberText");
let tenContainerVisible = false;

document.querySelectorAll(".control-btn").forEach((button) => {
  button.addEventListener("click", () => {
    playSound("click");
    showStatement(-1);
  });
});
// --- State ---
let unitCount = 0,
  maxCount = 10,
  minCount = 0,
  tenCount = 0,
  hundredCount = 0;
let isNumberTextUp = false;
function addUnit(visible = true) {
  const visibility = visible ? "visible" : "hidden";
  const square = document.createElement("div");
  square.className = "count-square";
  square.style.visibility = visibility;
  unitSquaresContainer.appendChild(square);
  unitCount++;
}
function popUnit() {
  unitSquaresContainer.lastElementChild.remove();
  unitCount--;
}

function addUnits(n, visible = true) {
  const visibility = visible ? "visible" : "hidden";
  for (let i = 0; i < n; i++) {
    const square = document.createElement("div");
    square.style.visibility = visibility;
    square.className = "count-square";
    unitSquaresContainer.appendChild(square);
    unitCount++;
  }
}
function removeUnits(n) {
  for (let i = 0; i < n; i++) {
    unitSquaresContainer.lastElementChild.remove();
    unitCount--;
  }
}
function appendTen(visibile = true) {
  const visibility = visibile ? "visible" : "hidden";
  if (tenCount === 10) return;
  const rod = document.createElement("div");
  rod.className = "ten-bar";
  rod.style.visibility = visibility;
  const unit = `<div class="unit-box"></div>`;
  rod.innerHTML = unit.repeat(10);
  tenSquaresContainer.appendChild(rod);
  tenCount++;
}
function popTen() {
  tenSquaresContainer.lastElementChild.remove();
  tenCount--;
}
function removeTens(n) {
  for (let i = 0; i < n; i++) {
    if (tenSquaresContainer.lastElementChild) {
      tenSquaresContainer.lastElementChild.remove();
    }
  }
  tenCount -= n;
}
function updateUnitTexts(n = unitCount) {
  unitNumberTab.textContent = n < 10 ? n : "X";
  unitTextDisplay.textContent = n + (n === 1 ? tags.one : tags.ones);
}

function updateHundredTexts(n = hundredCount) {
  const hundredNumberTab = document.querySelector(
    "#hundred-widget .number-tab"
  );
  const hundredTextDisplay = document.querySelector(
    "#hundred-widget .text-display"
  );
  hundredNumberTab.textContent = n;
  hundredTextDisplay.textContent = n + (n === 1 ? tags.hundred : tags.hundreds);
}
function updateTenTexts(n = tenCount) {
  tenNumberTab.textContent = n;
  tenTextDisplay.textContent = n + (n === 1 ? tags.ten : tags.tens);
}

unitsPlus.addEventListener("click", () => {
  if (unitCount < 10) {
    addUnit();
    watchForTarget();
  }
  if (!tenContainerVisible) {
    unitTextDisplay.textContent = unitCount;
  } else {
    updateUnitTexts(unitCount);
  }
  updateWithClickingPLus();
  if (unitCount == 10) {
    wiggle();
    leftDir.style.display = "flex";
    showNumberText(hundredCount * 100 + tenCount * 10 + unitCount, false);
  } else {
    showNumberText(hundredCount * 100 + tenCount * 10 + unitCount);
  }
});

unitsMinus.addEventListener("click", () => {
  if (unitCount > 0) {
    wiggle(false);
    leftDir.style.display = "none";
    popUnit();
    watchForTarget();
    if (!tenContainerVisible) {
      unitTextDisplay.textContent = unitCount;
    } else {
      updateUnitTexts(unitCount);
    }
    showNumberText(hundredCount * 100 + tenCount * 10 + unitCount);
  }
});
tensPlus.addEventListener("click", () => {
  if (tenCount < 10) {
    appendTen();
    updateTenTexts(tenCount);
    watchForTarget();
  }
  updateWithClickingPLus();
  if (tenCount == 10) {
    wiggleTens();
    if (hundredCount < 1) leftDir2.style.display = "flex";
    showNumberText(hundredCount * 100 + tenCount * 10 + unitCount, false);
  } else {
    showNumberText(hundredCount * 100 + tenCount * 10 + unitCount);
  }
});
tensMinus.addEventListener("click", () => {
  if (tenCount > 0) {
    wiggleTens(false);
    leftDir2.style.display = "none";
    popTen();
    watchForTarget();
    updateTenTexts(tenCount);
    showNumberText(hundredCount * 100 + tenCount * 10 + unitCount);
  }
});

function resetUnit() {
  unitCount = 0;
  // updateUnitTexts();
  unitTextDisplay.textContent = unitCount;
  unitSquaresContainer.innerHTML = "";
}
function resetTen() {
  tenCount = 0;
  // updateTenTexts();
  tenSquaresContainer.innerHTML = "";
}
resetTen();
resetUnit();
// resetHundred();

function animateCloneToTarget(
  sourceElement,
  targetElement,
  onStart,
  onComplete,
  targetRectProp = {}
) {
  const targetRect = targetElement.getBoundingClientRect();
  const clone = createClone(sourceElement);
  onStart?.();
  const newTargetRect = { ...targetRect, ...targetRectProp };
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
function createClone(sourceElement, targetRectProp = {}) {
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

function animateUnitsToTens() {
  let units = document.querySelectorAll(".count-square");
  const len = units.length;
  units = Array.from(units).slice(len - 10);
  appendTen(false);
  const tenBar = document.querySelectorAll(".ten-bar")[tenCount - 1];
  const tens = tenBar.querySelectorAll(".unit-box");
  const promisesList = units.map((src, index) => {
    const dest = tens[index];
    return promiseWrapper(
      animateCloneToTarget,
      src,
      dest,
      () => {
        src.style.visibility = "hidden";
      },
      () => {
        dest.style.visibility = "visible";
      }
    );
  });
  return Promise.all(promisesList);
}

function animateTensToUnits() {
  addUnits(10, false);
  let units = document.querySelectorAll(".count-square");
  const len = units.length;
  units = Array.from(units).slice(len - 10);
  const tenBar = document.querySelectorAll(".ten-bar")[tenCount - 1];
  let tens = tenBar.querySelectorAll(".unit-box");
  tens = Array.from(tens);
  const promisesList = tens.map((src, index) => {
    const dest = units[index];
    return promiseWrapper(
      animateCloneToTarget,
      src,
      dest,
      () => {
        src.style.visibility = "hidden";
      },
      () => {
        dest.style.visibility = "visible";
      }
    );
  });
  return Promise.all(promisesList);
}

async function unitsToTensWrapper() {
  updateUnitTexts(unitCount - 10);
  await animateUnitsToTens();
  updateTenTexts();
  removeUnits(10);
}

async function tensToUnitsWrapper() {
  updateTenTexts(tenCount - 1);
  await animateTensToUnits();
  updateUnitTexts();
  popTen();
}

leftDir.onclick = leftClick1;
rightDir.onclick = onRightDirClick;

async function onLeftDirClick() {
  leftDir.style.display = "none";
  playSound("click");
  if (unitCount < 10 || tenCount >= 10) return;
  // cancelAttention();
  wiggle(false);
  
  await unitsToTensWrapper();
  updateWithClickingPLus();
  showNumberText(hundredCount * 100 + tenCount * 10 + unitCount);
  showComment("ten");
  setCavePose("Normal");
}

async function onRightDirClick() {
  playSound("click");
  if (unitCount > 10 || tenCount < 1) return;
  // cancelAttention();

  await tensToUnitsWrapper();
}

function showDirArrow(name) {
  if (name === "left") {
    leftDir.style.display = "flex";
  } else if (name === "right") {
    rightDir.style.display = "flex";
  } else {
    leftDir.style.display = "none";
    rightDir.style.display = "none";
  }
}
// showDirArrow("left");
// showDirArrow("right");

function leftClick1() {
  playSound("click");
  leftDir.style.display = "none";
  addTenContainer(async () => {
    if (unitCount < 10 || tenCount >= 10) return;
    // cancelAttention();
    wiggle(false);
    await unitsToTensWrapper();
    updateWithClickingPLus();
    showNumberText(hundredCount * 100 + tenCount * 10 + unitCount);
    leftDir.onclick = onLeftDirClick;
    updateInstructions("plus_tens");
    tensPlus.classList.add("pulse-highlight-blue");
    showComment("ten");
    setCavePose("Normal");
  });
}

const hundredWidget = document.getElementById("hundred-widget");
const hundredSquaresContainer = document.querySelector(
  "#hundred-widget .squares-container"
);
const hundredsPlus = document.getElementById("hundreds-plus");
const hundredsMinus = document.getElementById("hundreds-minus");

function appendHundred(visible = true) {
  if (hundredCount >= 10) return; // Limit to 10 hundred-blocks

  const visibility = visible ? "visible" : "hidden";

  const hundredBlock = document.createElement("div");
  hundredBlock.className = "hundred-block";
  hundredBlock.style.visibility = visibility;

  // Create the 10x10 grid of unit boxes
  const unitBoxHTML = `<div class="unit-box"></div>`;
  hundredBlock.innerHTML = unitBoxHTML.repeat(100);

  hundredSquaresContainer.appendChild(hundredBlock);
  hundredCount++;
}

function popHundred() {
  if (hundredCount <= 0) return;
  hundredSquaresContainer.lastElementChild.remove();
  hundredCount--;
}

hundredsPlus.addEventListener("click", () => {
  appendHundred();
});

hundredsMinus.addEventListener("click", () => {
  popHundred();
});

function resetHundred() {
  hundredCount = 0;
  hundredSquaresContainer.innerHTML = "";
}
resetHundred();

async function animateTensToHundreds() {
  // Get the last 10 ten-bars to be animated.
  let tenBars = document.querySelectorAll("#ten-widget .ten-bar");
  tenBars = Array.from(tenBars).slice(0, 10);

  // Add a new hundred-block, but keep it hidden for now.
  // This will be the target for the animation.
  appendHundred(false);
  const hundredBlock = hundredSquaresContainer.lastElementChild;
  const hundredBlocks = hundredSquaresContainer.querySelectorAll(".unit-box");

  // Create a list of promises for each animation.
  const animationPromises = tenBars.map((bar, index) => {
    const dest = getColumn(index);
    return promiseWrapper(
      animateCloneToTarget,
      bar, // The source element (a ten-bar)
      dest, // The target element (the new hundred-block)
      () => {
        // onStart: Hide the original ten-bar as the animation begins.
        bar.style.visibility = "hidden";
      },
      () => {
        dest.remove();
        // onComplete: The clone will be removed by the helper. No extra action needed here.
      }
    );
  });

  // Return a promise that resolves when all animations are finished.
  return Promise.all(animationPromises).then(() => {
    // Make the hundred-block fully visible after all clones have arrived.
    hundredBlock.style.visibility = "visible";
  });
}

/**
 * Wrapper function to handle the state changes for tens to hundreds conversion.
 */
async function tensToHundredsWrapper() {
  // Update the text for the tens count before animation.
  updateTenTexts(tenCount - 10);

  // Run the animation and wait for it to complete.
  await animateTensToHundreds();

  // After animation, update the hundreds count and text.
  // The appendHundred() in the animation function already incremented hundredCount.
  updateHundredTexts();

  // Remove the 10 ten-bars that were animated away.
  removeTens(10);
}

async function onLeftDir2Click() {
  leftDir2.style.display = "none";
  playSound("click");
  // if (tenCount < maxTenCount || hundredCount >= 10) return;

  // Show the hundreds container before animating
  addHundredContainer(async () => {
    wiggleTens(false);
    await tensToHundredsWrapper();
    showNumberText(hundredCount * 100 + tenCount * 10 + unitCount);
    updateInstructions("after_hundred");
    showComment("hundred");
    setCavePose("Normal")
  });
}

leftDir2.onclick = onLeftDir2Click;

function getColumn(index) {
  const blocks = document.querySelectorAll("#hundred-widget .unit-box");
  if (blocks.length < 100) return;

  const first = blocks[index];
  const last = blocks[9 - index + 90];

  const firstRect = first.getBoundingClientRect();
  const lastRect = last.getBoundingClientRect();

  const overlay = document.createElement("div");
  overlay.style.position = "absolute";
  overlay.style.left = `${firstRect.left}px`;
  overlay.style.top = `${firstRect.top}px`;
  overlay.style.width = `${firstRect.width}px`;
  overlay.style.height = `${lastRect.top - firstRect.top + firstRect.width}px`;

  document.body.appendChild(overlay);
  return overlay;
}
