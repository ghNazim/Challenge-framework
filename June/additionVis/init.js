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
}

initializeSteppers(handleDigitUpdate);

function handleSetClick(row) {
  const q = questions[questionIndex][row];
  const a = nums[row];
  const hundreds = a[0] === q[0],
    tens = a[1] === q[1],
    units = a[2] === q[2];
  const correct = hundreds && tens && units;
  console.log("correct",correct);
  if (!correct) {
    return;
  }
  showChangeButtons(row+1, false);
  if (row === 0) {
    showChangeButtons(2, true);
  }
  else{
    document.getElementById("nextButton").disabled = false;
  }
}

document.querySelectorAll(".setButton").forEach((button, index) => {
  button.addEventListener("click", () => {
    handleSetClick(index);
  });
});
