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
function removePaint(q){
  const blocks = document.querySelectorAll(q);
  blocks.forEach((block) => {
    block.classList.remove("block-color-active");
    block.classList.remove("block-color-semi");
  });
}

function animateCloneToTarget(
  sourceElement,
  targetElement,
  onStart,
  onComplete
) {
  if (onStart) onStart();

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
  const targetRect = targetElement.getBoundingClientRect();

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

function showChangeButtons(row, show) {
  const stepperButtons = document.querySelectorAll(
    `#row-${row} .stepper-buttons`
  );
  const digitLabels = document.querySelectorAll(`#row-${row} .digit-label`);
  stepperButtons.forEach((button) => {
    button.style.display = show ? "flex" : "none";
  });
  digitLabels.forEach((label) => {
    label.style.display = show ? "block" : "none";
  });
  const setButton = document.querySelector(`#row-${row} .setButton`);
  setButton.style.display = show ? "block" : "none";
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
      }
    );
  });

  unitIndex = nums[0][2];
}
function animateTens1() {
  const unitsTop = document.querySelectorAll(
    "#row-1 .ten-bar.block-color-active"
  );
  const unitsBottom = document.querySelectorAll("#row-3 .ten-bar");
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
      }
    );
  });

  tenIndex += nums[0][1];
}

function animateunits2() {
  let unitsTop = document.querySelectorAll(
    "#row-2 .unit-block.block-color-active"
  );
  unitsTop = Array.from(unitsTop);
  const length = unitsTop.length;
  if (unitIndex + length >= 10) {
    unitsTop = unitsTop.slice(length-10+unitIndex);
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
        paintActive("#row-3 .unit-block", unitIndex+index + 1, "block-color-active");
      }
    );
  });
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

  // Step 5: Style the cloned element for absolute positioning and initial placement.
  clonedElement.style.position = "absolute";
  clonedElement.style.top = `${originalRect.top + window.scrollY}px`; // Position it where the original was
  clonedElement.style.left = `${originalRect.left + window.scrollX}px`;
  clonedElement.style.width = `${originalRect.width}px`; // Maintain original dimensions
  clonedElement.style.height = `${originalRect.height}px`;
  clonedElement.style.margin = "0"; // Reset margins to avoid unexpected offsets
  clonedElement.style.zIndex = "1000"; // Ensure it's on top if it overlaps other elements
  clonedElement.style.boxSizing = "border-box"; // Ensure width/height include padding/border
  clonedElement.style.transition = "transform 0.3s ease-in-out"; // Add transition for animation
  // Step 6: Apply the CSS transform to translate the cloned element slightly.
  // 'translate(-10px, 10px)' moves it 10 pixels to the left and 10 pixels down
  // from its now absolute position (which mirrors the original's position).
  document.body.appendChild(clonedElement);
  const q = tag === "tens" ? "#row-3 .ten-bar" : "#row-3 .unit-block";
  removePaint(q);
  unitIndex=0;
  clonedElement.style.top = `${originalRect.top + window.scrollY +20}px`; // Position it where the original was
  clonedElement.style.left = `${originalRect.left + window.scrollX-25}px`;

  // Step 7: Add the cloned element to the document body.

  // Step 8: Return the cloned and translated element.
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

function animateHundredsToTarget(sourceElement, targetNo, onStart, onComplete) {
  if (onStart) onStart();
  const n = sourceElement.querySelectorAll(".hundred-block").length;
  function onStartInside() {
    sourceElement.innerHTML = "";
    const newBlock = document.createElement("div");
    newBlock.classList.add("hundred-block");
    newBlock.classList.add("block-color-placeholder");
    sourceElement.appendChild(newBlock);
  }
  function onCompleteInside() {
    createHundreds("#row-3 .hundred-block", n, "block-color-active");
    rearrangeHundreds(3);
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
  const targetRect = targetElement.getBoundingClientRect();
  targetRect.left -= targetNo * 10;
  targetRect.top -= targetNo * 10;

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
      if (config.onComplete && typeof config.onComplete === "function") {
        config.onComplete();
      }
      onCompleteInside();
    },
    { once: true }
  );
}
