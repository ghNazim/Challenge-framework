const applet = document.getElementById("applet");
const questionSection = document.getElementById("question-section");
const questionStatement = questionSection.querySelector("p");
const imageSection = document.getElementById("image-section");
const diagramImage = imageSection.querySelector("img");
const bottomSection = document.getElementById("bottom-section");
const bottomQuestion = document.getElementById("bottom-question");
const bottomOptions = document.getElementById("bottom-options");
const bottomExpression = document.getElementById("bottom-expression");
const appletRightPanel = document.getElementById("applet-right-panel");
const digitBoxes = document.querySelectorAll(".digit-box");
const inputSection = document.getElementById("input-section");
const inputQuestions = document.querySelectorAll(".qsn");
const inputSpans = document.querySelectorAll(".input-span");
const inputQuestionTexts = document.querySelectorAll(".question-text");
const numPad = document.querySelector(".num-container");
let currentProblemIndex = 0;
let currentStage = 0;
let expression_array = [null, null, null, null, null];
let activeBoxIndex = 0;

const problems = [
  questionData.problem_1,
  questionData.problem_2,
  questionData.problem_3,
];

const twoDigitData = [4, 4, 4];
function setUpTwoDigit(index) {
  document.querySelector(".two-digit")?.classList.remove("two-digit");
  if (index < 0) return;
  digitBoxes[index].classList.add("two-digit");
}
function showImageDiagram(index) {
  const parent = document.getElementById("image-section");
  parent.innerHTML = "";
  const img = `<img src="${problems[index].image}" >`; // Use common tag
  const imgString = img.repeat(problems[index].correct_answer[0]);
  parent.innerHTML = imgString;
}

function populateNumberPad(startNum = 0, endNum = 9) {
  const container = document.querySelector(".num-container");
  container.innerHTML = "";
  for (let i = startNum; i <= endNum; i++) {
    const numberEl = document.createElement("div");
    numberEl.classList.add("number");
    numberEl.dataset.num = i;
    numberEl.textContent = i;
    container.appendChild(numberEl);
  }
  const operators = ["+", "×", "="];
  operators.forEach((op) => {
    const operatorEl = document.createElement("div");
    operatorEl.classList.add("number");
    operatorEl.dataset.num = op;
    operatorEl.textContent = op;
    container.appendChild(operatorEl);
  });
}

function initiateProblem(problemIndex) {
  fillContextWithTag(-1, "first_screen"); // Use common tag
  setJAXpose("normal");
  showImageDiagram(problemIndex);
  // fillContextWithTag(-1, "stage_1_prompt");
  populateNumberPad();
  digitBoxes.forEach((box) => {
    box.textContent = "";
    box.classList.remove("correct", "incorrect");
  });
  setUpTwoDigit(twoDigitData[problemIndex]);
  const problem = problems[problemIndex];
  currentStage = 1;
  expression_array = [null, null, null, null, null];
  activeBoxIndex = 0;

  questionSection.innerHTML = `<p>${problem.problem_statement}</p>`;
  imageSection.style.display = "flex";
  resetInputSection();
  document
    .querySelectorAll("#image-section>img")
    .forEach((img) => img.classList.remove("small-image"));
  appletRightPanel.style.display = "none";
  bottomSection.style.visibility = "hidden";
  hintButton.style.display = "none";
  nextButton.disabled = false;
  showFtue(nextButton);
  // loadMCQ(problem.mcq_1);
  appletRightPanel.classList.remove("short");
}

const setActiveBox = (index) => {
  digitBoxes.forEach((box) => box.classList.remove("box-active"));
  if (index < digitBoxes.length) {
    digitBoxes[index].classList.add("box-active");
    activeBoxIndex = index;
  }
};

