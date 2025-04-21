const updateInfoBlock = function (i) {
  if (i > questioninfo.length) {
    return;
  }
  const data = questioninfo[i],
    eqnArea = document.getElementById("leftComprehend");
  let infoBlock = childWithCustomAttribute(eqnArea, "data-tag", data.tag);
  if (!infoBlock) {
    infoBlock = document.createElement("div");
    infoBlock.className = "info-block";
    infoBlock.setAttribute("data-tag", data.tag);

    // Create the heading paragraph
    const heading = document.createElement("p");
    heading.className = "info-heading";
    heading.textContent = tagToHeadingComprehend[data.tag];
    infoBlock.appendChild(heading);
    eqnArea.appendChild(infoBlock);
    requestAnimationFrame(() => {
      infoBlock.classList.add("show");
    });

    infoBlock = childWithCustomAttribute(eqnArea, "data-tag", data.tag);
  }
  const content = document.createElement("p");
  content.className = "info-text";
  content.textContent = data.text;
  infoBlock.appendChild(content);
  requestAnimationFrame(() => {
    content.classList.add("show");
  });
};

const spansArray = document.getElementById("question").querySelectorAll("span");

const highlightQuestionSpans = function (i) {
  const spans = questioninfo[i].spans;
  for (let j = 0; j < spans.length; j++) {
    spansArray[spans[j] - 1].classList.add("highlightSpan");
  }
};
let comprehendSubStep = 0;
const handleNextInComprehend = function () {
  if (comprehendSubStep >= questioninfo.length) {
    step++;
    updatesWithStep();
    enableButton("nextBtn", false);
    return;
  }
  if(comprehendSubStep===1){
    enableButton("prevBtn", true);
  }
  updateInfoBlock(comprehendSubStep);
  highlightQuestionSpans(comprehendSubStep);
  comprehendSubStep++;
};

const handlePrevInComprehend = function () {
  if (comprehendSubStep <= 0) {
    // If we're at the beginning, there's nothing to go back to
    return;
  }

  // Decrement the comprehendSubStep to move to the previous step
  comprehendSubStep--;

  // Remove the last appended content element from the infoBlock
  const data = questioninfo[comprehendSubStep];
  const eqnArea = document.getElementById("leftComprehend");
  const infoBlock = childWithCustomAttribute(eqnArea, "data-tag", data.tag);

  if (infoBlock) {
    const lastContent = infoBlock.querySelector(".info-text:last-child");
    if (lastContent) {
      infoBlock.removeChild(lastContent);
    }
  }
  const lastContent = infoBlock.querySelector(".info-text:last-child");
  if(!lastContent) {
    eqnArea.removeChild(infoBlock);
  }

  // Remove the highlight from the spans
  const spans = questioninfo[comprehendSubStep].spans;
  for (let j = 0; j < spans.length; j++) {
    spansArray[spans[j] - 1].classList.remove("highlightSpan");
  }
};