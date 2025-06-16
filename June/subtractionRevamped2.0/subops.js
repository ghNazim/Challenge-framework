let stage = null,
  currentAnswer = [0, 0, 0];
let listenerData = {
  element: null,
  listener: null,
};
const stageToClass = ["units", "tens", "hundreds"];

function removeListener() {
  if (listenerData.listener) {
    listenerData.element.style.cursor = "default";
    listenerData.element.removeEventListener("click", listenerData.listener);
  }
}
function addListener() {
  listenerData.element.style.cursor = "pointer";
  listenerData.element.addEventListener("click", listenerData.listener);
}

function handleClickOnBlock(block) {
  console.log("Element clicked");
  const tag = block.dataset.tag;
  const idx = tag === "hundreds" ? 0 : tag === "tens" ? 1 : 2;
  if (block.src.includes("Active")) {
    block.src = `assets/${tag}Semi.png`;
    currentAnswer[idx]--;
    block.classList.remove("block-color-active");
    block.classList.add("block-color-semi");
  } else if (block.src.includes("Semi")) {
    block.src = `assets/${tag}Active.png`;
    block.classList.remove("block-color-semi");
    block.classList.add("block-color-active");
    currentAnswer[idx]++;
  }
}

function blockHandler(e) {
  handleClickOnBlock(e.target);
}

function stageSetUp(stage) {
  removeListener();
  if(!stage) return;
  const query = `#row-1 .${stage}-cell .actual-blocks`;
  const blockParent = document.querySelector(query);
  listenerData.element = blockParent;
  listenerData.listener = blockHandler;
  addListener();
}

function cloneBlock(tag) {
  const querySelectorString = `#row-1 .${tag}-cell>.actual-blocks`;

  const originalElement = document.querySelector(querySelectorString);
  const originalRect = originalElement.getBoundingClientRect();
  const clonedElement = originalElement.cloneNode(true);
  const computedStyle = window.getComputedStyle(originalElement);

  clonedElement.style.display = computedStyle.display;
  clonedElement.style.flexDirection = computedStyle.flexDirection;
  clonedElement.style.justifyContent = computedStyle.justifyContent;
  clonedElement.style.alignItems = computedStyle.alignItems;
  clonedElement.style.gap = computedStyle.gap;
  clonedElement.style.position = "absolute";
  clonedElement.style.top = `${originalRect.top + window.scrollY}px`;
  clonedElement.style.left = `${originalRect.left + window.scrollX}px`;
  clonedElement.style.width = `${originalRect.width}px`;
  clonedElement.style.height = `${originalRect.height}px`;
  clonedElement.style.margin = "0";
  clonedElement.style.boxSizing = "border-box";
  clonedElement.style.visibility = "hidden";
  clonedElement.id = `${tag}-clone`;
  const childs = clonedElement.querySelectorAll("img");
  childs.forEach((el) => {
    setElementState(el, "Active");
    el.classList.add("block-color-active");
  });
  clonedElement.style.top = `${originalRect.top + window.scrollY + 50}px`;
  clonedElement.style.left = `${originalRect.left + window.scrollX - 25}px`;
  document.body.appendChild(clonedElement);

  return clonedElement;
}
const unitsClone = cloneBlock("units");
const tensClone = cloneBlock("tens");

async function animateBorrowFromHundred() {
  const src = document.querySelector("#row-1 .hundred-block:last-of-type");
  const dest = tensClone;
  await promiseWrapper(
    animateCloneToTarget,
    src,
    dest,
    () => {
      src.remove();
    },
    () => {
      dest.style.visibility = "visible";
      dest.onclick = blockHandler;
      dest.style.cursor = "pointer";
    }
  );
}

async function animateBorrowFromTen() {
  const allActives = document.querySelectorAll(
    "#row-1 .ten-bar.block-color-active"
  );
  const src = allActives[allActives.length - 1];
  const dest = unitsClone;
  await promiseWrapper(
    animateCloneToTarget,
    src,
    dest,
    () => {
      src.classList.remove("block-color-active");
      setElementState(src, "White");
    },
    () => {
      dest.style.visibility = "visible";
      dest.onclick = blockHandler;
      dest.style.cursor = "pointer";
    }
  );
}


async function animateUnitsToBottom(){
  const unitsTop = document.querySelectorAll(
    "#row-1 .unit-block.block-color-active, #units-clone .block-color-active"
  );
  const unitsBottom = document.querySelectorAll("#row-3 .unit-block");
console.log(unitsTop);

  for (let i = 0; i < unitsTop.length; i++) {
    const block = unitsTop[i],dest=unitsBottom[i];
    await promiseWrapper(
      animateCloneToTarget,
      block,
      dest,
      () => {
        block.classList.remove("block-color-active");
        block.classList.add("block-color-semi");
        setElementState(block, "Semi");
      },
      () => {
        dest.classList.add("block-color-active");
        setElementState(dest, "Active");
        updateDigitLabel("units");
      }
    );
  }
}
async function animateTensToBottom() {
  const unitsTop = document.querySelectorAll(
    "#row-1 .ten-bar.block-color-active, #tens-clone .block-color-active"
  );
  const unitsBottom = document.querySelectorAll("#row-3 .ten-bar");

  for (let i = 0; i < unitsTop.length; i++) {
    const block = unitsTop[i],
      dest = unitsBottom[i];
    await promiseWrapper(
      animateCloneToTarget,
      block,
      dest,
      () => {
        block.classList.remove("block-color-active");
        block.classList.add("block-color-semi");
        setElementState(block, "Semi");
      },
      () => {
        dest.classList.add("block-color-active");
        setElementState(dest, "Active");
        updateDigitLabel("tens");
      }
    );
  }
}


async function animateHundredsToBottom( onStart, onComplete) {
  const src = document.querySelectorAll(
    `#row-1 .hundred-block.block-color-active`
  );
  for (let i = 0; i < src.length; i++) {
    await promiseWrapper(
      animateTheTopHundredToTarget,
      1,
      3,
      onStart
    );
  }
  onComplete?.();
}