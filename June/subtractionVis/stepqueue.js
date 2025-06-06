function step0() {
  showChangeButtons(1, false);
  showChangeButtons(2, false);
  next.disabled = false;
}
function step1() {
  showChangeButtons(1, true);
  next.disabled = true;
}
function bringUnitsToMiddle() {
  setOpaque("units");
  animateUnitsTopToMiddle();
}
function bringUnitsBottom() {
  animateRestUnitsToBottom();
}

function cloneUnitOverflow() {
  cloned = cloneAndTranslateElement("units");
}

function translateUnitOverflow() {
  animateElementToTarget(
    cloned,
    document.querySelector("#row-3 .ten-bar"),
    () => {
      paintActive("#row-3 .ten-bar", 1, "block-color-active");
      tenIndex = 1;
      cloned = null;
      updateDigitLabel("units");
      updateDigitLabel("tens");
    }
  );
}
function flyUnitText() {
  triggerFlyText("units", () => {
    setOpaque("tens");
  });
}

function bringTensTop() {
  animateTens1();
  setOpaque("tens");
}
function bringTensBottom() {
  animateTens2();
}
function cloneTensOverflow() {
  cloned = cloneAndTranslateElement("tens");
}
function translateTensOverflow() {
  animateElementToTarget(
    cloned,
    document.querySelector("#row-3 .hundred-block"),
    () => {
      paintActive("#row-3 .hundred-block", 1, "block-color-active");
      hundredIndex = 1;
      cloned = null;
      updateDigitLabel("tens");
      updateDigitLabel("hundreds");
    }
  );
}
function flyTensText() {
  triggerFlyText("tens", () => {
    setOpaque("hundreds");
  });
}

function bringHundredsBottom() {
  animateHundredsToTarget(
    document.querySelector("#row-2 .hundreds-cell>.actual-blocks"),
    hundredIndex
  );
}
function flyHundredsText() {
  triggerFlyText("hundreds", () => {
    setAllOpaque();
    highlightSum(3);
  });
}

let stepQueue = [];

const carryAfterUnits = Number(u1 + u2 > 10);

// fill step  queue

stepQueue.push(step0);
stepQueue.push(step1);

if (u1 >= u2) {
  stepQueue.push(bringUnitsToMiddle);
}
if(u1<u2){
  stepQueue.push(animateCarryFromTen);
  stepQueue.push(animateUnitsCloneToMiddle);
  stepQueue.push(settleCloneUnits);
}
if(u1!==u2){
  stepQueue.push(animateRestUnitsToBottom);
}
stepQueue.push(flyUnitText);

stepQueue.push(animateCarryFromHundred);

stepQueue.push(animateTensCloneToMiddle);

stepQueue.push(settleCloneTens);

stepQueue.push(animateRestTensToBottom);

stepQueue.push(flyTensText);

stepQueue.push(bringRestHundredsToBottom);

stepQueue.push(flyHundredsText);

next.addEventListener("click", function () {
  step++;
  stepQueue[step]();
});
