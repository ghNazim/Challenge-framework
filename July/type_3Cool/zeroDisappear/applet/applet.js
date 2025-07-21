// --- Applet State ---
const questions = [
  { m0: 40, n: 3, m1: 4, product: 12, finalProduct: 120 },
  { m0: 200, n: 4, m1: 2, product: 8, finalProduct: 800 },
  { m0: 3000, n: 3, m1: 3, product: 9, finalProduct: 9000 },
];
let currentQuestionIndex = 0;

let currentStep = 0;
let subStep = 0; // To handle multi-click steps
let m0, n, m1, product, finalProduct;

// Animation variables
let sparkles = [];
let ctx;
let animationFrameId = null;

// --- DOM Elements ---
const applet = document.getElementById("applet");
const topHeadingM0 = document.getElementById("top-m0");
const topHeadingN = document.getElementById("top-n");
const stepNavItems = document.querySelectorAll(".step-item");
const mainBox = document.querySelector(".main-box");
const stepHeading = document.querySelector(".step-heading");
const mathContainer = document.querySelector(".math-container");
const mathExpression = document.getElementById("math-expression");
const stepButton = document.getElementById("step-button");

const numpadContainer = document.querySelector(".numpad-container");
const numpadDisplay = document.querySelector(".numpad-display");
const numpadButtons = document.querySelectorAll(".numpad-btn");
const numpadClear = document.getElementById("numpad-clear");
const numpadSubmit = document.getElementById("numpad-submit");
let answerBox;

/**
 * Sets the current problem's variables.
 */
function setProblemData() {
  const currentQuestion = questions[currentQuestionIndex];
  m0 = currentQuestion.m0;
  n = currentQuestion.n;
  m1 = currentQuestion.m1;
  product = currentQuestion.product;
  finalProduct = currentQuestion.finalProduct;
}

/**
 * Formats a number to wrap trailing zeros in spans for animation.
 */
function formatNumberWithZeros(num, className) {
  const numStr = num.toString();
  // Make sure to show the spans so they can be targeted
  const firstDigit = `<span style="display: inline-block;">${numStr[0]}</span>`;
  const zeros = numStr
    .slice(1)
    .split("")
    .map(
      (zero) =>
        `<span class="${className} zero-span" style="display: inline-block;">${zero}</span>`
    )
    .join("");
  return `${firstDigit}${zeros}`;
}

/**
 * Initializes the applet.
 */
function initialize() {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }
  setProblemData();
  currentStep = 0;
  subStep = 0;

  const canvas = document.getElementById("scribble-canvas");
  setTimeout(() => {
    const rect = mathContainer.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    ctx = canvas.getContext("2d");
  }, 100);

  topHeadingM0.innerHTML = formatNumberWithZeros(m0, "initial-zero");
  topHeadingN.textContent = n;
  stepButton.textContent = buttonText.step_button;
  renderCurrentStep();
  stepButton.addEventListener("click", handleStepButtonClick);
  // nextButton.disabled = true;
}

/**
 * Renders the content for the current step.
 */
function renderCurrentStep() {
  if (ctx) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  }

  stepNavItems.forEach((item) => item.classList.remove("highlighted"));
  hideFtue();
  stepButton.disabled = false;

  const currentStepEl = document.querySelector(
    `.step-item[data-step="${currentStep}"]`
  );
  if (currentStepEl) {
    currentStepEl.classList.add("highlighted");
  }

  switch (currentStep) {
    case 0:
      renderStep0();
      break;
    case 1:
      renderStep1();
      break;
    case 2:
      renderStep2();
      break;
    case 3:
      renderStep3();
      break;
  }
}

