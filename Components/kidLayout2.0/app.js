const nextButton = document.getElementById("next-button");
const previousButton = document.getElementById("previous-button");
const overlayButton = document.getElementById("overlay-button");
const stepCounterElement = document.querySelector("#stepCounter");
nextButton.textContent = buttonText.next;
previousButton.textContent = buttonText.previous;
overlayButton.textContent = buttonText.proceed;
const audioCache = {};
const sounds = ["correct", "wrong", "click", "congrats"];
sounds.forEach((name) => {
  const audio = new Audio(`sound/${name}.mp3`);
  audio.load(); // Preloads the audio
  audioCache[name] = audio;
});
function playSound(filename) {
  if (!audioCache[filename]) {
    const audio = new Audio(`sound/${filename}.mp3`);
    audioCache[filename] = audio;
  }
  const sound = audioCache[filename].cloneNode(); // Clone so it can overlap itself
  sound.play();
}
function setJAXpose(name) {
  const jax = document.querySelector("#character>img");
  jax.src = `assets/JAX${name}.png`;
}
function vibrateElement(el, bool = true) {
  if (!bool) {
    el.classList.remove("vibrate-x");
    return;
  }
  // el.style.position = "relative";
  el.classList.add("vibrate-x");
}
function confettiBurst() {
  const duration = 1 * 1000;
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
function triggerFullScreenOverlay(show) {
  const overlay = document.getElementById("fullscreen-overlay");
  const display = show ? "flex" : "none";
  overlay.style.display = display;
}
document
  .querySelector("#fullscreen-overlay .close-button")
  .addEventListener("click", () => {
    triggerFullScreenOverlay(false);
  });

const maxStep = 8; //random number now, depends on applet
function createStepCounter(maxStep) {
  stepCounterElement.innerHTML = "";
  for (let i = 0; i < maxStep; i++) {
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

function updateInstruction(heading, text) {
  const context = document.querySelector("#context");
  context.animate(
    [
      { transform: "scale(0.1)", opacity: 0 },
      { transform: "scale(1)", opacity: 1 },
    ],
    {
      duration: 300,
      easing: "ease-out", // Simple, smooth easing
      fill: "forwards", // Keeps final state after animation
    }
  );
  document.querySelector("#context h3").textContent = heading;
  document.querySelector("#context p").innerHTML = text;
}
function updateInstructionWithData(tag) {
  updateInstruction(leftInstructions[tag].heading, leftInstructions[tag].text);
}


