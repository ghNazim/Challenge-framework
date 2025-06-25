let progress = 0;
let questionIndex = 0;
updateInstructions("general");
document.querySelector(".upperControls p").innerHTML = texts.top_question;
numberText.style.visibility = "hidden";
function clickingPlusFirstTime() {
  unitsPlus.classList.remove("pulse-highlight");
  unitsPlus.removeEventListener("click", clickingPlusFirstTime);
  numberText.style.visibility = "visible";
}
function updateWithClickingPLus() {
  if (unitCount == 10) {
    showComment("overflow");
    updateInstructions("overflow_one")
    setCavePose("Thinking");
  } else if (unitCount == 0 && tenCount == 1) {
    showComment("ten");
    updateInstructions("add_more")
    setCavePose("Normal")
  } else if (unitCount == 0 && tenCount == 2) {
    showComment("twenty");
    updateInstructions("add_more")
    setCavePose("Normal")
  } else if (unitCount == 5 && tenCount == 2) {
    setCavePose("Happy");
    showComment("twenty_five");
    updateInstructions("congrats");
    playSound("congrats");
    confettiBurst();
    unitsPlus.style.pointerEvents = "none";
  } else return;
}
unitsPlus.addEventListener("click", clickingPlusFirstTime);
function addTenContainer(cb) {
  const tenWidget = document.getElementById("ten-widget");

  unitWidget.addEventListener(
    "transitionend",
    async function handleTransitionEnd() {
      unitWidget.removeEventListener("transitionend", handleTransitionEnd);
      tenWidget.style.visibility = "visible";
      await wait(200);
      cb?.();
    },
    { once: true }
  );
  unitWidget.classList.remove("shifted");
}

function whenHits10() {
  updateInstructions("pink_unlike");
  setCavePose("Thinking");
  wiggle();
  nextButton.disabled = false;
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
  const text = numberToText[num];
  // showStatement(1);
  const numberTextP = document.querySelector("#numberText>p");
  if(isLegit){
    playNumber(num);
  }
  numberTextP.textContent = text + (isLegit ? "" : "?");
}

function wiggle(bool = true) {
  if (bool) {
    vibrateElement(unitInnerCard);
    setTimeout(() => {
      vibrateElement(unitSquaresContainer);
    }, 100);
    unitNumberTab.classList.add("outlined");
    vibrateElement(unitNumberTab);
    vibrateElement(numberText)
  } else {
    vibrateElement(unitInnerCard, false);
    vibrateElement(unitSquaresContainer, false);
    unitNumberTab.classList.remove("outlined");
    vibrateElement(unitNumberTab, false);
    vibrateElement(numberText, false);
  }
}

const unitPill = document.querySelector("#unit-widget .pill-badge");
const tenPill = document.querySelector("#ten-widget .pill-badge");
unitPill.textContent = tags.ones;
tenPill.textContent = tags.tens;

function playNumber(num) {
  const lang = flag === "ENGLISH" ? "English" : "Indo";
  const audioUrl = `sound${lang}/${num}.mp3`;

  const audio = new Audio(audioUrl);
  audio.play();
}

document
  .querySelector("#numberText .speaker-btn")
  .addEventListener("click", () => {
    playNumber(tenCount * 10 + unitCount);
  });