function loadExpressionStage() {
  numPad.style.pointerEvents = "auto";
  fillContextWithTag(currentProblemIndex+1, "expression_text"); // Use common tag
  hintButton.style.display = "block";
  nextButton.textContent = buttonText.check;
  bottomSection.style.visibility = "visible";
  bottomOptions.style.display = "none";
  bottomExpression.style.display = "flex";
  appletRightPanel.style.display = "block";
  appletRightPanel.classList.add("short");
  bottomQuestion.textContent = questionData.expression;
  nextButton.disabled = true;

  digitBoxes.forEach((box, index) => {
    box.textContent = "";
    box.onclick = () => setActiveBox(index);
  });
  setActiveBox(0);

  const numbers = document.querySelectorAll(".number");
  numbers.forEach((number) => {
    number.onclick = () => {
      playSound("click");
      const value = number.dataset.num;

      if (activeBoxIndex >= digitBoxes.length) return; // Exit if no active box

      const currentBox = digitBoxes[activeBoxIndex];
      const isTwoDigitBox = currentBox.classList.contains("two-digit");
      const currentContent = currentBox.textContent;
      let shouldMoveToNext = false;

      // Logic for filling the box
      if (isTwoDigitBox) {
        if (currentContent.length < 2) {
          // If the box is a two-digit box and has less than 2 digits, append the number
          currentBox.textContent += value;
        } else {
          currentBox.textContent = value;
        }
        // If it now has 2 digits, it's time to move to the next box
        if (currentBox.textContent.length === 2) {
          shouldMoveToNext = true;
        }
      } else {
        // If it's a single-digit box, just set the content and plan to move
        currentBox.textContent = value;
        shouldMoveToNext = true;
      }

      // Update the expression array with the final content of the box
      expression_array[activeBoxIndex] = currentBox.textContent;
      currentBox.classList.remove("incorrect");

      // Decide whether to move to the next box
      if (shouldMoveToNext) {
        const nextIndex = findNextAvailableBox(activeBoxIndex + 1);
        if (nextIndex !== null) {
          setActiveBox(nextIndex);
        } else {
          // All boxes are filled, disable active state and enable check button
          digitBoxes.forEach((box) => box.classList.remove("box-active"));
          activeBoxIndex = -1; // Invalidate index
          nextButton.disabled = false;
        }
      }
    };
  });
}

function checkExpression() {
  const digitBoxes = document.querySelectorAll(".digit-box");
  const problem = problems[currentProblemIndex];
  const correctAnswer = problem.correct_answer;

  digitBoxes.forEach((box) => {
    box.classList.remove("correct", "incorrect");
  });

  const arraysAreEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
      if (String(arr1[i]) !== String(arr2[i])) return false;
    }
    return true;
  };

  const swappedAnswer = [
    correctAnswer[2],
    correctAnswer[1],
    correctAnswer[0],
    correctAnswer[3],
    correctAnswer[4],
  ];

  const isCorrect = arraysAreEqual(expression_array, correctAnswer);
  const isSwappedCorrect = arraysAreEqual(expression_array, swappedAnswer);

  if (isCorrect || isSwappedCorrect) {
    digitBoxes.forEach((box) => box.classList.add("correct"));
    return true;
  } else {
    for (let i = 0; i < digitBoxes.length; i++) {
      if (i == 0) {
        if (
          String(expression_array[0]) === String(correctAnswer[0]) ||
          String(expression_array[0]) === String(correctAnswer[2])
        ) {
          digitBoxes[0].classList.add("correct");
        } else {
          digitBoxes[0].classList.add("incorrect");
        }
      } else if (i == 2) {
        const correct1 =
          String(expression_array[0]) === String(correctAnswer[0]);
        const correct2 =
          (correct1 &&
            String(expression_array[2]) === String(correctAnswer[2])) ||
          (!correct1 &&
            (String(expression_array[2]) === String(correctAnswer[0]) ||
              String(expression_array[2]) === String(correctAnswer[2])));

        if (correct2) {
          digitBoxes[2].classList.add("correct");
        } else {
          digitBoxes[2].classList.add("incorrect");
        }
      } else {
        if (String(expression_array[i]) === String(correctAnswer[i])) {
          digitBoxes[i].classList.add("correct");
        } else {
          digitBoxes[i].classList.add("incorrect");
        }
      }
    }
    return false;
  }
}

