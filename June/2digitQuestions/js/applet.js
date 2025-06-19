let progress = 0;
let questionIndex=0
let stepQ = [];

function atStep0() {
  unitWidget.style.display = "block";
  tenWidget.style.display = "block";
  updateInstructionWithQuestion(questions[questionIndex]);
  submitButton.style.visibility = "visible";
  nextButton.disabled = true;
  showStatement(-1)
}

function whenHits10() {
  updateInstructions("pink_unlike");
  setCavePose("Thinking");
  wiggle()
  unitNumberTab.classList.add("outlined");
  nextButton.disabled = false;
}
function reverse10() {
  wiggle(false)
  unitNumberTab.classList.remove("outlined");
  nextButton.disabled = true;
}
stepQ.push(atStep0);
// stepQ.push(atStep1);
// stepQ.push(toMcq);
// stepQ.push(afterMcq);
// stepQ.push(after20MoveRight)
// stepQ.push(after20MoveLeft)
// stepQ.push(addTenContainer);
// stepQ.push(moveRight);
// stepQ.push(moveLeft);
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
function showNumberText(num){
  const text = numberToText[num]
  updateInstructionFromNumber(num)
  showStatement(1);
  const numberText = document.querySelector("#numberText>p");
  numberText.textContent = text
}


function wiggle(bool=true){
  if(bool){
    vibrateElement(unitInnerCard)
    setTimeout(()=>{vibrateElement(unitSquaresContainer)}, 100)
  }else{
    vibrateElement(unitInnerCard, false)
    vibrateElement(unitSquaresContainer, false)
  }
}
