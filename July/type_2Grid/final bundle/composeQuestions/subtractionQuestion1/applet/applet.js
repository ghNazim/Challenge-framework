// Questions: First number is minuend, second is subtrahend.
// Minuend is always greater than subtrahend.
// Questions are designed to involve borrowing and avoid zeros.
const questions = [
  [76767, 23234],
  [54321, 12345],
  [98765, 56789],
  [71245, 23456],
];

let questionIndex = 0;
let stage = 0;
let currentActiveBoxIndex = 0; // For stage 2 (decomposition)
let currentActiveResultBoxIndex = 4; // For stage 3 (subtraction), starts at Ones place
let isFillingFinalAnswer = false;
let isBorrowing = false;

// Store place values and correct answers
let topNumberPlaceValues = [];
let bottomNumberPlaceValues = [];
let correctAnswers = []; // [tth, th, h, t, o, final_answer]

// --- DOM Element Selection ---
const numberBoxes = document.querySelectorAll(".problem-grid .number-box");
const borrowRow = document.querySelector(".problem-grid .row-2");
const borrowBoxes = Array.from(document.querySelectorAll(".row-2.dashed-box"));
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
// --- UTILITY FUNCTIONS ---

// A simple version of the placeholder filler
function fillPlaceholders(template, data) {
  return template.replace(/\{\{(.*?)\}\}/g, (match, key) => {
    const trimmedKey = key.trim();
    return data.hasOwnProperty(trimmedKey) ? data[trimmedKey] : match;
  });
}

// --- Text Population ---

function populateHeaders() {
  headerTexts.forEach((header, index) => {
    if (headerArray[index]) {
      header.textContent = headerArray[index];
    }
  });
}

function updateOptionsFooter(key, colorClass = "") {
  if (data[key]) {
    optionsFooter.textContent = data[key];
    optionsFooter.className = `footer-text ${colorClass}`;
  }
}

function updateBottomStatement(keyOrText, placeholderData = null) {
  let text = data[keyOrText] || keyOrText;
  if (placeholderData) {
    text = fillPlaceholders(text, placeholderData);
  }
  bottomStatement.innerHTML = `<p>${text}</p>`;
}

// --- STAGE MANAGEMENT ---

function init() {
  populateHeaders();
  populateSumContainer(questionIndex);
  populateGrid(questionIndex);
  calculateCorrectAnswers(questionIndex);
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
  if (typeof showFtue !== "undefined") showFtue(nextButton);
  finalAnswerBox.style.visibility = "hidden";
}

function setupStage1() {
  main.classList.remove("first-stage");
  optionsContainer.style.display = "none";
  borrowRow.style.visibility = "hidden";
  borrowBoxes.forEach((box) => (box.style.visibility = "hidden"));
  nextButton.disabled = false;
  if (typeof showFtue !== "undefined") showFtue(nextButton);
  numberBoxes.forEach((box) => box.classList.add("empty-number-box"));
  placeValueResultBoxes.forEach((box) => (box.style.visibility = "hidden"));
  finalAnswerBox.style.visibility = "hidden";
  document.querySelector(".row-7.equals-sign").style.visibility = "hidden";
  updateBottomStatement("decompose");
}

function setupStage2() {
  nextButton.disabled = true;
  optionsContainer.style.display = "flex";
  optionsContainer.classList.remove("options-container-disabled");
  const options = getJumbledPlaceValues(questionIndex);
  while (options.length < 12) {
    const randomValue = Math.floor(Math.random() * 90000) + 10000;
    if (!options.includes(randomValue)) {
      options.push(randomValue);
    }
  }
  populateOptions(options, 12);
  setActiveBox(currentActiveBoxIndex);
  optionsGrid.addEventListener("click", handleStage2OptionClick);
  updateOptionsFooter("blank");
}

