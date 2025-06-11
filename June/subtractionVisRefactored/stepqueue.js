const next = document.getElementById("nextButton");
let step = 0;

updateWithStep(step);
function step1() {
  showChangeButtons(1, true);
  next.disabled = true;
  updateWithStep(step);
  highlightRow(1);
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

async function handleUnitsCalc(){
  next.disabled = true;
  setOpaque("units");
  await animateUnitsTopToMiddle()
  await sleep(200)
  await animateRestUnitsToBottom()
  next.disabled = false
  updateWithStep(3)
  highlightColumn("tens");
}
async function handleTensCalc() {
  next.disabled = true;
  setOpaque("tens");
  await animateTensToMiddle();
  next.disabled = false;
  updateWithStep(4);
}
async function handleBorrowFly() {
  next.disabled = true;
  await animateCarryFromHundred()
  next.disabled = false
  updateWithStep(5);
}
async function handleRestTensCalc() {
  next.disabled = true;
  await animateTensCloneToMiddle()
  await sleep(200)
  await animateTensCloneToBottom()
  cloned = false;
  next.disabled = false;
  updateWithStep(6);
  highlightColumn("hundreds");
}

async function handleHundredsCalc() {
  next.disabled = true;
  setOpaque("hundreds");
  await animateHundredsOneByOne(1, 3);
  next.disabled = false;
  updateWithStep(7);
  highlightRow(3);
}
let stepQueue = [];

stepQueue.push(()=>{});
stepQueue.push(step1);


stepQueue.push(handleUnitsCalc);
stepQueue.push(handleTensCalc);
stepQueue.push(handleBorrowFly);
stepQueue.push(handleRestTensCalc);
stepQueue.push(handleHundredsCalc);
stepQueue.push(flyAnswer);

next.addEventListener("click", function () {
  step++;
  stepQueue[step]();
});
