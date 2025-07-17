const questions = [
  [16828, 23456, 27778],
  [54321, 12345, 15454],
  [18765, 56789, 15555],
  [11231, 12341, 12115],
];

let questionIndex = 0;
let stage = 0;
let currentActiveBoxIndex = 0;
let currentActiveResultBoxIndex = 4; // Start from the rightmost place value box (Ones)
let isFillingFinalAnswer = false;
let columnSums = [];

// --- DOM Element Selection ---
const numberBoxes = document.querySelectorAll(".problem-grid .number-box");
const carryOverRow = document.querySelector(".problem-grid .row-2");
const carryOverBoxes = Array.from(
  document.querySelectorAll(".row-2.dashed-box")
);
const placeValueResultBoxes = Array.from(
  document.querySelectorAll(
    ".problem-grid .row-7.dashed-box:not(.number-label)"
  )
);
const finalAnswerBox = document.querySelector(
  ".problem-grid .row-7.number-label.dashed-box"
);
const optionsContainer = document.querySelector(".options-container");
const optionsGrid = document.querySelector(".options-grid");
const optionButtons = optionsGrid.querySelectorAll(".option-button");
const main = document.querySelector(".main-container");
const optionsFooter = document.querySelector(".footer-text");
const bottomStatement = document.getElementById("bottom-statement");
const headerTexts = document.querySelectorAll(".problem-grid .header-text");
const optionsTitle = document.querySelector(".options-title");
optionsTitle.textContent = data.pick;

// --- Text Population ---

// Populate headers from headerArray in texts.js
function populateHeaders() {
  headerTexts.forEach((header, index) => {
    if (headerArray[index]) {
      header.textContent = headerArray[index];
    }
  });
}

// Update the footer text in the options container
function updateOptionsFooter(key, colorClass = "") {
  if (data[key]) {
    optionsFooter.textContent = data[key];
    optionsFooter.className = `footer-text ${colorClass}`; // Reset and apply new class
  }
}

// Update the bottom statement text
function updateBottomStatement(key) {
  if (data[key]) {
    bottomStatement.textContent = data[key];
  }
}

// --- STAGE MANAGEMENT ---

// Function to populate the sum container (Stage 0 view)
function populateSumContainer(index) {
  const sumContent = document.querySelector(".sum-content");
  sumContent.innerHTML = ""; // Clear previous content

  if (index < 0 || index >= questions.length) return;

  const currentQuestion = questions[index];

  currentQuestion.forEach((num, i) => {
    const div = document.createElement("div");
    // MODIFICATION: Add a plus sign before the 3rd number
    if (i === currentQuestion.length - 1) {
      div.classList.add("operation");
      div.textContent = `+ ${num}`;
    } else {
      div.classList.add("number");
      div.textContent = num;
    }
    sumContent.appendChild(div);
  });

  // Add the horizontal line
  const hr = document.createElement("hr");
  hr.classList.add("line");
  sumContent.appendChild(hr);
}

function init() {
  populateHeaders();
  populateSumContainer(questionIndex); // Populate the initial sum view
  populateGrid(questionIndex);
  columnSums = getColumnSums(questionIndex);
  stage0();
  updateBottomStatement("start");
}

function callWithStage(newStage) {
  stage = newStage;
  if (stage === 1) setupStage1();
  else if (stage === 2) setupStage2();
  else if (stage === 3) setupStage3();
}
function stage0() {
  main.classList.add("first-stage");
  nextButton.disabled = false;
}
function setupStage1() {
  main.classList.remove("first-stage");
  optionsContainer.style.display = "none";
  carryOverRow.style.visibility = "hidden";
  carryOverBoxes.forEach((box) => (box.style.visibility = "hidden"));
  nextButton.disabled = false;
  numberBoxes.forEach((box) => box.classList.add("empty-number-box"));
  placeValueResultBoxes.forEach((box) => (box.style.visibility = "hidden"));
  finalAnswerBox.style.visibility = "hidden";
  document.querySelector(".row-7.equals-sign").style.visibility = "hidden";
  updateBottomStatement("decompose");
}

function setupStage2() {
  nextButton.disabled = true;
  optionsContainer.style.display = "flex";
  populateOptions(getJumbledPlaceValues(questionIndex));
  setActiveBox(currentActiveBoxIndex);
  optionsGrid.addEventListener("click", handleStage2OptionClick);
  updateOptionsFooter("blank");
}

