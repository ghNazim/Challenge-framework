const colorArray = [
  "hot-pink",
  "turquoise",
  "lime-green",
  "sky-blue",
  "dark-orange",
  "bright-red",
];

let phase = 2;

let currentQuestion = null,
  currentAnswer = -1,
  clickedImageCount = 0;
const imagePanel = document.getElementById("image-panel");
const numberQuestion = document.querySelector("#number-box .q");
const numberAnswer = document.querySelector("#number-box .a");
const hintButton = document.getElementById("hint-button");
hintButton.onclick = () => {
  playSound("click");
  updateInstructionWithData("hint", "tap_" + phase);
  context.querySelector("p:first-child").classList.add("blue");
  afterAnswer();
};
const numpad = document.getElementById("numpad");
const answerBox = document.querySelector("#number-box .a");
hintButton.textContent = buttonText.hint;
function fillNumpad() {
  numpad.innerHTML = ""; // Clear existing numbers
  const num = currentQuestion.count;
  // const groups = currentQuestion.group;
  const correctAnswer = currentQuestion.answer;
  // const startNumber = correctAnswer - 5;

  for (let i = 0; i < 10; i++) {
    const numberValue = num * (i + 1);
    const numberElement = document.createElement("div");

    numberElement.classList.add("number");
    numberElement.dataset.value = numberValue;
    numberElement.textContent = numberValue;

    numpad.appendChild(numberElement);
  }
  gsap.from("#numpad .number", {
    duration: 0.5,
    scale: 0.5,
    opacity: 0,
    y: -40, // Animate from 40px above
    ease: "back.out(1.7)", // This ease creates a nice bounce effect
    stagger: 0.05, // Delay between each number's animation
  });
}
function resetNumberText() {
  numberQuestion.textContent = "";
  numberAnswer.textContent = "";
  gsap.from(answerBox, {
    duration: 0.6,
    scale: 0,
    opacity: 0,
    ease: "back.out(1.7)",
  });
  gsap.from(hintButton, {
    duration: 0.6,
    scale: 0,
    opacity: 0,
    ease: "back.out(1.7)",
  });
}
function bringSingleImage() {
  imagePanel.classList.remove("small-image-panel");
  imagePanel.innerHTML = "";
  const element = `<img src="assets/${currentQuestion.item}.png" class="big-image" >`;
  imagePanel.innerHTML = element;
  gsap.from("#image-panel .big-image", {
    duration: 0.8,
    scale: 0.3,
    ease: "back.out(1.7)",
  });
}
function setImagePanel() {
  if (currentQuestion.group > 4) {
    imagePanel.classList.add("small-image-panel");
  } else {
    imagePanel.classList.remove("small-image-panel");
  }
  imagePanel.innerHTML = "";
  const element = `<img src="assets/${currentQuestion.item}.png" >`;
  const elementsString = element.repeat(currentQuestion.group);
  imagePanel.innerHTML = elementsString;
  gsap.from("#image-panel img", {
    duration: 0.8,
    scale: 0,
    ease: "back.out(1.7)",
    stagger: 0.1, // Stagger the images for a nicer effect
  });
}
function initiate() {
  setJAXpose("normal");
  currentAnswer = -1;
  clickedImageCount = 0;
  nextButton.textContent = buttonText.submit;
  nextButton.disabled = true;
  resetNumberText();
  updateInstructionWithData("question_" + phase, "click_buttons");
  currentQuestion = dataForQuestions[phase];
  bringSingleImage();
  nextButton.onclick = checkAnswer;
  hintButton.style.display = "block";
  numpad.classList.remove("disabled");
  fillNumpad();
}
initiate();

numpad.addEventListener("click", (event) => {
  const clickedElement = event.target;
  if (clickedElement.classList.contains("number")) {
    answerBox.classList.remove("vibrate-x", "incorrect");
    playSound("click");
    const value = Number(clickedElement.dataset.value);
    answerBox.textContent = value;
    nextButton.disabled = false;
    currentAnswer = value;
  }
});
function generateQuestionString(num, maxNum, n = currentQuestion.count) {
  if (num < 1) {
    return "";
  }
  // const parts = Array(num).fill(String(n));
  const str = `${num} × ${n} =`;
  return str;
}
function generateColoredQuestionString(num, maxNum, n = currentQuestion.count) {
  if (num < 1) {
    return "";
  }

  const parts = [];
  for (let i = 0; i < num; i++) {
    // Cycle through the colorArray for class names
    const colorClass = colorArray[i % colorArray.length];
    const spanString = `<span class="${colorClass}">${n}</span>`;
    parts.push(spanString);
  }

  // Join the colored number spans with a " + "
  const str = parts.join(" + ");

  // Add the " = " sign if all numbers are displayed
  const extraEnd = num > 1 ? " = " : "";

  return str + extraEnd;
}
function generateStringForMultiplication(num, n = currentQuestion.count) {
  const str = `${num} times ${n} is =`;
  return str;
}
function checkAnswer() {
  if (currentAnswer === currentQuestion.answer) {
    playSound("correct");
    setJAXpose("happy");
    updateInstructionWithData("correct", "tap_" + phase);
    context.querySelector("p:first-child").classList.add("green");
    nextButton.disabled = true;
  } else {
    playSound("wrong");
    setJAXpose("sad");
    updateInstructionWithData("wrong", "tap_" + phase);
    context.querySelector("p:first-child").classList.add("red");
  }
  afterAnswer();
}
function checkAnswerMid() {
  const answer = clickedImageCount * currentQuestion.count;
  if (currentAnswer === answer) {
    nextButton.disabled = true;
    playSound("correct");
    setJAXpose("happy");
    updateInstructionWithData("correct_mid", "tap_next_" + phase);
    numpad.classList.add("disabled");
    answerBox.classList.remove("vibrate-x", "incorrect");
    answerBox.classList.add("correct");
    const allImages = Array.from(imagePanel.children);
    if (clickedImageCount < currentQuestion.group) {
      allImages[clickedImageCount].classList.add("clickable-image");
      showFtue(allImages[clickedImageCount]);
    }
  } else {
    playSound("wrong");
    setJAXpose("sad");
    answerBox.classList.add("vibrate-x", "incorrect");
  }
}
function afterAnswer() {
  setImagePanel();
  hintButton.style.display = "none";
  numpad.classList.add("disabled");
  nextButton.disabled = true;
  answerBox.style.display = "none";

  // Use a setTimeout to allow the GSAP animation to start first
  setTimeout(() => {
    const firstImage = imagePanel.firstElementChild;
    if (firstImage) {
      // Check if the image exists
      firstImage.classList.add("clickable-image");
      imagePanel.addEventListener("click", handleImageClick);
      showFtue(firstImage);
    }
  }, 700); // A delay of 0 is enough to push it to the next event loop tick
}

