const questionContainer = document.getElementById("question");
const numberDisplay = document.getElementById("bigNumber");
const optionsContainer = document.getElementById("options");
let questionIndex = 0;
function loadQuestion(index) {
  const current = questions[index];

  // Set question text and number
  questionContainer.textContent = current.question;
  numberDisplay.textContent = current.number; // Extract number from question

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
        optionsContainer.style.pointerEvents = "none";
        if (questionIndex == questions.length - 1)
          nextButton.textContent = buttonText.start_over;
      } else {
        setJAXpose("sad");
        playSound("wrong");
        btn.classList.add("incorrect");
        showFeedback(false);
      }
    });

    optionsContainer.appendChild(btn);
  });
  gsap.fromTo(
    questionContainer,
    { y: -10, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6, ease: "back.out(1.7)" }
  );

  gsap.fromTo(
    numberDisplay,
    { scale: 0, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" }
  );
  gsap.fromTo(
    optionsContainer, // Animate all buttons in the array
    { y: 30, opacity: 0 }, // Start slightly to the left and invisible
    {
      y: 0, // End at their natural position
      opacity: 1,
      duration: 0.5,
      ease: "power3.out",
    }
  );
}

function showFeedback(isCorrect) {
  updateInstructionWithData(isCorrect ? "correct" : "wrong");
}

callWithStep();

function callWithStep() {
  optionsContainer.style.pointerEvents = "auto";

  if (questionIndex === 0) {
    previousButton.disabled = true;
    nextButton.textContent = buttonText.next;
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
