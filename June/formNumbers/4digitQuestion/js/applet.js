const questions = [4332, 3198, 2251, 5669];
let questionIndex = 0;
let widgets = Array.from(document.querySelectorAll(".widget-container")).slice(
  1
);
let currentContainer = 0;
const tagMap = ["unit", "ten", "hundred", "thousand", "tenThousand"];
const submitButton = document.getElementById("submitButton");
function initiateQuestion() {
  if(questionIndex===0){
    setNextText("next");
  }
  resetContainers();
  document.getElementById("box-container").animate({ opacity: [0, 1] }, 500);
  commentElement.classList.remove("green", "red");
  updateStepCounter(questionIndex);
  document.querySelectorAll(".control-btn").forEach((btn) => {
    btn.disabled = false;
  });
  showStatement(-1)
  nextButton.disabled = true;
  submitButton.disabled = false;
  updateHeader("questionText");
  document.getElementById("numberInQuestion").textContent =
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
      element.style.display = "none";
    }
  });
}

function showComment(tag) {
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
  const userAnswer = [
    countObject.thousand,
    countObject.hundred,
    countObject.ten,
    countObject.unit,
  ];
  const correctAnswer = questions[questionIndex]
    .toString()
    .split("")
    .map(Number);
  let correct = true;
  for (let i = 0; i < 4; i++) {
    if (userAnswer[i] !== correctAnswer[i]) {
      correct = false;
      widgets[i].classList.add("glow-widget");
    }
  }
  return correct;
}
submitButton.onclick = function () {
  const correct = checkAnswer();
  if (correct) {
    if(questionIndex===questions.length-1){
      setNextText("start_over");
    }
    playSound("correct");
    confettiBurst();
    showComment("correct");
    commentElement.classList.add("green");
    commentElement.classList.remove("red");
    nextButton.disabled = false;
    submitButton.disabled = true;
    document.querySelectorAll(".control-btn").forEach((btn) => {
      btn.disabled = true;
    });
  } else {
    playSound("wrong");
    showComment("wrong");
    commentElement.classList.add("red");
  }
};
const turnOffGlow = function () {
  widgets.forEach((widget) => {
    widget.classList.remove("glow-widget");
  });
};

nextButton.onclick = function () {
  playSound("click");
  questionIndex = (questionIndex + 1) % questions.length;
  initiateQuestion();
};
