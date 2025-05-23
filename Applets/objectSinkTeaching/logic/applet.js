const wrapper = document.getElementById("wrapper");
const shapeBox = document.getElementById("chooseShapeBox");
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");
const jarWidth = 300,
  jarHeight = 300,
  x0 = 250,
  y0 = 400,
  dx = 80,
  dy = 40,
  initialWaterLevel = 200;
const objectHeight = 100;
const duration = 2000,
  objectStartX = 400,
  objectStartY = 10,
  objectEndY = 290,
  pivot = 80,
  waterLevel = objectHeight / 2;
let currentObject = null;
let step = 0;
const sinkData = {
  watermelon: {
    objectHeight: 100,
    objectStartX: 400,
    objectStartY: 10,
    objectEndY: 290,
    pivot: 80,
    waterLevel: 50,
  },
  pumpkin: {
    objectHeight: 100,
    objectStartX: 400,
    objectStartY: 10,
    objectEndY: 290,
    pivot: 80,
    waterLevel: 40,
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
    drawPrism(initialWaterLevel);
    drawBeaker();
    prevButton.disabled = false;
    wrapper.style.display = "block";
    shapeBox.style.display = "none";
    setUpStep1();
  } 
  else if(step===2){
    hideVolumeFormula();
    nextButton.disabled = false;
    wrapper.style.transform = "translateX(0)";
  }
  
  else if (step === 3) {
    addContextSection(5);
    nextButton.disabled = true;
    prevButton.disabled = true;
    wrapper.style.transform = "translateX(-30%)";
    setTimeout(() => {
      revealVolumeFormula(()=>{
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
    animateObjectPosition(
      currentObject,
      objectStartY,
      objectEndY,
      duration,
      pivot,
      sinkData[currentObject].waterLevel,
      objectHeight
    );
  }
  else{
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
  // get second .context-section element
  const contextSection = document.querySelectorAll(
    ".contextBox .context-section"
  )[1];
  const p = contextSection.querySelector("p");
  const text = "You have selected " + shape + " to find its volume.";
  p.textContent = text;
}
