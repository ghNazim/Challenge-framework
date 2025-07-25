let progress = 0;
let stepQ = [];

function atStep0() {
  playAudio("click");
  toggleFullScreenOverlay(false);
  unitWidget.style.display = "block";
  updateInstructions("pink_jar");
  unitTextDisplay.textContent = "";
}
function atStep1() {
  updateInstructions("plus");
  nextButton.disabled = true;
  plusBtn.style.pointerEvents = "auto";
  plusBtn.classList.add("pulse-highlight");
  plusBtn.addEventListener("click", clickPLusFirstTime);
}

function clickPLusFirstTime() {
  plusBtn.style.pointerEvents = "none";
  plusBtn.classList.remove("pulse-highlight");
  plusBtn.removeEventListener("click", clickPLusFirstTime);
  updateInstructions("top_num");
  highlightUnitNumberTab(true);
  nextButton.disabled = false;
  unitTextDisplay.textContent = "";
  prevButton.disabled = true;
}
function topNum1() {
  unitNumberTab.style.color = "white";
  updateInstructions("bottom_num");
  unitTextDisplay.textContent = numberToText[1];
  highlightUnitNumberTab(false);
  highlightUnitTextDisplay(true);
}

function topNum2() {
  highlightUnitTextDisplay(false);
  updateInstructions("minus");
  speakerButtonUnit.style.display = "flex";
  minusBtn.style.pointerEvents = "auto";
  unitTextDisplay.style.color = "white";
  minusBtn.classList.add("pulse-highlight");
  minusBtn.addEventListener("click", clickMinusFirstTime);
  nextButton.disabled = true;
}

function clickMinusFirstTime() {
  updateInstructions("keep_adding");
  minusBtn.classList.remove("pulse-highlight");
  minusBtn.removeEventListener("click", clickMinusFirstTime);
  plusBtn.style.pointerEvents = "auto";
}

function whenHits10() {
  wiggle();
  updateInstructions("wiggling");
  showComment("number_disappeared");
  unitNumberTab.classList.add("outlined");
  nextButton.disabled = false;
  setJaxPose("thinking");
}
function reverse10() {
  setJaxPose("normal");
  wiggle(false);
  updateInstructions("keep_adding");
  showStatement(-1);
  unitNumberTab.classList.remove("outlined");
  setNextText("next");
  nextButton.disabled = true;
}

// Push steps to stepQ
startButton.addEventListener("click", atStep0);
stepQ.push(atStep1);
stepQ.push(topNum1);
stepQ.push(topNum2);
stepQ.push(blankStepBeforeAddingContainer);
stepQ.push(addTenContainer);
stepQ.push(blankStepAfterAddingJar);
stepQ.push(moveRight);
stepQ.push(moveLeft);

function handleNext() {
  playAudio("click");
  prevButton.disabled = false;
  if (progress < stepQ.length) {
    stepQ[progress](); // Execute current step's action
    progress++; // Advance progress
    updateStepCounter(progress);
  }
}
nextButton.addEventListener("click", handleNext);

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
function blankStepBeforeAddingContainer() {
  setNextText("add_jar");
  showComment("add_jar");
  updateInstructions("max_reached");
  plusBtn.style.pointerEvents = "none";
  minusBtn.style.pointerEvents = "none";
  speakerButtonUnit.style.display = "none";
}

function addTenContainer() {
  const tenWidget = document.getElementById("ten-widget");
  plusBtn.style.pointerEvents = "none";
  minusBtn.style.pointerEvents = "none";

  unitWidget.addEventListener(
    "transitionend",
    function handleTransitionEnd() {
      unitWidget.removeEventListener("transitionend", handleTransitionEnd);
      tenWidget.style.visibility = "visible";
      showStatement(1);
      // showDirArrow("left"); // This is commented out in original, no need to undo.
      updateInstructions("blue_jar");
      setJaxPose("normal");
      // nextButton.disabled = true; // This is commented out, not part of actual state change.
      setNextText("next");
    },
    { once: true }
  );
  unitWidget.classList.remove("shifted");
}

function blankStepAfterAddingJar() {
  showDirArrow("left");
  nextButton.disabled = true;
  updateInstructions("move_left");
}

function moveRight() {
  showStatement(2);
  showDirArrow("right");
  updateInstructions("move_right");

  nextButton.disabled = true;
}

function moveLeft() {
  showStatement(1);
  showDirArrow("left");
  updateInstructions("move_left_again");
  nextButton.disabled = true;
}

function wiggle(bool = true) {
  if (bool) {
    vibrateElement(unitInnerCard);
    vibrateElement(unitNumberTab);
    setTimeout(() => {
      vibrateElement(unitSquaresContainer);
    }, 100);
  } else {
    vibrateElement(unitInnerCard, false);
    vibrateElement(unitNumberTab, false);
    vibrateElement(unitSquaresContainer, false);
  }
}

function highlightUnitNumberTab(show = true) {
  if (show) {
    unitNumberTab.classList.add("outlined");
  } else {
    unitNumberTab.classList.remove("outlined");
  }
}
function highlightUnitTextDisplay(show = true) {
  if (show) {
    unitTextDisplay.parentElement.classList.add("outlined");
  } else {
    unitTextDisplay.parentElement.classList.remove("outlined");
  }
}

function playNumber(num) {
  const lang = flag === "ENGLISH" ? "English" : "Indo";
  const audioUrl = `sound${lang}/${num}.mp3`;
  console.log(audioUrl);

  const audio = new Audio(audioUrl);
  audio.play();
}

speakerButtonUnit.addEventListener("click", () =>
  playNumber(count)
);
