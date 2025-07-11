const colorArray = [
  "hot-pink",
  "turquoise",
  "lime-green",
  "sky-blue",
  "dark-orange",
  "bright-red",
  "hot-pink",
];

let phase = 3;
const dataForQuestions = {
  3: {
    group: 4,
    count: 3,
    item: "dumpling",
    group_name_plural: "bowls",
    answer: 12,
    item_plural: "dumplings",
  },
  4: {
    group: 3,
    count: 5,
    item: "candy",
    group_name_plural: "bags",
    answer: 15,
    item_plural: "candies",
  },
  5: {
    group: 6,
    count: 2,
    item: "bowl",
    group_name_plural: "trays",
    answer: 12,
    item_plural: "bowls",
  },
  6: {
    group: 7,
    count: 4,
    item: "toy",
    group_name_plural: "crates",
    answer: 28,
    item_plural: "toys",
  },
};

let currentQuestion = null,
  currentAnswer = -1,
  clickedImageCount = 0;
const imagePanel = document.getElementById("image-panel");
const numberQuestion = document.querySelector("#number-box .q");
const numberAnswer = document.querySelector("#number-box .a");
const hintButton = document.getElementById("hint-button");
hintButton.onclick = () => {
  playSound("click");
  updateInstructionWithData("hint", "set_sum");
  context.querySelector("p:first-child").classList.add("blue");
  afterAnswer();
};
const numpad = document.getElementById("numpad");
const answerBox = document.querySelector("#number-box .a");
hintButton.textContent = buttonText.hint;
function fillNumpad() {
  numpad.innerHTML = ""; // Clear existing numbers
  const correctAnswer = currentQuestion.answer;
  const startNumber = correctAnswer - 5;

  for (let i = 0; i < 10; i++) {
    const numberValue = startNumber + i;
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
  currentQuestion = dataForQuestions[phase];
  bringSingleImage();
  nextButton.onclick = checkAnswer;
  hintButton.style.display = "block";
  numpad.classList.remove("disabled");
  fillNumpad();
  updateInstruction(filledText("question"), leftInstructions["click_buttons"]);
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
  const parts = Array(num).fill(String(n));
  const str = parts.join(" + ");
  const extraEnd = num === maxNum ? " = " : "";
  return str + extraEnd;
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
  const extraEnd = num === maxNum ? " = " : "";

  return str + extraEnd;
}
function checkAnswer() {
  if (currentAnswer === currentQuestion.answer) {
    afterCorrect();
    afterAnswer(true);
  } else {
    playSound("wrong");
    setJAXpose("sad");
    updateInstructionWithData("wrong", "set_sum");
    context.querySelector("p:first-child").classList.add("red");
    afterAnswer();
  }
}
function afterAnswer(correct = false) {
  setImagePanel();
  hintButton.style.display = "none";
  // numpad.classList.add("disabled");
  if (!correct) {
    nextButton.disabled = true;
    answerBox.style.display = "none";
    answerBox.textContent = "";
    nextButton.onclick = checkAnswer2;
  }

  // Use a setTimeout to allow the GSAP animation to start first
  setTimeout(() => {
    numberQuestion.innerHTML = generateColoredQuestionString(
      currentQuestion.group,
      currentQuestion.group
    );
    imagePanel.querySelectorAll("img").forEach((image, index) => {
      image.classList.add(colorArray[index]);
    });
    answerBox.style.display = "inline-block";
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
  numberQuestion.innerHTML = generateColoredQuestionString(
    clickedImageCount,
    totalImages
  );

  // Deactivate the current image
  clickedImage.classList.remove("clickable-image");
  clickedImage.classList.add(colorArray[clickedImageCount - 1]);

  // Activate the next image
  const currentIndex = allImages.indexOf(clickedImage);
  if (currentIndex < totalImages - 1) {
    allImages[currentIndex + 1].classList.add("clickable-image");
    showFtue(allImages[currentIndex + 1]);
  }
  if (clickedImageCount === totalImages) {
    nextButton.onclick = checkAnswer2;
    numpad.classList.remove("disabled");
    answerBox.style.display = "inline-block";
    answerBox.textContent = "";
    updateInstruction(filledText("hmm"), leftInstructions.try_answering);
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
    item_plural: currentQuestion.item_plural,
    count: currentQuestion.count,
    group: currentQuestion.group,
    item: currentQuestion.item,
    group_name_plural: currentQuestion.group_name_plural,
    answer: currentQuestion.answer,
    questionString: generateQuestionString(
      currentQuestion.group,
      currentQuestion.group
    ),
  };

  return fillPlaceholders(template, data);
}
function checkAnswer2() {
  if (currentAnswer == currentQuestion.answer) {
    afterCorrect();
  } else {
    setJAXpose("sad");
    playSound("wrong");
    answerBox.classList.add("vibrate-x", "incorrect");
    updateInstruction(filledText("hmm"), leftInstructions.try_answering);
    context.querySelector("p:first-child").classList.add("red");
    context.querySelector("p:last-child").classList.add("red");
  }
}
function handleNextClick() {
  playSound("click");
  hideFtue();
  if (phase === 6) {
    triggerFullScreenOverlay(true);
    return;
  }
  phase++;
  answerBox.classList.remove("correct");
  initiate();
}
function afterCorrect() {
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
}
// triggerFullScreenOverlay(true)