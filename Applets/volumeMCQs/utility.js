function loadQuestion(index) {
  const nextBtn = document.getElementById("nextButton");
  
  const q = questions[index];
  if(!q.answered) nextBtn.disabled = true;
  else nextBtn.disabled = false;
  const questionText = document.querySelector(".question p");
  questionText.textContent = q.question;
  animateIn(questionText, "top");
  const optionButtons = document.querySelectorAll(".option");

  optionButtons.forEach((btn, i) => {
    if (i % 2 === 0) {
      animateIn(btn, "left");
    } else {
      animateIn(btn, "right");
    }
    btn.classList.remove("mcqWrong", "mcqCorrect");
    btn.style.pointerEvents = "auto";
    btn.style.backgroundColor = ""; // Optional visual reset

    if (!q.answered) {
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
    } else {
      // Disable all options and highlight the correct one
      btn.style.pointerEvents = "none";
      if (i === q.answer) {
        btn.classList.add("mcqCorrect");
      }
    }
  });

  // Set feedback if already answered
  document.querySelector(".feedback p").textContent = q.answered
    ? q.correctFeedback
    : "";
}

function generateStepCounter(total) {
  const container = document.getElementById("dotsContainer");
  container.innerHTML = "";
  for (let i = 1; i <= total; i++) {
    const dot = document.createElement("div");
    dot.className = "dot";
    container.appendChild(dot);
  }
}

function highlightCurrentStep(step) {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === step);
  });
}

function loadImage(i) {
  const src = images[i];
  const image = document.querySelector("#imageContainer img");
  const title = document.querySelector("#imageContainer h2");
  title.textContent = imageNames[i];
  animateOpacity(image);
  image.src = src;
}

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
function animateOpacity(element) {
  element.animate([{ opacity: 0 }, { opacity: 1 }], {
    duration: 300,
    easing: "ease-in-out",
    fill: "forwards", // Retain final state (opacity: 1)
  });
}
