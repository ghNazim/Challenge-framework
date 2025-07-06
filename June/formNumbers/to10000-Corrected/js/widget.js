const unitWidget = document.getElementById("unit-widget");
const tenWidget = document.getElementById("ten-widget");

const [
  ttMinus,
  ttPlus,
  tMinus,
  tPlus,
  hMinus,
  hPlus,
  tensMinus,
  tensPlus,
  unitsMinus,
  unitsPlus,
] = document.querySelectorAll(".control-btn");
const [ttNumberTab, tNumberTab, hNumberTab, tenNumberTab, unitNumberTab] =
  document.querySelectorAll(".number-tab");
const [
  ttSquaresContainer,
  tSquaresContainer,
  hSquaresContainer,
  tenSquaresContainer,
  unitSquaresContainer,
] = document.querySelectorAll(".squares-container");
const [
  ttTextDisplay,
  tTextDisplay,
  hTextDisplay,
  tenTextDisplay,
  unitTextDisplay,
] = document.querySelectorAll(".text-display");
const [tLeftDir, hLeftDir, tenLeftDir, unitLeftDir] =
  document.querySelectorAll(".left-dir");

unitsPlus.classList.add("pulse-highlight");

const submitButton = document.getElementById("submitButton");
const commentElement = document.querySelector(".comment");
const numberText = document.querySelector("#numberText");
let tenContainerVisible = false;

// --- State ---

const countObject = {
    unit: 0,
    ten: 0,
    hundred: 0,
    thousand: 0,
    tenThousand: 0,
  },
  plusBtnObject = {
    unit: unitsPlus,
    ten: tensPlus,
    hundred: hPlus,
    thousand: tPlus,
    tenThousand: ttPlus,
  },
  minusBtnObject = {
    unit: unitsMinus,
    ten: tensMinus,
    hundred: hMinus,
    thousand: tMinus,
    tenThousand: ttMinus,
  },
  squareContainerObject = {
    unit: unitSquaresContainer,
    ten: tenSquaresContainer,
    hundred: hSquaresContainer,
    thousand: tSquaresContainer,
    tenThousand: ttSquaresContainer,
  },
  leftDirObject = {
    unit: unitLeftDir,
    ten: tenLeftDir,
    hundred: hLeftDir,
    thousand: tLeftDir,
  },
  dataForAnimationObject = {
    unit: {
      next: "ten",
      nextDirection: "column",
    },
    ten: {
      next: "hundred",
      nextDirection: "row",
    },
    hundred: {
      next: "thousand",
      nextDirection: "row",
    },
    thousand: {
      next: "tenThousand",
      nextDirection: "column",
    },
  };

let isNumberTextUp = false;

function addBlock(tag, visible = true) {
  const block = document.createElement("img");
  block.src = `assets/${tag}.png`;
  const container = document.querySelector(`#${tag}-widget .squares-container`);
  container.appendChild(block);
  const visibility = visible ? "visible" : "hidden";
  block.style.visibility = visibility;
  return block;
}
function removeBlock(tag) {
  const container = document.querySelector(`#${tag}-widget .squares-container`);
  container.lastElementChild.remove();
}
function addBlocksMultiple(tag, n, visibile = true) {
  for (let i = 0; i < n; i++) {
    addBlock(tag, visibile);
  }
}
function removeBlockMultiple(tag, n) {
  for (let i = 0; i < n; i++) {
    removeBlock(tag);
  }
}
function updateNumberTab(tag, n) {
  const numberTab = document.querySelector(`#${tag}-widget .number-tab`);
  numberTab.textContent = n < 10 ? n : "X";
}
function updateTextDisplay(tag, n) {
  const textDisplay = document.querySelector(`#${tag}-widget .text-display`);
  textDisplay.textContent = n + (n === 1 ? tags.one : tags.ones);
}
function returnEventListenerForPlusBtn(tag) {
  return () => {
    plusBtnObject[tag].classList.remove("pulse-highlight");
    playSound("click");
    showStatement(-1);
    if (countObject[tag] < 10) {
      addBlock(tag);
      countObject[tag]++;
      updateNumberTab(tag, countObject[tag]);
    }
    if (countObject[tag] === 10) {
      onHitting10();
    }
  };
}
function returnEventListenerForMinusBtn(tag) {
  return () => {
    if (countObject[tag] > 0) {
      playSound("click");
      reverse10();
      leftDirObject[tag].style.display = "none";
      removeBlock(tag);
      countObject[tag]--;
      updateNumberTab(tag, countObject[tag]);
    }
  };
}

Object.entries(plusBtnObject).forEach(([tag, btn]) => {
  btn.addEventListener("click", returnEventListenerForPlusBtn(tag));
});
Object.entries(minusBtnObject).forEach(([tag, btn]) => {
  btn.addEventListener("click", returnEventListenerForMinusBtn(tag));
});

function resetContainers() {
  Object.keys(countObject).forEach((key) => (countObject[key] = 0));
  Object.values(squareContainerObject).forEach(
    (container) => (container.innerHTML = "")
  );
}
resetContainers();
// function createAndPositionStack(targetElement, direction, absolute) {
//   const container = document.createElement("div");
//   container.id = "stack-container";
//   container.style.position = "absolute";

