function animateCloneToTarget(
  sourceElement,
  targetElement,
  onStart,
  onComplete
) {
  const config = {
    duration: 500, // milliseconds
    easing: "ease-in-out",
    onComplete: onComplete,
  };

  // Create a deep clone of the source element
  const clone = sourceElement.cloneNode(true);
  if (onStart) onStart();
  // Remove ID from clone to prevent duplicate IDs in the DOM
  clone.id = "";

  // Get initial position and dimensions of the source element
  const sourceRect = sourceElement.getBoundingClientRect();

  // Get final position and dimensions of the target element
  const targetRect = targetElement.getBoundingClientRect();

  // Style the clone for absolute positioning and animation
  clone.style.position = "absolute";
  clone.style.margin = "0"; // Reset margins
  clone.style.boxSizing = "border-box"; // Consistent box model
  clone.style.zIndex = "50"; // Ensure it's on top during animation

  // Set initial size and position (relative to the document)
  clone.style.width = `${sourceRect.width}px`;
  clone.style.height = `${sourceRect.height}px`;
  clone.style.top = `${sourceRect.top + window.scrollY}px`;
  clone.style.left = `${sourceRect.left + window.scrollX}px`;

  // Set transition properties
  clone.style.transitionProperty = "top, left, width, height, opacity";
  clone.style.transitionDuration = `${config.duration}ms`;
  clone.style.transitionTimingFunction = config.easing;

  // Append the clone to the body to start the animation from its initial state
  document.body.appendChild(clone);

  // Use a minimal timeout or requestAnimationFrame to ensure the browser
  // has applied initial styles before applying the target styles for transition.
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      // Set target size and position to trigger the animation
      clone.style.width = `${targetRect.width}px`;
      clone.style.height = `${targetRect.height}px`;
      clone.style.top = `${targetRect.top + window.scrollY}px`;
      clone.style.left = `${targetRect.left + window.scrollX}px`;
      // Optional: make it slightly transparent during transition, or fade out
      // clone.style.opacity = '0.5'; // Example
    });
  });

  // Clean up after the animation
  clone.addEventListener(
    "transitionend",
    function handleTransitionEnd() {
      // Remove the event listener to prevent multiple firings if other transitions occur
      clone.removeEventListener("transitionend", handleTransitionEnd);

      // Remove the clone from the DOM
      if (clone.parentNode) {
        clone.parentNode.removeChild(clone);
      }

      // Execute callback if provided
      if (config.onComplete && typeof config.onComplete === "function") {
        config.onComplete();
      }
    },
    { once: true }
  );
}

function cloneAndTranslateElement(tag) {
  const querySelectorString = `#row-3 .${tag}-cell>.actual-blocks`;
  // Step 1: Find the original element using the query selector.
  const originalElement = document.querySelector(querySelectorString);

  // Step 2: Check if the element was found. If not, log an error and return null.
  if (!originalElement) {
    console.error(`Element not found for selector: "${querySelectorString}"`);
    return null;
  }

  // Step 3: Get the original element's position and dimensions.
  // This is important for positioning the absolute clone correctly.
  const originalRect = originalElement.getBoundingClientRect();

  // Step 4: Create a deep clone of the original element.
  // The 'true' argument means it will clone all child elements as well.
  const clonedElement = originalElement.cloneNode(true);
  const computedStyle = window.getComputedStyle(originalElement);

  clonedElement.style.display = computedStyle.display; // likely "flex"
  clonedElement.style.flexDirection = computedStyle.flexDirection; // likely "row"
  clonedElement.style.justifyContent = computedStyle.justifyContent;
  clonedElement.style.alignItems = computedStyle.alignItems;
  // Step 5: Style the cloned element for absolute positioning and initial placement.
  clonedElement.style.position = "absolute";
  clonedElement.style.top = `${originalRect.top + window.scrollY}px`; // Position it where the original was
  clonedElement.style.left = `${originalRect.left + window.scrollX}px`;
  clonedElement.style.width = `${originalRect.width}px`; // Maintain original dimensions
  clonedElement.style.height = `${originalRect.height}px`;
  clonedElement.style.margin = "0"; // Reset margins to avoid unexpected offsets
  clonedElement.style.zIndex = "100"; // Ensure it's on top if it overlaps other elements
  clonedElement.style.boxSizing = "border-box"; // Ensure width/height include padding/border
  clonedElement.style.transition = "all 0.3s ease-in-out"; // Add transition for animation

  document.body.appendChild(clonedElement);

  if (tag === "tens") {
    removePaint("#row-3 .ten-bar");
    tenIndex = 0;
  } else {
    removePaint("#row-3 .unit-block");
    unitIndex = 0;
  }
  requestAnimationFrame(() => {
    clonedElement.style.top = `${originalRect.top + window.scrollY + 20}px`;
    clonedElement.style.left = `${originalRect.left + window.scrollX - 25}px`;
  });

  return clonedElement;
}

