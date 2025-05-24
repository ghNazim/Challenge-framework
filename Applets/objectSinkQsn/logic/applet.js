const wrapper = document.getElementById("wrapper");
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");
const resetButton = document.getElementById("resetButton");
const labelsOverlay = document.getElementById("labels");
const clip = document.getElementById("clip");
const mcqContainer = document.getElementById("mcqContainer");
const dotsContainer = document.getElementById("dotsContainer");
let jarWidth = 300,
  jarHeight = 300,
  x0 = 250,
  y0 = 450,
  dx = 80,
  dy = 40,
  initialWaterLevel = 200,
  waterLevel = 40;
const objectHeight = 100;
let duration = 2000,
  objectStartX = 400,
  objectStartY = 50,
  objectEndY = 340,
  pivot = 130;

let currentObject = null;
let step = 0;
const sinkData = {
  watermelon: {
    objectHeight: 100,
    objectEndY: 290,
    pivot: 130,
    waterLevel: 10,
    initialWaterLevel: 200,
  },
  pumpkin: {
    objectHeight: 100,
    objectEndY: 290,
    pivot: 180,
    waterLevel: 30,
    initialWaterLevel: 150,
  },
  coconut: {
    objectHeight: 100,
    objectStartX: 400,
    objectStartY: 10,
    objectEndY: 290,
    pivot: 150,
    waterLevel: 20,
    initialWaterLevel: 180,
  },
};
callWithStep(0);

function callWithStep(step) {
  if (step === 0) {
    dotsContainer.style.display = "none";
    nextButton.disabled = false;
    prevButton.disabled = true;
    wrapper.style.display = "none";
    mcqContainer.style.display = "none";
    addContextSection(1);
    removeLabels();
  } else {
    highlightCurrentStep(step - 1);
    setUpVariables(step);
    mcqContainer.style.display = "none";
    prevButton.disabled = false;
    nextButton.disabled = true;
    wrapper.style.display = "block";
    setUpImage();
    animateObjectPosition(
      currentObject,
      objectStartY,
      objectEndY,
      duration,
      pivot,
      initialWaterLevel,
      waterLevel,
      objectHeight,
      [x0, y0, dx, dy, jarWidth],
      () => {
        console.log("pivot", pivot);
        mcqContainer.style.display = "block";
        loadQuestion(step - 1);
      }
    );
  }
}

function handleNext() {
  if (step === questions.length) {
    showFullScreenOverlay();
    return;
  }
  step++;
  if (step === 1) {
    dotsContainer.style.display = "flex";
    addContextSection(2);
    generateStepCounter(questions.length);
  }
  callWithStep(step);
}
function handlePrev() {
  step--;
  callWithStep(step);
}
function handleReset() {
  hideFullScreenOverlay();
  step = 0;
  callWithStep(step);
  questions.forEach((q) => (q.answered = false));
}
resetButton.addEventListener("click", handleReset);
nextButton.addEventListener("click", handleNext);
prevButton.addEventListener("click", handlePrev);

function setUpImage() {
  showSelectedObject(currentObject);
  setImagePos(currentObject, objectStartX, objectStartY);
  drawBeaker(x0, y0, dx, dy, jarWidth, jarHeight, initialWaterLevel);
  drawPrism(x0, y0, dx, dy, jarWidth, initialWaterLevel);
  removeLabels();
  drawLabels(beakerProp[currentObject].width, beakerProp[currentObject].height);
}

function setUpVariables(step) {
  if (step === 1) {
    currentObject = "watermelon";
  } else if (step === 2) {
    currentObject = "pumpkin";
  } else if (step === 3) {
    currentObject = "coconut";
  }
  pivot = sinkData[currentObject].pivot;
  waterLevel = sinkData[currentObject].waterLevel;
  initialWaterLevel = sinkData[currentObject].initialWaterLevel;
  setFocusOfMag(initialWaterLevel);
}
function drawLabels(width, height) {
  const d = 8;
  drawArrowSVG(
    labelsOverlay,
    { x: x0 + jarWidth + d, y: y0 + 5 },
    { x: x0 + jarWidth + dx + d, y: y0 - dy + 5 }
  );
  drawArrowSVG(
    labelsOverlay,
    { x: x0, y: y0 + d },
    { x: x0 + jarWidth, y: y0 + d }
  );
  writeTextSVG(
    labelsOverlay,
    { x: x0 + jarWidth / 2, y: y0 + 3.5 * d },
    width + " cm"
  );
  writeTextSVG(
    labelsOverlay,
    { x: x0 + jarWidth + dx / 2 + 2 * d, y: y0 + 5 },
    height + " cm",
    "start"
  );
  labelsOverlay.style.opacity = "1";
}

function removeLabels() {
  labelsOverlay.replaceChildren();
  labelsOverlay.style.opacity = "0";
}

function loadQuestion(index) {
  const nextBtn = document.getElementById("nextButton");
  const q = questions[index];
  nextBtn.disabled = false;
  const questionText = document.querySelector(".question p");
  questionText.textContent = q.question;
  animateIn(questionText, "top");
  const optionButtons = document.querySelectorAll(".option");

  optionButtons.forEach((btn, i) => {
    btn.textContent = q.options[i];
    if (i % 2 === 0) {
      animateIn(btn, "left");
    } else {
      animateIn(btn, "right");
    }
    btn.classList.remove("mcqWrong", "mcqCorrect");
    btn.style.pointerEvents = "auto";
    btn.style.backgroundColor = "";

    btn.onclick = () => {
      if (i === q.answer) {
        q.answered = true;
        nextBtn.disabled = false;
        document.querySelector(".feedback p").textContent = q.correctFeedback;
        btn.classList.add("mcqCorrect");
        optionButtons.forEach((b) => {
          b.style.pointerEvents = "none";
        });
      } else {
        btn.style.pointerEvents = "none";
        btn.classList.add("mcqWrong");
        document.querySelector(".feedback p").textContent = q.wrongFeedback;
      }
    };
  });

  // Set feedback if already answered
  document.querySelector(".feedback p").textContent = ""
}