function setupStage3() {
  nextButton.disabled = true;
  isFillingFinalAnswer = false;
  isBorrowing = false;
  borrowRow.style.visibility = "visible";
  borrowBoxes.forEach((box) => {
    box.style.visibility = "visible";
    // box.classList.add("empty-number-box");
  });

  [...placeValueResultBoxes, finalAnswerBox].forEach((box) => {
    box.style.visibility = "visible";
    box.classList.add("empty-number-box");
  });
  document.querySelector(".row-7.equals-sign").style.visibility = "visible";
  finalAnswerBox.style.visibility = "visible";

  // Restore the original place values to the grid for the start of stage 3
  const [num1, num2] = questions[questionIndex];
  topNumberPlaceValues = getPlaceValuesForGrid(num1);
  bottomNumberPlaceValues = getPlaceValuesForGrid(num2);
  let boxIndex = 0;
  [...topNumberPlaceValues, ...bottomNumberPlaceValues].forEach((val) => {
    numberBoxes[boxIndex].textContent = val;
    numberBoxes[boxIndex++].classList.remove("empty-number-box");
  });

  optionsGrid.addEventListener("click", handleStage3OptionClick);
  processSubtractionForColumn(currentActiveResultBoxIndex);
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
    activeButton.classList.remove("empty-number-box", "active");
    clickedButton.disabled = true;
    clickedButton.classList.add("correct");
    currentActiveBoxIndex++;
    if (currentActiveBoxIndex < numberBoxes.length) {
      setActiveBox(currentActiveBoxIndex);
      updateOptionsFooter("correct", "green");
      playSound("correct");
    } else {
      nextButton.disabled = false;
      if (typeof showFtue !== "undefined") showFtue(nextButton);
      optionsGrid.removeEventListener("click", handleStage2OptionClick);
      updateOptionsFooter("excellent", "green");
      updateBottomStatement("decomposed_correctly");
    }
  } else {
    clickedButton.classList.add("vibrate", "red-bg");
    playSound("wrong");
    setTimeout(() => clickedButton.classList.remove("vibrate", "red-bg"), 400);
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
  let correctValue;
  let activeBox;

  if (isFillingFinalAnswer) {
    correctValue = correctAnswers[5]; // The final answer
    activeBox = finalAnswerBox;
    placeValueResultBoxes.forEach((box) => box.classList.add("active"));
  } else {
    correctValue = correctAnswers[currentActiveResultBoxIndex];
    activeBox = placeValueResultBoxes[currentActiveResultBoxIndex];
  }

  if (clickedValue === correctValue) {
    playSound("correct");
    activeBox.textContent = clickedValue;
    activeBox.classList.remove("empty-number-box", "active");
    clickedButton.disabled = true;
    clickedButton.classList.add("correct");
    updateOptionsFooter("correct", "green");

    if (isFillingFinalAnswer) {
      activeBox.classList.add("final-answer-correct");
      if (typeof confettiBurst !== "undefined") confettiBurst();
      nextButton.disabled = false;
      if (typeof showFtue !== "undefined") showFtue(nextButton);
      optionsGrid.removeEventListener("click", handleStage3OptionClick);
      updateBottomStatement("final_screen");
    } else {
      currentActiveResultBoxIndex--;
      processSubtractionForColumn(currentActiveResultBoxIndex);
    }
  } else {
    playSound("wrong");
    clickedButton.classList.add("vibrate", "red-bg");
    setTimeout(() => clickedButton.classList.remove("vibrate", "red-bg"), 400);
    updateOptionsFooter("wrong", "red");
  }
}

// --- SUBTRACTION & BORROWING LOGIC ---

