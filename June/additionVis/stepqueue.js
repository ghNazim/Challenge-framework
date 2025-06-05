function step0() {
  showChangeButtons(1, false);
  showChangeButtons(2, false);
  next.disabled = false;
}
function step1() {
  showChangeButtons(1, true);
  next.disabled = true;
}
function bringUnitsTop() {
  animateUnits1();
  setOpaque("units");
}
function bringUnitsBottom() {
  animateUnits2();
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
  triggerFlyText("units");
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
  triggerFlyText("tens");
}
function bringHundredsTop() {
  setOpaque("hundreds");
  animateHundredsToTarget(
    document.querySelector("#row-1 .hundreds-cell>.actual-blocks"),
    hundredIndex
  );
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

const u1 = questions[questionIndex][0][2];
const u2 = questions[questionIndex][1][2];
const u3 = questions[questionIndex][2][2];
const t1 = questions[questionIndex][0][1];
const t2 = questions[questionIndex][1][1];
const t3 = questions[questionIndex][2][1];
const h1 = questions[questionIndex][0][0];
const h2 = questions[questionIndex][1][0];
const h3 = questions[questionIndex][2][0];

const carryAfterUnits = Number(u1 + u2 > 10);

// fill step  queue

stepQueue.push(step0);
stepQueue.push(step1);

if (u1 > 0) {
  stepQueue.push(bringUnitsTop);
}
if (u2 > 0) {
  stepQueue.push(bringUnitsBottom);
}
if (u1 + u2 >= 10) {
  stepQueue.push(cloneUnitOverflow);
  if (u1 + u2 > 10) {
    stepQueue.push(bringUnitsBottom);
  }
  stepQueue.push(translateUnitOverflow);
}

stepQueue.push(flyUnitText);

if (!carryAfterUnits) {
  if (t1 > 0) {
    stepQueue.push(bringTensTop);
  }
  if (t2 > 0) {
    stepQueue.push(bringTensBottom);
  }
  if (t1 + t2 >= 10) {
    stepQueue.push(cloneTensOverflow);
    if (t1 + t2 > 10) {
      stepQueue.push(bringTensBottom);
    }
    stepQueue.push(translateTensOverflow);
  }
} else {
  if (t1 > 0) {
    stepQueue.push(bringTensTop);
  }
  if (t1 === 9) {
    stepQueue.push(cloneTensOverflow);
    if (t2 > 0) {
      stepQueue.push(bringTensBottom);
    }
    stepQueue.push(translateTensOverflow);
  } else {
    if (t2 > 0) {
      stepQueue.push(bringTensBottom);
    }
    if (t1 + t2 >= 9) {
      stepQueue.push(cloneTensOverflow);
      if (t1 + t2 > 9) {
        stepQueue.push(bringTensBottom);
      }
      stepQueue.push(translateTensOverflow);
    }
  }
}

stepQueue.push(flyTensText);

if (h1 > 0) {
  stepQueue.push(bringHundredsTop);
}
if (h2 > 0) {
  stepQueue.push(bringHundredsBottom);
}
stepQueue.push(flyHundredsText);


next.addEventListener("click", function () {
  step++;
  stepQueue[step]();
});