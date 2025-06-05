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
    newBlock.classList.add(className);
    block.appendChild(newBlock);
  }
}
function paintActive(q, n, className) {
  console.log(q,n)
  if (q.includes("hundred") && n > 1) {
    createHundreds(q, n, className);
  }
  const blocks = document.querySelectorAll(q);
  const blocksArray = Array.from(blocks);
  blocks.forEach((block) => {
    block.classList.remove("block-color-active");
    block.classList.remove("block-color-sum");
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
  if(row === 1 && show){
    highlightSum(1);
  }
  if(row === 2 && show){
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

  el.addEventListener("animationend", function handler() {
    el.classList.remove("vibrate-x");
    el.removeEventListener("animationend", handler);
  });
}