// --- Step-specific Rendering Functions ---
function renderStep0() {
  updateInstruction(leftInstructions.lets_solve, leftInstructions.click_start);
  stepHeading.textContent = "";
  mathExpression.innerHTML = "";
  mainBox.style.visibility = "hidden";
  stepNavItems.forEach((item) => (item.style.visibility = "hidden"));
  nextButton.textContent = buttonText.start;
  nextButton.disabled = false;
  nextButton.onclick = () => {
    currentStep = 1;
    playSound("click");
    mainBox.style.visibility = "visible";
    stepNavItems.forEach((item) => (item.style.visibility = "visible"));
    renderCurrentStep();
    nextButton.onclick = resetWithNewNumber;
    nextButton.disabled = true;
    nextButton.textContent = buttonText.next;
  };
  showFtue(nextButton);
}
function renderStep1() {
  updateInstruction(
    leftInstructions.step1_initial,
    leftInstructions.step1_prompt
  );
  stepHeading.textContent = appletText.step_headings.step1.replace("{m0}", m0);
  const m0_formatted = formatNumberWithZeros(m0, "initial-zero");
  mathExpression.innerHTML = appletText.math_content.step1
    .replace("{m0_formatted}", m0_formatted)
    .replace("{n}", n);

  showFtue(stepButton);
  stepButton.textContent = buttonText.remove_zero;
  subStep = 0;
}

function renderStep2() {
  updateInstruction(
    leftInstructions.step2_initial,
    leftInstructions.step2_prompt
  );
  stepHeading.textContent = appletText.step_headings.step2;
  const question = appletText.math_content.step2_q
    .replace("{m1}", m1)
    .replace("{n}", n);
  const answerLine = appletText.math_content.step2_a
    .replace("{m1}", m1)
    .replace("{n}", n);
  mathExpression.innerHTML = `<div>${question}</div><div>${answerLine}</div>`;

  answerBox = document.getElementById("answer-box");
  numpadButtons.forEach((button) => {
    button.onclick = () => {
      playSound("click");
      const value = button.dataset.value;
      if (value) {
        if (answerBox.textContent === "?") {
          answerBox.textContent = "";
        }
        if (answerBox.textContent.length >= 3) {
          answerBox.textContent = "";
          return;
        }
        answerBox.textContent += value;
      }
    };
  });

  numpadClear.onclick = () => {
    answerBox.textContent = "";
  };

  numpadSubmit.onclick = handleNumpadSubmit;
  showFtue(answerBox);
  answerBox.addEventListener(
    "click",
    () => {
      playSound("click");
      updateInstruction(leftInstructions.numpad_1, leftInstructions.numpad_2);
      numpadContainer.classList.add("visible");
      hideFtue();
    },
    { once: true }
  );
  stepButton.disabled = true;
}

function renderStep3() {
  setJAXpose("normal")
  updateInstruction(
    leftInstructions.step3_initial,
    leftInstructions.step3_prompt_first
  );
  stepHeading.textContent = appletText.step_headings.step3;

  const initialZerosHTML = m0
    .toString()
    .slice(1)
    .split("")
    .map(
      (zero) =>
        `<span class="initial-zero zero-span hidden zero-width" style="display: inline-block;">${zero}</span>`
    )
    .join("");
  const finalZerosHTML = m0
    .toString()
    .slice(1)
    .split("")
    .map(
      (zero) =>
        `<span class="final-zero zero-span hidden zero-width" style="display: inline-block;">${zero}</span>`
    )
    .join("");

  mathExpression.innerHTML = appletText.math_content.step3_initial
    .replace("{m1}", m1)
    .replace("{initial_zeros}", initialZerosHTML)
    .replace("{n}", n)
    .replace("{product}", product)
    .replace("{final_zeros}", finalZerosHTML);

  showFtue(stepButton);
  stepButton.textContent = buttonText.bring_back_zero;
  subStep = 0;
}

// --- Event Handlers ---

function handleStepButtonClick() {
  playSound("click");
  hideFtue();

  switch (currentStep) {
    case 1:
      handleStep1Logic();
      break;
    case 2:
      currentStep++;
      renderCurrentStep();
      break;
    case 3:
      handleStep3Logic();
      subStep++;
      break;
  }
}

function handleNumpadSubmit() {
  console.log(answerBox.textContent);
  const userAnswer = parseInt(answerBox.textContent, 10);

  if (userAnswer === product) {
    setJAXpose("happy")
    answerBox.textContent = product;
    answerBox.classList.add("correct");
    playSound("correct");
    answerBox.classList.remove("incorrect");
    numpadContainer.classList.remove("visible");
    stepButton.disabled = false;
    stepButton.textContent = buttonText.next;
    showFtue(stepButton);
    updateInstruction(
      leftInstructions.step2_after_answer,
      leftInstructions.step2_prompt_again
    );
  } else {
    setJAXpose("sad")
    playSound("wrong");
    answerBox.classList.add("incorrect");
    answerBox.textContent = "";
    setTimeout(() => {
      answerBox.classList.remove("incorrect");
    }, 500); // Remove class after animation
  }
}

