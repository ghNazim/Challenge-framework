function enableButton(id, enable) {
  const button = document.getElementById(id);
  button.disabled = !enable;
}

function childWithCustomAttribute(
  parentElement,
  attributeName,
  attributeValue
) {
  const selector = `[${attributeName}="${attributeValue}"]`;
  const child = parentElement.querySelector(selector);
  return child;
}
function updateHeader() {
  const progressPoints = document.querySelectorAll(".steps .step");
  const fill = document.querySelector(".progress-fill");
  fill.style.width = `${step * 25}%`;
  for (let i = 0; i < progressPoints.length; i++) {
    if (i < step) {
      progressPoints[i].classList.add("completed");
    } else {
      progressPoints[i].classList.remove("completed");
    }
  }
}

const setGlobalSubstep = function () {
  if (step == 1) {
    currentSubstep = comprehendSubStep;
    totalSubsteps = questioninfo.length;
  } else if (step == 2) {
    
    currentSubstep = currentQuestionIndex + 1;
    totalSubsteps = connectQuestions.length;
  }
};

const updateFooter = function () {
  const note = document.querySelector(".teacher-note");
  const status = document.querySelector(".step-status");
  const count = document.querySelector(".step-count");

  note.innerHTML = "<strong>Teacher Notes:</strong> " + teacherNotes[step - 1];
  status.textContent = stepNames[step - 1];
  if (currentSubstep > totalSubsteps) {
    count.textContent = "";
  } else {
    count.textContent = `Step: ${currentSubstep} of ${totalSubsteps}`;
  }
};
const updateLeftTitle = function () {
  const title = document.querySelector(".info-title");
  title.textContent = leftTitles[step - 1];
};
const updateLeftTextArea = function () {
  const leftDivs = document.querySelectorAll("#equationArea > div");
  leftDivs.forEach((div) => {
    div.classList.add("hidden");
  });
  leftDivs[step - 1].classList.remove("hidden");
};
const updateRightArea = function () {
  const rightDivs = document.querySelectorAll("#diagramArea > div");
  rightDivs.forEach((div) => {
    div.classList.add("hidden");
  });
  rightDivs[step - 1].classList.remove("hidden");
};
const updatesWithStep = function () {
  updateHeader();
  updateLeftTitle();
  updateLeftTextArea();
  updateRightArea();
};
