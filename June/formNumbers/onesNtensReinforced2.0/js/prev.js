// Array to store undo functions corresponding to each step in stepQ
let undoQ = [];

// Undo for atStep1 (progress 0 in stepQ)
function forStep0() {
  updateInstructions("pink_jar");
  nextButton.disabled = false; // Re-enable next button
  plusBtn.style.pointerEvents = "none";
  plusBtn.classList.remove("pulse-highlight");
  plusBtn.removeEventListener("click", clickPLusFirstTime);
  prevButton.disabled = true;
}
undoQ.push(forStep0);
function forStep1() {
  plusBtn.style.pointerEvents = "auto";
  plusBtn.classList.add("pulse-highlight");
  plusBtn.addEventListener("click", clickPLusFirstTime);
  unitNumberTab.style.color = "transparent";
  updateInstructions("plus");
  count = 0;
  render();
  unitTextDisplay.textContent = "";
  highlightUnitTextDisplay(false);
  highlightUnitNumberTab(false);
  nextButton.disabled = true;
}
undoQ.push(forStep1);

function forStep2() {
  plusBtn.addEventListener("click", clickPlusSecondTime);
  setJaxPose("normal")
  wiggle(false);
  count = 1;
  render();
  updateInstructions("top_num");
  highlightUnitNumberTab(true);
  unitNumberTab.style.color = "white";
  nextButton.disabled = false;
  showStatement(-1);
  highlightUnitTextDisplay(false);
  unitTextDisplay.textContent = "";
  speakerButtonUnit.style.display = "none";
  plusBtn.style.pointerEvents = "none";
}
undoQ.push(forStep2);

function forStep3() {
  setJaxPose("normal");
  unitNumberTab.classList.remove("outlined");
  highlightUnitTextDisplay(true);
  updateInstructions("bottom_num");
  speakerButtonUnit.style.display = "flex";
  unitTextDisplay.style.color = "white";
  nextButton.disabled = true;
  plusBtn.style.pointerEvents = "auto";
  showComment("keep_adding");
  wiggle(false);
  count = 1;
  render();
  plusBtn.addEventListener("click", clickPlusSecondTime);
}
undoQ.push(forStep3);

function forStep4() {
  plusBtn.style.pointerEvents = "auto"; // Re-enable controls if they were enabled before this step
  minusBtn.style.pointerEvents = "auto";
  unitWidget.classList.add("shifted"); // Re-shift unit widget
  const tenWidget = document.getElementById("ten-widget");
  tenWidget.style.visibility = "hidden"; // Hide ten widget
  showComment("add_jar") // Hide the statement
  updateInstructions("max_reached"); // Revert to instruction before this step
  setJaxPose("thinking"); // Revert Jax pose if changed by previous step
  setNextText("add_jar"); // Revert button text
}
undoQ.push(forStep4);

function forStep5() {
  showDirArrow(false); // Hide arrow
  nextButton.disabled = false; // Re-enable next button
  showStatement(1); // Show statement from addTenContainer
  updateInstructions("blue_jar"); // Revert instruction
  document
    .querySelectorAll(".ten-bar .unit-box")
    .forEach((box) => (box.style.visibility = "hidden"));
  document
    .querySelectorAll(".count-square")
    .forEach((box) => (box.style.visibility = "visible"));
  wiggle();
  unitNumberTab.classList.add("outlined");
  unitNumberTab.textContent = "X";
  unitTextDisplay.textContent = "Ten Ones";
  tenNumberTab.textContent = "0";
  tenTextDisplay.textContent = "Zero Tens";
  
  leftDir.onclick = onLeftDirClick1;
}
undoQ.push(forStep5);

function forStep6() {
  showStatement(1); // Revert to statement from blankStepAfterAddingJar
  showDirArrow("left"); // Revert to left arrow
  updateInstructions("move_left"); // Revert instruction
  nextButton.disabled = false; // Re-enable next button
  document
    .querySelectorAll(".ten-bar .unit-box")
    .forEach((box) => (box.style.visibility = "hidden"));
  document
    .querySelectorAll(".count-square")
    .forEach((box) => (box.style.visibility = "visible"));
    wiggle();
    unitNumberTab.classList.add("outlined");
    unitNumberTab.textContent = "X";
    unitTextDisplay.textContent = "Ten Ones";
    tenNumberTab.textContent = "0";
    tenTextDisplay.textContent = "Zero Tens";
    leftDir.onclick = onLeftDirClick1;
    nextButton.disabled = true;
}
undoQ.push(forStep6);

function forStep7() {
  showStatement(2); // Revert to statement from moveRight
  showDirArrow("right"); // Revert to right arrow
  updateInstructions("move_right"); // Revert instruction
  nextButton.disabled = false; // Re-enable next button
  document
    .querySelectorAll(".ten-bar .unit-box")
    .forEach((box) => (box.style.visibility = "visible"));
  document
    .querySelectorAll(".count-square")
    .forEach((box) => (box.style.visibility = "hidden"));
  wiggle(false);
  unitNumberTab.classList.remove("outlined");
  unitNumberTab.textContent = "0";
  unitTextDisplay.textContent = numberToText[0]+" Ones";
  tenNumberTab.textContent = "1";
  tenTextDisplay.textContent = "One Ten";
  nextButton.disabled = true;
}
undoQ.push(forStep7);


// Handle Previous button click
prevButton.addEventListener("click", handlePrev);

function handlePrev() {
  playAudio("click");
  if (progress > 0) {
    progress--; // Go back to the previous step's index
    updateStepCounter(progress); // Update counter to show previous step
    undoQ[progress](); // Execute the undo action for the step we just moved away from (i.e., the state we are returning to)
  }
}
