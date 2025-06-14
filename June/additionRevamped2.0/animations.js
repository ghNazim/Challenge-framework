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

function cloneAndTranslateElement(tag) {
  return new Promise((resolve) => {
    const querySelectorString = `#row-3 .${tag}-cell>.actual-blocks`;

    const originalElement = document.querySelector(querySelectorString);

    if (!originalElement) {
      console.error(`Element not found for selector: "${querySelectorString}"`);
      resolve(null); // Resolve early with null
      return;
    }

    const originalRect = originalElement.getBoundingClientRect();

    const clonedElement = originalElement.cloneNode(true);
    const computedStyle = window.getComputedStyle(originalElement);

    clonedElement.style.display = computedStyle.display;
    clonedElement.style.gap = computedStyle.gap;
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
    clonedElement.style.transition = "all 0.5s ease-in-out";

    document.body.appendChild(clonedElement);

    if (tag === "tens") {
      removePaint("#row-3 .ten-bar");
      tenIndex = 0;
    } else {
      removePaint("#row-3 .unit-block");
      unitIndex = 0;
    }

    // Listen for transitionend BEFORE triggering the animation
    clonedElement.addEventListener(
      "transitionend",
      function handleTransitionEnd(event) {
        // You can optionally check which property ended, e.g. event.propertyName === 'top' or 'left'
        clonedElement.removeEventListener("transitionend", handleTransitionEnd);
        resolve(clonedElement); // Resolve the Promise — now await will continue
      },
      { once: true }
    );

    // Now trigger the animation
    requestAnimationFrame(() => {
      clonedElement.style.top = `${originalRect.top + window.scrollY + 10}px`;
      clonedElement.style.left = `${originalRect.left + window.scrollX - 25}px`;
    });

    clonedElement.classList.add("wiggle");
  });
}

async function animateUnits1() {
  const unitsTop = document.querySelectorAll(
    "#row-1 .unit-block.block-color-active"
  );
  const unitsBottom = document.querySelectorAll("#row-3 .unit-block");
  for (let i = 0; i < unitsTop.length; i++) {
    const block = unitsTop[unitsTop.length - 1 - i];
    await promiseWrapper(
      animateCloneToTarget,
      block,
      unitsBottom[i],
      () => {
        block.classList.remove("block-color-active");
        block.classList.add("block-color-semi");
        setElementState(block, "Semi");
      },
      () => {
        unitsBottom[i].classList.add("block-color-active");
        setElementState(unitsBottom[i], "Active");
        updateDigitLabel("units");
      }
    );
  }
  unitIndex = nums[0][2];
}
async function animateTens1() {
  const initialTenindex = tenIndex;
  const unitsTop = document.querySelectorAll(
    "#row-1 .ten-bar.block-color-active"
  );
  const unitsBottom = document.querySelectorAll("#row-3 .ten-bar");

  for (let i = 0; i < unitsTop.length; i++) {
    const block = unitsTop[i];
    const dest = unitsBottom[initialTenindex + i];
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
  tenIndex += nums[0][1];
}

async function animateUnits2() {
  let unitsTop = document.querySelectorAll(
    "#row-2 .unit-block.block-color-active"
  );
  unitsTop = Array.from(unitsTop);
  const length = unitsTop.length;
  if (unitIndex + length >= 10) {
    unitsTop = unitsTop.slice(length - 10 + unitIndex);
  }
  const unitsBottom = document.querySelectorAll("#row-3 .unit-block");

  for (let i = 0; i < unitsTop.length; i++) {
    const block = unitsTop[unitsTop.length - 1 - i];
    const dest = unitsBottom[unitIndex + i];
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
async function animateTens2() {
  let unitsTop = document.querySelectorAll(
    "#row-2 .ten-bar.block-color-active"
  );
  unitsTop = Array.from(unitsTop);
  const length = unitsTop.length;
  if (tenIndex + length >= 10) {
    unitsTop = unitsTop.slice(0,10 - tenIndex);
  }
  const unitsBottom = document.querySelectorAll("#row-3 .ten-bar");

  for (let i = 0; i < unitsTop.length; i++) {
    const block = unitsTop[i];
    const dest = unitsBottom[tenIndex + i];
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

function animateTheTopHundredToTarget(srcNo, targetNo, onStart, onComplete) {
  const src = document.querySelectorAll(
    `#row-${srcNo} .hundred-block.block-color-active`
  );
  const target = document.querySelectorAll(`#row-${targetNo} .hundred-block`);
  const targetActiveLength = document.querySelectorAll(
    `#row-${targetNo} .hundred-block.block-color-active`
  ).length;
  sourceElement = src[src.length - 1];
  targetElement = target[0];
  const clone = createClone(sourceElement);
  let targetRect = targetElement.getBoundingClientRect();
  targetRect = {
    ...targetRect,
    left: targetRect.left - 10 * targetActiveLength,
    top: targetRect.top - 10 * targetActiveLength,
  };
  onStart?.();
  sourceElement.classList.remove("block-color-active");
  sourceElement.classList.add("block-color-semi");
  setElementState(sourceElement, "Semi");
  rearrangeHundreds(srcNo);
  function onCompleteInside() {
    onComplete?.();
    paintActive(
      `#row-${targetNo} .hundred-block`,
      targetActiveLength + 1,
      "block-color-active"
    );
    hundredIndex += 1;
    rearrangeHundreds(targetNo);
    updateDigitLabel("hundreds");
  }
  animateClone(clone, targetRect, onCompleteInside);
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

async function animateHundredsOneByOne(srcNo, targetNo, onStart, onComplete) {
  const src = document.querySelectorAll(
    `#row-${srcNo} .hundred-block.block-color-active`
  );
  for (let i = 0; i < src.length; i++) {
    await promiseWrapper(
      animateTheTopHundredToTarget,
      srcNo,
      targetNo,
      onStart
    );
  }
  onComplete?.();
}

function createClone(sourceElement) {
  const clone = sourceElement.cloneNode(true);
  clone.id = "";
  const sourceRect = sourceElement.getBoundingClientRect();
  clone.style.position = "absolute";
  clone.style.margin = "0"; // Reset margins
  clone.style.boxSizing = "border-box"; // Consistent box model
  clone.style.zIndex = "50"; // Ensure it's on top during animation

  // Set initial size and position (relative to the document)
  clone.style.width = `${sourceRect.width}px`;
  clone.style.height = `${sourceRect.height}px`;
  clone.style.top = `${sourceRect.top + window.scrollY}px`;
  clone.style.left = `${sourceRect.left + window.scrollX}px`;
  clone.style.transitionProperty = "top, left ";
  clone.style.transitionDuration = `500ms`;
  clone.style.transitionTimingFunction = "ease-in-out";
  document.body.appendChild(clone);
  return clone;
}

function animateClone(clone, targetRect, onComplete) {
  clone.style.transition = "all 0.5s ease-in-out";
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      clone.style.top = `${targetRect.top}px`;
      clone.style.left = `${targetRect.left}px`;
      clone.style.width = `${targetRect.width}px`;
      clone.style.height = `${targetRect.height}px`;
      clone.style.gap = "0";
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
