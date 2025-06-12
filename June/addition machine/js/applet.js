let activeFunnel = 1,
  hintvisible = false,
  questionIndex = 0;
const machine = document.getElementById("actualMachine");

let currentAnswer = [0, 0, 0];
let correctAnswer = [0, 0, 0];

async function checkAnswer() {
  const true1 = currentAnswer[0] === correctAnswer[0];
  const true2 = currentAnswer[1] === correctAnswer[1];
  const true3 = currentAnswer[2] === correctAnswer[2];
  const correct = true1 && true2 && true3;
  if (correct) {
    setJaxPose("happy");
    updateInstructions("correct");
    playAudio("correct");
    if (!hintvisible) {
      fillDots("frame1", correctAnswer[0]);
      fillDots("frame2", correctAnswer[1]);
    }
    fillDots("frame3", correctAnswer[2]);
    confettiBurst();
    setNextButtonText("next");
    nextButton.onclick = handleNext;
    return;
  } else {
    setJaxPose("sad");
    updateInstructions("hint");
    playAudio("wrong");
    await vibrateElement(machine);
    if (!true1) {
      setImage(1, -1);
    }
    if (!true2) {
      setImage(2, -1);
    }
    if (!true3) {
      setImage(3, -1);
    }
    if (!hintvisible) {
      await fillDots("frame1", correctAnswer[0]);
      await fillDots("frame2", correctAnswer[1]);
      hintvisible = true;
    }
    const ind = getFirstWrongIndex();
    setActiveFunnel(ind + 1);
  }
}
function initiate() {
  hideNumbers()
  hideAllTenFrames();
  setQuestionText();
  setNextButtonText("check");
  setJaxPose("normal");
  updateInstructions("instruction_general");
  hintvisible = false;
  animateOptionsIn();
  showActualMachine(() => {
    activeFunnel = 1;
    setActiveFunnel(activeFunnel);
    nextButton.onclick = checkAnswer;
  });
  
}
initiate();

async function handleNumpadClick(number) {
  if (activeFunnel > 0) {
    await setImage(activeFunnel, number);
    currentAnswer[activeFunnel - 1] = parseInt(number);
    activeFunnel = nextFunnel();
    setActiveFunnel(activeFunnel);
  }
}
function handleNext(){
  questionIndex++;
  initiate()
}

function nextFunnel() {
  if (activeFunnel <= 0) {
    return 0;
  }
  let index = activeFunnel - 1;
  let nextIndex = index + 1;
  while (true) {
    if (currentAnswer[nextIndex] !== correctAnswer[nextIndex]) {
      return nextIndex + 1;
    }
    if (nextIndex > 2) {
      return 0;
    }
    nextIndex++;
  }
}

document.querySelectorAll(".option").forEach((numButton) => {
  numButton.addEventListener("click", function () {
    const number = this.getAttribute("data-value");
    handleNumpadClick(number);
  });
});

function hideAllTenFrames() {
  fillDots("frame1", 0);
  fillDots("frame2", 0);
  fillDots("frame3", 0);
}
function hideNumbers(){
  setImage(1, -1);
  setImage(2, -1);
  setImage(3, -1);
}

function getFirstWrongIndex() {
  for (let i = 0; i < 3; i++) {
    if (currentAnswer[i] !== correctAnswer[i]) {
      return i;
    }
  }
  return -1;
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

function showActualMachine(cb) {
  const machine = document.getElementById("actualMachine");

  if (!machine) return;

  gsap.fromTo(
    machine,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      ease: "power1.out",
      onComplete: cb,
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

function setActiveFunnel(num) {
  if (num < 0 || num > 3) {
    activeFunnel = 0;
  } else {
    activeFunnel = num;
  }
  setMachineImage(activeFunnel);
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

function setMachineImage(num) {
  const machine = document.getElementById("actualMachine");
  machine.src = `assets/highlight${num}.png`;
}

function setQuestionText() {
  const questionText = document.getElementById("questionText");
  questionText.textContent = questionTexts[questionIndex];
  correctAnswer = questions[questionIndex];
}
