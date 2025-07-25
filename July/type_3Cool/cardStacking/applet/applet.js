// --- Applet State ---
const questions = [
  [4, 2], // 8
  [7, 5], // 35
  [9, 3], // 27
  [2, 4], // 8
  [6, 1], // 6
  [10, 5], // 50
  [3, 5], // 15
  [8, 4], // 32
  [5, 2], // 10
  [1, 5], // 5
  [10, 3], // 30
  [6, 4], // 24
  [2, 3], // 6
  [9, 1], // 9
  [7, 2], // 14
];
const totalQuestions = questions.length;
let questionsAnsweredCorrectly = 0;
let questionsAnsweredInFirstRound = 0;
let firstRoundComplete = false;

let currentAnswer = "";
let handNotShown = true;
// --- DOM Elements ---
const cardStack = document.querySelector(".card-stack");
const numpadDisplay = document.querySelector(".numpad-display");
const numpadGrid = document.querySelector(".numpad-grid");
const reviewModal = document.getElementById("review-modal");
const reviewOkayBtn = document.getElementById("review-okay-btn");
const reviewModalText = reviewModal.querySelector("p");

// --- Functions ---

/**
 * Initializes the applet by creating the cards and running entry animations.
 */
function initialize() {
  setReviewModalText();
  createCards();
  updateInstruction("initial_prompt", "solve_the_problem"); // Entry animations using GSAP // 1. Card stack bounces in

  gsap.from(".card-stack-container", {
    duration: 0.2,
    scale: 0.5,
    opacity: 0,
    ease: "none",
    delay: 0.2,
  }); // 2. Numpad buttons stagger in

  gsap.from(".numpad-btn", {
    duration: 0.2,
    opacity: 0,
    scale: 0.1,
    stagger: 0.05, // Stagger the animation for each button
    ease: "power1.out",
    delay: 0.2, // Start slightly after the card stack
  });
}

/**
 * Sets the text content for the review modal dynamically.
 */
function setReviewModalText() {
  reviewModalText.innerHTML = leftInstructions.modal;
  reviewOkayBtn.textContent = buttonText.okay;
}

/**
 * Creates and adds the question cards to the DOM.
 */