function handleCheckClick() {
  if (currentStage === 4) {
    if (checkExpression()) {
      // "final_summary" is problem-specific
      fillContextWithTag(
        currentProblemIndex + 1,
        "expression_correct",
        "green"
      );
      playSound("correct");
      setJAXpose("happy");
      showFtue(nextButton);
      nextButton.textContent = buttonText.next;
      nextButton.disabled = false;
      return true;
    } else {
      // "expression_hint" is problem-specific
      fillContextWithTag(-1, "expression_incorrect");
      // updateQuestionHintStage4();
      playSound("wrong");
      setJAXpose("sad");
      setActiveBox(findNextAvailableBox(0));
      return false;
    }
  }
}

function findNextAvailableBox(startIndex) {
  const problem = problems[currentProblemIndex];
  const correctAnswer = problem.correct_answer;
  const len = expression_array.length;
  for (let i = startIndex; i < len; i++) {
    if (i == 0) {
      if (
        String(expression_array[0]) === String(correctAnswer[0]) ||
        String(expression_array[0]) === String(correctAnswer[2])
      ) {
        continue;
      } else {
        return 0;
      }
    } else if (i == 2) {
      const correct1 = String(expression_array[0]) === String(correctAnswer[0]);
      const correct2 =
        (correct1 &&
          String(expression_array[2]) === String(correctAnswer[2])) ||
        (!correct1 &&
          (String(expression_array[2]) === String(correctAnswer[0]) ||
            String(expression_array[2]) === String(correctAnswer[2])));

      if (correct2) {
        continue;
      } else {
        return 2;
      }
    } else {
      if (
        expression_array[i] == null ||
        String(expression_array[i]) !== String(correctAnswer[i])
      ) {
        return i;
      }
    }
  }
  return null;
}

nextButton.onclick = handleNextClick;
function handleNextClick() {
  playSound("click");
  hideFtue();
  if (currentStage === 4) {
    const isCorrect = handleCheckClick();
    if (!isCorrect) {
      return;
    } else {
      currentStage++;
      return;
    }
  }

  if (currentStage < 5) {
    currentStage++;
  }
  setJAXpose("normal");
  const problem = problems[currentProblemIndex];
  if (currentStage === 2) {
    if (problems[currentProblemIndex].correct_answer[0] > 4) {
      document
        .querySelectorAll("#image-section>img")
        .forEach((img) => img.classList.add("small-image")); // Use common tag
    } else {
      document
        .querySelectorAll("#image-section>img")
        .forEach((img) => img.classList.remove("small-image")); // Use common tag
    }
    inputSection.style.display = "flex";

    loadInput(0);
  } else if (currentStage === 4) {
    inputSpans.forEach((span) => (span.classList.remove("correct","active")));
    loadExpressionStage();
  } else if (currentStage === 5) {
    if (currentProblemIndex === 2) {
      triggerFullScreenOverlay(true);
      return;
    }
    initiateProblem(++currentProblemIndex);
  }
}

// Initial load
initiateProblem(currentProblemIndex);

function highlightLastOccurance(words, sentence) {
  let result = sentence;

  words.forEach((word) => {
    const regex = new RegExp(`\\b${word}\\b`, "gi");
    const matches = [...result.matchAll(regex)];

    if (matches.length > 0) {
      const last = matches[matches.length - 1];
      const matchedText = last[0];
      const index = last.index;

      result =
        result.slice(0, index) +
        `<span class='text-highlight'>${matchedText}</span>` +
        result.slice(index + matchedText.length);
    }
  });

  return result;
}
function updateQuestionStage3() {
  const updatedQuestion = highlightLastOccurance(
    problems[currentProblemIndex].mcq_2.options,
    problems[currentProblemIndex].problem_statement
  );
  console.log(updatedQuestion);

  questionSection.innerHTML = `<p>${updatedQuestion}</p>`;
}
function updateQuestionCorrectStage3() {
  const correct_answer = problems[currentProblemIndex].mcq_2.correct_answer;
  const updatedQuestion = highlightLastOccurance(
    [problems[currentProblemIndex].mcq_2.options[correct_answer]],
    problems[currentProblemIndex].problem_statement
  );
  console.log(updatedQuestion);

  questionSection.innerHTML = `<p>${updatedQuestion}</p>`;
}
function updateQuestionHintStage4() {
  const correct_answer = problems[currentProblemIndex].mcq_2.correct_answer;
  const expressionArray = problems[currentProblemIndex].correct_answer;
  const updatedQuestion = highlightLastOccurance(
    [
      problems[currentProblemIndex].mcq_2.options[correct_answer],
      expressionArray[0],
      expressionArray[2],
    ],
    problems[currentProblemIndex].problem_statement
  );
  console.log(updatedQuestion);

  questionSection.innerHTML = `<p>${updatedQuestion}</p>`;
}

