function initializeTextContent() {
  // Title bar
  initTitle();

  // Context steps
  initContext();

  initControls();
  document.getElementById("note").textContent = appTextContent.note;
}

function initContext() {
  const contextBox = document.querySelector(".contextBox");
  contextBox.innerHTML = ""; // Clear existing content

  appTextContent.contextSteps.forEach((step) => {
    // Create section
    const section = document.createElement("div");
    section.classList.add("context-section");

    // Create and set heading
    const heading = document.createElement("h2");
    heading.textContent = step.title;

    // Create and process paragraph
    const paragraph = document.createElement("p");
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

    paragraph.innerHTML = processedText;

    // Append heading and paragraph to section
    section.appendChild(heading);
    section.appendChild(paragraph);

    // Append section to contextBox
    contextBox.appendChild(section);
  });
}
function initTitle() {
  document.querySelector(".titleBar h1").textContent =
    appTextContent.titleBar.heading;
  document.querySelector(".titleBar p").textContent =
    appTextContent.titleBar.subheading;
}
function initControls() {
  const sliderBoxes = document.querySelectorAll(".slider-box");

  sliderBoxes[0].querySelector("p").textContent =
    appTextContent.controls.sliderLabels.height;
  sliderBoxes[1].querySelector("p").textContent =
    appTextContent.controls.sliderLabels.form;

  // Button labels
  document.querySelectorAll(".lowerControls .btn").forEach((button, i) => {
    button.textContent = appTextContent.controls.buttons[i];
  });
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
