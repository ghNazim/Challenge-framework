function initializeSteppers(onDigitUpdateCallback) {
  // Select all stepper buttons (both increase and decrease)
  const stepperButtons = document.querySelectorAll(".stepper-btn");

  stepperButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Find the parent .digit-interactive-area
      const interactiveArea = this.closest(".digit-interactive-area");

      // Find the .digit-label within this interactive area
      const digitLabel = interactiveArea.querySelector(".digit-label");

      const key = interactiveArea.getAttribute("data-key");

      const [row, place] = key.split(",").map(Number);

      let currentValue = parseInt(digitLabel.textContent, 10);
      if (isNaN(currentValue)) {
        currentValue = 0; // Default to 0 if parsing fails
      }

      // Determine if it's an increase or decrease button
      const isIncrease = this.classList.contains("increase-btn");

      // --- Determine Min/Max values ---
      // For this example, we'll assume digits are 0-9.
      // You might want different limits for hundreds (e.g., 0-9 or more).
      // For simplicity, all are 0-9 here.
      const minValue = 0;
      const maxValue = 9; // Max for a single digit place

      if (isIncrease) {
        if (currentValue < maxValue) {
          currentValue++;
        }
      } else {
        // Decrease button
        if (currentValue > minValue) {
          currentValue--;
        }
      }

      // Update the digit label's text
      digitLabel.textContent = currentValue;

      // Call the provided callback function with the details
      onDigitUpdateCallback(row, place, currentValue);
      if(place===0){
        rearrangeHundreds(row+1);
      }
    });
  });
}

function handleDigitUpdate(rowId, place, newValue) {
  nums[rowId][place] = newValue;
  paintActive(blockClasses[rowId][place], newValue, "block-color-active");
  const col = place===0 ? "hundreds" : place===1 ? "tens" : "units";
  const el = document.querySelector(
    `#row-${rowId + 1} .${col}-cell .actual-blocks`
  );
  el.classList.remove("wrong-highlight");
  el.classList.remove("vibrate-x");
}

initializeSteppers(handleDigitUpdate);

function handleSetClick(row) {
  const q = questions[questionIndex][row];
  const a = nums[row];
  const hundreds = a[0] === q[0],
    tens = a[1] === q[1],
    units = a[2] === q[2];
  const correct = hundreds && tens && units;
  if (!correct) {
    playAudio("wrong")
    setJAXpose("sad");
    if(!units){
      const el = document.querySelector(`#row-${row+1} .units-cell .actual-blocks`);
      vibrateElement(el)
    }
    if(!tens){
      const el = document.querySelector(
        `#row-${row+1} .tens-cell .actual-blocks`
      );
      vibrateElement(el);
    }
    if(!hundreds){
      const el = document.querySelector(
        `#row-${row+1} .hundreds-cell .actual-blocks`
      );
      vibrateElement(el);
      
    }
    return;
  }
  playAudio("correct");
  setJAXpose("happy");
  showChangeButtons(row+1, false);
  if (row === 0) {
    // showChangeButtons(2, true);
    // highlightRow(2);
    // updateWithStep("set2")
    document.getElementById("nextButton").disabled = false;
    highlightColumn("units");
    highlightSum(0);
    updateWithStep("units1");
  }
  // else{
  //   document.getElementById("nextButton").disabled = false;
  //   highlightColumn("units");
  //   highlightSum(0);
  //   updateWithStep("units1")
  // }
}

document.querySelectorAll(".setButton").forEach((button, index) => {
  button.addEventListener("click", () => {
    handleSetClick(index);
  });
});


function fillCalculationDisplay(questionData) {

  const firstNumData = questionData[0]; // [2, 9, 5]
  const secondNumData = questionData[1]; // [2, 4, 7]
  const sumData = questionData[2]; // [5, 4, 2]

  // --- Populate the first number ---
  const firstNumWrapper = document.querySelector(".calc-num-wrapper");
  if (firstNumWrapper) {
    firstNumWrapper.querySelector(".hundreds-place").textContent =
      firstNumData[0];
    firstNumWrapper.querySelector(".tens-place").textContent = firstNumData[1];
    firstNumWrapper.querySelector(".units-place").textContent = firstNumData[2];
  } else {
    console.error("Could not find the .calc-num-wrapper element.");
  }

  // --- Populate the second number ---
  const secondNumOpWrapper = document.querySelector(".calc-op-wrapper");
  if (secondNumOpWrapper) {
    // Assuming the operator is always '+' as per the HTML.
    // If the operator can change, you might need to pass it in the data as well.
    // secondNumOpWrapper.querySelector("span:first-child").textContent = newOperator;

    secondNumOpWrapper.querySelector(".hundreds-place").textContent =
      secondNumData[0];
    secondNumOpWrapper.querySelector(".tens-place").textContent =
      secondNumData[1];
    secondNumOpWrapper.querySelector(".units-place").textContent =
      secondNumData[2];
  } else {
    console.error("Could not find the .calc-op-wrapper element.");
  }

  // --- Populate the sum ---
  const sumWrapper = document.querySelector(".calc-sum-wrapper");
  if (sumWrapper) {
    sumWrapper.querySelector(".hundreds").textContent = sumData[0];
    sumWrapper.querySelector(".tens").textContent = sumData[1];
    sumWrapper.querySelector(".units").textContent = sumData[2];
  } else {
    console.error("Could not find the .calc-sum-wrapper element.");
  }
}




function updateWithStep(key){
  
  const data = stepsInfo[key];
  const ins = document.querySelector(".speech-bubble>p");
  const next = document.getElementById("nextButton");
  ins.textContent = data.instruction;
  next.textContent = data.buttonText;
}
