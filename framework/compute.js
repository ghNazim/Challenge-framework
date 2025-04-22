const flat = computeSteps.map((i) => i.steps).flat(),
  rightGroups = computeSteps.map((i) => i.steps.length);
const leftSteps = flat.map((i) => i.left),
  rightSteps = flat.map((i) => i.right),
  descriptions = flat.map((i) => i.description);
let currentComputeStep = 0,
  totalComputeSteps = flat.length;
function addLeftCalcTile(text) {
  const leftCompute = document.getElementById("leftCompute");

  let infoBlock = document.createElement("div");
  infoBlock.className = "info-block";

  const content = document.createElement("p");
  content.className = "info-text";
  content.textContent = text;
  infoBlock.appendChild(content);
  leftCompute.appendChild(infoBlock);
  leftCompute.scrollTop = leftCompute.scrollHeight;
  requestAnimationFrame(() => {
    infoBlock.classList.add("show");
  });
  requestAnimationFrame(() => {
    content.classList.add("show");
  });
}
function removeLastCalcTile() {
  // Remove the last appended info-block from the leftCompute
  const leftCompute = document.getElementById("leftCompute");
  const lastInfoBlock = leftCompute.querySelector(".info-block:last-child");
  if (lastInfoBlock) {
    leftCompute.removeChild(lastInfoBlock);
  }

  // Update the border of the last tile
  borderTheLastTile();
}

function borderTheLastTile() {
  const tiles = document.querySelectorAll("#leftCompute .info-block");
  if(tiles.length === 0) return
  if (tiles.length > 1) {
    tiles[tiles.length - 2].classList.remove("bordered");
  }
  tiles[tiles.length - 1].classList.add("bordered");
}

function updateFormulaBox(formulaText) {
  const formula = document.querySelector("#formulaBox .formula");
  formula.textContent = formulaText;
  animateIn(formula, "right");
}

function updateSolutionDescription(text) {
  const description = document.querySelector("#solutionBox .description");
  description.textContent = text;
}

function freshWriteInSolutionBox(text) {
  const formula = document.querySelector("#solutionBox .formula");
  formula.textContent = text;
  animateIn(formula, "right");
}
function apppendInSolutionBox(text) {
  const formula = document.querySelector("#solutionBox .formula");
  const span = document.createElement("span");
  span.textContent = text;
  formula.appendChild(span);
  void span.offsetWidth;
  requestAnimationFrame(() => {
    span.classList.add("show");
  });
}
function updateCompute(i) {
  console.log("inside updateCompute");
  if (i >= totalComputeSteps) {
    return;
  }
  addLeftCalcTile(leftSteps[i]);
  borderTheLastTile();
  updateSolutionDescription(descriptions[i]);
  const [x, y] = returnIndexes(rightGroups, i);
  if (y === 0) {
    updateFormulaBox(computeSteps[x].formula);
    freshWriteInSolutionBox(rightSteps[i]);
  } else {
    apppendInSolutionBox(rightSteps[i]);
  }
}

function handleNextInCompute() {
  if (currentComputeStep >= totalComputeSteps - 1) {
    step++;
    updatesWithStep();
    return;
  }
  currentComputeStep++;
  updateCompute(currentComputeStep);
  if (currentComputeStep === totalComputeSteps - 1) {
    greenFix();
  }
}

function greenFix() {
  const lastInfoBlock = document.querySelector(
    "#leftCompute .info-block:last-of-type"
  );
  const formula = document.querySelector("#solutionBox .formula");

  lastInfoBlock.classList.add("greenbg");
  formula.classList.add("greentext");
}

function removeGreenFix() {
  const lastInfoBlock = document.querySelector(
    "#leftCompute .info-block:last-of-type"
  );
  const formula = document.querySelector("#solutionBox .formula");

  lastInfoBlock.classList.remove("greenbg");
  formula.classList.remove("greentext");
}

function handlePrevInCompute() {
  if (currentComputeStep <= 0) {
    removeLastCalcTile();
    // If we're at the first step, there's nothing to go back to
    step--;
    updatesWithStep();
    showConnectCard(true);
    return;
  }
  if (currentComputeStep === totalComputeSteps - 1) {
    removeGreenFix();
  }
  removeLastCalcTile();
  const [x, y] = returnIndexes(rightGroups, currentComputeStep);
  // Decrement the currentComputeStep to move to the previous step
  currentComputeStep--;
  // Update the solution description to the previous step
  updateSolutionDescription(descriptions[currentComputeStep]);

  // Update the formula and solution box

  if (y === 0) {
    updateFormulaBox(computeSteps[x - 1].formula);
    fullWriteInSolutionBox(x - 1);
  } else {
    // Remove the last appended span in the solution box
    const formula = document.querySelector("#solutionBox .formula");
    const lastSpan = formula.querySelector("span:last-child");
    if (lastSpan) {
      console.log("last span", lastSpan);
      formula.removeChild(lastSpan);
    }
  }
}

function fullWriteInSolutionBox(x) {
  const formula = document.querySelector("#solutionBox .formula");
  const textArray = computeSteps[x].steps.map((i) => i.right);
  let text = textArray[0];
  for (let i = 1; i < textArray.length; i++) {
    text = text + `<span class="show">${textArray[i]}</span>`;
  }
  formula.innerHTML = text;
}
