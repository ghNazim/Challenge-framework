const questionContainer = document.getElementById("question");
const numberDisplay = document.getElementById("bigNumber");
const optionsContainer = document.getElementById("options");
let questionIndex = 0;
function loadQuestion(index) {
  const current = questions[index];

  // Set question text and number
  questionContainer.textContent = current.question;
  numberDisplay.textContent = current.question.match(/\d+/)[0]; // Extract number from question

  // Clear existing options
  optionsContainer.innerHTML = "";

  // Render new options
  current.options.forEach((option) => {
    const btn = document.createElement("div");
    btn.className = "answer-option-button";
    btn.textContent = option;
    btn.dataset.value = option;

    btn.addEventListener("click", function () {
      // Disable all buttons after one is clicked
      document.querySelectorAll(".answer-option-button").forEach((b) => {
        b.disabled = true;
        b.classList.remove("selected", "correct", "incorrect");
      });

      // Mark this button as selected
      btn.classList.add("selected");

      // Check answer
      if (btn.dataset.value === current.answer) {
        confettiBurst();
        setJAXpose("happy");
        playSound("correct");
        btn.classList.add("correct");
        showFeedback(true);
        nextButton.disabled = false;
        if (questionIndex == questions.length - 1)
          nextButton.textContent = "Start Over";
      } else {
        setJAXpose("sad");
        playSound("wrong");
        btn.classList.add("incorrect");
        showFeedback(false);
      }
    });

    optionsContainer.appendChild(btn);
  });
}

function showFeedback(isCorrect) {
  updateInstructionWithData(isCorrect ? "correct" : "wrong");
}

callWithStep();

function callWithStep() {
  if (questionIndex === 0) {
    previousButton.disabled = true;
    nextButton.textContent = "Next";
  }
  nextButton.disabled = true;
  updateStepCounter(questionIndex);
  setJAXpose("normal");
  loadQuestion(questionIndex);
  updateInstructionWithData("general");
}

nextButton.addEventListener("click", () => {
  if (questionIndex == 0) {
    previousButton.disabled = false;
  }
  playSound("click");
  questionIndex = (questionIndex + 1) % questions.length;
  callWithStep();
});
previousButton.addEventListener("click", () => {
  if (questionIndex === 0) return;
  playSound("click");
  questionIndex--;
  callWithStep();
});
