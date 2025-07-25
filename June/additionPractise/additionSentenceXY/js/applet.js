const checkButton = document.getElementById("checkButton");
checkButton.textContent = texts.button_texts.check;
const svg = document.getElementById("svgOverlay");
const hint1 = document.querySelector("#hintButton1");
hint1.textContent = texts.button_texts.hint;
const hint2 = document.querySelector("#hintButton2");
hint2.textContent = texts.button_texts.another_hint;

let questionIndex = 0;
let activeBox = null,
  hint1visible = false,
  hint2visible = false;
let currentAnswer = [0, 0, 0];
let correctAnswer = [0, 0, 0];
function setHintSentence(id) {
  const src = document.querySelector("#originalSentence");
  const dest = document.querySelector(id + ">div");
  dest.innerHTML = src.innerHTML;
  const originalSentenceSpans = document.querySelectorAll(
    "#originalSentence>span"
  );
  const originalRects = Array.from(originalSentenceSpans).map((i) =>
    i.getBoundingClientRect()
  );
  console.log(originalRects);
  const pictoralSpans = dest.querySelectorAll("span");
  console.log(pictoralSpans);
  pictoralSpans.forEach((span, i) => {
    span.style.width = originalRects[i].width + "px";
  });
}

function showPictoralSentence(state) {
  const outer = document.querySelector("#pictoralSentence");
  const sentence = document.querySelector("#pictoralSentence>div");
  const spans = sentence.querySelectorAll("span");
  if (state === 0) {
    outer.style.visibility = "hidden";
  } else {
    outer.style.visibility = "visible";
    const span1Text = itemPictures.coin.repeat(questions[questionIndex][0]);
    const span2Text = itemPictures.coin.repeat(questions[questionIndex][1]);
    spans[0].innerHTML = span1Text;
    spans[2].innerHTML = span2Text;

    if (state === 2) {
      spans[4].innerHTML = itemPictures.coin.repeat(
        questions[questionIndex][0] + questions[questionIndex][1]
      );
    } else {
      spans[4].innerHTML = "__________ ";
    }
  }
}
function showNumberSentence(state) {
  const outer = document.querySelector("#numberSentence");
  const sentence = document.querySelector("#numberSentence>div");
  if (state === 0) {
    outer.style.visibility = "hidden";
    return;
  }

  const num1 = numberToText[questions[questionIndex][0]];
  const num2 = numberToText[questions[questionIndex][1]];
  const num3 =
    numberToText[questions[questionIndex][0] + questions[questionIndex][1]];
  const spans = document.querySelectorAll("#numberSentence span");

  spans[0].textContent = num1;
  spans[1].textContent = "+";
  spans[2].textContent = num2;
  spans[3].textContent = "=";
  if (state === 2) spans[4].textContent = num3;
  else spans[4].textContent = "__________ ";
  outer.style.visibility = "visible";
}
function setQuestion() {
  document.getElementById("originalSentence").innerHTML =
    questionTexts[questionIndex];
  correctAnswer = [
    questions[questionIndex][0],
    questions[questionIndex][1],
    questions[questionIndex][0] + questions[questionIndex][1],
  ];
}

async function checkAnswer() {
  const true1 = questions[questionIndex][0] === currentAnswer[0];
  const true2 = questions[questionIndex][1] === currentAnswer[1];
  const true3 =
    questions[questionIndex][0] + questions[questionIndex][1] ===
    currentAnswer[2];
  const correct = true1 && true2 && true3;
  const incorrectBoxes = [!true1, !true2, !true3];
  if (!correct) {
    playAudio("wrong");
    setJaxPose("sad");
    if (!hint1visible) {
      updateInstructions("hint_1");
      hint1.click();
    } else {
      if (!hint2visible) {
        updateInstructions("hint_2");
        hint2.click();
      }
    }
    const boxes = document.querySelectorAll(".digit-box");
  await Promise.all( Array.from(boxes).map((box, i) => {
      if (incorrectBoxes[i]) {
        box.classList.add("incorrect");
       return vibrateElement(box);
      }
    }))
    
    
    const ind = getFirstWrongIndex();
    setActiveBox(
      document.querySelector(".digit-box[data-index='" + ind + "']")
    );
  } else {
    if (questionIndex === NUM_STRUCTURES - 1) {
      setNextButtonText("start_over");
      updateInstructions("final_step");
    }
    setJaxPose("happy");
    turnGreen(true);
    confettiBurst();
    svg.innerHTML = "";
    createHint1lines();
    createHint2lines();
    playAudio("correct");
    showNumberSentence(2);
    showPictoralSentence(2);
    updateInstructions("congrats");
    hint1.style.display = "none";
    hint2.style.display = "none";
    // hint1.classList.remove("nudgeAnimation");
    // hint2.classList.remove("nudgeAnimation");
  }
}

function turnGreen(green) {
  if (!green) {
    document.querySelectorAll(".digit-box").forEach((box) => {
      box.classList.remove("green");
      box.textContent = "";
    });
    document.querySelectorAll(".badge").forEach((badge) => {
      badge.style.display = "block";
    });
    return;
  }
  nextButton.disabled = false;
  checkButton.style.visibility = "hidden";
  document.querySelectorAll(".digit-box").forEach((box) => {
    box.classList.remove("box-active");
    box.classList.add("green");
  });
  document.querySelectorAll(".badge").forEach((badge) => {
    badge.style.display = "none";
  });
}