// --- Step-specific Logic Functions ---

function handleStep1Logic() {
  if (subStep === 0) {
    stepButton.disabled = true;
    const zeroSpans = mathExpression.querySelectorAll(".initial-zero");

    const onAllZerosAnimated = () => {
      updateInstruction(
        leftInstructions.step1_after_zero_gone,
        leftInstructions.step1_prompt_again
      );
      showFtue(stepButton);
      stepButton.disabled = false;
      stepButton.textContent = buttonText.next;
      subStep++;
    };

    let animatedCount = 0;
    const animateNextZero = () => {
      animatedCount++;
      if (animatedCount === zeroSpans.length) {
        onAllZerosAnimated();
      }
    };
    playSound("erase");
    zeroSpans.forEach((zeroSpan) => {
      autoScribble(zeroSpan, animateNextZero);
    });
  } else {
    currentStep++;
    renderCurrentStep();
  }
}

// In applet/applet.js

function handleStep3Logic() {
  if (subStep === 0) {
    playSound("erase");
    stepButton.disabled = true;
    const initialZeros = mathExpression.querySelectorAll(".initial-zero");

    initialZeros.forEach((zeroSpan) => {
      zeroSpan.classList.remove("zero-width");
      zeroSpan.style.opacity = 0;
    });

    const onAllZerosAnimated = () => {
      // showFtue(stepButton);
      // stepButton.disabled = false;
    };

    let animatedCount = 0;
    const animateNextZero = () => {
      animatedCount++;
      triggerMagicEffectSimple(
        initialZeros[animatedCount - 1],
        animatedCount === initialZeros.length ? substep2 : null
      );
      if (animatedCount === initialZeros.length) {
        onAllZerosAnimated();
      }
    };

    initialZeros.forEach((zeroSpan) => {
      autoScribbleAndAppear(zeroSpan, animateNextZero);
    });
    // createAppearingSparkles(Array.from(initialZeros), animateNextZero);
  }
  function substep2() {
    playSound("erase");
    console.log("substep2");
    stepButton.disabled = true;
    const finalZeros = mathExpression.querySelectorAll(".final-zero");

    finalZeros.forEach((zeroSpan) => {
      zeroSpan.classList.remove("zero-width");
      zeroSpan.style.opacity = 0;
    });

    const onAllZerosAnimated = () => {
      updateInstruction(
        leftInstructions.step3_complete,
        leftInstructions.step3_final_answer.replace(
          "{finalProduct}",
          finalProduct
        )
      );
      confettiBurst();
      nextButton.disabled = false;
      showFtue(nextButton);
      subStep++;
    };

    let animatedCount = 0;
    const animateNextZero = () => {
      triggerMagicEffectSimple(
        finalZeros[animatedCount],
        animatedCount === finalZeros.length - 1 ? onAllZerosAnimated : null
      );
      animatedCount++;
    };

    finalZeros.forEach((zeroSpan) => {
      autoScribbleAndAppear(zeroSpan, animateNextZero);
    });
  }
}

function resetWithNewNumber() {
  playSound("click");
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    initialize();
  } else {
    triggerFullScreenOverlay(true);
    confettiBurst();
    playSound("congrats");
    hideFtue();
  }
}

// --- Animation Functions ---