function handleImageClick(event) {
  setJAXpose("normal");
  const clickedImage = event.target;
  const allImages = Array.from(imagePanel.children);
  const totalImages = currentQuestion.group;

  // Make sure the clicked element is a clickable image
  if (!clickedImage.matches("img.clickable-image")) {
    return;
  }

  playSound("click");
  clickedImageCount++;
  hideFtue();

  // Update the question text in the number box
  numberQuestion.innerHTML = generateStringForMultiplication(clickedImageCount);

  // Deactivate the current image
  clickedImage.classList.remove("clickable-image");
  clickedImage.classList.add(colorArray[clickedImageCount - 1]);

  // Activate the next image
  const currentIndex = allImages.indexOf(clickedImage);
  // if (currentIndex === 0) {
  //   allImages[currentIndex + 1].classList.add("clickable-image");
  //   showFtue(allImages[currentIndex + 1]);
  // }
  if (clickedImageCount === totalImages) {
    nextButton.onclick = checkAnswer2;
    numpad.classList.remove("disabled");
    answerBox.style.display = "inline-block";
    answerBox.classList.remove("correct");
    answerBox.textContent = "";
    updateInstruction(filledText("hmm"), leftInstructions.try_answering);
  } else if (clickedImageCount >= 1) {
    nextButton.onclick = checkAnswerMid;
    numpad.classList.remove("disabled");
    answerBox.style.display = "inline-block";
    answerBox.classList.remove("correct");
    answerBox.textContent = "";
    updateInstruction(
      filledText("mid_step_top"),
      leftInstructions.try_answering
    );
  }
}
function fillPlaceholders(template, data) {
  return template.replace(/\{\{(.*?)\}\}/g, (match, key) => {
    const trimmedKey = key.trim();

    return data.hasOwnProperty(trimmedKey) ? data[trimmedKey] : match;
  });
}
function filledText(tag) {
  const template = leftInstructions[tag];
  const data = {
    current_image: clickedImageCount,
    currentQuestionString: generateQuestionString(
      clickedImageCount,
      currentQuestion.group
    ),
    count: currentQuestion.count,
    group: currentQuestion.group,
    item: currentQuestion.item,
    item_plural: currentQuestion.item_plural,
    group_name_plural: currentQuestion.group_name_plural,
    group_name_neutral:
      clickedImageCount === 1
        ? currentQuestion.group_name
        : currentQuestion.group_name_plural,
    answer: currentQuestion.answer,
    questionString: generateQuestionString(
      currentQuestion.group,
      currentQuestion.group
    ),
  };

  return fillPlaceholders(template, data);
}
function checkAnswer2() {
  console.log(currentAnswer, currentQuestion.answer);

  if (currentAnswer == currentQuestion.answer) {
    answerBox.classList.remove("vibrate-x", "incorrect");
    answerBox.classList.add("correct");
    setJAXpose("happy");
    nextButton.disabled = false;
    nextButton.textContent = buttonText.next;
    playSound("correct");
    showFtue(nextButton);
    confettiBurst();
    updateInstruction(
      leftInstructions["final_correct_top"],
      filledText("final_correct")
    );
    context.querySelector("p:first-child").classList.add("green");
    context.querySelector("p:last-child").classList.add("green");

    nextButton.onclick = handleNextClick;
    numpad.classList.add("disabled");
  } else {
    setJAXpose("sad");
    playSound("wrong");
    answerBox.classList.add("vibrate-x", "incorrect");
    updateInstruction(filledText("hmm"), leftInstructions.try_answering_again);
    context.querySelector("p:first-child").classList.add("red");
    context.querySelector("p:last-child").classList.add("red");
  }
}
function handleNextClick() {
  playSound("click");
  hideFtue();
  if (phase === 4) {
    triggerFullScreenOverlay(true);
    confettiBurst();
    return;
  }
  phase++;
  answerBox.classList.remove("correct");
  initiate();
}
