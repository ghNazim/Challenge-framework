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
  clonedElement.classList.add("hidden");
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

async function animateUnitsTopToMiddle() {
  const middleBlocks = document.querySelectorAll(
    "#row-2 .unit-block.block-color-blank"
  );
  const topBlocks = document.querySelectorAll(
    "#row-1 .unit-block.block-color-active"
  );
  if (u1 >= u2) {
    const topSliced = Array.from(topBlocks).slice(u1 - u2);
    for (let i = 0; i < topSliced.length; i++) {
      const block = topSliced[topSliced.length - 1 - i];
      await promiseWrapper(
        animateCloneToTarget,
        block,
        middleBlocks[i],
        () => {
          block.classList.remove("block-color-active");
          updateDigitLabel("units",1);
        },
        () => {
          paintActive("#row-2 .unit-block", i + 1, "block-color-active");
        }
      );
    }
  }
}

async function animateRestUnitsToBottom() {
  const bottomBlocks = document.querySelectorAll("#row-3 .unit-block");
  const topBlocks = document.querySelectorAll(
    "#row-1 .unit-block.block-color-active"
  );
  for (let i = 0; i < topBlocks.length; i++) {
    const block = topBlocks[topBlocks.length - 1 - i];
    await promiseWrapper(
      animateCloneToTarget,
      block,
      bottomBlocks[i],
      () => {
        block.classList.remove("block-color-active");
        updateDigitLabel("units",1);
      },
      () => {
        paintActive("#row-3 .unit-block", i + 1, "block-color-active");
        updateDigitLabel("units");
      }
    );
  }
}

async function animateTensToMiddle() {
  const bottomBlocks = document.querySelectorAll("#row-2 .ten-bar");
  const topBlocks = document.querySelectorAll(
    "#row-1 .ten-bar.block-color-active"
  );
  for (let i = 0; i < topBlocks.length; i++) {
    const block = topBlocks[i];
    await promiseWrapper(
      animateCloneToTarget,
      block,
      bottomBlocks[i],
      () => {
        block.classList.remove("block-color-active");
        updateDigitLabel("tens",1);
      },
      () => {
        paintActive("#row-2 .ten-bar", i + 1, "block-color-active");
      }
    );
  }
}

async function animateCarryFromHundred() {
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
      dest.classList.remove("hidden");
      cloned = true;
      updateDigitLabel("tens",1);
    }
  );
}


async function animateTensCloneToMiddle() {
  const middleBlocks = document.querySelectorAll(
    "#row-2 .ten-bar.block-color-blank"
  );
  const topBlocks = tensClone.querySelectorAll("div");

  for (let i = 0; i < t2 - t1; i++) {
    const block = topBlocks[i];
    await promiseWrapper(
      animateCloneToTarget,
      block,
      middleBlocks[t1 + i],
      () => {
        block.classList.add("hidden");
        updateDigitLabel("tens",1);
      },
      () => {
        paintActive("#row-2 .ten-bar", t1 + i + 1, "block-color-active");
      }
    );
  }
}
async function animateTensCloneToBottom() {
  const bottomBlocks = document.querySelectorAll("#row-3 .ten-bar");
  const topBlocks = tensClone.querySelectorAll("div");

  for (let i = 0; i < 10 - t2 + t1; i++) {
    const block = topBlocks[t2 - t1 + i];
    await promiseWrapper(
      animateCloneToTarget,
      block,
      bottomBlocks[i],
      () => {
        block.classList.add("hidden");
        updateDigitLabel("tens",1);
      },
      () => {
        paintActive("#row-3 .ten-bar", i + 1, "block-color-active");
        updateDigitLabel("tens");
      }
    );
  }
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
        updateDigitLabel("tens",1);
      },
      () => {
        paintActive("#row-3 .ten-bar", index + 1, "block-color-active");
        updateDigitLabel("tens");
      }
    );
  });
}

