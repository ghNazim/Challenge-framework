// MAPS
const RCmap = {
  oColumn: ".right-panel .col-5",
  tColumn: ".right-panel .col-4",
  hColumn: ".right-panel .col-3",
  thColumn: ".right-panel .col-2",
  tthColumn: ".right-panel .col-1",
  num1Row: ".left-panel .row-num1",
  num2Row: ".left-panel .row-num2",
  resultRow: ".right-panel .row-result",
  rightRowHeader: ".right-panel .row-header",
  rightRowCarry: ".right-panel .row-carry",
  rightRowLine: ".right-panel .row-line",
  rightRowResult: ".right-panel .row-result",
  rightRowNum1: ".right-panel .row-num1",
  rightRowNum2: ".right-panel .row-num2",
};
const resultRow = {
  o: ".right-panel .row-result.o-color",
  t: ".right-panel .row-result.t-color",
  h: ".right-panel .row-result.h-color",
  th: ".right-panel .row-result.th-color",
  tth: ".right-panel .row-result.tth-color",
};
const carryRow = {
  o: ".right-panel .row-carry.o-color",
  t: ".right-panel .row-carry.t-color",
  h: ".right-panel .row-carry.h-color",
  th: ".right-panel .row-carry.th-color",
  tth: ".right-panel .row-carry.tth-color",
};
const tagToNumber = {
  o: 10,
  t: 100,
  h: 1000,
  th: 10000,
};

// MAPS end

// IMports
const highlightBox = document.getElementById("highlight-box");
const addButton = document.querySelector("#highlight-box>button");

const questions = [
  [67576, 15678],
  [12341, 23432],
  [33344, 41414],
];

let o1,
  o2,
  o3,
  h1,
  h2,
  h3,
  t1,
  t2,
  t3,
  th1,
  th2,
  th3,
  tt1,
  tt2,
  tt3,
  osum,
  tsum,
  hsum,
  thsum,
  ttsum,
  oOverflow,
  tOverflow,
  hOverflow,
  thOverflow,
  ttOverflow;
let questionIndex = 0,
  currentQuestion = null,
  answer,
  templateDataMCQ = null;

