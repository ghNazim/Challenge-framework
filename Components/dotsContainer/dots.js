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
