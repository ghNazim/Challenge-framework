const next = document.getElementById("nextButton");
let step = 0;
updateWithStep("start");
setJAXpose("normal");
fillCalculationDisplay(questions[questionIndex]);
setupConstants();
function step0() {
  nums = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  setupConstants();
  fillCalculationDisplay(questions[questionIndex]);
  document
    .querySelectorAll(".digit-label")
    .forEach((el) => (el.textContent = "0"));
  updateWithStep("start");
  setJAXpose("normal");
  unitIndex = 0;
  tenIndex = 0;
  hundredIndex = 0;
  cloned = null;
  document
    .querySelectorAll(".actual-blocks>.ten-bar, .actual-blocks>.unit-block")
    .forEach((element) => {
      element.classList.remove("block-color-active");
      element.classList.remove("block-color-semi");
    });
  document
    .querySelectorAll(".hundreds-cell .actual-blocks")
    .forEach(
      (element) =>
        (element.innerHTML = `<div class="hundred-block block-color-placeholder"></div>`)
    );

  setAllOpaque();
  document
    .querySelectorAll(".calc-sum-wrapper span")
    .forEach((op) => op.classList.add("hidden"));
}

function step1() {
  highlightRow(1);
  showChangeButtons(1, true);
  next.disabled = true;
  updateWithStep("set1");
}
async function handleUnitsCalc() {
  console.log("units calc 1")
  next.disabled = true;
  setJAXpose("normal");
  setOpaque("units");
  await animateUnits1();
  await sleep(200);
  await animateUnits2();
  if (unitOverflow) {
    await sleep(200);
    cloned = await cloneAndTranslateElement("units");
    await sleep(200);
    await animateUnits2();
    updateWithStep("unitsCarry");
  } else {
    updateWithStep("tens1");
    highlightColumn("tens");
    setOpaque("tens");
  }
  next.disabled = false;
  if(u1===0 && u2===0){
    document.querySelector(`row-3 .units-cell .digit-label`).style.display = "block";
  }
}
function translateUnitsOverflow() {
  console.log("translateUnitsOverflow");
  
  next.disabled = true;
  animateClone(
    cloned,
    document.querySelector("#row-3 .ten-bar").getBoundingClientRect(),
    () => {
      paintActive("#row-3 .ten-bar", 1, "block-color-active");
      tenIndex = 1;
      cloned = null;
      updateDigitLabel("tens");
      updateDigitLabel("units");
      next.disabled = false;
      updateWithStep("tens1");
      highlightColumn("tens");
      setOpaque("tens");
    }
  );
}
async function handleTensCalc() {
  console.log(1);
  next.disabled = true;
  await animateTens1();
  console.log(2);
  await sleep(200);
  await animateTens2();
  console.log(3);
  if (tenOverflow) {
    await sleep(200);
    cloned = await cloneAndTranslateElement("tens");
    console.log(4);
    await sleep(200);
    await animateTens2();
    console.log(5);
    updateWithStep("tensCarry");
  } else {
    updateWithStep("combine");
    highlightRow(3);
    setAllOpaque();
  }
  next.disabled = false;
  if (t1 === 0 && t2 === 0) {
    document.querySelector(`#row-3 .tens-cell .digit-label`).style.display =
      "block";
  }
}
function translateTensOverflow() {
  next.disabled = true;
  animateClone(
    cloned,
    document.querySelector("#row-3 .hundred-block").getBoundingClientRect(),
    () => {
      document.querySelector("#row-3 .hundreds-cell").style.visibility = "visible";
      paintActive("#row-3 .hundred-block", 1, "block-color-active");
      hundredIndex = 1;
      cloned = null;
      updateDigitLabel("tens");
      updateDigitLabel("hundreds");
      next.disabled = false;
      updateWithStep("combine");
      highlightRow(3);
      setAllOpaque();
    }
  );
}

async function handleHundredsClick() {
  next.disabled = true;

  await animateHundredsOneByOne(1, 3);
  await sleep(200);
  await animateHundredsOneByOne(2, 3);
  next.disabled = false;
  updateWithStep("combine");
  highlightRow(3);
  setAllOpaque();
}

async function flyAnswer() {
  next.disabled = true;
  unhighlightColumn();
  
  await Promise.all([
    triggerFlyText("units"),
    triggerFlyText("tens"),
    h3!==0?triggerFlyText("hundreds"):Promise.resolve(),
  ]);
  highlightSum(3);
  confettiBurst();
  setJAXpose("happy");
  playAudio("success");
  if(questionIndex === questions.length - 1){
    updateWithStep("finished")
    next.style.visibility = "hidden";
  }
  else{
    updateWithStep("tryNew");
    next.disabled = false;
  }
  
}

let stepQueue;
function setUpStepQueue() {
  stepQueue = [];
  stepQueue.push(step0);
  stepQueue.push(step1);
  stepQueue.push(handleUnitsCalc);
  if (unitOverflow) stepQueue.push(translateUnitsOverflow);
  stepQueue.push(handleTensCalc);
  if (tenOverflow) stepQueue.push(translateTensOverflow);
  // stepQueue.push(handleHundredsClick);
  stepQueue.push(flyAnswer);
  stepQueue.push(reset);
}
setUpStepQueue();


next.addEventListener("click", function () {
  step++;
  stepQueue[step]();
});

function reset() {
  questionIndex++;
  step0();
  setUpStepQueue();
  console.log(stepQueue);
  step = 0;
  stepQueue[++step]();
}
