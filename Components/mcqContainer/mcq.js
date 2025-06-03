const questions = [
  {
    question: "What is the volume of the stone ?",
    options: ["600 cc", "800 cc", "1200 cc", "6000 cc"],
    answer: 0,
    answered: false,
    correctFeedback: "That's correct! The volume of the stone is 20×30×1 cc.",
    wrongFeedback: "Oops! That's not the correct volume of the stone.",
  },
  {
    question: "What is the volume of the anchor ?",
    options: ["1200 cc", "1800 cc", "3600 cc", "3000 cc"],
    answer: 2,
    answered: false,
    correctFeedback: "That's correct! The volume of the anchor is 40×30×3 cc.",
    wrongFeedback: "Oops! That's not the correct volume of the anchor.",
  },
  {
    question: "What is the volume of the brick ?",
    options: ["1200 cc", "1800 cc", "2400 cc", "3000 cc"],
    answer: 3,
    answered: false,
    correctFeedback: "That's correct! The volume of the brick is 50×30×2 cc.",
    wrongFeedback: "Oops! That's not the correct volume of the brick.",
  },
];

function animateIn(element, type) {
  if (!element) return;
  const transformMap = {
    left: "translateX(-10px)",
    right: "translateX(10px)",
    top: "translateY(-10px)",
    bottom: "translateY(10px)",
  };
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

function loadQuestion(index) {
  const nextBtn = document.getElementById("nextButton");
  const q = questions[index];
  nextBtn.disabled = false;
  const questionText = document.querySelector(".question p");
  questionText.textContent = q.question;
  animateIn(questionText, "top");
  const optionButtons = document.querySelectorAll(".option");

  optionButtons.forEach((btn, i) => {
    btn.textContent = q.options[i];
    if (i % 2 === 0) {
      animateIn(btn, "left");
    } else {
      animateIn(btn, "right");
    }
    btn.classList.remove("mcqWrong", "mcqCorrect");
    btn.style.pointerEvents = "auto";
    btn.style.backgroundColor = "";

    btn.onclick = () => {
      if (i === q.answer) {
        q.answered = true;
        nextBtn.disabled = false;
        document.querySelector(".feedback p").textContent = q.correctFeedback;
        btn.classList.add("mcqCorrect");
        optionButtons.forEach((b) => {
          b.style.pointerEvents = "none";
        });
      } else {
        btn.style.pointerEvents = "none";
        btn.classList.add("mcqWrong");
        document.querySelector(".feedback p").textContent = q.wrongFeedback;
      }
    };
  });

  // Set feedback if already answered
  document.querySelector(".feedback p").textContent = "";
}