function animateElementToTarget(sourceElement, targetElement, onComplete) {
  const config = {
    duration: 500, // milliseconds
    easing: "ease-in-out",
    onComplete: onComplete,
  };

  // Create a deep clone of the source element
  const clone = sourceElement;

  // Remove ID from clone to prevent duplicate IDs in the DOM

  // Get initial position and dimensions of the source element
  const sourceRect = sourceElement.getBoundingClientRect();

  // Get final position and dimensions of the target element
  const targetRect = targetElement.getBoundingClientRect();

  // Style the clone for absolute positioning and animation

  // Set transition properties
  clone.style.transitionProperty = "top, left, width, height, opacity";
  clone.style.transitionDuration = `${config.duration}ms`;
  clone.style.transitionTimingFunction = config.easing;

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      // Set target size and position to trigger the animation
      clone.style.top = `${targetRect.top + window.scrollY}px`;
      clone.style.left = `${targetRect.left + window.scrollX}px`;
      // Optional: make it slightly transparent during transition, or fade out
      // clone.style.opacity = '0.5'; // Example
    });
  });

  // Clean up after the animation
  clone.addEventListener(
    "transitionend",
    function handleTransitionEnd() {
      // Remove the event listener to prevent multiple firings if other transitions occur
      clone.removeEventListener("transitionend", handleTransitionEnd);

      // Remove the clone from the DOM
      if (clone.parentNode) {
        clone.parentNode.removeChild(clone);
      }

      // Execute callback if provided
      if (config.onComplete && typeof config.onComplete === "function") {
        config.onComplete();
      }
    },
    { once: true }
  );
}