function processSubtractionForColumn(columnIndex) {
  if (columnIndex < 0) {
    // All columns done, move to final answer
    isFillingFinalAnswer = true;
    setActiveResultBox(-1, true); // Highlight final answer box

    placeValueResultBoxes.forEach((box) => box.classList.add("active"));
    
    updateBottomStatement("compose_answer")
    populateOptionsForFinalAnswer();
    optionsContainer.classList.remove("options-container-disabled");
    return;
  }

  const topValue = topNumberPlaceValues[columnIndex];
  const bottomValue = bottomNumberPlaceValues[columnIndex];

  setActiveResultBox(columnIndex);

  if (topValue >= bottomValue) {
    isBorrowing = false;
    nextButton.disabled = true;
    optionsContainer.classList.remove("options-container-disabled");
    optionsGrid.style.pointerEvents = "auto";
    const key = [
      "tth_result",
      "thousands_result",
      "hundreds_result",
      "tens_result",
      "ones_result",
    ][columnIndex];
    updateBottomStatement(key);
    updateOptionsFooter("blank");
    populateOptionsForColumn(columnIndex);
  } else {
    isBorrowing = true;
    optionsContainer.classList.add("options-container-disabled");
    nextButton.disabled = false;
    if (typeof showFtue !== "undefined") showFtue(nextButton);
    const placeholderData = { top: topValue, bottom: bottomValue };
    updateBottomStatement("borrow_needed", placeholderData);
  }
}

function handleBorrow() {
  isBorrowing = false;
  nextButton.disabled = true;

  let borrowFromIndex = currentActiveResultBoxIndex - 1;
  // Find a non-zero column to borrow from
  while (topNumberPlaceValues[borrowFromIndex] === 0 && borrowFromIndex > 0) {
    borrowFromIndex--;
  }

  // Highlight all boxes from the borrow source to the target
  for (let i = borrowFromIndex; i < currentActiveResultBoxIndex; i++) {
    numberBoxes[i].classList.add("borrow-path");
  }

  const borrowFromBox = numberBoxes[borrowFromIndex];
  highlightAndListen(borrowFromBox, borrowFromIndex);
  updateBottomStatement("click_to_borrow");
}

function highlightAndListen(box, index) {
  box.classList.add("active"); // Highlight the box to borrow from
  if (typeof showFtue !== "undefined") showFtue(box);

  const listener = () => {
    if (typeof hideFtue !== "undefined") hideFtue();
    playSound("click");
    box.classList.remove("active");
    executeBorrow(index);
    box.removeEventListener("click", listener);
  };
  box.addEventListener("click", listener, { once: true });
}

function executeBorrow(borrowedFromIndex) {
  // Cascade the borrow down to the current column
  for (let i = borrowedFromIndex; i < currentActiveResultBoxIndex; i++) {
    const powerOfTen = Math.pow(10, 4 - i);
    topNumberPlaceValues[i] -= powerOfTen;
    topNumberPlaceValues[i + 1] += powerOfTen;
    const borrowBox = borrowBoxes[i];
    const box = numberBoxes[i];
    box.classList.add("strike-through");

    borrowBox.textContent = topNumberPlaceValues[i] + "+" + powerOfTen;
    const isStriked = numberBoxes[i + 1].classList.contains("strike-through");
    numberBoxes[i + 1].classList.contains("strike-through");
    const toBox = isStriked ? borrowBoxes[i + 1] : numberBoxes[i + 1];
    updateBottomStatement("observe");
    setTimeout(() => {
      animateTextClone(borrowBox, toBox, powerOfTen);
    }, 300);
    setTimeout(() => {
      borrowBox.textContent = topNumberPlaceValues[i];
      setTimeout(() => {
        const isStriked =
          numberBoxes[i + 1].classList.contains("strike-through");
        // const toBox = isStriked ? borrowBoxes[i + 1] : numberBoxes[i + 1];
        // animateTextClone(borrowBox, toBox, powerOfTen);
        if (!isStriked) {
          numberBoxes[i + 1].textContent = topNumberPlaceValues[i + 1];
        } else {
          borrowBoxes[i + 1].textContent = topNumberPlaceValues[i + 1];
        }
      }, 50);
    }, 1500);
  }

  // Animate the changes on the grid
  // for (let i = borrowedFromIndex; i <= currentActiveResultBoxIndex; i++) {
  //   const box = numberBoxes[i];
  //   const newValue = topNumberPlaceValues[i];
  //   // borrowBox.textContent = newValue + "+" + ne;
  //   if (window.gsap) {
  //     gsap.to(box, {
  //       duration: 0.5,
  //       textContent: newValue,
  //       roundProps: "textContent",
  //       ease: "power1.inOut",
  //     });
  //   } else {
  //     box.textContent = newValue;
  //   }
  // }

  // After borrowing, re-process the current column
  setTimeout(() => {
    processSubtractionForColumn(currentActiveResultBoxIndex);
  }, 1500); // Wait for animation
}

