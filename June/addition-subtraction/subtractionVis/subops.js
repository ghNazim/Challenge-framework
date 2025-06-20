function setSecondRowPink() {
  const secondRowActiveBlocks = document.querySelectorAll(
    "#row-2 .block-color-active"
  );
  secondRowActiveBlocks.forEach((block) => {
    block.classList.remove("block-color-active");
    block.classList.add("block-color-blank");
  });
}

function animateUnitsTopToMiddle() {
  const middleBlocks = document.querySelectorAll(
    "#row-2 .unit-block.block-color-blank"
  );
  const topBlocks = document.querySelectorAll(
    "#row-1 .unit-block.block-color-active"
  );
  if (u1 >= u2) {
    Array.from(topBlocks)
      .slice(u1 - u2)
      .forEach((block, index) => {
        animateCloneToTarget(
          block,
          middleBlocks[index],
          () => {
            block.classList.remove("block-color-active");
            block.classList.add("block-color-semi");
          },
          () => {
            paintActive("#row-2 .unit-block", index + 1, "block-color-active");
          }
        );
      });
  }
}

function animateRestUnitsToBottom() {
  const bottomBlocks = document.querySelectorAll("#row-3 .unit-block");
  const topBlocks = document.querySelectorAll(
    "#row-1 .unit-block.block-color-active"
  );
  Array.from(topBlocks).forEach((block, index) => {
    animateCloneToTarget(
      block,
      bottomBlocks[index],
      () => {
        block.classList.remove("block-color-active");
        block.classList.add("block-color-semi");
      },
      () => {
        paintActive("#row-3 .unit-block", index + 1, "block-color-active");
        updateDigitLabel("units");
      }
    );
  });
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
  clonedElement.style.position = "absolute";
  clonedElement.style.top = `${originalRect.top + window.scrollY}px`;
  clonedElement.style.left = `${originalRect.left + window.scrollX}px`;
  clonedElement.style.width = `${originalRect.width}px`;
  clonedElement.style.height = `${originalRect.height}px`;
  clonedElement.style.margin = "0";
  clonedElement.style.zIndex = "100";
  clonedElement.style.boxSizing = "border-box";
  clonedElement.style.visibility = "hidden";
  clonedElement.id = `${tag}s-clone`;
  const childs = clonedElement.querySelectorAll("div");
  childs.forEach((div) => {
    div.classList.add("block-color-active");
  });
  clonedElement.style.top = `${originalRect.top + window.scrollY + 20}px`;
  clonedElement.style.left = `${originalRect.left + window.scrollX - 25}px`;
  document.body.appendChild(clonedElement);

  return clonedElement;
}

const tensClone = cloneBlock("tens");
const unitsClone = cloneBlock("units");

function animateCarryFromHundred() {
  const src = document.querySelector("#row-1 .hundred-block:last-of-type");
  const dest = tensClone;
  animateCloneToTarget(
    src,
    dest,
    () => {
      src.remove();
    },
    () => {
      dest.style.visibility = "visible";
    }
  );
}

function animateCarryFromTen() {
  const allActives = document.querySelectorAll(
    "#row-1 .ten-bar.block-color-active"
  );
  const src = allActives[allActives.length - 1];
  const dest = unitsClone;
  animateCloneToTarget(
    src,
    dest,
    () => {
      src.classList.remove("block-color-active");
    },
    () => {
      dest.style.visibility = "visible";
    }
  );
}

function animateTensCloneToMiddle() {
  const middleBlocks = document.querySelectorAll(
    "#row-2 .ten-bar.block-color-blank"
  );
  const topBlocks = tensClone.querySelectorAll("div");
  Array.from(topBlocks)
    .slice(10 - t2)
    .forEach((block, index) => {
      animateCloneToTarget(
        block,
        middleBlocks[index],
        () => {
          block.style.visibility = "hidden";
        },
        () => {
          paintActive("#row-2 .ten-bar", index + 1, "block-color-active");
        }
      );
    });
}
function animateUnitsCloneToMiddle() {
  const middleBlocks = document.querySelectorAll(
    "#row-2 .unit-block.block-color-blank"
  );
  const topBlocks = unitsClone.querySelectorAll("div");
  Array.from(topBlocks)
    .slice(10 - u2)
    .forEach((block, index) => {
      animateCloneToTarget(
        block,
        middleBlocks[index],
        () => {
          block.style.visibility = "hidden";
        },
        () => {
          paintActive("#row-2 .unit-block", index + 1, "block-color-active");
        }
      );
    });
}

function settleCloneTens() {
  const blanksInTop = document.querySelectorAll("#row-1 .ten-bar");
  const cloneBlocks = tensClone.querySelectorAll("div");
  Array.from(cloneBlocks)
    .slice(0, 10 - t2)
    .forEach((block, index) => {
      animateCloneToTarget(
        block,
        blanksInTop[t1 + index],
        () => {
          block.style.visibility = "hidden";
        },
        () => {
          paintActive("#row-1 .ten-bar", t1 + index + 1, "block-color-active");
        }
      );
    });
}

function settleCloneUnits() {
  const blanksInTop = document.querySelectorAll("#row-1 .unit-block");
  const cloneBlocks = unitsClone.querySelectorAll("div");
  Array.from(cloneBlocks)
    .slice(0, 10 - u2)
    .forEach((block, index) => {
      animateCloneToTarget(
        block,
        blanksInTop[u1 + index],
        () => {
          block.style.visibility = "hidden";
        },
        () => {
          paintActive("#row-1 .unit-block", u1 + index + 1, "block-color-active");
        }
      );
    });
}

function animateRestTensToBottom() {
  const bottomBlocks = document.querySelectorAll("#row-3 .ten-bar");
  const topBlocks = document.querySelectorAll(
    "#row-1 .ten-bar.block-color-active"
  );
  Array.from(topBlocks).forEach((block, index) => {
    animateCloneToTarget(
      block,
      bottomBlocks[index],
      () => {
        block.classList.remove("block-color-active");
        block.classList.add("block-color-semi");
      },
      () => {
        paintActive("#row-3 .ten-bar", index + 1, "block-color-active");
        updateDigitLabel("tens");
      }
    );
  });
}

function bringRestHundredsToBottom() {
  animateHundredsToTarget(
    document.querySelector("#row-1 .hundreds-cell>.actual-blocks"),
    3
  );
}