function autoScribbleAndAppear(targetElement, onComplete) {
  const canvas = document.getElementById("scribble-canvas");
  canvas.classList.remove("fade-out"); // Make sure the canvas is visible

  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  const zeroRect = targetElement.getBoundingClientRect();
  const containerRect = mathContainer.getBoundingClientRect();
  const offsetX = zeroRect.left - containerRect.left;
  const offsetY = zeroRect.top - containerRect.top;
  const zeroWidth = zeroRect.width;
  const zeroHeight = zeroRect.height;
  const lessOffset = zeroHeight * 0.1;

  const path = [
    { x: offsetX - lessOffset + zeroWidth, y: offsetY },
    { x: offsetX + lessOffset, y: offsetY + zeroHeight * (1 / 6) },
    { x: offsetX - lessOffset + zeroWidth, y: offsetY + zeroHeight * (2 / 6) },
    { x: offsetX + lessOffset, y: offsetY + zeroHeight * (3 / 6) },
    { x: offsetX - lessOffset + zeroWidth, y: offsetY + zeroHeight * (4 / 6) },
    { x: offsetX + lessOffset, y: offsetY + zeroHeight * (5 / 6) },
    { x: offsetX + zeroWidth, y: offsetY + zeroHeight },
  ];

  let currentPointIndex = 0;
  let progress = 0;
  const speed = 0.1;

  ctx.beginPath();
  ctx.lineWidth = zeroRect.height * 0.2;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.strokeStyle = "rgba(59, 130, 246, 0.5)";
  ctx.moveTo(path[0].x, path[0].y);

  function animate() {
    if (currentPointIndex >= path.length - 1) {
      targetElement.style.transition = "opacity 0.5s ease-in-out";
      targetElement.style.opacity = 1;
      document.getElementById("scribble-canvas").classList.add("fade-out");
      setTimeout(() => {
        document.getElementById("scribble-canvas").classList.remove("fade-out");
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        if (onComplete) {
          onComplete();
        }
      }, 500);
      return;
    }
    const startPoint = path[currentPointIndex];
    const endPoint = path[currentPointIndex + 1];
    const newX = startPoint.x + (endPoint.x - startPoint.x) * progress;
    const newY = startPoint.y + (endPoint.y - startPoint.y) * progress;
    ctx.lineTo(newX, newY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(newX, newY);
    progress += speed;
    if (progress >= 1) {
      progress = 0;
      currentPointIndex++;
    }
    requestAnimationFrame(animate);
  }
  animate();
}

function autoScribble(targetElement, onComplete) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  const zeroRect = targetElement.getBoundingClientRect();
  const containerRect = mathContainer.getBoundingClientRect();
  const offsetX = zeroRect.left - containerRect.left;
  const offsetY = zeroRect.top - containerRect.top;
  const zeroWidth = zeroRect.width;
  const zeroHeight = zeroRect.height;
  const lessOffset = zeroHeight * 0.1;

  const path = [
    { x: offsetX - lessOffset + zeroWidth, y: offsetY },
    { x: offsetX + lessOffset, y: offsetY + zeroHeight * (1 / 6) },
    { x: offsetX - lessOffset + zeroWidth, y: offsetY + zeroHeight * (2 / 6) },
    { x: offsetX + lessOffset, y: offsetY + zeroHeight * (3 / 6) },
    { x: offsetX - lessOffset + zeroWidth, y: offsetY + zeroHeight * (4 / 6) },
    { x: offsetX + lessOffset, y: offsetY + zeroHeight * (5 / 6) },
    { x: offsetX + zeroWidth, y: offsetY + zeroHeight },
  ];

  let currentPointIndex = 0;
  let progress = 0;
  const speed = 0.1;

  ctx.beginPath();
  ctx.lineWidth = zeroRect.height * 0.2;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.strokeStyle = "rgba(59, 130, 246, 0.5)";
  ctx.moveTo(path[0].x, path[0].y);

  function animate() {
    if (currentPointIndex >= path.length - 1) {
      setTimeout(() => triggerMagicEffect(targetElement, onComplete), 500);
      return;
    }
    const startPoint = path[currentPointIndex];
    const endPoint = path[currentPointIndex + 1];
    const newX = startPoint.x + (endPoint.x - startPoint.x) * progress;
    const newY = startPoint.y + (endPoint.y - startPoint.y) * progress;
    ctx.lineTo(newX, newY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(newX, newY);
    progress += speed;
    if (progress >= 1) {
      progress = 0;
      currentPointIndex++;
    }
    requestAnimationFrame(animate);
  }
  animate();
}

function triggerMagicEffect(targetElement, onComplete) {
  createSparkles(targetElement);
  animateSparkles(() => {
    targetElement.style.display = "none";
    if (onComplete) {
      onComplete();
    }
  });

  targetElement.classList.add("fade-out");
}
function triggerMagicEffectSimple(targetElement, cb) {
  createSparkles(targetElement);
  animateSparkles(cb);
}
function createSparkles(targetElement) {
  sparkles = [];
  const zeroRect = targetElement.getBoundingClientRect();
  const containerRect = mathContainer.getBoundingClientRect();
  const offsetX = zeroRect.left - containerRect.left;
  const offsetY = zeroRect.top - containerRect.top;
  const zeroWidth = zeroRect.width;
  const zeroHeight = zeroRect.height;

  for (let i = 0; i < 30; i++) {
    sparkles.push({
      x: offsetX + Math.random() * zeroWidth,
      y: offsetY + Math.random() * zeroHeight,
      size: Math.random() * 5 + 2,
      opacity: 1,
      life: Math.random() * 50 + 20,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
    });
  }
}

function animateSparkles(onComplete) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  let stillAlive = false;
  sparkles.forEach((s) => {
    if (s.life > 0) {
      stillAlive = true;
      s.x += s.vx;
      s.y += s.vy;
      s.opacity = s.life / 60;
      s.life--;

      ctx.beginPath();
      ctx.fillStyle = `rgba(251, 191, 36, ${s.opacity})`;
      for (let i = 0; i < 5; i++) {
        ctx.lineTo(
          s.x + s.size * Math.cos(((i * 2 * Math.PI) / 5) * 2),
          s.y + s.size * Math.sin(((i * 2 * Math.PI) / 5) * 2)
        );
      }
      ctx.closePath();
      ctx.fill();
    }
  });

  if (stillAlive) {
    animationFrameId = requestAnimationFrame(() => animateSparkles(onComplete));
  } else {
    animationFrameId = null;
    if (onComplete) onComplete();
  }
}