// --- UI & DATA HELPERS ---

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

function populateSumContainer(index) {
  const sumContent = document.querySelector(".sum-content");
  sumContent.innerHTML = "";
  if (index < 0 || index >= questions.length) return;
  const [num1, num2] = questions[index];

  const div1 = document.createElement("div");
  div1.classList.add("number");
  div1.textContent = num1;
  sumContent.appendChild(div1);

  const div2 = document.createElement("div");
  div2.classList.add("operation");
  div2.textContent = `- ${num2}`;
  sumContent.appendChild(div2);

  const hr = document.createElement("hr");
  hr.classList.add("line");
  sumContent.appendChild(hr);
}

function populateGrid(index) {
  if (index < 0 || index >= questions.length) return;
  const [num1, num2] = questions[index];
  const numberLabels = document.querySelectorAll(
    ".problem-grid .number-label:not(.row-7)"
  );
  numberLabels[0].innerHTML = " &nbsp;" + num1;
  numberLabels[1].innerHTML = "- " + num2;

  topNumberPlaceValues = getPlaceValuesForGrid(num1);
  bottomNumberPlaceValues = getPlaceValuesForGrid(num2);

  let boxIndex = 0;
  [...topNumberPlaceValues, ...bottomNumberPlaceValues].forEach((val) => {
    if (boxIndex < numberBoxes.length) {
      numberBoxes[boxIndex].textContent = val;
      boxIndex++;
    }
  });
}

function getPlaceValuesForGrid(num) {
  const totalLength = 5;
  let numStr = String(num).padStart(totalLength, "0");
  const result = [];
  for (let i = 0; i < totalLength; i++) {
    const placeValue = Math.pow(10, totalLength - 1 - i);
    result.push(parseInt(numStr[i]) * placeValue);
  }
  return result;
}

function getJumbledPlaceValues(index) {
  if (index < 0 || index >= questions.length) return [];
  let allPlaceValues = [];
  questions[index].forEach((num) => {
    allPlaceValues = allPlaceValues.concat(getPlaceValuesForGrid(num));
  });
  return allPlaceValues.sort(() => Math.random() - 0.5);
}

function calculateCorrectAnswers(qIndex) {
  const [num1, num2] = questions[qIndex];
  let tempTop = getPlaceValuesForGrid(num1);
  const bottom = getPlaceValuesForGrid(num2);
  const diffs = [];

  for (let i = 4; i >= 0; i--) {
    if (tempTop[i] < bottom[i]) {
      if (i > 0) {
        let borrowFromIndex = i - 1;
        while (tempTop[borrowFromIndex] === 0 && borrowFromIndex > 0) {
          borrowFromIndex--;
        }
        for (let j = borrowFromIndex; j < i; j++) {
          const powerOfTen = Math.pow(10, 4 - j);
          tempTop[j] -= powerOfTen;
          tempTop[j + 1] += powerOfTen;
        }
      }
    }
    diffs[i] = tempTop[i] - bottom[i];
  }
  correctAnswers = [...diffs, num1 - num2];
}

