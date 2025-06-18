let hintvisible = false,
  questionIndex = 0;
const machine = document.getElementById("actualMachine");
const hintbtn = document.querySelector(".hint-btn");
hintbtn.textContent = texts.button_texts.hint;
const machineContainer = document.querySelector("#machine");
const balanceContainer = document.querySelector("#balance");
const checkButton = document.querySelector("#checkButton");
checkButton.textContent = texts.button_texts.check;
const checkButtonBalance = document.querySelector("#checkButtonBalance");
checkButtonBalance.textContent = texts.button_texts.check;

let currentAnswer = 0;
let correctAnswer = [0, 0, 0];


function initiate() {
  prevButton.disabled = questionIndex === 0;
  currentAnswer = 0;
  disableNumpad(false);
  showOnScreen();
  checkButtonOn(true);
  setJaxPose("normal");
  updateInstructions("instruction_general");
  animateOptionsIn();
  if (questionIndex < 3) setUpMachine();
  else setupBalance();
}
initiate();
function setUpMachine() {
  hideNumbers();
  hideAllTenFrames();
  setQuestionText();
  showActualMachine();
}
async function handleNumpadClick(number) {
  if (questionIndex < 3) {
    await setImage(3, number);
    currentAnswer = parseInt(number);
  } else {
    putWeightOnBalance(number);
  }
}
function handleNext() {
  playAudio("click");
  questionIndex = (questionIndex + 1)%NUM_STRUCTURES;
  if(questionIndex===0){
    setNextButtonText("next")
  }
  updateStepCounter(questionIndex);
  initiate();
}

document.querySelectorAll(".option").forEach((numButton) => {
  numButton.addEventListener("click", function () {
    playAudio("click");
    const number = this.getAttribute("data-value");
    handleNumpadClick(number);
  });
});
hintbtn.addEventListener("click", () => {
  playAudio("click");
  setJaxPose("thinking")
  if (questionIndex < 3) showTenFrames();
  else showTenFramesBalance();
  hintbtn.style.display = "none";
});

function hideAllTenFrames() {
  fillDots("frame1", 0);
  fillDots("frame2", 0);
  fillDots("frame3", 0);
}
async function showTenFrames() {
  if (hintvisible) return;
  await fillDots("frame1", correctAnswer[0]);
  await fillDots("frame2", correctAnswer[1]);
  await fillDots("frame3", correctAnswer[2]);
  hintbtn.style.display = "none";
  hintvisible = true;
}
function hideNumbers() {
  hintvisible = false;
  setImage(1, -1);
  setImage(2, -1);
  setImage(3, -1);
}

function animateOptionsIn() {
  const options = document.querySelectorAll(".option");

  if (!options.length) return;

  gsap.fromTo(
    options,
    {
      opacity: 0,
      scale: 0.1,
      y: 10,
    },
    {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.4,
      ease: "back.out(1.7)",
      stagger: 0.05,
    }
  );
}

function showActualMachine() {
  const machine = document.getElementById("actualMachine");
  if (!machine) return;
  gsap.fromTo(
    machine,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      ease: "power1.out",
    }
  );
}

function fillDots(id, n) {
  return new Promise((resolve) => {
    const cells = document.querySelectorAll(`#${id} .cell`);
    const dotsToAnimate = [];

    cells.forEach((cell, index) => {
      cell.innerHTML = ""; // Clear previous dots

      if (index < n) {
        const dot = document.createElement("div");
        dot.className = "dot";
        cell.appendChild(dot);
        dotsToAnimate.push(dot);
      }
    });

    if (dotsToAnimate.length === 0) {
      resolve(); // Nothing to animate
      return;
    }

    gsap.fromTo(
      dotsToAnimate,
      { scale: 0.1, opacity: 0, x: -8, y: -5 },
      {
        scale: 1,
        opacity: 1,
        x: 0,
        y: 0,
        duration: 0.4,
        ease: "back.out(1.7)",
        stagger: 0.08,
        onComplete: resolve, // Resolve when the animation ends
      }
    );
  });
}

async function setImage(tag, num) {
  if (tag === 0) return;
  const id = `img${tag}`;
  const image = document.getElementById(id);

  return new Promise((resolve) => {
    const animateIn = () => {
      image.src = num < 0 ? "" : `assets/${numberToText[num]}.png`;

      gsap.fromTo(
        image,
        { opacity: 0, scale: 0.1 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: "back.out(1.7)",
          onComplete: resolve, // Resolve when animation finishes
        }
      );
    };

    if (image.src.includes(".png")) {
      console.log("inside gsap");
      gsap.to(image, {
        opacity: 0,
        scale: 0.1,
        duration: 0.3,
        onComplete: animateIn,
      });
    } else {
      animateIn();
    }
  });
}

async function setQuestionText() {
  // const questionText = document.getElementById("questionText");
  // questionText.textContent = questionTexts[questionIndex];
  correctAnswer = questions[questionIndex];
  const tasks = [
    [1, correctAnswer[0]],
    [4, 10],
    [2, correctAnswer[1]],
    [5, 11],
  ];

  tasks.forEach((id, index) => {
    gsap.delayedCall(index * 0.1, () => {
      setImage(...id);
    });
  });
  hintbtn.style.display = "block";
}

function showOnScreen() {
  if (questionIndex < 3) {
    machineContainer.style.display = "flex";
    balanceContainer.style.display = "none";
  } else {
    balanceContainer.style.display = "flex";
    machineContainer.style.display = "none";
  }
}
async function checkAnswerMachine() {
  checkButton.disabled = true;
  const correct = currentAnswer === correctAnswer[2];
  if (correct) {
    await onCorrect(showTenFrames);
  } else {
    await onWrong(machine, showTenFrames);
    checkButton.disabled = false;
  }
}
async function onWrong(elementToVibrate, showTenFrames) {
  setJaxPose("sad");
  updateInstructions("hint");
  playAudio("wrong");
  await vibrateElement(elementToVibrate);
  setImage(3, -1);
  await showTenFrames();
}
async function onCorrect(showTenFrames) {
  confettiBurst();
  disableNumpad();
  setJaxPose("happy");
  updateInstructions("correct");
  playAudio("correct");
  if (!hintvisible) {
    await showTenFrames();
  }
  checkButtonOn(false);
}
nextButton.onclick = handleNext;
checkButton.onclick = checkAnswerMachine;
checkButtonBalance.onclick = checkAnswerBalance;

prevButton.onclick = function () {
  playAudio("click");
  questionIndex--;
  updateStepCounter(questionIndex);
  initiate();
};

function checkButtonOn(show = true) {
  if (show) {
    checkButton.disabled = false;
    nextButton.disabled = true;
    checkButtonBalance.disabled = false;
  } else {
    checkButton.disabled = true;
    nextButton.disabled = false;
    checkButtonBalance.disabled = true;
  }
}

function disableNumpad(disable=true){
  const optionsContainer = document.getElementById("optionsContainer");
  optionsContainer.style.pointerEvents = disable ? "none" : "auto";
}