function getDataFromQuestion() {
  currentQuestion = questions[questionIndex];
  [tt1, th1, h1, t1, o1] = currentQuestion[0].toString().split("").map(Number);
  [tt2, th2, h2, t2, o2] = currentQuestion[1].toString().split("").map(Number);
  answer = currentQuestion[0] + currentQuestion[1];
  [tt3, th3, h3, t3, o3] = answer.toString().split("").map(Number);
  osum = o1 + o2;
  oOverflow = Number(osum > 9);
  tsum = t1 + t2 + oOverflow;
  tOverflow = Number(tsum > 9);
  hsum = h1 + h2 + tOverflow;
  hOverflow = Number(hsum > 9);
  thsum = th1 + th2 + hOverflow;
  thOverflow = Number(thsum > 9);
  ttsum = tt1 + tt2 + thOverflow;
  ttOverflow = Number(ttsum > 9);
  templateDataMCQ = {
    o1,
    o2,
    o3,
    h1,
    h2,
    h3,
    t1,
    t2,
    t3,
    th1,
    th2,
    th3,
    tt1,
    tt2,
    tt3,
    osum,
    tsum,
    hsum,
    thsum,
    ttsum,
    oOverflow,
    tOverflow,
    hOverflow,
    thOverflow,
    ttOverflow,
    osumx: osum,
    tsumx: tsum * 10,
    hsumx: hsum * 100,
    thsumx: thsum * 1000,
    ttsumx: ttsum * 10000,
    o1x: o1,
    t1x: t1 * 10,
    h1x: h1 * 100,
    th1x: th1 * 1000,
    tt1x: tt1 * 10000,
    o2x: o2,
    t2x: t2 * 10,
    h2x: h2 * 100,
    th2x: th2 * 1000,
    tt2x: tt2 * 10000,
    o3x: o3,
    t3x: t3 * 10,
    h3x: h3 * 100,
    th3x: th3 * 1000,
    tt3x: tt3 * 10000,
    osumx_minus: osum - 1,
    osumx_plus: osum + 1,
    tsumx_minus: (tsum - 1) * 10,
    tsumx_plus: (tsum + 1) * 10,
    hsumx_minus: (hsum - 1) * 100,
    hsumx_plus: (hsum + 1) * 100,
    thsumx_minus: (thsum - 1) * 1000,
    thsumx_plus: (thsum + 1) * 1000,
    ttsumx_minus: (ttsum - 1) * 10000,
    ttsumx_plus: (ttsum + 1) * 10000,

    // Variations for MCQ options (result digits)
    o3x_minus: o3 - 1,
    o3x_plus: o3 + 1,
    t3x_minus: (t3 - 1) * 10,
    t3x_plus: (t3 + 1) * 10,
    h3x_minus: (h3 - 1) * 100,
    h3x_plus: (h3 + 1) * 100,
    th3x_minus: (th3 - 1) * 1000,
    th3x_plus: (th3 + 1) * 1000,
    tt3x_minus: (tt3 - 1) * 10000,
    tt3x_plus: (tt3 + 1) * 10000,
  };
}
[addButton, nextButton].forEach((btn) =>
  btn.addEventListener("click", () => playSound("click"))
);
function fillNumbers() {
  // Deconstruct the numbers from the current question
  const [num1, num2] = currentQuestion;
  const num1Digits = num1.toString().split("");
  const num2Digits = num2.toString().split("");

  // --- Left Panel (Single Digits) ---
  const leftRow1Items = document.querySelectorAll(".left-panel .row-num1.item");
  const leftRow2Items = document.querySelectorAll(".left-panel .row-num2.item");

  // Fill the first number row (e.g., 6 7 5 7 6)
  // Starts from index 1 because the first column is a placeholder
  num1Digits.forEach((digit, index) => {
    leftRow1Items[index + 1].textContent = digit;
  });

  // Fill the second number row (e.g., + 1 5 6 7 8)
  num2Digits.forEach((digit, index) => {
    leftRow2Items[index + 1].textContent = digit;
  });

  // --- Right Panel (Place Values) ---
  const rightRow1Items = document.querySelectorAll(
    ".right-panel .row-num1.item"
  );
  const rightRow2Items = document.querySelectorAll(
    ".right-panel .row-num2.item"
  );
  const placeValues = [10000, 1000, 100, 10, 1];

  // Fill the first number row with place values (e.g., 60000, 7000, 500, 70, 6)
  num1Digits.forEach((digit, index) => {
    rightRow1Items[index].textContent = digit * placeValues[index];
  });

  // Fill the second number row with place values (e.g., 10000, 5000, 600, 70, 8)
  num2Digits.forEach((digit, index) => {
    rightRow2Items[index].textContent = digit * placeValues[index];
  });
}

// Also, you'll need to call this new function from your `initiate` function.

function showRC(q, show) {
  if (show) {
    document
      .querySelectorAll(q)
      .forEach((el) => (el.classList.remove("text-transparent")));
  } else {
    document
      .querySelectorAll(q)
      .forEach((el) => (el.classList.add("text-transparent")));
  }
}
function showAddButton(show) {
  const display = show ? "flex" : "none";
  document.querySelector("#highlight-box>button").style.display = display;
}
function popInNumber(q, text) {
  const container = document.querySelector(q);
  container.innerHTML = `<span style="display: inline-block;">${text}</span>`;
  const span = container.querySelector("span");

  // Animate opacity and scale
  span.animate(
    [
      { opacity: 0, transform: "scale(0)" },
      { opacity: 1, transform: "scale(1)" },
    ],
    {
      duration: 300,
      easing: "ease-out",
      fill: "forwards",
    }
  );
}
function popInResult(tag, num) {
  const q = resultRow[tag];
  popInNumber(q, num);
}
function loadMcqIn(mcqId, cb) {
  highlightBox.style.display = "none";
  showTextWithTag("mcqIn");
  nextButton.disabled = true;
  loadMcq(mcqId);
  triggerMCQoverlay(true);
  nextButton.onclick = () => {
    triggerMCQoverlay(false);
    highlightBox.style.display = "block";
    cb?.();
  };
}