function populateOptions(values, numToPopulate = 15) {
  const shuffledValues = [...values].sort(() => Math.random() - 0.5);
  optionButtons.forEach((button, i) => {
    button.disabled = false;
    button.classList.remove("correct", "vibrate", "red-bg");
    if (i < numToPopulate && i < shuffledValues.length) {
      button.textContent = shuffledValues[i];
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  });
}

function populateOptionsForColumn(columnIndex) {
  const correctAnswer = correctAnswers[columnIndex];
  const options = [correctAnswer];
  // Generate some plausible wrong answers
  while (options.length < 6) {
    let wrongAnswer =
      correctAnswer +
      (Math.floor(Math.random() * 10) - 5) * Math.pow(10, 4 - columnIndex);
    if (wrongAnswer < 0) wrongAnswer = correctAnswer + (options.length + 1);
    if (!options.includes(wrongAnswer)) {
      options.push(wrongAnswer);
    }
  }
  populateOptions(options, 6);
}

function populateOptionsForFinalAnswer() {
  const correctAnswer = correctAnswers[5];
  const options = [correctAnswer];
  while (options.length < 6) {
    let wrongAnswer = correctAnswer + (Math.floor(Math.random() * 20) - 10);
    if (!options.includes(wrongAnswer)) {
      options.push(wrongAnswer);
    }
  }
  populateOptions(options, 6);
}

// --- EVENT LISTENERS ---

nextButton.addEventListener("click", () => {
  playSound("click");
  if (typeof hideFtue !== "undefined") hideFtue();
  if (stage === 3 && isBorrowing) {
    handleBorrow();
    return;
  }
  if (stage < 3) callWithStage(stage + 1);
  else if (stage === 3) {
    questionIndex++;
    if (questionIndex < questions.length) {
      stage = 0;
      currentActiveBoxIndex = 0;
      currentActiveResultBoxIndex = 4;
      resetAppletState();
      init();
    } else {
      if (typeof triggerFullScreenOverlay !== "undefined")
        triggerFullScreenOverlay(true);
      if (typeof confettiBurst !== "undefined") confettiBurst();
    }
  }
});

function resetAppletState() {
  borrowBoxes.forEach((box) => {
    box.textContent = "";
    // box.classList.add("empty-number-box");
  });
  numberBoxes.forEach((box) => box.classList.remove("strike-through"));
  placeValueResultBoxes.forEach((box) => {
    box.textContent = "";
    box.classList.add("empty-number-box");
    box.classList.remove("active");
  });
  finalAnswerBox.textContent = "";
  finalAnswerBox.classList.add("empty-number-box", "active");
  finalAnswerBox.classList.remove("final-answer-correct");
  optionsGrid.removeEventListener("click", handleStage2OptionClick);
  optionsGrid.removeEventListener("click", handleStage3OptionClick);
  updateOptionsFooter("blank");
  optionsContainer.style.display = "none";
  optionsContainer.classList.remove("options-container-disabled");
}

// --- INITIALIZATION ---
init();

function animateTextClone(src, dest, text) {
  return new Promise((resolve) => {
    const clone = document.createElement("div");
    clone.textContent = text;
    clone.classList.add("temp-borrow-el"); // A new class for styling the clone
    document.body.appendChild(clone);

    // Get positions
    const srcRect = src.getBoundingClientRect();
    const destRect = dest.getBoundingClientRect();

    // Set initial position of the clone over the source element
    gsap.set(clone, {
      left: srcRect.left + srcRect.width / 2,
      top: srcRect.top + srcRect.height / 2,
    });

    // Animate the clone to the destination, then fade it out
    gsap.to(clone, {
      left: destRect.left + destRect.width / 2,
      top: destRect.top + destRect.height / 2,
      opacity: 0,
      duration: 1.2, // Animation duration in seconds
      ease: "power1.inOut",
      onComplete: () => {
        clone.remove();
        resolve(); // Resolve the promise when animation is done
      },
    });
  });
}
