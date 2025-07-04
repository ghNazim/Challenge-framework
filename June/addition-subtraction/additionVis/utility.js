function rearrangeHundreds(row) {
  const hundreds = document.querySelectorAll(`#row-${row} .hundred-block`);
  hundreds.forEach((block, index) => {
    block.style.transform = `translate(${-index * 10}px, ${-index * 10}px)`;
  });
}
function createHundreds(q, n, className) {
  const block = document.querySelector(q).parentNode;
  block.innerHTML = "";
  for (let i = 0; i < n; i++) {
    const newBlock = document.createElement("div");
    newBlock.classList.add("hundred-block");
    newBlock.classList.add("block-color-placeholder");
    newBlock.classList.add(className);
    block.appendChild(newBlock);
  }
}
function paintActive(q, n, className) {
  console.log(q, n);
  if (q.includes("hundred") && n > 0) {
    createHundreds(q, n, className);
  }
  const blocks = document.querySelectorAll(q);
  const blocksArray = Array.from(blocks);
  blocks.forEach((block) => {
    block.classList.remove("block-color-active");
    block.classList.remove("block-color-semi");
  });
  blocksArray.slice(0, n).forEach((block) => {
    block.classList.add(className);
  });
}
function removePaint(q) {
  const blocks = document.querySelectorAll(q);
  blocks.forEach((block) => {
    block.classList.remove("block-color-active");
    block.classList.remove("block-color-semi");
  });
}

function showChangeButtons(row, show) {
  if (row === 1 && show) {
    highlightSum(1);
  }
  if (row === 2 && show) {
    highlightSum(2);
  }
  const stepperButtons = document.querySelectorAll(
    `#row-${row} .stepper-buttons`
  );
  const digitLabels = document.querySelectorAll(`#row-${row} .digit-label`);
  stepperButtons.forEach((button) => {
    button.style.display = show ? "flex" : "none";
  });
  digitLabels.forEach((label) => {
    label.style.display = "block";
  });
  const setButton = document.querySelector(`#row-${row} .setButton`);
  setButton.style.display = show ? "block" : "none";
}

function updateDigitLabel(tag) {
  const q = `#row-3 .${tag}-cell .digit-label`;
  const el = document.querySelector(q);
  el.style.display = "block";
  const offset = cloned ? 10 : 0;
  if (tag === "units") {
    const unitBlocks = document.querySelectorAll(
      "#row-3 .unit-block.block-color-active"
    );
    el.textContent = unitBlocks.length + offset;
  } else if (tag === "tens") {
    const tenBlocks = document.querySelectorAll(
      "#row-3 .ten-bar.block-color-active"
    );
    el.textContent = tenBlocks.length + offset;
  } else {
    el.textContent = hundredIndex;
  }
}

function vibrateElement(el) {
  if (!el) return;

  el.style.position = "relative";
  el.classList.add("vibrate-x");
  el.classList.add("wrong-highlight");

  el.addEventListener("animationend", function handler() {
    el.classList.remove("vibrate-x");
    el.removeEventListener("animationend", handler);
  });
}

function highlightColumn(tag) {
  const main = document.querySelector(".main-layout");
  const mainRect = main.getBoundingClientRect();
  const elements = document.querySelectorAll(` .${tag}-cell>.actual-blocks`);
  const box = document.getElementById("highlight-box");
  box.style.display = "block"; // show box

  const firstRect = elements[0].getBoundingClientRect();

  const left = firstRect.left;
  const top = mainRect.top;
  const right = firstRect.right;
  const bottom = mainRect.bottom;
  const offsetX = 40;
  box.style.left = `${left - offsetX}px`;
  box.style.top = `${top + scrollY}px`;
  box.style.width = `${right - left + 2 * offsetX + rem}px`;
  box.style.height = `${bottom - top}px`;
}

function unhighlightColumn() {
  const box = document.getElementById("highlight-box");
  box.style.display = "none";
}

function highlightRow(tag) {
  const main = document.querySelector(".main-layout");
  const row = document.getElementById("row-" + tag);
  const box = document.getElementById("highlight-box");
  box.style.display = "block";
  const rect = row.getBoundingClientRect();
  const mainRect = main.getBoundingClientRect();
  const offsetY = 0;
  const left = mainRect.left + window.scrollX;
  const top = rect.top + window.scrollY - offsetY;
  const width = mainRect.width;
  const height = rect.height + 2 * offsetY;
  box.style.left = `${left}px`;
  box.style.top = `${top}px`;
  box.style.width = `${width}px`;
  box.style.height = `${height}px`;
  box.style.display = "block";
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function confettiBurst() {
  const duration = 2.5 * 1000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 360,
      origin: { x: 0.5, y: 0.5 },
    });
    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

function playAudio(id) {
  const audio = document.getElementById(id);
  audio.currentTime = 0;
  audio.play();
}
