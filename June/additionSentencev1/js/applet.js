const hint1 = document.getElementById("hintButton1");
const hint2 = document.getElementById("hintButton2");
const checkButton = document.getElementById("checkButton");

let questionIndex = 0;
let activeBox = null,
  hint1visible = false,
  hint2visible = false;
let currentAnswer = [0, 0, 0];

function showPictoralSentence(state) {
  const sentence = document.querySelector("#pictoralSentence>div");
  const spans = sentence.querySelectorAll("span");
  if (state === 0) {
    hint1.style.display = "block";
    sentence.style.display = "none";
  } else {
    hint1.style.display = "none";
    sentence.style.display = "flex";
    const span1Text = itemPictures.coin.repeat(questions[questionIndex][0]);
    const span2Text = itemPictures.coin.repeat(questions[questionIndex][1]);
    spans[0].textContent = " " + span1Text + " ";
    spans[1].textContent = " " + span2Text + " ";
    if (state === 1) {
      spans[2].textContent = "_______ ";
    } else {
      spans[2].textContent = itemPictures.coin.repeat(
        questions[questionIndex][0] + questions[questionIndex][1]
      );
    }
  }
}
function showNumberSentence(state) {
  const sentence = document.querySelector("#numberSentence>div");
  const num1 = numberToText[questions[questionIndex][0]];
  const num2 = numberToText[questions[questionIndex][1]];
  const num3 =
    numberToText[questions[questionIndex][0] + questions[questionIndex][1]];
  if (state === 0) {
    hint2.style.display = "block";
    sentence.style.display = "none";
  } else {
    hint2.style.display = "none";
    sentence.style.display = "flex";
    if (state === 1) {
      sentence.textContent = `${num1} + ${num2} = _______ .`;
    } else {
      sentence.textContent = `${num1} + ${num2} = ${num3} .`;
    }
  }
}
function setQuestion() {
  document.getElementById("originalSentence").textContent =
    questionTexts[questionIndex];
}

function checkAnswer() {
  const true1 = questions[questionIndex][0] === currentAnswer[0];
  const true2 = questions[questionIndex][1] === currentAnswer[1];
  const true3 =
    questions[questionIndex][0] + questions[questionIndex][1] ===
    currentAnswer[2];
  const correct = true1 && true2 && true3;
  if (!correct) {
    vibrateElement(document.querySelector(".equation"));
    playAudio("wrong");
    if (!hint1visible) {
      hint1.classList.add("nudgeAnimation");
    } else {
      if (!hint2visible) hint2.classList.add("nudgeAnimation");
    }
  } else {
    turnGreen(true);
    playAudio("correct");
    showNumberSentence(2);
    showPictoralSentence(2);
    hint1.classList.remove("nudgeAnimation");
    hint2.classList.remove("nudgeAnimation");
  }
}

function turnGreen(green) {
  if (!green) {
    document.querySelectorAll(".digit-box").forEach((box) => {
      box.classList.remove("green");
      box.textContent = "";
    });
    return;
  }
  nextButton.disabled=false
  checkButton.style.visibility = "hidden";
  document.querySelectorAll(".digit-box").forEach((box) => {
    box.classList.remove("active");
    box.classList.add("green");
  });
}

function callWithStep() {
  if (questionIndex === 0) {
    prevButton.disabled = true;
  }
  nextButton.disabled = true;
  checkButton.style.visibility = "visible";
  updateStepCounter(questionIndex);
  setQuestion();
  showPictoralSentence(0);
  showNumberSentence(0);
  currentAnswer = [0, 0, 0];
  hint1visible = false;
  hint2visible = false;
  turnGreen(false);
}

function setActiveBox(box) {
  document.querySelectorAll(".digit-box").forEach((b) => {
    b.classList.remove("active");
  });

  activeBox = box;
  box.classList.add("active");
}

// Function to handle numpad clicks
function handleNumpadClick(number) {
  if (activeBox) {
    activeBox.textContent = number;
    // Optionally remove active state after input
    const index = parseInt(activeBox.getAttribute("data-index"));
    currentAnswer[index] = parseInt(number);
    activeBox.classList.remove("active");
    activeBox = null;
  }
}

document.querySelectorAll(".digit-box").forEach((box) => {
  box.addEventListener("click", function () {
    setActiveBox(this);
  });
});

document.querySelectorAll(".number").forEach((numButton) => {
  numButton.addEventListener("click", function () {
    const number = this.getAttribute("data-num");
    handleNumpadClick(number);
  });
});

hint1.addEventListener("click", () => {
  hint1.classList.remove("nudgeAnimation");
  hint1visible = true;
  showPictoralSentence(1);
});
hint2.addEventListener("click", () => {
  hint2.classList.remove("nudgeAnimation");
  hint2visible = true;
  showNumberSentence(1);
});
checkButton.addEventListener("click", checkAnswer);
nextButton.addEventListener("click", () => {
  if (questionIndex < NUM_STRUCTURES - 1) {
    questionIndex++;
    callWithStep();
  }
  if (questionIndex === 1) {
    prevButton.disabled = false;
  }
  if (questionIndex === NUM_STRUCTURES) {
    confettiBurst();
  }
});
prevButton.addEventListener("click", () => {
  if (questionIndex > 0) {
    questionIndex--;
    callWithStep();
  }
});
callWithStep(0)
document.getElementById("sentenceContainer").style.visibility="visible"
// Utilities

function vibrateElement(el) {
  if (!el) return;

  el.style.position = "relative";
  el.classList.add("vibrate-x");

  el.addEventListener("animationend", function handler() {
    el.classList.remove("vibrate-x");
    el.removeEventListener("animationend", handler);
  });
}

function playAudio(id) {
  const audio = document.getElementById(id);
  audio.currentTime = 0;
  audio.play();
}

function confettiBurst() {
  const duration = 2.5 * 1000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 360,
      origin: { x: 0.5, y: 0.5 },
    });
    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}
