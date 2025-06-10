const next = document.getElementById("nextButton");
let step = 0;

updateWithStep(step);
function step1() {
  highlightRow(1);
  showChangeButtons(1, true);
  next.disabled = true;
  updateWithStep(step);

}
async function handleUnitsCalc() {
  
  next.disabled = true;
  setOpaque("units");
  await animateUnits1();
  await sleep(200);
  await animateUnits2();
  next.disabled = false;
  updateWithStep(3);
  highlightColumn("tens");
}
async function handleTensCalc() {
  next.disabled = true;
  await sleep(400);
  setOpaque("tens");
  await animateTens1();
  await sleep(200);
  await animateTens2();
  await sleep(200);
  cloned = await cloneAndTranslateElement("tens");
  await sleep(200);
  await animateTens2();
  next.disabled = false;
  updateWithStep(4);
}
function translateTensOverflow() {
  next.disabled = true;
  animateElementToTarget(
    cloned,
    document.querySelector("#row-3 .hundred-block"),
    () => {
      paintActive("#row-3 .hundred-block", 1, "block-color-active");
      hundredIndex = 1;
      cloned = null;
      updateDigitLabel("tens");
      updateDigitLabel("hundreds");
      next.disabled = false;
      updateWithStep(5);
      highlightColumn("hundreds");
    }
  );
}
async function handleHundredsClick() {
  next.disabled = true;
  await sleep(400);
  setOpaque("hundreds");
  await animateHundredsOneByOne(1, 3);
  next.disabled = false;
  updateWithStep(6);
  highlightRow(3)
}

async function flyAnswer() {
  next.disabled = true;
  unhighlightColumn();
  setAllOpaque();
  await Promise.all([
    triggerFlyText("units"),
    triggerFlyText("tens"),
    triggerFlyText("hundreds"),
  ]);
  highlightSum(3);
  confettiBurst();

}

let stepQueue = [];

stepQueue.push(()=>{});
stepQueue.push(step1);
stepQueue.push(handleUnitsCalc);
stepQueue.push(handleTensCalc);
stepQueue.push(translateTensOverflow);
stepQueue.push(handleHundredsClick);
stepQueue.push(flyAnswer);

next.addEventListener("click", function () {
  step++;
  stepQueue[step]();
});
