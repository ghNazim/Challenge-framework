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
  prevButton.disabled = false;
}
function clickPLusFirstTime() {
  plusBtn.style.pointerEvents = "none";
  plusBtn.classList.remove("pulse-highlight");
  plusBtn.removeEventListener("click", clickPLusFirstTime);
  plusBtn.addEventListener("click", clickPlusSecondTime);
  nextButton.disabled = false;
  unitTextDisplay.textContent = "";
}
function clickPlusSecondTime() {
  showStatement(-1);
  plusBtn.removeEventListener("click", clickPlusSecondTime);
  updateInstructions("keep_adding");
  highlightUnitTextDisplay(false);
}
function topNum1() {
  updateInstructions("top_num");
  highlightUnitNumberTab(true);
  unitNumberTab.style.color = "white";
}
function topNum2() {
  highlightUnitNumberTab(false);
  highlightUnitTextDisplay(true);
  unitTextDisplay.textContent = numberToText[1] + tags.one;
  updateInstructions("bottom_num");
  speakerButtonUnit.style.display = "flex";
  unitTextDisplay.style.color = "white";
  nextButton.disabled = true;
  plusBtn.style.pointerEvents = "auto";
  showComment("keep_adding");
}
function whenHits10() {
  wiggle();
  // updateInstructions("wiggling");
  showComment("oops");
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
  if (progress < stepQ.length) {
    stepQ[progress]();
    progress++;
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
      showStatement(-1);
      // showDirArrow("left");
      updateInstructions("blue_jar");
      setJaxPose("normal");
      // nextButton.disabled = true;
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

speakerButtonUnit.addEventListener("click", () => playNumber(count));
const unitPill = document.querySelector("#unit-widget .pill-badge");
const tenPill = document.querySelector("#ten-widget .pill-badge");
unitPill.textContent = tags.ones;
tenPill.textContent = tags.tens;
