function enableButton(id, enable) {
  const button = document.getElementById(id);
  button.disabled = !enable;
}
function returnIndexes(rightGroups, index) {
  let i = 0,
    j = index;
  while (i < rightGroups.length) {
    j -= rightGroups[i];
    if (j < 0) {
      return [i, j + rightGroups[i]];
    }
    i++;
  }
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
function animateIn(element, type) {
  if (!element) return;
  const transformMap = {
    left: "translateX(-10px)",
    right: "translateX(10px)",
    top: "translateY(-10px)",
    bottom: "translateY(10px)",
  }
  element.animate(
    [
      { opacity: 0, transform: transformMap[type] },
      { opacity: 1, transform: "translateY(0)" },
    ],
    {
      duration: 300,
      delay: 0,
      easing: "ease-in-out",
      fill: "forwards",
    }
  );
}

function updateHeader() {
  const progressPoints = document.querySelectorAll(".steps .step");
  const fill = document.querySelector(".progress-fill");
  fill.style.width = `${Math.min(step,3) * 25}%`;
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
  else if(step == 3){
    currentSubstep = currentComputeStep+1;
    totalSubsteps = totalComputeSteps;
  }
  else if(step == 4){
    currentSubstep = 1;
    totalSubsteps = 2;
  }
};
function updateTeacherNotes() {
  let text,i=step-1,j=currentSubstep-1;
  if(j<0){
    j=0;
  }
  
    text = teacherNotes[i][j];
    if(!text) return;
    text = text.trim();
  
  
  if(!text) return;
  const note = document.querySelector(".teacher-note");
  note.innerHTML = "<strong>Teacher Notes:</strong> " + text;
}
const updateFooter = function () {
  updateTeacherNotes();
  const status = document.querySelector(".step-status");
  const count = document.querySelector(".step-count");

  
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
  if(step==4){
    return;
  }
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
