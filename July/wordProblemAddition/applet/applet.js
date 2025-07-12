const applet = document.getElementById("applet");
const questionSection = document.getElementById("question-section");
const imageSection = document.getElementById("image-section");
const diagramImage = imageSection.querySelector("img");
const bottomSection = document.getElementById("bottom-section");
const bottomQuestion = document.getElementById("bottom-question");
const bottomOptions = document.getElementById("bottom-options");
const bottomExpression = document.getElementById("bottom-expression");
const appletRightPanel = document.getElementById("applet-right-panel");
const digitBoxes = document.querySelectorAll(".digit-box");

let currentProblemIndex = 0;
let currentStage = 0;
let expression_array = [null, null, null, null, null];
let activeBoxIndex = 0;

const problems = [
  questionData.problem_1,
  questionData.problem_2,
  questionData.problem_3,
];
const twoDigitData = [-1, 4, 4];
function setUpTwoDigit(index) {
  document.querySelector(".two-digit")?.classList.remove("two-digit");
  if (index < 0) return;
  digitBoxes[index].classList.add("two-digit");
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
  const operators = ["+", "-", "="];
  operators.forEach((op) => {
    const operatorEl = document.createElement("div");
    operatorEl.classList.add("number");
    operatorEl.dataset.num = op;
    operatorEl.textContent = op;
    container.appendChild(operatorEl);
  });
}

function initiateProblem(problemIndex) {
  setJAXpose("normal");
  diagramImage.src = `assets/problem_${problemIndex + 1}.jpg`;
  fillContextWithTag(-1, "stage_1_prompt"); // Use common tag
  populateNumberPad();
  digitBoxes.forEach((box) => {
    box.textContent = "";
    box.classList.remove("correct", "incorrect");
  });
  setUpTwoDigit(twoDigitData[problemIndex]);
  const problem = problems[problemIndex];
  currentStage = 2;
  expression_array = [null, null, null, null, null];
  activeBoxIndex = 0;

  questionSection.innerHTML = `<p>${problem.problem_statement}</p>`;
  imageSection.style.display = "flex";
  appletRightPanel.style.display = "none";
  // bottomSection.style.visibility = "hidden";
  // hintButton.style.display = "none";
  // nextButton.disabled = false;
  // showFtue(nextButton);
  loadMCQ(problem.mcq_1);
}

function loadMCQ(mcqData) {
  if (currentStage === 2) {
    fillContextWithTag(-1, "initial_prompt"); // Use common tag
  } else if (currentStage === 3) {
    // When moving to MCQ 2, show the success message from MCQ 1
    fillContextWithTag(-1, "mcq_2_initial"); // Use common tag
    updateQuestionStage3();
  }

  bottomOptions.classList.remove("disabled");
  bottomSection.style.visibility = "visible";
  bottomOptions.style.display = "flex";
  bottomExpression.style.display = "none";
  hintButton.style.display = "block";
  nextButton.disabled = true;

  bottomQuestion.innerHTML = mcqData.question;
  bottomOptions.innerHTML = "";
  mcqData.options.forEach((optionText, index) => {
    const option = document.createElement("div");
    option.classList.add("option");
    option.textContent = optionText;
    option.onclick = () => checkAnswer(index, mcqData.correct_answer, option);
    bottomOptions.appendChild(option);
  });
}

function checkAnswer(selectedIndex, correctIndex, optionElement) {
  const isCorrect = selectedIndex === correctIndex;
  const feedbackType = isCorrect ? "correct" : "incorrect";
  const stageNum = currentStage - 1;

  // Determine which feedback to show (common vs. problem-specific)
  const feedbackTag = `mcq_${stageNum}_feedback_${feedbackType}`;

  // MCQ 2's "correct" feedback is problem-specific, all others are common.
  if (stageNum === 2 && isCorrect) {
    updateQuestionCorrectStage3();
    fillContextWithTag(currentProblemIndex + 1, feedbackTag);
  } else {
    fillContextWithTag(-1, feedbackTag);
  }

  if (isCorrect) {
    showFtue(nextButton);
    playSound("correct");
    setJAXpose("happy");
    optionElement.classList.add("correct");
    document.querySelectorAll(".option").forEach((opt) => (opt.onclick = null));
    nextButton.disabled = false;
    bottomOptions.classList.add("disabled");
  } else {
    playSound("wrong");
    setJAXpose("sad");
    optionElement.classList.add("incorrect");
  }
}

const setActiveBox = (index) => {
  digitBoxes.forEach((box) => box.classList.remove("box-active"));
  if (index < digitBoxes.length) {
    digitBoxes[index].classList.add("box-active");
    activeBoxIndex = index;
  }
};

function loadExpressionStage() {
  fillContextWithTag(-1, "expression_prompt"); // Use common tag
  hintButton.style.display = "none";
  nextButton.textContent = buttonText.check;
  bottomSection.style.visibility = "visible";
  bottomOptions.style.display = "none";
  bottomExpression.style.display = "flex";
  appletRightPanel.style.display = "block";
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
        }
        else{
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
      fillContextWithTag(currentProblemIndex + 1, "final_summary", "green");
      playSound("correct");
      setJAXpose("happy");
      showFtue(nextButton);
      nextButton.textContent = buttonText.next;
      nextButton.disabled = false;
      return true;
    } else {
      // "expression_hint" is problem-specific
      fillContextWithTag(currentProblemIndex + 1, "expression_hint");
      updateQuestionHintStage4();
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

nextButton.addEventListener("click", () => {
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
    loadMCQ(problem.mcq_1);
  } else if (currentStage === 3) {
    loadMCQ(problem.mcq_2);
  } else if (currentStage === 4) {
    loadExpressionStage();
  } else if (currentStage === 5) {
    if (currentProblemIndex === 2) {
      triggerFullScreenOverlay(true);
      return;
    }
    initiateProblem(++currentProblemIndex);
  }
});

function handleHintClick() {
  hintButton.style.display = "none";
  if (currentStage === 2) {
    fillContextWithTag(-1, "hint_1", "blue"); // Use common tag
  } else if (currentStage === 3) {
    fillContextWithTag(-1, "hint_2", "blue"); // Use common tag
  }
}
hintButton.addEventListener("click", () => {
  playSound("click");
  handleHintClick();
});
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