function setupStage3() {
  nextButton.disabled = true;
  isFillingFinalAnswer = false;
  carryOverRow.style.visibility = "visible";
  carryOverBoxes.forEach((box) => (box.style.visibility = "visible"));

  [...placeValueResultBoxes, finalAnswerBox].forEach((box) => {
    box.style.visibility = "visible";
    box.classList.add("empty-number-box");
  });
  document.querySelector(".row-7.equals-sign").style.visibility = "visible";
  carryOverBoxes.forEach((box) => box.classList.add("empty-number-box"));
  finalAnswerBox.style.visibility = "visible"; // Ensure it's visible from the start

  const totalSum = questions[questionIndex].reduce((a, b) => a + b, 0);
  const stage3Options = [...columnSums, totalSum];
  for (let i = 0; i < 3; i++) {
    stage3Options.push(
      Math.floor(100 + Math.random() * 900) * (i % 2 === 0 ? 1 : 10)
    );
  }
  populateOptions(stage3Options, 9);
  setActiveResultBox(currentActiveResultBoxIndex);
  optionsGrid.addEventListener("click", handleStage3OptionClick);
  updateBottomStatement("ones_result");
  updateOptionsFooter("blank");
}

// Resets the applet UI and state for a new question
function resetAppletState() {
  // Clear carry over boxes
  carryOverBoxes.forEach((box) => {
    box.textContent = "";
    box.classList.add("empty-number-box");
  });

  // Clear place value result boxes
  placeValueResultBoxes.forEach((box) => {
    box.textContent = "";
    box.classList.add("empty-number-box");
    box.classList.remove("active", "vibrate", "red-bg");
  });

  // Clear final answer box
  finalAnswerBox.textContent = "";
  finalAnswerBox.classList.add("empty-number-box");
  finalAnswerBox.classList.remove("final-answer-correct");
  finalAnswerBox.classList.remove("active");

  // Reset option buttons
  optionButtons.forEach((button) => {
    button.disabled = false;
    button.classList.remove("correct", "vibrate", "red-bg");
    button.style.display = "block"; // Ensure they are visible for reuse
  });

  // Reset number boxes (for stage 2 reuse)
  numberBoxes.forEach((box) => {
    box.classList.add("empty-number-box");
    box.classList.remove("active");
  });

  // Remove existing event listeners to prevent stacking
  optionsGrid.removeEventListener("click", handleStage2OptionClick);
  optionsGrid.removeEventListener("click", handleStage3OptionClick);

  // Reset footer
  updateOptionsFooter("blank");
  optionsContainer.style.display = "none";
}

// --- INTERACTION HANDLING ---

function handleStage2OptionClick(event) {
  const clickedButton = event.target;
  if (
    !clickedButton.classList.contains("option-button") ||
    clickedButton.disabled
  )
    return;
  const activeButton = numberBoxes[currentActiveBoxIndex];
  if (activeButton.textContent.trim() === clickedButton.textContent.trim()) {
    // MODIFICATION: Play correct sound
    playSound("correct");
    activeButton.classList.remove("empty-number-box", "active");
    clickedButton.disabled = true;
    clickedButton.classList.add("correct");
    currentActiveBoxIndex++;
    if (currentActiveBoxIndex < numberBoxes.length) {
      setActiveBox(currentActiveBoxIndex);
      updateOptionsFooter("correct", "green");
    } else {
      nextButton.disabled = false;
      optionsGrid.removeEventListener("click", handleStage2OptionClick);
      updateBottomStatement("excellent", "green");
    }
  } else {
    // MODIFICATION: Play wrong sound
    playSound("wrong");
    clickedButton.classList.add("vibrate", "red-bg");
    setTimeout(() => {
      clickedButton.classList.remove("vibrate", "red-bg");
    }, 400);
    updateOptionsFooter("wrong", "red");
  }
}