function loadMcq(mcqId) {
  const templateData = templateDataMCQ;
  // 1. Get references to the HTML elements
  const questionEl = document.getElementById("mcq-question");
  const optionsEl = document.getElementById("mcq-options");
  const feedbackEl = document.getElementById("bottom-statement"); // <--- UPDATED LINE

  // 2. Find the corresponding MCQ data
  const mcq = mcqData[mcqId];

  if (!mcq) {
    console.error(`Error: MCQ with ID "${mcqId}" not found.`);
    return;
  }

  // 3. Clear any previous content and state
  optionsEl.innerHTML = "";

  // Re-enable the options container for the new question
  optionsEl.style.pointerEvents = "auto";

  // Helper function to replace {{placeholders}} with actual data
  const fillTemplate = (text) =>
    text.replace(/\{\{(\w+)\}\}/g, (_, key) => templateData[key] ?? "");

  // 4. Set the question text
  questionEl.textContent = fillTemplate(mcq.question);

  // 5. Create and display each option
  mcq.options.forEach((optionText, index) => {
    const optionDiv = document.createElement("div");
    optionDiv.classList.add("option");
    optionDiv.textContent = fillTemplate(optionText);

    optionDiv.addEventListener("click", () => {
      // Disable the entire options container to prevent more clicks

      let feedbackText = "";
      if (index === mcq.answer_index) {
        // Correct answer
        optionsEl.style.pointerEvents = "none";
        optionDiv.classList.add("correct");
        feedbackText = mcq.correct_feedback;
        playSound("correct");
        nextButton.disabled = false;
      } else {
        // Wrong answer
        optionDiv.classList.add("wrong");
        feedbackText = mcq.wrong_feedback;
        playSound("wrong");
      }

      // Update the feedback element if it exists
      if (feedbackEl) {
        feedbackEl.textContent = feedbackText;
      }
    });

    optionsEl.appendChild(optionDiv);
  });
}
function highlightColumnBorder(query) {
  borderGreen(false);
  const elements = document.querySelectorAll(`${query}`);
  const box = document.getElementById("highlight-box");
  box.style.display = "block"; // show box

  const firstRect = elements[0].getBoundingClientRect();
  const lastRect = elements[elements.length - 1].getBoundingClientRect();
  const left = firstRect.left;
  const top = firstRect.top;
  const right = firstRect.right;
  const bottom = lastRect.bottom;

  box.style.left = `${left}px`;
  box.style.top = `${top + scrollY}px`;
  box.style.width = `${right - left}px`;
  box.style.height = `${bottom - top}px`;
}

function unhighlightColumn() {
  const box = document.getElementById("highlight-box");
  box.style.display = "none";
}

function highlightRowBorder(query) {
  borderGreen(false);
  const elements = document.querySelectorAll(`${query}`);
  const box = document.getElementById("highlight-box");
  box.style.display = "block"; // show box

  const firstRect = elements[0].getBoundingClientRect();
  const lastRect = elements[elements.length - 1].getBoundingClientRect();
  const left = firstRect.left;
  const top = firstRect.top;
  const right = lastRect.right;
  const bottom = firstRect.bottom;
  const offset = 1;
  box.style.left = `${left - offset}px`;
  box.style.top = `${top - offset}px`;
  box.style.width = `${right - left + 2 * offset}px`;
  box.style.height = `${bottom - top + 2 * offset}px`;
}

