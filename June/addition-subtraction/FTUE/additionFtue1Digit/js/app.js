// --- GLOBAL STATE & CONSTANTS ---
let currentStep = 0;
const MINUEND = 5;
const SUBTRAHEND = 3;
let rows = [];
let ftueTimeout;

// --- DOM ELEMENT REFERENCES ---
const appContainer = document.querySelector(".app-container");
const appMain = document.querySelector(".app-main");
const blocksColumn = document.getElementById("blocks-column");
const numbersColumn = document.getElementById("numbers-column");
const blockSectionTemplate = document.getElementById("block-section-template");
const numberSectionTemplate = document.getElementById("number-section-template");
const nextButton = document.querySelector(".next-button");
const contextP = document.querySelector("#context > p");
const characterImg = document.getElementById("character");
const handFtue = document.getElementById("hand-ftue");
const problemStatement = document.querySelector(".problem-statement h1");

// --- UTILITY & HELPER FUNCTIONS ---
function playSound(name) {
  const file = `sound/${name}.mp3`;
  const audio = new Audio(file);
  audio.play();
}

function setJaxpose(poseKey) {
  characterImg.src = texts.ftue[poseKey];
}

function updateSpeechBubble(key) {
  contextP.innerHTML = texts.context_data[key];
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// --- FTUE FUNCTIONS ---
function showFtue(element, showHand = true) {
  if (!element) return;
  // hideFtue();

  element.classList.add("ftue-highlight");

  if (showHand && handFtue) {
    const rect = element.getBoundingClientRect();
    handFtue.querySelector("img").src = texts.ftue.hand_cursor;
    handFtue.style.top = `${rect.top + rect.height / 2}px`;
    handFtue.style.left = `${rect.left + rect.width / 2}px`;
    handFtue.classList.add("hand-animating");
  }

  // ftueTimeout = setTimeout(hideFtue, 3000);
}

function hideFtue() {
  clearTimeout(ftueTimeout);
  if (handFtue) handFtue.classList.remove("hand-animating");
  document
    .querySelectorAll(".ftue-highlight")
    .forEach((el) => el.classList.remove("ftue-highlight"));
}

const overlay = document.getElementById("activity-complete-overlay");
const startOverBtn = document.getElementById("start-over-btn");
const overlayTitle = document.getElementById("overlay-title");
const overlayMessage = document.getElementById("overlay-message");
const leftPanel = document.querySelector(".left-panel");

function showOverlay(titleTag, messageTag, buttonTag, cb) {
  leftPanel.style.visibility = "hidden";
  nextButton.style.visibility = "hidden";
  overlayTitle.innerHTML = texts.context_data[titleTag];
  overlayMessage.innerHTML = texts.context_data[messageTag];
  overlay.style.display = "flex";
  startOverBtn.textContent = texts.buttons[buttonTag];
  showFtue(startOverBtn, true);
  startOverBtn.onclick = () => {
    hideOverlay();

    cb?.();
  };
}

function hideOverlay() {
  leftPanel.style.visibility = "visible";
  nextButton.style.visibility = "visible";
  overlay.style.display = "none";
  hideFtue();
}

// --- UI & ELEMENT CREATION ---
function createRow() {
  const blockClone = blockSectionTemplate.content.cloneNode(true);
  const numberClone = numberSectionTemplate.content.cloneNode(true);
  const blockElement = blockClone.querySelector(".block-section");
  const numberElement = numberClone.querySelector(".number-section");

  blocksColumn.appendChild(blockElement);
  numbersColumn.appendChild(numberElement);

  if (rows.length === 2) {
    blockElement.style.marginTop = "3vh";
    numberElement.style.marginTop = "3vh";
  }

  const rowObject = {
    id: rows.length,
    blockElement,
    numberElement,
    stepper: blockElement.querySelector(".stepper"),
    plusButton: blockElement.querySelector(".plus"),
    minusButton: blockElement.querySelector(".minus"),
    unitBlock: blockElement.querySelector(".unit-block"),
    badge: blockElement.querySelector(".corner-badge"),
    numberDisplay: numberElement.querySelector(".number-display"),
    count: 0,
    // CHANGED: This function ONLY updates the visual blocks.
    updateBlockVisuals(value, isPlaceholder = false) {
      this.count = value;
      this.unitBlock.innerHTML = "";
      for (let i = 0; i < this.count; i++) {
        let block;
        if (isPlaceholder) {
          block = document.createElement("div");
          block.className = "dashed";
        } else {
          block = document.createElement("img");
          block.src = "assets/unit.png";
        }
        this.unitBlock.appendChild(block);
      }
    },
    // CHANGED: New separate functions for updating the numbers.
    updateBadge(value) {
      this.badge.textContent = value;
    },
    updateNumberDisplay(value) {
      this.numberDisplay.textContent = value;
    },
  };
  rows.push(rowObject);
  return rowObject;
}

function addEqualsLine() {
  const line = document.createElement("div");
  line.className = "equals-line";
  appMain.appendChild(line);

  const parentRect = appMain.getBoundingClientRect();
  const firstElemRect = rows[2].blockElement.getBoundingClientRect();
  const lastElemRect = rows[2].numberElement.getBoundingClientRect();

  line.style.top = `calc(${
    firstElemRect.top - parentRect.top
  }px - 3.5vw)`;
  line.style.left = `${firstElemRect.left - parentRect.left}px`;
  line.style.width = `${lastElemRect.right - firstElemRect.left}px`;
}

function addMinusSign(targetElement) {
  const minus = document.createElement("div");
  minus.textContent = "+";
  minus.className = "minus-operator";
  appContainer.appendChild(minus);

  const targetRect = targetElement.getBoundingClientRect();
  const containerRect = appContainer.getBoundingClientRect();

  minus.style.top = `${
    targetRect.top - containerRect.top + targetRect.height / 2
  }px`;
  minus.style.left = `${
    targetRect.left - containerRect.left - minus.offsetWidth - 20
  }px`;
}

// --- CORE INTERACTION LOGIC ---
function handleStepperClick(event) {
  const button = event.target.closest(".stepper-btn");
  if (!button) return;
  if (currentStep < 3) return;

  hideFtue();
  playSound("click");

  const blockSection = button.closest(".block-section");
  const row = rows.find((r) => r.blockElement === blockSection);
  if (!row) return;

  const oldCount = row.count;

  if (button.classList.contains("plus")) {
    row.count++;
  } else if (button.classList.contains("minus") && row.count > 0) {
    row.count--;
  }

  if (oldCount === row.count) return;

  if (currentStep === 3 && row.id === 0) {
    // CHANGED: Use new specific functions
    row.updateBlockVisuals(row.count);
    row.updateBadge(row.count);
    row.updateNumberDisplay(row.count);
    if (row.count === MINUEND) {
      completeStep1();
    }
  }

  if (currentStep === 4 && row.id === 1) {
    // CHANGED: Only update the visual placeholders, NOT the numbers
    row.updateBlockVisuals(row.count);
    row.updateBadge(row.count);
    row.updateNumberDisplay(row.count);
    if (row.count === SUBTRAHEND) {
      completeStep2();
    }
  }
}

// --- ANIMATION FUNCTIONS ---
function createClone(sourceElement) {
  const clone = sourceElement.cloneNode(true);
  const sourceRect = sourceElement.getBoundingClientRect();
  clone.style.position = "fixed";
  clone.style.margin = "0";
  clone.style.zIndex = "100";
  clone.style.width = `${sourceRect.width}px`;
  clone.style.height = `${sourceRect.height}px`;
  clone.style.top = `${sourceRect.top}px`;
  clone.style.left = `${sourceRect.left}px`;
  clone.style.transition = `all 500ms ease-in-out`;
  document.body.appendChild(clone);
  return clone;
}

function animateCloneToTarget(source, target, onStart, onComplete) {
  const clone = createClone(source);
  playSound("swoosh");
  onStart?.();
  requestAnimationFrame(() => {
    const targetRect = target.getBoundingClientRect();
    clone.style.top = `${targetRect.top}px`;
    clone.style.left = `${targetRect.left}px`;
  });
  clone.addEventListener(
    "transitionend",
    () => {
      clone.remove();
      onComplete?.();
    },
    { once: true }
  );
}

// --- STEP-BY-STEP WORKFLOW ---
function advanceStep() {
  playSound("click");
  currentStep++;
  hideFtue();
  nextButton.disabled = true;

  switch (currentStep) {
    case 1: setupStep0_b(); break;
    case 2: setupStep0_c(); break;
    case 3: setupStep1(); break;
    case 4: setupStep2(); break;
    case 5: setupStep3(); break;
    case 6: handleAddunit(); break;
    case 7: setupStep5(); break;
    case 8: completion(); break;
  }
}

function setupStep0_a() {
  updateSpeechBubble("step0_a");
  const row = createRow();
  row.stepper.style.visibility = "hidden";
  showFtue(row.blockElement, false);
  nextButton.textContent = texts.buttons.next;
  nextButton.disabled = false;
  showFtue(nextButton, true);
}

function setupStep0_b() {
  updateSpeechBubble("step0_b");
  const row = rows[0];
  row.stepper.style.visibility = "visible";
  showFtue(row.stepper, false);
  nextButton.textContent = texts.buttons.next;
  nextButton.disabled = false;
  showFtue(nextButton, true);
}

function setupStep0_c() {
  updateSpeechBubble("step0_c");
  showFtue(rows[0].numberElement, false);
  nextButton.textContent = texts.buttons.start_task;
  nextButton.disabled = false;
  showFtue(nextButton, true);
}

function setupStep1() {
  updateSpeechBubble("step1");
  showFtue(rows[0].plusButton ,true);
}

function completeStep1() {
  rows[0].stepper.style.visibility = "hidden";
  updateSpeechBubble("step1_complete");
  nextButton.textContent = texts.buttons.next;
  nextButton.disabled = false;
  showFtue(nextButton, true);
  setJaxpose("pose_happy");
}

function setupStep2() {
  
  updateSpeechBubble("step2");
  const row = createRow();
  row.stepper.style.visibility = "visible";
  showFtue(rows[1].plusButton, true);
}

function completeStep2() {
  setJaxpose("pose_happy");
  rows[1].stepper.style.visibility = "hidden";
  updateSpeechBubble("step2_complete");
  nextButton.textContent = texts.buttons.next;
  nextButton.disabled = false;
  showFtue(nextButton, true);
}

function setupStep3() {
  setJaxpose("pose_normal");
  updateSpeechBubble("step3");
  createRow();
  rows[2].blockElement.classList.add("third-row");
  // rows[2].numberElement.classList.add("third-row");
  addEqualsLine();
  nextButton.textContent = texts.buttons.add_unit;
  nextButton.disabled = false;
  showFtue(nextButton, true);
}



function completeStep3() {
  updateSpeechBubble("step3_complete");
  nextButton.textContent = texts.buttons.collect_remaining;
  nextButton.disabled = false;
  showFtue(nextButton, true);
}
function completion() {
  showOverlay(
    "overlay_final_heading",
    "overlay_final_message",
    "start_over",
    () => {
      window.location.reload();
    }
  );
}
async function addUnit(row) {
  const remainingCubes = Array.from(rows[row].unitBlock.children)
  let resultCount = row*5;

  for (const sourceCube of remainingCubes) {
    const placeholder = document.createElement("div");
    placeholder.style.width = getComputedStyle(sourceCube).width;
    placeholder.style.height = getComputedStyle(sourceCube).height;
    rows[2].unitBlock.appendChild(placeholder);

    await new Promise((resolve) =>
      animateCloneToTarget(
        sourceCube,
        placeholder,
        () => sourceCube.classList.add("transparent"),
        () => {
          resultCount++;
          // CHANGED: Use the new specific functions
          rows[2].updateBlockVisuals(resultCount);
          rows[2].updateBadge(resultCount);
          rows[2].updateNumberDisplay(resultCount);
          placeholder.remove();
          resolve();
        }
      )
    );
    await wait(200);
  }
  
}

async function handleAddunit(){
  await addUnit(0);
  await wait(200);
  await addUnit(1);
  // const blockHeight = rows[2].blockElement.offsetHeight;
  // rows[2].numberElement.style.height = `${blockHeight}px`;
  setJaxpose("pose_superHappy");
  completeStep4();
}

function completeStep4() {
  updateSpeechBubble("step4_complete");
  nextButton.textContent = texts.buttons.next;
  nextButton.disabled = false;
  showFtue(nextButton, true);
}

function setupStep5() {
  updateSpeechBubble("step5");
  problemStatement.innerHTML = `<strong>${MINUEND} + ${SUBTRAHEND} = ${
    MINUEND + SUBTRAHEND
  }</strong>`;
  addMinusSign(rows[1].blockElement);
  addMinusSign(rows[1].numberElement);
  rows.forEach((row) => {
    row.numberElement.classList.add("ftue-highlight");
  });
  // nextButton.style.visibility = "hidden";
  nextButton.disabled = false;
  showFtue(nextButton, true);
}

// --- INITIALIZATION ---
function initializeApp() {
  setJaxpose("pose_normal");
  document
    .querySelectorAll(".minus-operator, .equals-line")
    .forEach((el) => el.remove());
  blocksColumn.innerHTML = "";
  numbersColumn.innerHTML = "";

  rows = [];
  currentStep = 0;
  nextButton.style.visibility = "visible";
  nextButton.onclick = advanceStep;
  appMain.removeEventListener("click", handleStepperClick);
  appMain.addEventListener("click", handleStepperClick);
  setupStep0_a();
}

initializeApp();