function createAppearingSparkles(elements, onComplete) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  sparkles = [];
  elements.forEach((element) => {
    element.classList.remove("zero-width");
    const rect = element.getBoundingClientRect();
    const containerRect = mathContainer.getBoundingClientRect();
    const el_x = rect.left - containerRect.left + rect.width / 2;
    const el_y = rect.top - containerRect.top + rect.height / 2;

    for (let i = 0; i < 15; i++) {
      const startX = el_x + (Math.random() - 0.5) * 100;
      const startY = el_y + (Math.random() - 0.5) * 100;
      sparkles.push({
        x: startX,
        y: startY,
        size: Math.random() * 5 + 2,
        opacity: 1,
        life: Math.random() * 50 + 30,
        vx: (el_x - startX) / 60,
        vy: (el_y - startY) / 60,
      });
    }
  });

  animateAppearingSparkles(elements, onComplete);
}

function animateAppearingSparkles(elements, onComplete) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  let stillAlive = false;

  sparkles.forEach((s) => {
    if (s.life > 0) {
      stillAlive = true;

      // Make the elements appear as the sparkles converge
      elements.forEach((el) => {
        if (s.life < 30) {
          // Start fade-in halfway through sparkle life
          el.classList.remove("hidden");
          el.classList.remove("zero-width");
          el.style.opacity = Math.min(1, ((30 - s.life) / 30) * 2);
        }
      });

      s.x += s.vx;
      s.y += s.vy;
      s.opacity = s.life / 50;
      s.life--;

      ctx.beginPath();
      ctx.fillStyle = `rgba(59, 130, 246, ${s.opacity})`;
      for (let i = 0; i < 5; i++) {
        ctx.lineTo(
          s.x + s.size * Math.cos(((i * 2 * Math.PI) / 5) * 2),
          s.y + s.size * Math.sin(((i * 2 * Math.PI) / 5) * 2)
        );
      }
      ctx.closePath();
      ctx.fill();
    }
  });

  if (stillAlive) {
    animationFrameId = requestAnimationFrame(() =>
      animateAppearingSparkles(elements, onComplete)
    );
  } else {
    animationFrameId = null;
    elements.forEach((el) => {
      el.classList.remove("hidden");
      el.classList.remove("zero-width");
      el.style.opacity = 1;
    });
    if (onComplete) onComplete();
  }
}

/**
 * Sets the text for the step navigation items based on the current language.
 */
function setStepNavigationText() {
  const stepNavItems = document.querySelectorAll(".step-item");
  stepNavItems.forEach((item, index) => {
    if (appletText.steps[index]) {
      item.textContent = appletText.steps[index];
    }
  });
}
setStepNavigationText();

// --- Initial Load ---
initialize();
