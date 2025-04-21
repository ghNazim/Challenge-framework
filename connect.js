let connectSubstep = 0;
let currentQuestionIndex = 0;
const updateInfoConnect = function (i) {
  if (i > connectQuestions.length) {
    return;
  }
  const data = connectQuestions[i],
    leftConnect = document.getElementById("leftConnect");

  let infoBlock = document.createElement("div");
  infoBlock.className = "info-block";

  const heading = document.createElement("p");
  heading.className = "info-heading";
  heading.textContent = data.header;
  infoBlock.appendChild(heading);

  const content = document.createElement("p");
  content.className = "info-text";
  content.textContent = data.left;
  infoBlock.appendChild(content);
  leftConnect.appendChild(infoBlock);
  fadePastInfo(i);
  requestAnimationFrame(() => {
    infoBlock.classList.add("show");
  });
  requestAnimationFrame(() => {
    content.classList.add("show");
  });
};
const fadePastInfo = function (cur) {
  const infosInConnect = document.querySelectorAll("#leftConnect .info-block");
  for (let i = 0; i < cur; i++) {
    infosInConnect[i].classList.add("past");
  }
  infosInConnect[cur].classList.remove("past");
};
const replacePostSolve = function (i) {
  const infosInConnect = document.querySelectorAll("#leftConnect .info-block");
  const text = connectQuestions[i].postSolve;
  infosInConnect[i].querySelector(".info-text").textContent = text;
};
function setupQuestion() {
  enableButton("nextBtn", false);
  enableButton("prevBtn", true);
  const questionContainer = document.getElementById("rightConnect");
  const questionData = connectQuestions[currentQuestionIndex];

  // Set question text
  questionContainer.querySelector(".connect-question").textContent =
    questionData.question;

  // Set options
  const optionsContainer = questionContainer.querySelector(".options");
  optionsContainer.innerHTML = ""; // Clear previous options
  questionData.options.forEach((optionText, index) => {
    const optionDiv = document.createElement("div");
    optionDiv.className = "option";
    optionDiv.textContent = optionText;
    optionDiv.addEventListener("click", () => checkAnswer(index));
    optionsContainer.appendChild(optionDiv);
  });

  // Hide feedback initially
  const feedback = questionContainer.querySelector(".feedback");
  feedback.style.display = "none";
}

function checkAnswer(selectedIndex) {
  const questionData = connectQuestions[currentQuestionIndex];
  const options = document.querySelectorAll(".option");
  const feedback = document.querySelector(".feedback");

  if (selectedIndex === questionData.answer - 1) {
    options[selectedIndex].classList.add("mcqCorrect");
    feedback.textContent = questionData.correctText;
    replacePostSolve(currentQuestionIndex);
    enableButton("nextBtn", true);
    enableButton("prevBtn", false);
    options.forEach((option) => {
      option.style.pointerEvents = "none";
    });
  } else {
    options[selectedIndex].classList.add("mcqWrong");
    feedback.textContent = questionData.wrongText;
  }

  feedback.style.display = "block";
  questionData.answered = true;
}

function handleNextInConnect() {
  if (currentQuestionIndex < connectQuestions.length - 1) {
    currentQuestionIndex++;
    setupQuestion();
    updateInfoConnect(currentQuestionIndex);
  } else if (currentQuestionIndex === connectQuestions.length - 1) {
    enableButton("prevBtn", true);
    showConnectCard(true);
    currentQuestionIndex++;
  } else {
    showConnectCard(false);
    step++;
    updatesWithStep();
    return;
  }
}

function showConnectCard(show) {
  const row3 = document.querySelector(".row-3");
  const eqnArea = document.getElementById("equationArea");
  const connectFinal = document.getElementById("connectFinal");
  const diagramArea = document.getElementById("diagramArea");

  if (show) {
    row3.classList.add("card");
    eqnArea.classList.add("hidden");
    diagramArea.classList.add("hidden");
    row3.style.display = "block";
    connectFinal.classList.remove("hidden");
  } else {
    row3.classList.remove("card");
    eqnArea.classList.remove("hidden");
    diagramArea.classList.remove("hidden");
    row3.style.display = "flex";
    connectFinal.classList.add("hidden");
  }
}

function setupConnectSummary() {
  const info = connectCardInfo;
  const container = document.getElementById("connectSummary");
  container.innerHTML = "";
  info.summary.forEach((summaryText) => {
    const div = document.createElement("div");
    div.textContent = summaryText;
    container.appendChild(div);
  });
  const paragraph = document.createElement("p");
  paragraph.textContent = info.text;
  container.appendChild(paragraph);
}


function handlePrevInConnect() {
  if (currentQuestionIndex <= 0) {
    step--;
    updatesWithStep();
    enableButton("nextBtn", true);
    return
  }
  if(currentQuestionIndex===connectQuestions.length){
    showConnectCard(false);
    currentQuestionIndex--;
    setupQuestion();
    return;
  }

  currentQuestionIndex--;

  const leftConnect = document.getElementById("leftConnect");
  const lastInfoBlock = leftConnect.querySelector(".info-block:last-child");
  if (lastInfoBlock) {
    leftConnect.removeChild(lastInfoBlock);
  }
  setupQuestion();
  fadePastInfo(currentQuestionIndex);
}