function animateUnits1() {
  const unitsTop = document.querySelectorAll(
    "#row-1 .unit-block.block-color-active"
  );
  const unitsBottom = document.querySelectorAll("#row-3 .unit-block");
  unitsTop.forEach((block, index) => {
    animateCloneToTarget(
      block,
      unitsBottom[index],
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

  unitIndex = nums[0][2];
}
function animateTens1() {
    const initialTenindex = tenIndex;
  const unitsTop = document.querySelectorAll(
    "#row-1 .ten-bar.block-color-active"
  );
  const unitsBottom = document.querySelectorAll("#row-3 .ten-bar");
  unitsTop.forEach((block, index) => {
    animateCloneToTarget(
      block,
      unitsBottom[initialTenindex + index],
      () => {
        block.classList.remove("block-color-active");
        block.classList.add("block-color-semi");
      },
      () => {
        paintActive(
          "#row-3 .ten-bar",
          initialTenindex + index + 1,
          "block-color-active"
        );
        updateDigitLabel("tens");
      }
    );
  });

  tenIndex += nums[0][1];
}

function animateUnits2() {
  let unitsTop = document.querySelectorAll(
    "#row-2 .unit-block.block-color-active"
  );

  unitsTop = Array.from(unitsTop);
  const length = unitsTop.length;
  if (unitIndex + length >= 10) {
    unitsTop = unitsTop.slice(length - 10 + unitIndex);
  }

  const unitsBottom = document.querySelectorAll("#row-3 .unit-block");
  unitsTop.forEach((block, index) => {
    animateCloneToTarget(
      block,
      unitsBottom[unitIndex + index],
      () => {
        block.classList.remove("block-color-active");
        block.classList.add("block-color-semi");
      },
      () => {
        paintActive(
          "#row-3 .unit-block",
          unitIndex + index + 1,
          "block-color-active"
        );
        updateDigitLabel("units");
      }
    );
  });
}
function animateTens2() {
  let unitsTop = document.querySelectorAll(
    "#row-2 .ten-bar.block-color-active"
  );
  unitsTop = Array.from(unitsTop);
  const length = unitsTop.length;
  if (tenIndex + length >= 10) {
    unitsTop = unitsTop.slice(length - 10 + tenIndex);
  }
  const unitsBottom = document.querySelectorAll("#row-3 .ten-bar");
  unitsTop.forEach((block, index) => {
    animateCloneToTarget(
      block,
      unitsBottom[tenIndex + index],
      () => {
        block.classList.remove("block-color-active");
        block.classList.add("block-color-semi");
      },
      () => {
        paintActive(
          "#row-3 .ten-bar",
          tenIndex + index + 1,
          "block-color-active"
        );
        updateDigitLabel("tens");
      }
    );
  });
}

function animateHundredsToTarget(sourceElement, targetNo, onComplete) {
  const srcBlocks = sourceElement.querySelectorAll(".hundred-block");
  const n = srcBlocks.length;
  function onStartInside() {
    srcBlocks.forEach((block) => {
      block.classList.remove("block-color-active");
      block.classList.add("block-color-semi");
    });
  }
  function onCompleteInside() {
    createHundreds(
      "#row-3 .hundred-block",
      hundredIndex + n,
      "block-color-active"
    );
    hundredIndex += n;
    rearrangeHundreds(3);
    updateDigitLabel("hundreds");
  }

  const config = {
    duration: 500, // milliseconds
    easing: "ease-in-out",
    onComplete: onComplete,
  };

  // Create a deep clone of the source element
  const clone = sourceElement.cloneNode(true);

  // Remove ID from clone to prevent duplicate IDs in the DOM
  clone.id = "";

  // Get initial position and dimensions of the source element
  const sourceRect = sourceElement.getBoundingClientRect();

  // Get final position and dimensions of the target element
  const targetElement = document.querySelector(`#row-3 .hundred-block`);
  let targetRect = targetElement.getBoundingClientRect();
  targetRect = {
    ...targetRect,
    left: targetRect.left - targetNo * 10,
    top: targetRect.top - targetNo * 10,
  };

  // Style the clone for absolute positioning and animation
  clone.style.position = "absolute";
  clone.style.margin = "0"; // Reset margins
  clone.style.boxSizing = "border-box"; // Consistent box model
  clone.style.zIndex = "1000"; // Ensure it's on top during animation

  // Set initial size and position (relative to the document)
  clone.style.width = `${sourceRect.width}px`;
  clone.style.height = `${sourceRect.height}px`;
  clone.style.top = `${sourceRect.top + window.scrollY}px`;
  clone.style.left = `${sourceRect.left + window.scrollX}px`;

  // Set transition properties
  clone.style.transitionProperty = "top, left, width, height, opacity";
  clone.style.transitionDuration = `${config.duration}ms`;
  clone.style.transitionTimingFunction = config.easing;

  // Append the clone to the body to start the animation from its initial state
  document.body.appendChild(clone);
  onStartInside();
  // Use a minimal timeout or requestAnimationFrame to ensure the browser
  // has applied initial styles before applying the target styles for transition.
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      // Set target size and position to trigger the animation
      clone.style.top = `${targetRect.top + window.scrollY}px`;
      clone.style.left = `${targetRect.left + window.scrollX}px`;
      // Optional: make it slightly transparent during transition, or fade out
      // clone.style.opacity = '0.5'; // Example
    });
  });

  // Clean up after the animation
  clone.addEventListener(
    "transitionend",
    function handleTransitionEnd() {
      // Remove the event listener to prevent multiple firings if other transitions occur
      clone.removeEventListener("transitionend", handleTransitionEnd);

      // Remove the clone from the DOM
      if (clone.parentNode) {
        clone.parentNode.removeChild(clone);
      }

      // Execute callback if provided
      onCompleteInside();
      if (config.onComplete && typeof config.onComplete === "function") {
        config.onComplete();
      }
    },
    { once: true }
  );
}
