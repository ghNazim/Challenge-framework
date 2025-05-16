function initializeTextContent() {
  // Title Bar
  document.querySelector(".titleBar h1").textContent =
    appTextContent.titleBar.heading;
  document.querySelector(".titleBar p").textContent =
    appTextContent.titleBar.subheading;

  // Context Sections
  const contextSections = document.querySelectorAll(
    ".contextBox .context-section"
  );
  appTextContent.contextSteps.forEach((step, index) => {
    const section = contextSections[index];
    if (!section) return;

    section.querySelector("h2").textContent = step.title;
    const p = section.querySelector("p");
    let processedText = step.text;

    step.highlights.forEach(({ word, def, instance }) => {
      let count = 0;
      const regex = new RegExp(`\\b${word}\\b`, "g");
      processedText = processedText.replace(regex, (match) => {
        count++;
        return count === instance
          ? `<span class="highlight" data-def="${def}">${match}</span>`
          : match;
      });
    });

    p.innerHTML = processedText;
  });

  // Slider Labels
  const sliderBoxes = document.querySelectorAll(".slider-box");
  sliderBoxes[0].querySelector("p").textContent =
    appTextContent.controls.sliderLabels.radius;
  sliderBoxes[1].querySelector("p").textContent =
    appTextContent.controls.sliderLabels.height;

  // Buttons
  document.getElementById("prevButton").textContent =
    appTextContent.controls.prevButton;
  document.getElementById("nextButton").textContent =
    appTextContent.controls.nextButton;

  // Volume Formula
  const formulaContainer = document.querySelector("#volumeFormula");
  formulaContainer.innerHTML = appTextContent.volumeFormula
    .map((line) => `<p>${line}</p>`)
    .join("");

  // Fullscreen Overlay
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