function createHint1lines() {
  if (hint2visible) {
    svg.innerHTML = "";
    createHint2lines();
  }
  const originalSpans = document.querySelectorAll("#originalSentence>span");
  const pictoralSpans = document.querySelectorAll("#pictoralSentence>div>span");
  const x = (i) => createDashedLine(originalSpans[i], pictoralSpans[i], svg);
  x(0);
  x(2);
  x(4);
}
function createHint2lines() {
  const numberSpans = document.querySelectorAll("#numberSentence span");
  const pictoralSpans = document.querySelectorAll("#pictoralSentence span");
  const x = (i) => createDashedLine(pictoralSpans[i], numberSpans[i], svg);
  x(0);
  x(2);
  x(4);
}
function createOnlyHint2Lines() {
  const originalSpans = document.querySelectorAll("#originalSentence>span");
  const numberSpans = document.querySelectorAll("#numberSentence span");
  const x = (i) => createDashedLine(originalSpans[i], numberSpans[i], svg);
  x(0);
  x(2);
  x(4);
}
function callWithStep() {
  if (questionIndex === 0) {
    prevButton.disabled = true;
    setNextButtonText("next");
  }
  svg.innerHTML = "";
  setJaxPose("normal");
  updateInstructions("instruction_general");
  nextButton.disabled = true;
  checkButton.style.visibility = "visible";
  updateStepCounter(questionIndex);
  setQuestion();
  setHintSentence("#pictoralSentence");
  setHintSentence("#numberSentence");
  showPictoralSentence(0);
  showNumberSentence(0);
  currentAnswer = [null, null, null];
  hint1visible = false;
  hint2visible = false;
  hint1.style.display = "block";
  hint2.style.display = "none";
  turnGreen(false);
  setActiveBox(document.querySelector(".digit-box[data-index='0']"));
}

function setActiveBox(box) {
  document.querySelectorAll(".digit-box").forEach((b) => {
    b.classList.remove("box-active");
  });
  activeBox = box;
  if (box) box.classList.add("box-active");
}

// Function to handle numpad clicks
function handleNumpadClick(number) {
  if (activeBox) {
    activeBox.textContent = number;
    activeBox.classList.remove("incorrect");
    // Optionally remove active state after input
    const index = parseInt(activeBox.getAttribute("data-index"));
    currentAnswer[index] = parseInt(number);
    setActiveBox(nextBox());
  }
}

function nextBox() {
  if (!activeBox) {
    return null;
  }
  let index = parseInt(activeBox.getAttribute("data-index"));
  let nextIndex = index + 1;
  while (true) {
    if (currentAnswer[nextIndex] !== correctAnswer[nextIndex]) {
      return document.querySelector(`.digit-box[data-index='${nextIndex}']`);
    }
    if (nextIndex > 2) {
      return null;
    }
    nextIndex++;
  }
}
function getFirstWrongIndex() {
  for (let i = 0; i < 3; i++) {
    if (currentAnswer[i] !== correctAnswer[i]) {
      return i;
    }
  }
  return -1;
}

document.querySelectorAll(".digit-box").forEach((box) => {
  box.addEventListener("click", function () {
    playAudio("click");
    setActiveBox(this);
  });
});

document.querySelectorAll(".number").forEach((numButton) => {
  numButton.addEventListener("click", function () {
    playAudio("click");
    const number = this.getAttribute("data-num");
    handleNumpadClick(number);
  });
});
function updateHintListner1() {
  const hint1 = document.getElementById("hintButton1");

  hint1.addEventListener("click", () => {
    playAudio("click");
    setJaxPose("thinking");
    updateInstructions("hint1_shown");
    createHint1lines();
    hint1visible = true;
    showPictoralSentence(1);
    hint1.style.display = "none";
    setTimeout(() => {
      hint2.style.display = "block";
    }, 1000);
  });
}

function updateHintListner2() {
  const hint2 = document.getElementById("hintButton2");

  hint2.addEventListener("click", () => {
    playAudio("click");
    setJaxPose("thinking");
    updateInstructions("hint2_shown");
    if (hint1visible) createHint2lines();
    else createOnlyHint2Lines();
    hint2visible = true;
    hint2.style.display = "none";
    showNumberSentence(1);
  });
}
updateHintListner1();
updateHintListner2();

checkButton.addEventListener("click", checkAnswer);
nextButton.addEventListener("click", () => {
  playAudio("click");

  questionIndex = (questionIndex + 1) % NUM_STRUCTURES;
  callWithStep();
  if (questionIndex === 1) {
    prevButton.disabled = false;
  }
});
prevButton.addEventListener("click", () => {
  playAudio("click");
  if (questionIndex > 0) {
    questionIndex--;
    callWithStep();
  }
});
callWithStep(0);
document.getElementById("sentenceContainer").style.visibility = "visible";
// Utilities
