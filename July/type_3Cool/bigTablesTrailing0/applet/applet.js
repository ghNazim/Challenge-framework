// --- Applet State ---
let currentStep = 1;
const totalSteps = 7;

// --- DOM Elements ---
const staticContainer = document.getElementById("static-container");
const dynamicContainer = document.getElementById("dynamic-container");
const dynamicTableContainer = document.getElementById(
  "dynamic-table-container"
);
const horizontalSlider = document.getElementById("horizontal-slider");
const verticalSlider = document.getElementById("vertical-slider");
const nextButtonApplet = document.getElementById("next-button"); // Renamed to avoid conflict with global nextButton

// --- Functions ---

/**
 * Highlights only the trailing zeros that were added.
 * @param {number | string} num - The number to format.
 * @param {number} zeroCount - The number of trailing zeros to highlight.
 * @returns {string} HTML string with specific zeros highlighted.
 */
function highlightZeros(num, zeroCount) {
  // If no zeros should be highlighted, just return the number as a string
  if (zeroCount === 0) {
    return String(num);
  }

  const numStr = String(num);
  let result = "";
  let highlighted = 0;

  // Iterate backwards from the end of the number string
  for (let i = numStr.length - 1; i >= 0; i--) {
    // Highlight a zero only if we haven't reached our limit yet
    if (numStr[i] === "0" && highlighted < zeroCount) {
      result = `<span class="zero-highlight">${numStr[i]}</span>` + result;
      highlighted++;
    } else {
      result = numStr[i] + result;
    }
  }
  return result;
}

/**
 * Creates and displays a static multiplication table in a column.
 * @param {number} baseNum - The number for the multiplication table (e.g., 1, 10, 100).
 * @returns {HTMLElement} The column element with the table.
 */
function createStaticTableColumn(baseNum,till=10) {
  const column = document.createElement("div");
  column.classList.add("table-column");
  let content = "";

  // This calculates how many "extra" zeros the base number has (e.g., 10 has 1, 200 has 2)
  let zeroCount = 0;
  if (baseNum >= 10) {
    let temp = baseNum;
    while (temp % 10 === 0) {
      temp /= 10;
    }
    zeroCount = String(baseNum).length - String(temp).length;
  }

  for (let i = 1; i <= till; i++) {
    const result = baseNum * i;
    // Pass the calculated zeroCount to the highlight function
    const baseNumFormatted = highlightZeros(baseNum, zeroCount);
    const resultFormatted = highlightZeros(result, zeroCount);
    // Each part of the equation is now in its own span for better styling
    const entry = `<div class="table-entry">
                        <span>${baseNumFormatted}</span>
                        <span>&times;</span>
                        <span>${i}</span>
                        <span>=</span>
                        <span>${resultFormatted}</span>
                   </div>`;
    content += entry;
  }
  column.innerHTML = content;
  return column;
}

/**
 * Generates and displays the dynamic multiplication table.
 * @param {number} baseNum - The base number (from vertical slider).
 * @param {number} zeroCount - The number of zeros (from horizontal slider).
 */
function generateDynamicTable(baseNum, zeroCount) {
  updateHsliderLabels();
  const multiplier = Math.pow(10, zeroCount);
  const tableNum = baseNum * multiplier;
  let content = "";
  for (let i = 1; i <= 10; i++) {
    const result = tableNum * i;
    // Pass the slider's zeroCount to the highlight function
    const tableNumFormatted = highlightZeros(tableNum, zeroCount);
    const resultFormatted = highlightZeros(result, zeroCount);
    // Each part of the equation is now in its own span for better styling
    const entry = `<div class="table-entry">
                        <span>${tableNumFormatted}</span>
                        <span>&times;</span>
                        <span>${i}</span>
                        <span>=</span>
                        <span>${resultFormatted}</span>
                   </div>`;
    content += entry;
  }
  dynamicTableContainer.innerHTML = content;
  // Animate the newly added zeros with a pop-in effect
}

/**
 * Main function to control the applet's state and display for each step.
 * @param {number} step - The step number to display.
 */