function loadInput(index) {
  if (index > 1) {
    numPad.style.pointerEvents ="none"
    nextButton.textContent = buttonText.next;
    nextButton.onclick = handleNextClick;
    currentStage = 3;
    fillContextWithTag(
      currentProblemIndex + 1,
      "qsn_" + 2 + "_feedback_correct"
    );
    showFtue(nextButton);
    return;
  }
  fillContextWithTag(
    currentProblemIndex + 1,
    "qsn_" + (index + 1) + "_initial"
  );
  inputQuestions[index].style.display = "block";
  inputQuestionTexts[index].innerHTML =
    problems[currentProblemIndex]["qsn" + (index + 1)];
  inputSpans[index].classList.add("active");
  appletRightPanel.style.display = "block";
  nextButton.textContent = buttonText.check;
  nextButton.onclick = () => handleCheckInputBox(index);
  loadListener(index);
  if (index === 1) {
    inputSpans[0].classList.remove("active");
  }
}

function handleCheckInputBox(index) {
  if (
    inputSpans[index].textContent ==
    problems[currentProblemIndex].correct_answer[2 * index]
  ) {
    playSound("correct");
    setJAXpose("happy");
    loadInput(index + 1);
    inputSpans[index].classList.add("correct");

    return true;
  } else {
    playSound("wrong");
    setJAXpose("sad");
    fillContextWithTag(
      currentProblemIndex + 1,
      "qsn_" + (index + 1) + "_feedback_incorrect"
    );
    inputSpans[index].classList.add("incorrect");
    return false;
  }
}
function loadListener(index) {
  const numbers = document.querySelectorAll(".number");
  numbers.forEach((number) => {
    number.onclick = () => {
      playSound("click");
      inputSpans[index].textContent = number.textContent;
      inputSpans[index].classList.remove("incorrect");
    };
  });
}
function resetInputSection() {
  inputSection.style.display = "none";
  inputQuestions.forEach((question) => {
    question.style.display = "none";
  });
  inputSpans.forEach((span) => {
    span.classList.remove("active", "correct", "incorrect");
    span.innerHTML = "";
  });
}

function showMidScreenOverlay(show) {
  
  const overlay = document.getElementById("mid-overlay");
  const info = document.querySelector("#mid-overlay .info p");
  const btn = document.querySelector("#mid-overlay .btn");

  if (show) {
    overlay.style.display = "flex";
    overlay.animate(
      [
        { transform: "scale(0)", opacity: 0 },
        { transform: "scale(1)", opacity: 1 },
      ],
      { duration: 300, easing: "ease-out", fill: "forwards" }
    );
    info.innerHTML = speechBubbleData.hintText;
    btn.textContent = buttonText.okay;
    btn.onclick = () => {
      // hideFtue()
      showMidScreenOverlay(false);
      setupImageClick();
    };
    
  } else {
    const animation = overlay.animate(
      [
        { transform: "scale(1)", opacity: 1 },
        { transform: "scale(0)", opacity: 0 },
      ],
      { duration: 300, easing: "ease-in", fill: "forwards" }
    );
    animation.onfinish = () => {
      overlay.style.display = "none";
    };
  }
}
// showMidScreenOverlay(true);
function handleHintClick() {
  playSound("click");
  // hintButton.style.display = "none";
  showMidScreenOverlay(true);
}
hintButton.addEventListener("click", handleHintClick);
