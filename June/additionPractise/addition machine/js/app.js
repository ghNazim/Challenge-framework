// app.js
const T = window.APP_TEXTS;

if (!T) {
  console.error(
    "Error: APP_TEXTS not found. Ensure texts.js is loaded before app.js and defines window.APP_TEXTS."
  );
}

let mainTitleText,
  subtitleText,
  contextBox,
  upperControlsContainer,
  formulaTextElement,
  prevButton,
  nextButton,
  stepCounterElement,
  definitionOverlay,
  definitionOverlayContent,
  closeDefinitionOverlay,
  htmlTitle;

let volumeSlider, sliderValueDisplay;

// App state
let currentStep = 0,
  NUM_STRUCTURES = questions.length;

initApp();

function initApp() {
  htmlTitle = document.getElementById("html_title");
  mainTitleText = document.getElementById("main_title_text");
  subtitleText = document.getElementById("subtitle_text");
  contextBox = document.getElementById("contextBox");
  prevButton = document.getElementById("prevButton");
  nextButton = document.getElementById("nextButton");
  stepCounterElement = document.getElementById("stepCounter");
  definitionOverlay = document.getElementById("definitionOverlay");
  definitionOverlayContent = document.getElementById(
    "definitionOverlayContent"
  );
  closeDefinitionOverlay = document.getElementById("closeDefinitionOverlay");

  htmlTitle.textContent = T.html_title;
  mainTitleText.textContent = T.main_title_text;
  subtitleText.textContent = T.subtitle_text;
  nextButton.textContent = T.button_texts.next;
  prevButton.textContent = T.button_texts.prev;
  // Button text will be set in updateNavigationButtons

  closeDefinitionOverlay.addEventListener("click", () =>
    definitionOverlay.classList.remove("show")
  );
  contextBox.addEventListener("click", (event) => {
    const target = event.target.closest(
      ".highlight, .highlight-blue, .highlight-gold, .highlight-green, .highlight-red"
    );
    if (target) {
      const key = Array.from(target.classList).find(
        (cls) => T.overlay_definitions[cls]
      );
      if (key && T.overlay_definitions[key]) {
        const def = T.overlay_definitions[key];
        definitionOverlayContent.innerHTML = `<h3>${def.title}</h3>${def.content}`;
        definitionOverlay.classList.add("show");
      }
    }
  });
}
function vibrateElement(el) {
  if (!el) return;
  el.style.position = "relative";
  el.classList.add("vibrate-x");
  return new Promise((resolve) => {
    el.addEventListener("animationend", function handler() {
      el.classList.remove("vibrate-x");
      el.removeEventListener("animationend", handler);
      resolve();
    });
  });
}

function playAudio(id) {
  const audio = document.getElementById(id);
  audio.currentTime = 0;
  audio.play();
}

function confettiBurst() {
  const duration = 2.5 * 1000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 360,
      origin: { x: 0.5, y: 0.5 },
    });
    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

function updateInstructions(key) {
  const ContextSection = document.querySelector(".context-section");
  const title = T[key].instruction_title;
  const content = T[key].instruction_text;
  const button = T[key].button || "";
  ContextSection.innerHTML = `<h2>${title}</h2><div><p>${content}</p></div><div>${button}</div>`;
  ContextSection.classList.add("visible");
}
function createStepCounter() {
  stepCounterElement.innerHTML = "";
  for (let i = 0; i < NUM_STRUCTURES; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");

    dot.dataset.stepIndex = i;
    stepCounterElement.appendChild(dot);
  }
}
function updateStepCounter(stepIndex) {
  const dots = stepCounterElement.querySelectorAll(".dot");
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[stepIndex].classList.add("active");
}
const container = document.querySelectorAll(".ten-frame");
container.forEach((frame) => {
  for (let i = 0; i < 10; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    frame.appendChild(cell);
  }
});

function setJaxPose(pose) {
  const JAX = document.querySelector(`.character-display img`);
  JAX.src = `assets/JAX${pose}.png`;
}

function setNextButtonText(key){
  const text = T.button_texts[key]
  nextButton.textContent = text
}

updateInstructions("instruction_general");
createStepCounter();
updateStepCounter(0);
