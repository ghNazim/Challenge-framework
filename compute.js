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

function borderTheLastTile() {
  const tiles = document.querySelectorAll("#leftCompute .info-block");
  if (tiles.length > 1) {
    tiles[tiles.length - 2].classList.remove("bordered");
  }
  tiles[tiles.length - 1].classList.add("bordered");
}

function updateFormulaBox(formulaText) {
  const formula = document.querySelector("#formulaBox .formula");
  formula.textContent = formulaText;
}

function updateSolutionDescription(text) {
  const description = document.querySelector("#solutionBox .description");
  description.textContent = text;
}

function freshWriteInSolutionBox(text) {
  const formula = document.querySelector("#solutionBox .formula");
  formula.textContent = text;
}
function apppendInSolutionBox(text) {
  const formula = document.querySelector("#solutionBox .formula");
  const span = document.createElement("span");
  span.textContent = text;
  formula.appendChild(span);
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
  if (currentComputeStep >= totalComputeSteps-1) {
    step++;
    updatesWithStep();
    return;
  }
  currentComputeStep++;
  updateCompute(currentComputeStep);
  if(currentComputeStep === totalComputeSteps-1){
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