function handleStage3OptionClick(event) {
  const clickedButton = event.target;
  if (
    !clickedButton.classList.contains("option-button") ||
    clickedButton.disabled
  )
    return;

  const clickedValue = Number(clickedButton.textContent.trim());

  if (isFillingFinalAnswer) {
    const totalSum = questions[questionIndex].reduce((a, b) => a + b, 0);
    if (clickedValue === totalSum) {
      // MODIFICATION: Play correct sound
      playSound("correct");
      finalAnswerBox.textContent = clickedValue;
      finalAnswerBox.classList.add("final-answer-correct");
      if (typeof confettiBurst !== "undefined") confettiBurst();
      finalAnswerBox.classList.remove("empty-number-box", "active");
      clickedButton.disabled = true;
      clickedButton.classList.add("correct");
      nextButton.disabled = false;
      optionsGrid.removeEventListener("click", handleStage3OptionClick);
      updateOptionsFooter("excellent", "green");
      updateBottomStatement("final_screen");
    } else {
      // MODIFICATION: Play wrong sound
      playSound("wrong");
      clickedButton.classList.add("vibrate", "red-bg");
      setTimeout(() => {
        clickedButton.classList.remove("vibrate", "red-bg");
      }, 400);
      updateOptionsFooter("wrong", "red");
    }
  } else {
    const correctValue = columnSums[currentActiveResultBoxIndex];
    if (clickedValue === correctValue) {
      // MODIFICATION: Play correct sound
      playSound("correct");
      const activeButton = placeValueResultBoxes[currentActiveResultBoxIndex];
      activeButton.textContent = clickedValue;
      activeButton.classList.remove("empty-number-box", "active");
      clickedButton.disabled = true;
      clickedButton.classList.add("correct");
      updateOptionsFooter("correct", "green");

      const powerOfTen = Math.pow(10, 5 - currentActiveResultBoxIndex);
      if (correctValue >= powerOfTen && currentActiveResultBoxIndex > 0) {
        let overflow_key;
        switch (currentActiveResultBoxIndex) {
          case 4:
            overflow_key = "ones_overflow";
            break;
          case 3:
            overflow_key = "tens_overflow";
            break;
          case 2:
            overflow_key = "hundreds_overflow";
            break;
          case 1:
            overflow_key = "thousands_overflow";
            break;
        }
        updateBottomStatement(overflow_key);
        triggerOverflowState(activeButton, correctValue, powerOfTen);
      } else {
        advanceToNextResultBox();
      }
    } else {
      // MODIFICATION: Play wrong sound
      playSound("wrong");
      clickedButton.classList.add("vibrate", "red-bg");
      setTimeout(() => {
        clickedButton.classList.remove("vibrate", "red-bg");
      }, 400);
      updateOptionsFooter("wrong", "red");
    }
  }
}

function triggerOverflowState(box, value, powerOfTen) {
  optionsGrid.style.pointerEvents = "none"; // Disable options
  box.classList.add("vibrate", "red-bg");
  showFtue(box);

  box.addEventListener(
    "click",
    function handleOverflowClick() {
      // MODIFICATION: Play click sound
      playSound("click");
      hideFtue();
      optionsGrid.style.pointerEvents = "auto"; // Re-enable options
      box.classList.remove("vibrate", "red-bg");

      const carryValue = Math.floor(value / powerOfTen);
      const remainder = value % powerOfTen;
      const carryBoxIndex = currentActiveResultBoxIndex - 1;

      if (carryBoxIndex >= 0) {
        const carryBox = carryOverBoxes[carryBoxIndex];
        carryBox.textContent = carryValue * powerOfTen;
        carryBox.classList.remove("empty-number-box");
      }

      box.textContent = remainder;

      advanceToNextResultBox();

      box.removeEventListener("click", handleOverflowClick);
    },
    { once: true }
  );
}

function advanceToNextResultBox() {
  currentActiveResultBoxIndex--;
  let result_key;
  switch (currentActiveResultBoxIndex) {
    case 3:
      result_key = "tens_result";
      break;
    case 2:
      result_key = "hundreds_result";
      break;
    case 1:
      result_key = "thousands_result";
      break;
    case 0:
      result_key = "tth_result";
      break;
  }
  updateBottomStatement(result_key);

  if (currentActiveResultBoxIndex < 0) {
    isFillingFinalAnswer = true;
    setActiveResultBox(-1, true);
    updateBottomStatement("final_sum");
  } else {
    setActiveResultBox(currentActiveResultBoxIndex);
  }
}

// --- UI HELPERS ---

function setActiveBox(index) {
  numberBoxes.forEach((box) => box.classList.remove("active"));
  if (index < numberBoxes.length) {
    numberBoxes[index].classList.add("active");
    updateBottomStatement("click_number");
  }
}

function setActiveResultBox(index, isFinal = false) {
  placeValueResultBoxes.forEach((box) => box.classList.remove("active"));
  finalAnswerBox.classList.remove("active");
  if (isFinal) {
    finalAnswerBox.classList.add("active");
  } else if (index >= 0) {
    placeValueResultBoxes[index].classList.add("active");
  }
}

// Updated to only handle vibration, background is handled in click listeners
function vibrateElement(el) {
  if (!el) return;
  el.classList.add("vibrate");
  setTimeout(() => el.classList.remove("vibrate"), 400);
}

// --- DATA & GRID FUNCTIONS ---