function borderGreen(bool) {
  if (bool) {
    document.querySelector("#highlight-box").classList.add("green-box");
  } else {
    document.querySelector("#highlight-box").classList.remove("green-box");
  }
}
function vibrateElementWithTag(tag, bool) {
  vibrateElement(document.querySelector(`${tag}`), bool);
}
function stage0() {
  // showRC(RCmap.rightRowHeader, false);
  showRC(RCmap.rightRowNum1, false);
  showRC(RCmap.rightRowNum2, false);
  showRC(RCmap.rightRowLine, false);
  showTextWithTag("start");
  nextButton.disabled = false;
  showFtue(nextButton);
  nextButton.onclick = stage1;
}
function stage1() {
  playSound("click");
  showTextWithTag("split_number1");
  hideFtue();
  nextButton.disabled = true;
  highlightRowBorder(RCmap.num1Row);
  highlightBox.classList.add("clickable");
  showFtue(highlightBox);
  highlightBox.onclick = stage2;
}
function stage2() {
  playSound("click");
  hideFtue();
  showRC(RCmap.rightRowNum1, true);
  // showRC(RCmap.rightRowHeader, true);
  showTextWithTag("split_number2");
  highlightRowBorder(RCmap.num2Row);
  highlightBox.classList.add("clickable");
  highlightBox.onclick = stage3;
  setTimeout(() => {
    showFtue(highlightBox);
  }, 500);
}
function stage3() {
  playSound("click");
  showTextWithTag("after_split");
  hideFtue();
  showRC(RCmap.rightRowNum2, true);
  showRC(RCmap.rightRowLine, true);
  nextButton.disabled = false;
  highlightBox.classList.remove("clickable");
  highlightBox.onclick = null;
  unhighlightColumn();
  showFtue(nextButton);
  nextButton.onclick = onesMcq1;
}
function onesMcq1() {
  hideFtue();
  loadMcqIn("ones_place", () => {
    highlightColumnBorder(RCmap.oColumn);
    setTimeout(() => {
      showAddButton(true);
      showFtue(addButton);
    }, 500);
    nextButton.disabled = true;
    addButton.onclick = onesMcq2;
    showTextWithTag("ones_1");
  });
}
function onesMcq2() {
  hideFtue();
  loadMcqIn("add_ones", () => {
    showAddButton(false);
    popInResult("o", osum);
    nextButton.disabled = false;
    showFtue(nextButton);
    borderGreen(true);
    if (oOverflow) {
      vibrateElementWithTag(resultRow.o);
      nextButton.onclick = afterMcq2;
      showTextWithTag("ones_carryover");
    } else {
      nextButton.onclick = tens1;
      showTextWithTag("ones_complete");
    }
  });
}
function afterMcq2() {
  hideFtue();
  splitOverlay("mcq_one");
  loadMcqIn("ones_split", () => {
    popInResult("o", splitNumber(osum));
    nextButton.onclick = moveCarry;
    showFtue(nextButton);
    showTextWithTag("ones_carryover2");
    nextButton.textContent = buttonText.carry_over;
    splitOverlay(false);
  });
}
function moveCarry() {
  vibrateElementWithTag(resultRow.o, false);
  nextButton.textContent = buttonText.next;
  animateCarry(resultRow.o, carryRow.t, "o");
  showTextWithTag("ones_complete");
  nextButton.onclick = tens1;
}
function tens1() {
  borderGreen(false);
  highlightColumnBorder(RCmap.tColumn);
  setTimeout(() => {
    showAddButton(true);
    showFtue(addButton);
  }, 500);
  nextButton.disabled = true;
  addButton.onclick = tensMcq2;
}
function splitNumber(n) {
  if (n < 10) return [n, 0]; // No split needed for single-digit numbers

  const length = n.toString().length;
  const base = Math.pow(10, length - 1);
  const remainder = n - base;

  return `${base}<br>+${remainder}`;
}
function animateCarry(q1, q2, tag) {
  const tagToResult = { o: o3, t: t3 * 10, h: h3 * 100, th: th3 * 1000 };
  const text = tagToNumber[tag];

  const source = document.querySelector(q1);
  const target = document.querySelector(q2);
  if (!source || !target) return;

  // Create floating element
  const floating = document.createElement("span");
  floating.textContent = text;
  floating.style.position = "absolute";
  floating.style.zIndex = 1000;
  floating.style.pointerEvents = "none";
  floating.style.transition = "transform 0.5s ease, opacity 0.5s ease";
  floating.style.opacity = "1";
  floating.style.fontSize = "2rem";
  floating.style.color = "black";

  // Get positions
  const srcRect = source.getBoundingClientRect();
  const tgtRect = target.getBoundingClientRect();

  // Set initial position
  const startX = srcRect.left + srcRect.width / 2;
  const startY = srcRect.top + srcRect.height / 2;
  const endX = tgtRect.left + tgtRect.width / 2;
  const endY = tgtRect.top + tgtRect.height / 2;

  floating.style.left = `${startX}px`;
  floating.style.top = `${startY}px`;
  floating.style.transform = `translate(-50%, -50%) scale(1)`;

  document.body.appendChild(floating);

  // Force layout before animating
  requestAnimationFrame(() => {
    const dx = endX - startX;
    const dy = endY - startY;

    floating.style.transform = `translate(${dx}px, ${dy}px) scale(0.5)`;
  });
  console.log(tagToResult[tag]);

  // Clean up after animation
  setTimeout(() => {
    document.body.removeChild(floating);
    target.innerHTML = `<span>${text}</span>`;
    document.querySelector(resultRow[tag]).textContent = tagToResult[tag];
  }, 500);
}
function splitOverlay(tag) {
  const mcqOverlay = document.getElementById("mcq-overlay");
  if (!tag) {
    mcqOverlay.classList.remove("split");
    return;
  }
  const finalText = fillPlaceholders(
    textPool[tag],
    templateDataMCQ
  );
  const leftInfo = document.getElementById("left-info");
  leftInfo.innerHTML = finalText;
  mcqOverlay.classList.add("split");
}
// GEMINI TENS FLOW and AFTER
/*
 * In the file `longColumnAddition/applet/applet.js`,
 * paste all the following code at the very end of the file.
 */

