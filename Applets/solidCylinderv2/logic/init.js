function initializeTextContent() {
  // Title bar
  document.querySelector(".titleBar h1").textContent =
    appTextContent.titleBar.heading;
  document.querySelector(".titleBar p").textContent =
    appTextContent.titleBar.subheading;

  // Context steps
  const contextSections = document.querySelectorAll(
    ".contextBox .context-section"
  );
  appTextContent.contextSteps.forEach((step, index) => {
    if (contextSections[index]) {
      const h2 = contextSections[index].querySelector("h2");
      const p = contextSections[index].querySelector("p");

      h2.textContent = step.title;

      let processedText = step.text;

      // If there are highlights, replace them carefully
      if (step.highlights.length > 0) {
        step.highlights.forEach(({ word, def, instance }) => {
          let count = 0;
          const regex = new RegExp(`\\b${word}\\b`, "g");

          processedText = processedText.replace(regex, (match) => {
            count++;
            if (count === instance) {
              return `<span class="highlight" data-def="${def}">${match}</span>`;
            }
            return match;
          });
        });
      }

      p.innerHTML = processedText;
    }
  });

  // Controls
  document.querySelector(".upperControls p").textContent =
    appTextContent.controls.sliderLabel;
  document.getElementById("prevButton").textContent =
    appTextContent.controls.prevButton;
  document.getElementById("nextButton").textContent =
    appTextContent.controls.nextButton;

  // Volume formula
  const volumeFormula = document.querySelector("#volumeFormula");
  volumeFormula.innerHTML = appTextContent.volumeFormula
    .map((line) => `<p>${line}</p>`)
    .join("");

  // Fullscreen overlay
  document.querySelector("#fullscreenOverlay h2").textContent =
    appTextContent.fullscreenOverlay.title;
  document.querySelector("#fullscreenOverlay p").textContent =
    appTextContent.fullscreenOverlay.text;
}

function extractDefinitionsFromContent(content) {
  const definitions = {};

  content.contextSteps.forEach((step) => {
    step.highlights.forEach(({ def, description }) => {
      if (def && description && !definitions.hasOwnProperty(def)) {
        definitions[def] = description;
      }
    });
  });

  return definitions;
}

const definitions = extractDefinitionsFromContent(appTextContent);
initializeTextContent();
