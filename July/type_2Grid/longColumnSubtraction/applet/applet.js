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
const topRow = {
  o: ".right-panel .row-num1.o-color",
  t: ".right-panel .row-num1.t-color",
  h: ".right-panel .row-num1.h-color",
  th: ".right-panel .row-num1.th-color",
  tth: ".right-panel .row-num1.tth-color",
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
const q = document.querySelector.bind(document);

const questions = [
  [63333, 18888],
  [52341, 23432],
  [63344, 41414],
  [78787, 11445],
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
  oBorrow,
  tBorrow,
  hBorrow,
  thBorrow,
  ttBorrow,
  oCorrect,
  tCorrect,
  hCorrect,
  thCorrect,
  ttCorrect,
  oFinal,
  tFinal,
  hFinal,
  thFinal,
  ttFinal;
let questionIndex = 0,
  currentQuestion = null,
  answer,
  templateDataMCQ = null;

function getDataFromQuestion() {
  currentQuestion = questions[questionIndex];
  [tt1, th1, h1, t1, o1] = currentQuestion[0].toString().split("").map(Number);
  [tt2, th2, h2, t2, o2] = currentQuestion[1].toString().split("").map(Number);
  answer = currentQuestion[0] - currentQuestion[1];
  [tt3, th3, h3, t3, o3] = answer.toString().split("").map(Number);

  oBorrow = Number(o1 < o2);
  tBorrow = Number(t1 - oBorrow < t2);
  hBorrow = Number(h1 - tBorrow < h2);
  thBorrow = Number(th1 - hBorrow < th2);
  ttBorrow = Number(tt1 - thBorrow < tt2);
  oCorrect = o1;
  tCorrect = t1 - oBorrow;
  hCorrect = h1 - tBorrow;
  thCorrect = th1 - hBorrow;
  ttCorrect = tt1 - thBorrow;

  oFinal = o1 + oBorrow * 10;
  tFinal = t1 + tBorrow * 10 - oBorrow;
  hFinal = h1 + hBorrow * 10 - tBorrow;
  thFinal = th1 + thBorrow * 10 - hBorrow;
  ttFinal = tt1 + ttBorrow * 10 - thBorrow;
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
    oBorrow,
    tBorrow,
    hBorrow,
    thBorrow,
    ttBorrow,
    oCorrect,
    tCorrect,
    hCorrect,
    thCorrect,
    ttCorrect,
    oFinal,
    oFinal_minus: oFinal - 1,
    oFinal_plus: oFinal + 1,
    tFinal,
    tFinal_minus: tFinal - 1,
    tFinal_plus: tFinal + 1,
    hFinal,
    hFinal_minus: hFinal - 1,
    hFinal_plus: hFinal + 1,
    thFinal,
    thFinal_minus: thFinal - 1,
    thFinal_plus: thFinal + 1,
    ttFinal,
    ttFinal_minus: ttFinal - 1,
    ttFinal_plus: ttFinal + 1,
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

function showRC(q, show) {
  if (show) {
    document
      .querySelectorAll(q)
      .forEach((el) => el.classList.remove("text-transparent"));
  } else {
    document
      .querySelectorAll(q)
      .forEach((el) => el.classList.add("text-transparent"));
  }
}
function showAddButton(show = true) {
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
  const feedbackEl = document.getElementById("bottom-statement");

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
  questionEl.innerHTML = fillTemplate(mcq.question);

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

function highlightRowBorder(query, heightFraction = 1) {
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
  box.style.height = `${(bottom - top) / heightFraction + 2 * offset}px`;
}

function borderGreen(bool) {
  if (bool) {
    document.querySelector("#highlight-box").classList.add("green-box");
  } else {
    document.querySelector("#highlight-box").classList.remove("green-box");
  }
}
function borderRed(bool) {
  if (bool) {
    document.querySelector("#highlight-box").classList.add("red-box");
  } else {
    document.querySelector("#highlight-box").classList.remove("red-box");
  }
}
function vibrateElementWithTag(tag, bool) {
  vibrateElement(document.querySelector(`${tag}`), bool);
}
function stage0() {
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
  highlightBox.onclick = stage2;
  setTimeout(() => {
    showFtue(highlightBox, true);
  }, 500);
}
function stage2() {
  playSound("click");
  hideFtue();
  showRC(RCmap.rightRowNum1, true);
  showTextWithTag("split_number2");
  highlightRowBorder(RCmap.num2Row);
  highlightBox.classList.add("clickable");
  highlightBox.onclick = stage3;
  setTimeout(() => {
    showFtue(highlightBox, true);
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
    if (oBorrow) {
      addButton.onclick = onesMinusClickBorrow;
    } else {
      addButton.onclick = finalAddOnes;
    }
    showTextWithTag("ones_1");
  });
}
function onesMinusClickBorrow() {
  showTextWithTag("topLesser_one");
  splitOverlay("ones_mcq1");
  hideFtue();
  borderRed(true);
  showAddButton(false);
  setTimeout(() => {
    loadMcqIn("ones_borrow", () => {
      const el = selectTopRowCell("t");
      showFtue(el);
      el.onclick = onClickingTenTopCell;
      nextButton.disabled = true;
      splitOverlay(false);
      showTextWithTag("split_ones");
    });
  }, 1200);
}
function onClickingTenTopCell() {
  showTextWithTag("splitted_for_ones");
  onClickingNextCell("t");
  q(topRow.t).onclick = null;
  nextButton.disabled = false;
  nextButton.onclick = howManyOnes;
}
function howManyOnes() {
  splitOverlay("ones_mcq2");
  hideFtue();
  loadMcqIn("num_at_ones", () => {
    showAddButton();
    showFtue(addButton);
    addButton.onclick = finalAddOnes;
    borderRed(false);
    popInNumber(carryRow.t, tCorrect * 10);
    popInNumber(topRow.o, oFinal);
    nextButton.disabled = true;
    splitOverlay(false);
    showTextWithTag("enough_ones");
  });
}
function finalAddOnes() {
  hideFtue();
  showAddButton(false);
  loadMcqIn("final_add_ones", () => {
    nextButton.disabled = false;
    showAddButton(false);
    showFtue(nextButton);
    popInNumber(resultRow.o, o3);
    borderGreen(true);
    nextButton.onclick = moveToTens;
    showTextWithTag("subtracted_ones");
  });
}

function moveToTens() {
  hideFtue();
  unhighlightColumn();
  borderGreen(false);
  showTextWithTag("tens_1");
  highlightColumnBorder(RCmap.tColumn);
  setTimeout(() => {
    showAddButton(true);
    showFtue(addButton);
  }, 500);
  nextButton.disabled = true;
  if (tBorrow) {
    addButton.onclick = tensMinusClickBorrow;
  } else {
    addButton.onclick = finalAddTens;
  }
}

function tensMinusClickBorrow() {
  showTextWithTag("topLesser_ten");
  splitOverlay("tens_mcq1");
  hideFtue();
  borderRed(true);
  showAddButton(false);
  setTimeout(() => {
    loadMcqIn("tens_borrow", () => {
      const el = selectTopRowCell("h");
      showFtue(el);
      el.onclick = onClickingHundredTopCell;
      nextButton.disabled = true;
      splitOverlay(false);
      showTextWithTag("split_tens");
    });
  }, 1200);
}

function onClickingHundredTopCell() {
  showTextWithTag("splitted_for_tens");
  onClickingNextCell("h");
  q(topRow.h).onclick = null;
  nextButton.disabled = false;
  nextButton.onclick = howManyTens;
}

function howManyTens() {
  splitOverlay("tens_mcq2");
  hideFtue();
  loadMcqIn("num_at_tens", () => {
    showAddButton();
    showFtue(addButton);
    addButton.onclick = finalAddTens;
    borderRed(false);
    popInNumber(carryRow.h, hCorrect * 100);
    // The requested change
    const tensTopRow = document.querySelector(topRow.t);
    if (tensTopRow.classList.contains("strike-through")) {
      popInNumber(carryRow.t, tFinal * 10);
    } else {
      popInNumber(topRow.t, tFinal * 10);
    }
    nextButton.disabled = true;
    splitOverlay(false);
    showTextWithTag("enough_tens");
  });
}

function finalAddTens() {
  hideFtue();
  showAddButton(false);
  loadMcqIn("final_add_tens", () => {
    nextButton.disabled = false;
    showAddButton(false);
    showFtue(nextButton);
    popInNumber(resultRow.t, t3 * 10);
    borderGreen(true);
    nextButton.onclick = moveToHundreds;
    showTextWithTag("subtracted_tens");
  });
}

function moveToHundreds() {
  hideFtue();
  unhighlightColumn();
  borderGreen(false);
  showTextWithTag("hundreds_1");
  highlightColumnBorder(RCmap.hColumn);
  setTimeout(() => {
    showAddButton(true);
    showFtue(addButton);
  }, 500);
  nextButton.disabled = true;
  if (hBorrow) {
    addButton.onclick = hundredsMinusClickBorrow;
  } else {
    addButton.onclick = finalAddHundreds;
  }
}

function hundredsMinusClickBorrow() {
  showTextWithTag("topLesser_hundred");
  splitOverlay("hundreds_mcq1");
  hideFtue();
  borderRed(true);
  showAddButton(false);
  setTimeout(() => {
    loadMcqIn("hundreds_borrow", () => {
      const el = selectTopRowCell("th");
      showFtue(el);
      el.onclick = onClickingThousandTopCell;
      nextButton.disabled = true;
      splitOverlay(false);
      showTextWithTag("split_hundreds");
    });
  }, 1200);
}

function onClickingThousandTopCell() {
  showTextWithTag("splitted_for_hundreds");
  onClickingNextCell("th");
  q(topRow.th).onclick = null;
  nextButton.disabled = false;
  nextButton.onclick = howManyHundreds;
}

function howManyHundreds() {
  splitOverlay("hundreds_mcq2");
  hideFtue();
  loadMcqIn("num_at_hundreds", () => {
    showAddButton();
    showFtue(addButton);
    addButton.onclick = finalAddHundreds;
    borderRed(false);
    popInNumber(carryRow.th, thCorrect * 1000);
    // The requested change
    const hundredsTopRow = document.querySelector(topRow.h);
    if (hundredsTopRow.classList.contains("strike-through")) {
      popInNumber(carryRow.h, hFinal * 100);
    } else {
      popInNumber(topRow.h, hFinal * 100);
    }
    nextButton.disabled = true;
    splitOverlay(false);
    showTextWithTag("enough_hundreds");
  });
}

function finalAddHundreds() {
  hideFtue();
  showAddButton(false);
  loadMcqIn("final_add_hundreds", () => {
    nextButton.disabled = false;
    showAddButton(false);
    showFtue(nextButton);
    popInNumber(resultRow.h, h3 * 100);
    borderGreen(true);
    nextButton.onclick = moveToThousands;
    showTextWithTag("subtracted_hundreds");
  });
}

function moveToThousands() {
  hideFtue();
  unhighlightColumn();
  borderGreen(false);
  showTextWithTag("thousands_1");
  highlightColumnBorder(RCmap.thColumn);
  setTimeout(() => {
    showAddButton(true);
    showFtue(addButton);
  }, 500);
  nextButton.disabled = true;
  if (thBorrow) {
    addButton.onclick = thousandsMinusClickBorrow;
  } else {
    addButton.onclick = finalAddThousands;
  }
}

function thousandsMinusClickBorrow() {
  showTextWithTag("topLesser_thousand");
  splitOverlay("thousands_mcq1");
  hideFtue();
  borderRed(true);
  showAddButton(false);
  setTimeout(() => {
    loadMcqIn("thousands_borrow", () => {
      const el = selectTopRowCell("tth");
      showFtue(el);
      el.onclick = onClickingTenThousandTopCell;
      nextButton.disabled = true;
      splitOverlay(false);
      showTextWithTag("split_thousands");
    });
  }, 1200);
}

function onClickingTenThousandTopCell() {
  showTextWithTag("splitted_for_thousands");
  onClickingNextCell("tth");
  q(topRow.tth).onclick = null;
  nextButton.disabled = false;
  nextButton.onclick = howManyThousands;
}

function howManyThousands() {
  splitOverlay("thousands_mcq2");
  hideFtue();
  loadMcqIn("num_at_thousands", () => {
    showAddButton();
    showFtue(addButton);
    addButton.onclick = finalAddThousands;
    borderRed(false);
    popInNumber(carryRow.tth, ttCorrect * 10000);
    // The requested change
    const thousandsTopRow = document.querySelector(topRow.th);
    if (thousandsTopRow.classList.contains("strike-through")) {
      popInNumber(carryRow.th, thFinal * 1000);
    } else {
      popInNumber(topRow.th, thFinal * 1000);
    }
    nextButton.disabled = true;
    splitOverlay(false);
    showTextWithTag("enough_thousands");
  });
}

function finalAddThousands() {
  hideFtue();
  showAddButton(false);
  loadMcqIn("final_add_thousands", () => {
    nextButton.disabled = false;
    showAddButton(false);
    showFtue(nextButton);
    popInNumber(resultRow.th, th3 * 1000);
    borderGreen(true);
    nextButton.onclick = moveToTenThousands;
    showTextWithTag("subtracted_thousands");
  });
}

function moveToTenThousands() {
  hideFtue();
  unhighlightColumn();
  borderGreen(false);
  showTextWithTag("ten_thousands_1");
  highlightColumnBorder(RCmap.tthColumn);
  setTimeout(() => {
    showAddButton(true);
    showFtue(addButton);
  }, 500);
  nextButton.disabled = true;
  addButton.onclick = finalAddTenThousands;
}

function finalAddTenThousands() {
  hideFtue();
  showAddButton(false);
  loadMcqIn("final_add_ten_thousands", () => {
    nextButton.disabled = false;
    showAddButton(false);
    showFtue(nextButton);
    popInNumber(resultRow.tth, tt3 * 10000);
    borderGreen(true);
    nextButton.onclick = highLightResultStage;
    showTextWithTag("subtracted_ten_thousands");
  });
}

function highLightResultStage() {
  nextButton.disabled = true;
  showTextWithTag("combine");
  showAddButton(false);
  highlightRowBorder(RCmap.resultRow, 2);
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
    if (leftResultItems[index + 1]) {
      leftResultItems[index + 1].textContent = digit;
    }
  });

  templateDataMCQ.answer = answer;
  const finalText = fillPlaceholders(
    textPoolEnglish.final_summary,
    templateDataMCQ
  );
  showText(finalText);

  playSound("congrats");
  confettiBurst();
  nextButton.textContent = buttonText.try_new;
  nextButton.onclick = loadNextQuestion;
}

function onClickingNextCell(tag) {
  hideFtue();
  const topRowEl = document.querySelector(topRow[tag]);
  const carryRowEl = document.querySelector(carryRow[tag]);
  const originalValue = parseInt(topRowEl.textContent);

  topRowEl.classList.add("strike-through");

  if (originalValue > 0) {
    // Determine the value of one unit of the current place value (e.g., 10 for tens, 100 for hundreds)
    const placeValueUnit = Math.pow(10, Math.floor(Math.log10(originalValue)));
    const remainingValue = originalValue - placeValueUnit;
    carryRowEl.innerHTML = `${remainingValue} + ${placeValueUnit}`;
  } else {
    carryRowEl.innerHTML = "0 + 0";
  }
}

function selectTopRowCell(tag) {
  const el = document.querySelector(topRow[tag]);
  el.classList.add("selected");
  return el;
}

function splitOverlay(tag) {
  const mcqOverlay = document.getElementById("mcq-overlay");
  if (!tag) {
    mcqOverlay.classList.remove("split");
    return;
  }
  const finalText = fillPlaceholders(textPool[tag], templateDataMCQ);
  const leftInfo = document.getElementById("left-info");
  leftInfo.innerHTML = finalText;
  mcqOverlay.classList.add("split");
}

function initiate() {
  getDataFromQuestion();
  fillNumbers();
  fillHeaders();
  stage0();
}

initiate();

function showTextWithTag(tag, colorClass) {
  const finalText = fillPlaceholders(textPool[tag], templateDataMCQ);
  showText(finalText, colorClass);
}
function fillHeaders() {
  const headerElements = document.querySelectorAll(".right-panel .row-header");
  headerElements.forEach((element, index) => {
    if (headerArray[index]) {
      element.textContent = headerArray[index];
    }
  });
}

function loadNextQuestion() {
  questionIndex++;

  if (questionIndex >= questions.length) {
    triggerFullScreenOverlay(true);
    nextButton.disabled = true;
    return;
  }

  document.querySelectorAll(".row-result").forEach((cell) => {
    cell.textContent = "";
    cell.innerHTML = "";
  });

  document.querySelectorAll(".row-carry").forEach((cell) => {
    cell.textContent = "";
    cell.innerHTML = "";
  });
  document
    .querySelectorAll(".strike-through")
    .forEach((el) => el.classList.remove("strike-through"));
  document
    .querySelectorAll(".selected")
    .forEach((el) => el.classList.remove("selected"));
  nextButton.textContent = buttonText.next;

  unhighlightColumn();
  hideFtue();

  initiate();
}
