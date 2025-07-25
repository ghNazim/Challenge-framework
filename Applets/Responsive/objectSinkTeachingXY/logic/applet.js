const wrapper = document.getElementById("wrapper");
const shapeBox = document.getElementById("chooseShapeBox");
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");
const labelsOverlay = document.getElementById("labels");
const clip = document.getElementById("clip");
const jarWidth = 300,
  jarHeight = 300,
  x0 = 250,
  y0 = 450,
  dx = 80,
  dy = 40,
  initialWaterLevel = 200;
const objectHeight = 100;
const duration = 2000,
  objectStartX = 400,
  objectStartY = 50,
  objectEndY = 340,
  pivot = 230 - objectHeight;

let currentObject = null;
let step = 0;
const sinkData = {
  watermelon: {
    objectHeight: 100,
    objectStartX: 400,
    objectStartY: 10,
    objectEndY: 290,
    pivot: 80,
    waterLevel: 40,
  },
  pumpkin: {
    objectHeight: 100,
    objectStartX: 400,
    objectStartY: 10,
    objectEndY: 290,
    pivot: 80,
    waterLevel: 30,
  },
  coconut: {
    objectHeight: 200,
    objectStartX: 400,
    objectStartY: 10,
    objectEndY: 290,
    pivot: 80,
    waterLevel: 20,
  },
};
callWithStep(0);

function callWithStep(step) {
  if (step === 0) {
    prevButton.disabled = true;
    wrapper.style.display = "none";
    shapeBox.style.display = "flex";
    addContextSection(1);
  } else if (step === 1) {
    drawPrism(x0, y0, dx, dy, jarWidth, initialWaterLevel);
    drawBeaker(x0, y0, dx, dy, jarWidth, jarHeight);
    prevButton.disabled = false;
    wrapper.style.display = "block";
    shapeBox.style.display = "none";
    setUpStep1();
  } else if (step === 2) {
    removeLabels();
    hideVolumeFormula();
    nextButton.disabled = false;
    wrapper.style.transform = "translateX(0)";
  } else if (step === 3) {
    addContextSection(6);
    nextButton.disabled = true;
    prevButton.disabled = true;
    wrapper.style.transform = "translateX(26%)";

    setTimeout(() => {
      drawLabels();
      revealVolumeFormula(() => {
        prevButton.disabled = false;
      });
    }, 600);
  }
}
document.querySelectorAll(".shapeCard").forEach((card) => {
  card.addEventListener("click", () => {
    // Remove .selected from all cards
    nextButton.disabled = false;
    document
      .querySelectorAll(".shapeCard")
      .forEach((c) => c.classList.remove("selected"));

    // Add .selected to the clicked card
    card.classList.add("selected");
    currentObject = card.querySelector("img").dataset.name;
    onShapeSelection(currentObject);
  });
});
function handleNext() {
  step++;
  if (step === 2) {
    addContextSection(4);
    animateObjectPosition(
      currentObject,
      objectStartY,
      objectEndY,
      duration,
      pivot,
      sinkData[currentObject].waterLevel,
      objectHeight,
      [x0, y0, dx, dy, jarWidth]
    );
  } else {
    callWithStep(step);
  }
}
function handlePrev() {
  step--;
  callWithStep(step);
}
nextButton.addEventListener("click", handleNext);
prevButton.addEventListener("click", handlePrev);

function setUpStep1() {
  showSelectedObject(currentObject);
  setImagePos(currentObject, objectStartX, objectStartY);
  addContextSection(3);
}

function onShapeSelection(shape) {
  addContextSection(2);
  setVolumeFormula(shape);
  // get second .context-section element
  const contextSection = document.querySelectorAll(
    ".contextBox .context-section"
  )[1];
  const p = contextSection.querySelector("p");
  const text = "You have selected " + shape + " to find its volume.";
  p.textContent = text;
}

function drawLabels() {
  const d = 8;
  drawArrowSVG(
    labelsOverlay,
    { x: x0 + jarWidth + d, y: y0 + 5 },
    { x: x0 + jarWidth + dx + d, y: y0 - dy + 5 }
  );
  drawArrowSVG(
    labelsOverlay,
    { x: x0, y: y0 + d },
    { x: x0 + jarWidth, y: y0 + d }
  );
  writeTextSVG(
    labelsOverlay,
    { x: x0 + jarWidth / 2, y: y0 + 3.5 * d },
    "30 cm"
  );
  writeTextSVG(
    labelsOverlay,
    { x: x0 + jarWidth + dx / 2 + 2 * d, y: y0 + 5 },
    "20 cm",
    "start"
  );
  drawArrowSVG(
    labelsOverlay,
    { x: x0 - d, y: y0 - initialWaterLevel },
    {
      x: x0 - d,
      y: y0 - initialWaterLevel - sinkData[currentObject].waterLevel,
    }
  );
  writeTextSVG(
    labelsOverlay,
    {
      x: x0 - 4 * d,
      y: 5 + y0 - initialWaterLevel - sinkData[currentObject].waterLevel / 2,
    },
    sinkData[currentObject].waterLevel / 10 + " cm"
  );
  labelsOverlay.style.opacity = "1";
}

function removeLabels() {
  labelsOverlay.replaceChildren();
  labelsOverlay.style.opacity = "0";
}
