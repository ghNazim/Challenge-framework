const nextButton = document.getElementById("next-button");
const previousButton = document.getElementById("previous-button");
const overlayButton = document.getElementById("overlay-button");
const stepCounterElement = document.querySelector("#stepCounter");

function playSound(filename) {
  const audio = new Audio(`sound/${filename}.mp3`);
  audio.play()
}
function setJAXpose(name){
  const jax = document.querySelector("#character>img");
  jax.src = `assets/JAX${name}.png`;
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
function triggerFullScreenOverlay(show){
    const overlay = document.getElementById("fullscreen-overlay");
    const display = show ? "flex" : "none";
    overlay.style.display = display;
}
document.querySelector("#fullscreen-overlay .close-button").addEventListener("click", () => {
    triggerFullScreenOverlay(false);
});
const maxStep = questions.length
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
  document.querySelector("#context h3").textContent = heading;
  document.querySelector("#context p").innerHTML = text;
}
function updateInstructionWithData(tag){
    updateInstruction(leftInstructions[tag].heading, leftInstructions[tag].text);
}
updateInstructionWithData("general");
createStepCounter(maxStep);
updateStepCounter(0);