// --- TENS PLACE FLOW ---
function tensMcq2() {
  hideFtue();
  // The MCQ includes the carry-over from the ones place (oOverflow)
  loadMcqIn("add_tens", () => {
    showAddButton(false);
    popInResult("t", tsum * 10);
    borderGreen(true);
    vibrateElementWithTag(resultRow.t);
    nextButton.disabled = false;
    showFtue(nextButton);
    if (tOverflow) {
      nextButton.onclick = afterTensMcq2;
      showTextWithTag("tens_carryover");
    } else {
      nextButton.onclick = hundreds1;
      showTextWithTag("tens_complete");
    }
  });
}

function afterTensMcq2() {
  splitOverlay("mcq_ten");
  hideFtue();
  loadMcqIn("tens_split", () => {
    popInResult("t", splitNumber(tsum * 10));
    nextButton.onclick = moveTensCarry;
    showFtue(nextButton);
    showTextWithTag("tens_carryover2");
    nextButton.textContent = buttonText.carry_over;
  splitOverlay(false);

  });
}

function moveTensCarry() {
  vibrateElementWithTag(resultRow.t, false);
  nextButton.textContent = buttonText.next;
  hideFtue();
  // When carrying from tens, the '1' represents 1 hundred.
  animateCarry(resultRow.t, carryRow.h, "t");
  showTextWithTag("tens_complete");
  nextButton.onclick = hundreds1;
  showFtue(nextButton);
}

// --- HUNDREDS PLACE FLOW ---
function hundreds1() {
  borderGreen(false);
  hideFtue();
  unhighlightColumn();
  showTextWithTag("hundreds_1");
  highlightColumnBorder(RCmap.hColumn);
  setTimeout(() => {
    showAddButton(true);
    showFtue(addButton);
  }, 500);
  nextButton.disabled = true;
  addButton.onclick = hundredsMcq2;
}

function hundredsMcq2() {
  hideFtue();
  
  loadMcqIn("add_hundreds", () => {
    showAddButton(false);
    popInResult("h", hsum * 100);
    vibrateElementWithTag(resultRow.h);
    borderGreen(true);
    nextButton.disabled = false;
    showFtue(nextButton);
   
    if (hOverflow) {
      nextButton.onclick = afterHundredsMcq2;
      showTextWithTag("hundreds_carryover");
    } else {
      nextButton.onclick = thousands1;
      showTextWithTag("hundreds_complete");
    }
  });
}

function afterHundredsMcq2() {
    splitOverlay("mcq_hundred");
  hideFtue();
  loadMcqIn("hundreds_split", () => {
    popInResult("h", splitNumber(hsum * 100));
    nextButton.onclick = moveHundredsCarry;
    showFtue(nextButton);
    showTextWithTag("hundreds_carryover2");
     splitOverlay(false);
    nextButton.textContent = buttonText.carry_over;
  });
}

function moveHundredsCarry() {
  vibrateElementWithTag(resultRow.h, false);
  nextButton.textContent = buttonText.next;
  hideFtue();
  animateCarry(resultRow.h, carryRow.th, "h");
  showTextWithTag("hundreds_complete");
  nextButton.onclick = thousands1;
  showFtue(nextButton);
}

