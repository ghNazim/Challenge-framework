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

  document.getElementById("prevButton").textContent =
    appTextContent.controls.prevButton;
  document.getElementById("nextButton").textContent =
    appTextContent.controls.nextButton;

}
initializeTextContent();
