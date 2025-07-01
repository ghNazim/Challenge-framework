const questions = [2532, 3143, 2452, 6191];
let answer4 = [0, 0, 0, 0];
let questionIndex = 0;
let widgets = Array.from(document.querySelectorAll(".widget-container")).slice(
  1
);
let currentContainer = 0;
const tagMap = ["unit", "ten", "hundred", "thousand", "tenThousand"];
const submitButton = document.getElementById("submitButton");
submitButton.textContent = texts.button_texts.submit
const answerDigitElements = document.querySelectorAll(".answer-digit");
const stepperButtons = document.querySelectorAll(".stepper-btn");
const answerBoxes = document.querySelectorAll(".answer-box");
// Function to update the displayed digits from the answer4 array
function updateDisplay() {
  answerDigitElements.forEach((element, index) => {
    element.textContent = answer4[index];
  });
}

stepperButtons.forEach((button) => {
  button.addEventListener("click", () => {
    playSound("click");
    turnOffGlow();
    const parentBox = button.closest(".answer-box");
    const digitSpan = parentBox.querySelector(".answer-digit");
    const isPlus = button.classList.contains("plus");
    let index;

    // Determine which digit to change based on the parent's ID
    switch (parentBox.id) {
      case "answer-thousand":
        index = 0;
        break;
      case "answer-hundred":
        index = 1;
        break;
      case "answer-ten":
        index = 2;
        break;
      case "answer-one":
        index = 3;
        break;
    }

    if (isPlus) {
      if (answer4[index] < 9) {
        answer4[index]++;
      }
    } else {
      // It's a minus button
      if (answer4[index] > 0) {
        answer4[index]--;
      }
    }
    digitSpan.textContent = answer4[index];
  });
});

// end stepper
// ----------------------------------------------------------------------------

function initiateQuestion() {
  if (questionIndex === 0) {
    setNextText("next");
  }
  resetContainers();
  updateAllWidgets(questions[questionIndex]);
  answer4 = [0, 0, 0, 0];
  updateDisplay();
  resetDigits();
  document.getElementById("box-container").animate({ opacity: [0, 1] }, 500);
  commentElement.classList.remove("green", "red");
  updateStepCounter(questionIndex);
  document.querySelectorAll(".control-btn").forEach((btn) => {
    btn.disabled = false;
  });
  showStatement(-1);
  nextButton.disabled = true;
  submitButton.disabled = false;
  updateHeader("questionText");
  // document.getElementById("numberInQuestion").textContent =
    questions[questionIndex];
}
initiateQuestion();

function onHitting10() {
  wiggle(tagMap[currentContainer]);
  setNextText("add_jar");
  nextButton.disabled = false;
  updateHeader(tagMap[currentContainer] + "_overflow");
}
function reverse10() {
  wiggle(tagMap[currentContainer], false);
  setNextText("next");
  nextButton.disabled = true;
  updateHeader(tagMap[currentContainer] + "_general");
}

function showWidgetContainer(i, show = true) {
  if (show) {
    widgets[i].style.display = "block";
  } else {
    widgets[i].style.display = "none";
  }
}
function showControlButtons(tag, show = true) {
  const btns = document.querySelectorAll(`#${tag}-widget .control-btn`);
  if (!show) {
    btns.forEach((btn) => {
      btn.classList.add("disabled");
    });
  } else {
    btns.forEach((btn) => {
      btn.classList.remove("disabled");
    });
  }
}
function showStatement(i) {
  const display = i === 0 ? "block" : "flex";
  const elements = document.querySelectorAll(`#statements>div`);

  elements.forEach((element, index) => {
    if (index === i) {
      element.style.display = display;
    } else {
      showCharHead(false);
      element.style.display = "none";
    }
  });
}

function showComment(tag) {
  showCharHead(true)
  const commentEl = document.querySelector(".comment");
  showStatement(0);
  commentEl.innerHTML = T.comments[tag];
}
function showCommentTextVersion(text) {
  const commentEl = document.querySelector(".comment");
  showStatement(0);
  commentEl.innerHTML = text;
}
function showNumberText(num, isLegit = true) {
  const text = spellNumber(num);
  // showStatement(1);
  const numberTextP = document.querySelector("#numberText>p");
  numberTextP.textContent = text + (isLegit ? "" : "?");
}