//   const offsetTop = targetElement.offsetTop;
//   const offsetLeft = targetElement.offsetLeft;
//   const width = targetElement.offsetWidth;
//   const height = targetElement.offsetHeight;

//   container.style.top = `${offsetTop}px`;
//   container.style.left = `${offsetLeft}px`;
//   container.style.width = `${width}px`;
//   container.style.height = `${height}px`;
//   if(!absolute){
//     container.style.display = "flex";
//     container.style.flexDirection = direction;
//   }
//   else{
//     container.style.display = "block";
//     container.classList.add("child-absolute");
//   }

//   for (let i = 0; i < 10; i++) {
//     const rod = document.createElement("div");
//     rod.className = "block-in-stack";
//     container.appendChild(rod);
//   }

//   // 🔁 Append to the nearest positioned parent
//   const parent = targetElement.offsetParent || document.body;
//   parent.appendChild(container);
//   return container;
// }
function createAndPositionStack(targetElement, direction, absolute) {
  const container = document.createElement("div");
  container.id = "stack-container";
  container.style.position = "absolute";

  // Use getBoundingClientRect to get the transformed position
  const rect = targetElement.getBoundingClientRect();

  // Use scroll positions to convert viewport coordinates to document coordinates
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const scrollLeft = window.scrollX || document.documentElement.scrollLeft;

  container.style.top = `${rect.top + scrollTop}px`;
  container.style.left = `${rect.left + scrollLeft}px`;
  container.style.width = `${rect.width}px`;
  container.style.height = `${rect.height}px`;

  if (!absolute) {
    container.style.display = "flex";
    container.style.flexDirection = direction;
  } else {
    container.style.display = "block";
    container.classList.add("child-absolute");
  }

  for (let i = 0; i < 10; i++) {
    const rod = document.createElement("div");
    rod.className = "block-in-stack";
    container.appendChild(rod);
  }

  // Append to body (since we're now using absolute position relative to the page)
  document.body.appendChild(container);
  return container;
}

function animateCloneToTarget(
  sourceElement,
  targetElement,
  onStart,
  onComplete,
  targetRectProp = {}
) {
  const targetRect = targetElement.getBoundingClientRect();
  const clone = createClone(sourceElement);
  onStart?.();
  const newTargetRect = { ...targetRect, ...targetRectProp };
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
async function animateOverflow(tag) {
  const abs = tag === "hundred";
 
  const nextTag = dataForAnimationObject[tag].next;
  const dir = dataForAnimationObject[tag].nextDirection;
  let source = squareContainerObject[tag];
  let fromBlocks = source.querySelectorAll("img");
  fromBlocks = Array.from(fromBlocks);
  addBlock(nextTag, false);
  if (abs) {
    document.querySelector("#thousand-widget img").classList.add("bigThousand");
  }
  const stackedClone = createAndPositionStack(
    squareContainerObject[nextTag].lastElementChild,
    dir,
    abs
  );
  const toBlocks = stackedClone.querySelectorAll("div");
  const promisesList = fromBlocks.map((src, index) => {
    const dest = toBlocks[index];
    return promiseWrapper(
      animateCloneToTarget,
      src,
      dest,
      () => {
        src.src = `assets/impression.png`;
        src.classList.add("impression");
      },
      () => {
        //placeholder
      }
    );
  });
  return Promise.all(promisesList);
}
async function animateOverflowWrapper(tag) {
  const nextTag = dataForAnimationObject[tag].next;
  if (countObject[tag] < 10) return;
  updateNumberTab(tag, 0);
  await animateOverflow(tag);
  document.getElementById("stack-container").remove();
  squareContainerObject[nextTag].lastElementChild.style.visibility = "visible";
  updateNumberTab(nextTag, 1);
  countObject[tag] = 0;
  countObject[nextTag] = 1;
  // removeBlockMultiple(tag, 10);
}
function handleLeftDir(tag) {
  return async () => {
    const nextTag = dataForAnimationObject[tag].next;
    if (countObject[tag] < 10) return;
    leftDirObject[tag].style.display = "none";
    showControlButtons(nextTag, true);
    playSound("click");
    wiggle(tag, false);
    await animateOverflowWrapper(tag);
    extraAfterClickingDir();
  };
}
Object.entries(leftDirObject).forEach(([tag, dir]) =>
  dir.addEventListener("click", handleLeftDir(tag))
);

tLeftDir.addEventListener("click", () => {
  setTimeout(() => {
    confettiBurst();
    playSound("congrats");
    showControlButtons("tenThousand", false);
    plusBtnObject.tenThousand.classList.remove("pulse-highlight");
  }, 500);
});



function firstClickTplus() {
  tPlus.removeEventListener("click", firstClickTplus);
  document
    .querySelector("#thousand-widget img")
    .classList.remove("bigThousand");
}
tPlus.addEventListener("click", firstClickTplus);
