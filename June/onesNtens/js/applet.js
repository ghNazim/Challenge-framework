let progress = 0;
let stepQ = [];

function atStep0() {
  unitWidget.style.display = "block";
  updateInstructions("pink_jar");
}
function atStep1() {
  updateInstructions("plus");
  nextButton.disabled = true;
  plusBtn.style.pointerEvents = "auto";
  plusBtn.classList.add("pulse-highlight");
  plusBtn.addEventListener("click", clickPLusFirstTime);
}
function clickPLusFirstTime() {
  updateInstructions("minus");
  minusBtn.style.pointerEvents = "auto";
  plusBtn.style.pointerEvents = "none";
  minusBtn.classList.add("pulse-highlight");
  plusBtn.classList.remove("pulse-highlight");
  plusBtn.removeEventListener("click", clickPLusFirstTime);
  minusBtn.addEventListener("click", clickMinusFirstTime);
}
function clickMinusFirstTime() {
  updateInstructions("keep_adding");
  minusBtn.classList.remove("pulse-highlight");
  minusBtn.removeEventListener("click", clickMinusFirstTime);
  plusBtn.style.pointerEvents = "auto";
}
function whenHits10() {
  vibrateElement(unitWidget);
  updateInstructions("wiggling");
  showComment("number_disappeared");
  unitNumberTab.classList.add("outlined")
  nextButton.disabled = false;
}
function reverse10() {
  vibrateElement(unitWidget, false);
  updateInstructions("keep_adding");
  showStatement(-1);
  unitNumberTab.classList.remove("outlined")
  nextButton.disabled = true;
}
stepQ.push(atStep0);
stepQ.push(atStep1);
stepQ.push(addTenContainer);
stepQ.push(moveRight);
stepQ.push(moveLeft);
function handleNext() {
  if (progress < stepQ.length) {
    stepQ[progress]();
    progress++;
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

function addTenContainer(){
  const tenWidget = document.getElementById("ten-widget");
  tenWidget.style.display = "block";
  showStatement(1)
  updateInstructions("move_left")
  nextButton.disabled = true
}

function moveRight(){
  showStatement(2)
  updateInstructions("move_right")
  nextButton.disabled = true
}
function moveLeft(){
  showStatement(1)
  updateInstructions("move_left_again")
  nextButton.disabled = true
}