function createCards() {
  cardStack.innerHTML = ""; // Iterate through questions in reverse to stack them correctly
  questions
    .slice()
    .reverse()
    .forEach((q, index) => {
      const card = document.createElement("div");
      card.className = "card";
      const reversedIndex = questions.length - 1 - index;
      card.dataset.questionIndex = reversedIndex; // The first card (index 0) should have the highest z-index to be on top

      card.style.zIndex = index; // Apply rotation only to the cards in the back

      if (reversedIndex !== 0) {
        // Apply random jittered offset and rotation for a jumbled look
        const randomX = Math.floor(Math.random() * 10 - 5); // Between -5 and +4
        const randomY = Math.floor(Math.random() * 10 - 5); // Between -5 and +4
        const randomRotation = Math.floor(Math.random() * 10 - 5); // Between -5 and +4 degrees
        card.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotation}deg)`;
      } else {
        card.style.transform = `translate(0,0) rotate(0deg)`; // Top card remains straight
      }

      const [num1, num2] = q;
      const answer = num1 * num2;

      card.innerHTML = `
      <div class="card-inner">
        <div class="card-front"><span class="number-above">${num1} × ${num2}</span><div class="shape"></div></div>
        <div class="card-back">${answer}</div>
      </div>
    `;
      cardStack.appendChild(card);
    });
}

/**
 * Handles clicks on the numpad buttons.
 * @param {MouseEvent} event - The click event.
 */
function handleNumpadClick(event) {
  const target = event.target.closest(".numpad-btn");
  if (!target) return;

  playSound("click");
  if (handNotShown) {
    showFtue(document.getElementById("numpad-submit"), true);
    handNotShown = false;
  }

  const value = target.dataset.value;

  if (value) {
    if (currentAnswer.length < 3) {
      currentAnswer += value;
    }
  } else if (target.id === "numpad-clear") {
    currentAnswer = "";
  } else if (target.id === "numpad-submit") {
    checkAnswer();
    return; // Avoid updating display immediately
  }

  updateNumpadDisplay();
}

/**
 * Updates the numpad display with the current answer.
 */
function updateNumpadDisplay() {
  numpadDisplay.textContent = currentAnswer;
}

/**
 * Checks the user's answer against the correct answer.
 */
function checkAnswer() {
  if (currentAnswer === "") return;
  hideFtue();

  const cards = Array.from(document.querySelectorAll(".card"));
  if (cards.length === 0) return; // Find the top card by looking for the highest z-index

  const topCard = cards.reduce((a, b) =>
    parseInt(a.style.zIndex) > parseInt(b.style.zIndex) ? a : b
  );

  if (!topCard) {
    console.error("Could not determine the top card.");
    return;
  }

  const questionIndex = parseInt(topCard.dataset.questionIndex);
  const [num1, num2] = questions[questionIndex];
  const correctAnswer = (num1 * num2).toString();

  if (currentAnswer === correctAnswer) {
    handleCorrectAnswer(topCard);
  } else {
    handleWrongAnswer(topCard, questionIndex);
  }
}

/**
 * Handles the logic for a correct answer.
 * @param {HTMLElement} card - The card element to animate.
 */
function handleCorrectAnswer(card) {
  playSound("correct");
  setJAXpose("happy");
  updateInstruction("correct_feedback", "good_job");
  card.classList.add("flipped"); // Disable numpad during animation

  numpadGrid.style.pointerEvents = "none";

  setTimeout(() => {
    animateCardOut(card, true);
  }, 1000);
}

/**
 * Handles the logic for a wrong answer.
 * @param {HTMLElement} card - The card element to animate.
 * @param {number} questionIndex - The index of the incorrect question.
 */
function handleWrongAnswer(card, questionIndex) {
  playSound("wrong");
  setJAXpose("sad");
  updateInstruction("wrong_feedback", "try_again");
  card.classList.add("wrong"); // Add the question back to the end of the array

  const question = questions[questionIndex];
  questions.push(question); // Disable numpad during animation

  numpadGrid.style.pointerEvents = "none";

  setTimeout(() => {
    animateCardOut(card, false);
  }, 1000);
}

/**
 * Animates the card out of the screen.
 * @param {HTMLElement} card - The card to animate.
 * @param {boolean} isCorrect - Whether the answer was correct.
 */
/**
 * Animates the card out of the screen. If incorrect, animates it back to the stack.
 * @param {HTMLElement} card - The card to animate.
 * @param {boolean} isCorrect - Whether the answer was correct.
 */
function animateCardOut(card, isCorrect) {
  if (isCorrect) {
    // Correct answers still fly out and get removed
    gsap.to(card, {
      x: -500,
      y: -100,
      rotation: 30,
      opacity: 0,
      duration: 0.7,
      ease: "power2.in",
      onComplete: () => {
        card.remove();
        questionsAnsweredCorrectly++;
        if (!firstRoundComplete) {
          questionsAnsweredInFirstRound++;
        }
        prepareNextQuestion(true);
      },
    });
  } else {
    // Incorrect answers fly out and then fly back to the bottom
    const existingCards = Array.from(document.querySelectorAll(".card"));
    const minZIndex =
      existingCards.length > 1
        ? Math.min(...existingCards.map((c) => parseInt(c.style.zIndex)))
        : 0;

    // Create a GSAP timeline for the sequence
    const tl = gsap.timeline({
      onComplete: () => {
        if (!firstRoundComplete) {
          questionsAnsweredInFirstRound++;
        }
        // When the entire sequence is done, prepare for the next question
        prepareNextQuestion(false);
      },
    });

    // 1. Fly out to the right
    tl.to(card, {
      x: -300,
      y: -100,
      rotation: -30,
      opacity: 0,
      duration: 0.4,
      ease: "power2.in",
    });

    // 2. Prepare for re-entry (happens instantly after flying out)
    tl.add(() => {
      card.style.zIndex = minZIndex - 1; // Move it to the very back
      card.classList.remove("wrong");   // Remove the red "wrong" border
      // Instantly move it off-screen to the bottom to prepare for fly-in
      gsap.set(card, {
        x: -300,
        y: -100,
        rotation: 0,
        opacity: 0,
      });
    });

    // 3. Fly back in to its new position at the bottom of the stack
    tl.to(card, {
      // Re-apply a random jitter to match the other cards
      x: Math.floor(Math.random() * 10 - 5),
      y: Math.floor(Math.random() * 10 - 5),
      rotation: Math.floor(Math.random() * 10 - 5),
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    });
  }
}

/**
 * Prepares the applet for the next question.
 */
/**
 * Prepares the applet for the next question.
 */
function prepareNextQuestion(isCorrect) {
  if (!firstRoundComplete && questionsAnsweredInFirstRound >= totalQuestions) {
    firstRoundComplete = true;
    const incorrectQuestionsCount = questions.length - totalQuestions;
    if (incorrectQuestionsCount > 0) {
      reviewModal.classList.remove("hidden");
    } else {
      questionsAnsweredCorrectly = totalQuestions;
      prepareNextQuestion(true); // Go straight to complete
    }
    return;
  }

  if (questionsAnsweredCorrectly >= totalQuestions) {
    updateInstruction("activity_complete", "well_done");
    triggerFullScreenOverlay(true);
    confettiBurst();
    return;
  }

  // Make the next card (the one with the highest z-index) straight
  const remainingCards = Array.from(document.querySelectorAll(".card"));
  if (remainingCards.length > 0) {
    const nextCard = remainingCards.reduce((a, b) =>
      parseInt(a.style.zIndex) > parseInt(b.style.zIndex) ? a : b
    );
    gsap.to(nextCard, {
      x: 0,
      y: 0,
      rotation: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  }

  currentAnswer = "";
  updateNumpadDisplay();
  setJAXpose("normal");
  updateInstruction("initial_prompt", "solve_the_problem");
  numpadGrid.style.pointerEvents = "auto";
}

/**
 * Updates the instruction text.
 * @param {string} textKey1 - The key for the first line of text in rootText.
 * @param {string} textKey2 - The key for the second line of text in rootText.
 */
function updateInstruction(textKey1, textKey2) {
  const text1 = leftInstructions[textKey1] || "";
  const text2 = leftInstructions[textKey2] || "";
  const context = document.querySelector("#context");

  context.animate(
    [
      { transform: "scale(0.1)", opacity: 0 },
      { transform: "scale(1)", opacity: 1 },
    ],
    {
      duration: 300,
      easing: "ease-out",
      fill: "forwards",
    }
  );
  context.querySelector("p:first-child").innerHTML = text1;
  context.querySelector("p:last-child").innerHTML = text2;
}

// --- Event Listeners ---
numpadGrid.addEventListener("click", handleNumpadClick);
reviewOkayBtn.addEventListener("click", () => {
  reviewModal.classList.add("hidden");
  prepareNextQuestion(true); // Continue the game
});

// --- Initial Load ---
initialize();