function goToStep(step) {
  currentStep = step;

  // Default states
  staticContainer.style.display = "none";
  dynamicContainer.style.display = "none";
  nextButtonApplet.disabled = false;
  gsap.set([horizontalSlider.parentElement, verticalSlider.parentElement], {
    autoAlpha: 0,
  });
  hideDragFtue();

  const instructionKey = `step${step}`;
  updateInstruction(
    leftInstructions[instructionKey]?.line1,
    leftInstructions[instructionKey]?.line2
  );

  switch (step) {
    case 1:
      setJAXpose("normal");
      staticContainer.style.display = "flex";
      staticContainer.innerHTML = "";
      staticContainer.appendChild(createStaticTableColumn(1,4));
      staticContainer.appendChild(createStaticTableColumn(10,4));
      break;

    case 2:
      setJAXpose("pointing");
      dynamicContainer.style.display = "flex";
      gsap.to(horizontalSlider.parentElement, { autoAlpha: 1, duration: 0.5 });
      nextButtonApplet.disabled = true;
      horizontalSlider.value = 0;
      verticalSlider.value = 1;
      generateDynamicTable(1, 0);
      showDragFtue(horizontalSlider);
      break;

    case 3:
      setJAXpose("normal");
      staticContainer.style.display = "flex";
      staticContainer.innerHTML = "";
      staticContainer.appendChild(createStaticTableColumn(1));
      staticContainer.appendChild(createStaticTableColumn(10));
      staticContainer.appendChild(createStaticTableColumn(100));
      break;

    case 4:
      setJAXpose("pointing");
      dynamicContainer.style.display = "flex";
      gsap.to(horizontalSlider.parentElement, { autoAlpha: 1, duration: 0.5 });
      nextButtonApplet.disabled = true;
      horizontalSlider.value = 0;
      verticalSlider.value = 2;
      generateDynamicTable(2, 0);
      showDragFtue(horizontalSlider);
      break;

    case 5:
      setJAXpose("normal");
      staticContainer.style.display = "flex";
      staticContainer.innerHTML = "";
      staticContainer.appendChild(createStaticTableColumn(2));
      staticContainer.appendChild(createStaticTableColumn(20));
      staticContainer.appendChild(createStaticTableColumn(200));
      break;

    case 6:
      setJAXpose("pointing");
      dynamicContainer.style.display = "flex";
      verticalSlider.parentElement.style.display = "flex";
      gsap.to([horizontalSlider.parentElement, verticalSlider.parentElement], {
        autoAlpha: 1,
        duration: 0.5,
      });
      nextButtonApplet.disabled = true;
      horizontalSlider.value = 0;
      verticalSlider.value = 1;
      generateDynamicTable(1, 0);
      showDragFtue(horizontalSlider);
      showDragFtue(verticalSlider);

      break;

    case 7:
      setJAXpose("normal");
      hideDragFtue(0)
      hideDragFtue(1)
      staticContainer.style.display = "flex";
      staticContainer.style.justifyContent = "center";
      staticContainer.style.alignItems = "center";
      staticContainer.innerHTML = `<div style="font-size: 1.5rem; text-align: center; max-width: 80%;">${leftInstructions.summary}</div>`;
      break;

    case 8:
      triggerFullScreenOverlay(true);
      confettiBurst();
      playSound("congrats");
      break;
  }
}

/**
 * Handles slider input changes.
 */
function handleSliderChange() {
  playSound("click");
  const baseNum = parseInt(verticalSlider.value);
  const zeroCount = parseInt(horizontalSlider.value);
  generateDynamicTable(baseNum, zeroCount);

  if (currentStep === 2 || currentStep === 4 || currentStep === 6) {
    nextButtonApplet.disabled = false;
  }
}

// --- Event Listeners ---
nextButtonApplet.addEventListener("click", () => {
  playSound("click");
  if (currentStep < totalSteps + 1) {
    goToStep(currentStep + 1);
  }
});

horizontalSlider.addEventListener("input", () => {
  hideDragFtue(0)
  handleSliderChange();
  gsap.from(dynamicTableContainer.querySelectorAll(".zero-highlight"), {
    duration: 0.3,
    opacity: 0,
    scale: 0.5,
    ease: "back.out(1.7)",
    stagger: 0.05,
    onComplete: () => {},
  });
});
verticalSlider.addEventListener("input", ()=>{
  hideDragFtue(1);
  handleSliderChange();
});

// --- Initial Load ---
function initialize() {
  // Hide the previous button as it's not used in this applet's flow
  document.getElementById("previous-button").style.display = "none";
  document.getElementById("stepCounter").style.display = "none";

  goToStep(1);
  setJAXpose("normal");
}

const updateHsliderLabels = function (){
  const labels = document.querySelectorAll('.slider-labels.horizontal span');
  const num = verticalSlider.value
  // const zeroes = horizontalSlider.value
  // const finalNum = num * 10 ** zeroes
labels.forEach((span, index) => {
  span.textContent = num * 10 ** (index);
});

}

initialize();
