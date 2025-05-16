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
    const section = contextSections[index];
    if (section) {
      section.querySelector("h2").textContent = step.title;
      const paragraphEls = section.querySelectorAll("p");

      // Handle multiple paragraphs if text contains multiple sentences
      const splitText = step.text.split("\n");
      splitText.forEach((line, i) => {
        if (paragraphEls[i]) {
          let processedText = line;
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
          paragraphEls[i].innerHTML = processedText;
        }
      });
    }
  });

  // Slider labels
  const sliderBoxes = document.querySelectorAll(".slider-box");
  sliderBoxes[0].querySelector("p").textContent =
    appTextContent.controls.sliderLabels.radius;
  sliderBoxes[1].querySelector("p").textContent =
    appTextContent.controls.sliderLabels.height;
  sliderBoxes[2].querySelector("p").textContent =
    appTextContent.controls.sliderLabels.unwrap;

  // Button labels
  document.getElementById("prevButton").textContent =
    appTextContent.controls.prevButton;
  document.getElementById("nextButton").textContent =
    appTextContent.controls.nextButton;


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