// --- THOUSANDS PLACE FLOW ---
function thousands1() {
  borderGreen(false);
  hideFtue();
  unhighlightColumn();
  showTextWithTag("thousands_1");
  highlightColumnBorder(RCmap.thColumn);
  setTimeout(() => {
    showAddButton(true);
    showFtue(addButton);
  }, 500);
  nextButton.disabled = true;
  addButton.onclick = thousandsMcq2;
}

function thousandsMcq2() {
  hideFtue();
  
  loadMcqIn("add_thousands", () => {
    showAddButton(false);
    popInResult("th", thsum * 1000);
    borderGreen(true);
    vibrateElementWithTag(resultRow.th);
    borderGreen(true);
    
    nextButton.disabled = false;
    showFtue(nextButton);
    if (thOverflow) {
      nextButton.onclick = afterThousandsMcq2;
      showTextWithTag("thousands_carryover");
    } else {
      nextButton.onclick = tenThousands1;
      showTextWithTag("thousands_complete");
    }
  });
}

function afterThousandsMcq2() {
    splitOverlay("mcq_thousand");
  hideFtue();
  loadMcqIn("thousands_split", () => {
    popInResult("th", splitNumber(thsum * 1000));
    nextButton.onclick = moveThousandsCarry;
    showFtue(nextButton);
    showTextWithTag("thousands_carryover2");
    splitOverlay(false);
    nextButton.textContent = buttonText.carry_over;
  });
}

function moveThousandsCarry() {
  vibrateElementWithTag(resultRow.th, false);
  nextButton.textContent = buttonText.next;
  hideFtue();
  animateCarry(resultRow.th, carryRow.tth, "th");
  showTextWithTag("thousands_complete");
  nextButton.onclick = tenThousands1;
  showFtue(nextButton);
}

// --- TEN THOUSANDS PLACE FLOW ---
function tenThousands1() {
  borderGreen(false);
  hideFtue();
  unhighlightColumn();
  showTextWithTag("ten_thousands_1");
  highlightColumnBorder(RCmap.tthColumn);
  setTimeout(() => {
    showAddButton(true);
    showFtue(addButton);
  }, 500);
  nextButton.disabled = true;
  addButton.onclick = tenThousandsMcq2;
}

function tenThousandsMcq2() {
  hideFtue();
  loadMcqIn("add_ten_thousands", () => {
    showAddButton(false);
    unhighlightColumn();
    popInResult("tth", ttsum * 10000);
    borderGreen(true);
    showTextWithTag("ten_thousands_complete");
    nextButton.disabled = false;
    showFtue(nextButton);
    nextButton.onclick = highLightResultStage;
  });
}

// --- END STAGE ---
function highLightResultStage() {
  nextButton.disabled = true;
  showTextWithTag("combine");
  showAddButton(false);
  highlightRowBorder(RCmap.resultRow);
  borderGreen(true);
  highlightBox.classList.add("clickable");
  highlightBox.onclick = endStage;
  setTimeout(() => {
    showFtue(highlightBox);
  }, 500);
}
function endStage() {
  nextButton.disabled = false;
  hideFtue();
  unhighlightColumn();
  // Final reveal of the answer in the left panel
  const leftResultItems = document.querySelectorAll(
    ".left-panel .row-result.item"
  );
  const answerDigits = answer.toString().split("");
  answerDigits.forEach((digit, index) => {
    // Ensure the element exists before setting textContent
    if (leftResultItems[index + 1]) {
      leftResultItems[index + 1].textContent = digit;
    }
  });

  // Add the final answer to the template data for the summary text
  templateDataMCQ.answer = answer;
  const finalText = fillPlaceholders(
    textPoolEnglish.final_summary,
    templateDataMCQ
  );
  showText(finalText);

  // Finish the activity
  playSound("congrats");
  confettiBurst();
  nextButton.textContent = buttonText.try_new;
  nextButton.onclick = location.reload;
}

// GEMINI END
function initiate() {
  getDataFromQuestion();
  fillNumbers();
  stage0();
}

initiate();


function showTextWithTag(tag, colorClass) {
  const finalText = fillPlaceholders(textPool[tag], templateDataMCQ);
  showText(finalText, colorClass);
}