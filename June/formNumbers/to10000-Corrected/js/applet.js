const widgets = Array.from(document.querySelectorAll(".widget-container"));
widgets.reverse();
let currentContainer = 0;
const tagMap = ["unit", "ten", "hundred", "thousand", "tenThousand"];
showOverlayWithBubble();
tagMap.forEach((tag) => showControlButtons(tag, false));
function clickingPlusFirstTime() {
  unitsPlus.classList.remove("pulse-highlight");
  unitsPlus.removeEventListener("click", clickingPlusFirstTime);
  numberText.style.visibility = "visible";
}
function clickTensPlusFirstTime() {
  tensPlus.classList.remove("pulse-highlight-blue");
  tensPlus.removeEventListener("click", clickingPlusFirstTime);
}
function onHitting10() {
  wiggle(tagMap[currentContainer]);
  setNextText("add_jar");
  nextButton.disabled = false;
  showComment(tagMap[currentContainer] + "_overflow");
}
function reverse10() {
  wiggle(tagMap[currentContainer], false);
  setNextText("next");
  nextButton.disabled = true;
  showStatement(-1);
  // updateHeader(tagMap[currentContainer] + "_general");
}
function addContainer() {
  playSound("click");
  leftDirObject[tagMap[currentContainer]].style.display = "flex";
  showControlButtons(tagMap[currentContainer], false);
  currentContainer += 1;
  showWidgetContainer(currentContainer);
  nextButton.disabled = true;
  setNextText("next");
}
function extraAfterClickingDir() {
  showComment(tagMap[currentContainer]);
}

unitsPlus.addEventListener("click", clickingPlusFirstTime);
tensPlus.addEventListener("click", clickTensPlusFirstTime);

function handleStart() {
  startButton.classList.remove("pulse-highlight-btn");
  showWidgetContainer(currentContainer);
  showControlButtons(tagMap[currentContainer], true);
  nextButton.disabled = true;
  updateHeader("general");
}
startButton.onclick = handleStart;
nextButton.onclick = addContainer;
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
      showCharHead(false);
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
function showCharHead(show){
  const display = show ? "block" : "none";
  const charHead = document.querySelector("#charHead");
  charHead.style.display = display;
}

const textsBottoms = document.querySelectorAll(".text-display")
textsBottoms.forEach((text, i) => text.textContent = tagsArray[4-i])