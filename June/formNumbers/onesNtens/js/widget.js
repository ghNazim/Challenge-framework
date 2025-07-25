const unitWidget = document.getElementById("unit-widget");
const unitNumberTab = document.querySelector("#unit-widget .number-tab");
const tenNumberTab = document.querySelector("#ten-widget .number-tab");
const unitSquaresContainer = document.querySelector(
  "#unit-widget .squares-container"
);
const unitInnerCard = document.querySelector("#unit-widget .inner-card");

const unitTextDisplay = document.querySelector("#unit-widget .text-display");
const tenTextDisplay = document.querySelector("#ten-widget .text-display");
const plusBtn = document.getElementById("plus-btn");
const minusBtn = document.getElementById("minus-btn");
const arrowContainer = document.querySelector("#unit-widget .arrowContainer");
const leftDir = arrowContainer.querySelector(".left-dir");
const rightDir = arrowContainer.querySelector(".right-dir");
const speakerButtonUnit = document.querySelector("#unit-widget .speaker-btn");

document
  .querySelectorAll(".control-btn")
  .forEach((btn) => btn.addEventListener("click", () => playAudio("click")));
// --- State ---
let count = 0,
  maxCount = 10,
  minCount = 0;

function render() {
  unitNumberTab.textContent = count < 10 ? count : "X";
  unitTextDisplay.textContent = numberToText[count] || count;
  unitSquaresContainer.innerHTML = "";
  for (let i = 0; i < count; i++) {
    const square = document.createElement("div");
    square.className = "count-square";
    unitSquaresContainer.appendChild(square);
  }
}

plusBtn.addEventListener("click", () => {
  if (count < maxCount) {
    count++;
    render();
    if (count === maxCount) whenHits10();
  }
});

minusBtn.addEventListener("click", () => {
  if (count > minCount) {
    count--;
    render();
    if (count === maxCount - 1) reverse10();
  }
});
render();
[unitNumberTab, tenNumberTab, unitTextDisplay, tenTextDisplay].forEach(
  (el) => (el.style.color = "transparent")
);
function animateCloneToTarget(
  sourceElement,
  targetElement,
  onStart,
  onComplete
) {
  const targetRect = targetElement.getBoundingClientRect();
  const clone = createClone(sourceElement);
  onStart?.();
  animateClone(clone, targetRect, onComplete);
}
function promiseWrapper(func, sourceEl, targetEl, onStart, onEnd) {
  return new Promise((resolve) => {
    func(
      sourceEl,
      targetEl,
      () => {
        onStart?.();
      },
      () => {
        onEnd?.();
        resolve();
      }
    );
  });
}
function createClone(sourceElement) {
  const clone = sourceElement.cloneNode(true);
  const styles = window.getComputedStyle(sourceElement);
  clone.id = "";
  const sourceRect = sourceElement.getBoundingClientRect();
  clone.style.position = "absolute";
  clone.style.margin = "0"; // Reset margins
  clone.style.boxSizing = "border-box"; // Consistent box model
  clone.style.zIndex = "50"; // Ensure it's on top during animation
  clone.style.backgroundColor = styles.backgroundColor;
  // Set initial size and position (relative to the document)
  clone.style.width = `${sourceRect.width}px`;
  clone.style.height = `${sourceRect.height}px`;
  clone.style.top = `${sourceRect.top + window.scrollY}px`;
  clone.style.left = `${sourceRect.left + window.scrollX}px`;
  clone.style.transitionProperty = "top, left, width, height";
  clone.style.transitionDuration = `500ms`;
  clone.style.transitionTimingFunction = "ease-in-out";
  document.body.appendChild(clone);
  return clone;
}

function animateClone(clone, targetRect, onComplete) {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      clone.style.top = `${targetRect.top + window.scrollY}px`;
      clone.style.left = `${targetRect.left + window.scrollX}px`;
      clone.style.width = `${targetRect.width}px`;
      clone.style.height = `${targetRect.height}px`;
    });
  });

  // Clean up after the animation
  clone.addEventListener(
    "transitionend",
    function handleTransitionEnd() {
      clone.removeEventListener("transitionend", handleTransitionEnd);
      clone.parentNode.removeChild(clone);
      onComplete?.();
    },
    { once: true }
  );
}

function animateUnitsToTens() {
  let units = document.querySelectorAll(".count-square");
  units = Array.from(units);
  const tens = document.querySelectorAll(".unit-box");
  const promisesList = units.map((src, index) => {
    const dest = tens[index];
    return promiseWrapper(
      animateCloneToTarget,
      src,
      dest,
      () => {
        src.style.visibility = "hidden";
      },
      () => {
        dest.style.visibility = "visible";
      }
    );
  });
  return Promise.all(promisesList);
}
function animateTensToUnits() {
  let units = document.querySelectorAll(".count-square");
  let tens = document.querySelectorAll(".unit-box");
  tens = Array.from(tens);
  const promisesList = tens.map((src, index) => {
    const dest = units[index];
    return promiseWrapper(
      animateCloneToTarget,
      src,
      dest,
      () => {
        src.style.visibility = "hidden";
      },
      () => {
        dest.style.visibility = "visible";
      }
    );
  });
  return Promise.all(promisesList);
}

leftDir.onclick = onLeftDirClick1;
rightDir.onclick = onRightDirClick;

async function onLeftDirClick1() {
  playAudio("click");
  showDirArrow(false);
  wiggle(false);
  unitNumberTab.classList.remove("outlined");
  unitNumberTab.textContent = 0;
  unitTextDisplay.textContent = numberToText[0];
  await animateUnitsToTens();
  tenNumberTab.style.color = "white";
  tenTextDisplay.style.color = "white";
  // updateInstructions("next")
  showComment("rod");
  nextButton.disabled = false;
  tenNumberTab.textContent = 1;
  tenTextDisplay.textContent = "Ten";
  leftDir.onclick = onLeftDirClick2;
}
async function onLeftDirClick2() {
  playAudio("click");
  showDirArrow(false);
  wiggle(false);
  unitNumberTab.classList.remove("outlined");
  unitNumberTab.textContent = 0;
  unitTextDisplay.textContent = numberToText[0];
  await animateUnitsToTens();
  showStatement(-1);
  updateInstructions("number_ten");
  setJaxPose("happy");
  tenNumberTab.textContent = 1;
  tenTextDisplay.textContent = "Ten";
}

async function onRightDirClick() {
  playAudio("click");
  showDirArrow(false);
  tenNumberTab.textContent = 0;
  tenTextDisplay.textContent = numberToText[0];
  await animateTensToUnits();
  wiggle(true);
  unitNumberTab.classList.add("outlined");
  // updateInstructions("next")
  unitNumberTab.textContent = "X";
  unitTextDisplay.textContent = numberToText[10];
  showComment("rod_split");
  nextButton.disabled = false;
}

function showDirArrow(name) {
  if (name === "left") {
    leftDir.style.display = "flex";
    rightDir.style.display = "none";
  } else if (name === "right") {
    leftDir.style.display = "none";
    rightDir.style.display = "flex";
  } else {
    leftDir.style.display = "none";
    rightDir.style.display = "none";
  }
}