function getColumnSums(qIndex) {
  const sums = [0, 0, 0, 0, 0];
  if (qIndex < 0 || qIndex >= questions.length) return sums;

  const currentQuestion = questions[qIndex];

  // Calculate sums based on place values directly
  for (let i = 0; i < 5; i++) {
    const placeValue = Math.pow(10, 4 - i);
    let columnSum = 0;
    currentQuestion.forEach((num) => {
      // Extract the value of the digit at the specific place value
      const digitValue =
        Math.floor((num % (placeValue * 10)) / placeValue) * placeValue;
      columnSum += digitValue;
    });
    sums[i] = columnSum;
  }

  // Now incorporate carries into the sums for Stage 3 calculation
  let carry = 0;
  for (let i = 4; i >= 0; i--) {
    // Start from Ones place
    const placeValue = Math.pow(10, 4 - i);

    // Calculate initial column sum from input numbers
    let initialSum = 0;
    currentQuestion.forEach((num) => {
      // Get the digit's value at this place
      const digit = Math.floor((num / placeValue) % 10);
      initialSum += digit;
    });

    // The value for this column includes the initial sum + previous carry
    const totalColumnValue = (initialSum + carry) * placeValue;
    sums[i] = totalColumnValue;

    // Calculate carry for the next (left) column
    carry = Math.floor((initialSum + carry) / 10);
  }

  return sums;
}

function populateGrid(index) {
  if (index < 0 || index >= questions.length) return;
  const currentQuestion = questions[index];
  const numberLabels = document.querySelectorAll(
    ".problem-grid .number-label:not(.row-7)"
  );

  // Hide rows if there are fewer numbers than labels
  numberLabels.forEach((label, i) => {
    const row = label.closest(
      ".problem-grid > div:nth-child(n+" + (i + 3) + ")"
    ); // Assuming labels start from row 3
    if (i >= currentQuestion.length) {
      // Hide the entire row if no number exists for it
      document
        .querySelectorAll(`.row-${i + 3}`)
        .forEach((el) => (el.style.display = "none"));
    } else {
      document
        .querySelectorAll(`.row-${i + 3}`)
        .forEach((el) => (el.style.display = ""));
    }
  });

  let boxIndex = 0;
  currentQuestion.forEach((num, i) => {
    if (i < numberLabels.length) {
      // MODIFICATION: Add a plus sign before the 3rd number
      if (i === 2) {
        numberLabels[i].textContent = "+ " + num;
      } else {
        numberLabels[i].textContent = num;
      }
      const placeValues = getPlaceValuesForGrid(num);
      for (let j = 0; j < 5; j++) {
        if (boxIndex < numberBoxes.length) {
          numberBoxes[boxIndex].textContent = placeValues[j] || "0";
          boxIndex++;
        }
      }
    }
  });
}

function getJumbledPlaceValues(index) {
  if (index < 0 || index >= questions.length) return [];
  let allPlaceValues = [];
  questions[index].forEach((num) => {
    allPlaceValues = allPlaceValues.concat(getPlaceValuesForGrid(num));
  });
  return allPlaceValues.sort(() => Math.random() - 0.5);
}

function getPlaceValuesForGrid(num) {
  const totalLength = 5;
  let numStr = String(num);
  if (numStr.length > totalLength) numStr = numStr.slice(-totalLength);

  // Pad with zeros at the beginning to ensure it has 5 digits for alignment
  while (numStr.length < totalLength) {
    numStr = "0" + numStr;
  }

  const result = [];
  for (let i = 0; i < totalLength; i++) {
    const placeValue = Math.pow(10, totalLength - 1 - i);
    const digit = parseInt(numStr[i]);
    result.push(digit * placeValue);
  }

  return result;
}

function populateOptions(values, numToPopulate = 15) {
  const shuffledValues = [...values].sort(() => Math.random() - 0.5);
  optionButtons.forEach((button, i) => {
    button.disabled = false;
    button.classList.remove("correct");
    if (i < numToPopulate && i < shuffledValues.length) {
      button.textContent = shuffledValues[i];
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  });
}

// --- EVENT LISTENERS ---

nextButton.addEventListener("click", () => {
  // MODIFICATION: Play click sound
  playSound("click");
  if (stage === 0) callWithStage(1);
  else if (stage === 1) callWithStage(2);
  else if (stage === 2) callWithStage(3);
  else if (stage === 3) {
    // Move to the next question or finish
    questionIndex++;

    if (questionIndex < questions.length) {
      // Reset states for the next question
      stage = 0;
      currentActiveBoxIndex = 0;
      currentActiveResultBoxIndex = 4;
      isFillingFinalAnswer = false;

      // Reset the UI and data
      resetAppletState();
      init();
    } else {
      // Activity Complete
      // Ensure these functions exist (from app.js)
      if (typeof triggerFullScreenOverlay !== "undefined")
        triggerFullScreenOverlay(true);
      if (typeof confettiBurst !== "undefined") confettiBurst();
    }
  }
});

// --- INITIALIZATION ---
init();