function wiggle(tag = "unit", bool = true) {
  const innerCard = document.querySelector(`#${tag}-widget .inner-card`);
  const numberTab = document.querySelector(`#${tag}-widget .number-tab`);
  const squaresContainer = document.querySelector(
    `#${tag}-widget .squares-container`
  );
  if (bool) {
    vibrateElement(innerCard);
    setTimeout(() => {
      vibrateElement(squaresContainer);
    }, 100);
    numberTab.classList.add("outlined");
    vibrateElement(numberTab);
  } else {
    vibrateElement(innerCard, false);
    vibrateElement(squaresContainer, false);
    numberTab.classList.remove("outlined");
    vibrateElement(numberTab, false);
  }
}
function checkAnswer() {
  const userAnswer = answer4;
  const correctAnswer = questions[questionIndex]
    .toString()
    .split("")
    .map(Number);
  let correct = true;
  for (let i = 0; i < 4; i++) {
    if (userAnswer[i] !== correctAnswer[i]) {
      correct = false;
      answerBoxes[i].classList.add("glow-widget");
    }
  }

  return correct;
}
submitButton.onclick = function () {
  const correct = checkAnswer();
  if (correct) {
    if (questionIndex === questions.length - 1) {
      setNextText("start_over");
      prevButton.disabled = true;
    }
    playSound("correct");
    // showSummaryOverlay("correct", "happy");
    confettiBurst();
    turnOffGlow();
    showComment("correct");
    setKidPose("happy");
    commentElement.classList.add("green");
    commentElement.classList.remove("red");
    submitButton.disabled = true;
    setTimeout(() => {
      nextButton.disabled = false;
      animateDigitsTogether();
    }, 300);
    document.querySelectorAll(".control-btn").forEach((btn) => {
      btn.disabled = true;
    });
  } else {
    playSound("wrong");
    setKidPose("sad");
    showComment("wrong");
    // showSummaryOverlay("wrong", "sad");
    commentElement.classList.add("red");
  }
};
const turnOffGlow = function () {
  answerBoxes.forEach((widget) => {
    widget.classList.remove("glow-widget");
  });
};

nextButton.onclick = function () {
  if (questionIndex === 0) {
    prevButton.disabled = false;
  }
  playSound("click");
  questionIndex = (questionIndex + 1) % questions.length;
  initiateQuestion();
};
prevButton.onclick = function () {
  if (questionIndex === 0) {
    return;
  } else if (questionIndex === 1) {
    prevButton.disabled = true;
  }
  playSound("click");
  questionIndex = questionIndex - 1;
  initiateQuestion();
};

function showCharHead(show) {
  const display = show ? "block" : "none";
  const charHead = document.querySelector("#charHead");
  charHead.style.display = display;
}

const textsBottoms = document.querySelectorAll(".text-display");
textsBottoms.forEach((text, i) => (text.textContent = tagsArray[4 - i]));

function showFinalAnswer(show){
  const finalAnswer = document.querySelector("#final-answer");
  if(!show){
    document.querySelectorAll(".answer-box").forEach((box, i) => {
      box.style.display = "flex";
    });
    finalAnswer.style.display = "none";
    return;
  }
  finalAnswer.style.display = "block";
  finalAnswer.textContent = questions[questionIndex];
  document.querySelectorAll(".answer-box").forEach((box, i) => {
    box.style.display = "none";
  });
}

function animateDigitsTogether(){
  const answerContainer = document.querySelector("#answerContainer");
  answerContainer.classList.add("merge-digit");
  setTimeout(() => {
    showFinalAnswer(true);
  }, 500);
}
function resetDigits(){
  const answerContainer = document.querySelector("#answerContainer");
  answerContainer.classList.remove("merge-digit");
  showFinalAnswer(false);
}