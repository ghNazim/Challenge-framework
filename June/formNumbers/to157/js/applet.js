let progress = 0;
let questionIndex = 0;
updateInstructions("general");
document.querySelector(".upperControls p").innerHTML = texts.top_question;
numberText.style.visibility = "hidden";
function clickingPlusFirstTime() {
  unitsPlus.classList.remove("pulse-highlight");
  unitsPlus.removeEventListener("click", clickingPlusFirstTime);
  numberText.style.visibility = "visible";
}
function clickTensPlusFirstTime(){
  tensPlus.classList.remove("pulse-highlight-blue");
  tensPlus.removeEventListener("click", clickingPlusFirstTime);
}
function updateWithClickingPLus() {
  if (unitCount == 10) {
    showComment("overflow_one");
    updateInstructions("overflow_one");
    setCavePose("Thinking");
  } else if ( tenCount == 10) {
    showComment("overflow_ten");
    updateInstructions("overflow_ten");
    setCavePose("Thinking");
  }  
}
function watchForTarget(){
  if (hundredCount == 1 && unitCount == 7 && tenCount == 5) {
    showComment("correct");
    setCavePose("Happy");
    updateInstructions("congrats");
    confettiBurst();
    document.querySelectorAll(".control-btn").forEach((button) => {
      button.style.pointerEvents = "none";
    });
  }
}
unitsPlus.addEventListener("click", clickingPlusFirstTime);
tensPlus.addEventListener("click", clickTensPlusFirstTime);
function addTenContainer(cb) {
  tenContainerVisible = true;
  const tenWidget = document.getElementById("ten-widget");

  unitWidget.addEventListener(
    "transitionend",
    async function handleTransitionEnd() {
      unitWidget.removeEventListener("transitionend", handleTransitionEnd);
      tenWidget.style.visibility = "visible";
      await wait(200);
      cb?.();
    },
    { once: true }
  );
  unitWidget.classList.remove("shiftedLong");
  unitWidget.classList.add("shiftedShort");
}
function addHundredContainer(cb) {
  unitWidget.addEventListener(
    "transitionend",
    async function handleTransitionEnd() {
      unitWidget.removeEventListener("transitionend", handleTransitionEnd);
      hundredWidget.style.visibility = "visible";
      await wait(200);
      cb?.();
    },
    { once: true }
  );
  unitWidget.classList.remove("shiftedShort");
  tenWidget.classList.remove("shiftedShort");
}

function whenHits10() {
  updateInstructions("pink_unlike");
  setCavePose("Thinking");
  wiggle();
  nextButton.disabled = false;
}

function showStatement(i) {
  const display = i === 0 ? "block" : "flex";
  const elements = document.querySelectorAll(`#statements>div`);

  elements.forEach((element, index) => {
    if (index === i) {
      element.style.display = display;
    } else {
      element.style.display = "none";
    }
  });
}

function showComment(tag) {
  const commentEl = document.querySelector(".comment");
  showStatement(0);
  commentEl.innerHTML = T.comments[tag];
}
function showCommentTextVersion(text) {
  const commentEl = document.querySelector(".comment");
  showStatement(0);
  commentEl.innerHTML = text;
}
function showNumberText(num, isLegit = true) {
  const text = spellNumber(num);
  // showStatement(1);
  const numberTextP = document.querySelector("#numberText>p");
  if (isLegit) {
    playNumber(num);
  }
  numberTextP.textContent = text + (isLegit ? "" : "?");
}

function wiggle(bool = true) {
  if (bool) {
    vibrateElement(unitInnerCard);
    setTimeout(() => {
      vibrateElement(unitSquaresContainer);
    }, 100);
    unitNumberTab.classList.add("outlined");
    vibrateElement(unitNumberTab);
    vibrateElement(numberText);
  } else {
    vibrateElement(unitInnerCard, false);
    vibrateElement(unitSquaresContainer, false);
    unitNumberTab.classList.remove("outlined");
    vibrateElement(unitNumberTab, false);
    vibrateElement(numberText, false);
  }
}

function wiggleTens(bool = true) {
  if (bool) {
    vibrateElement(tenInnerCard);

    vibrateElement(tenSquaresContainer);

    tenNumberTab.classList.add("outlined");
    vibrateElement(tenNumberTab);
    vibrateElement(numberText);
  } else {
    vibrateElement(tenInnerCard, false);
    vibrateElement(tenSquaresContainer, false);
    tenNumberTab.classList.remove("outlined");
    vibrateElement(tenNumberTab, false);
    vibrateElement(numberText, false);
  }
}

const unitPill = document.querySelector("#unit-widget .pill-badge");
const tenPill = document.querySelector("#ten-widget .pill-badge");
const hundredPill = document.querySelector("#hundred-widget .pill-badge");
unitPill.textContent = tags.ones;
tenPill.textContent = tags.tens;
hundredPill.textContent = tags.hundreds;

function playNumber(num) {
  const lang = flag === "ENGLISH" ? "English" : "Indo";
  const audioUrl = `sound${lang}/${num}.mp3`;
  const audio = new Audio(audioUrl);
  audio.play();
}

document
  .querySelector("#numberText .speaker-btn")
  .addEventListener("click", () => {
    playNumber(tenCount * 10 + unitCount);
  });


  function spellNumberEnglish(number) {
    if (number < 0 || number > 999) {
      return "Input must be a number between 0 and 999.";
    }

    const ones = [
      "Zero",
      "One",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
    ];

    const teens = [
      "Ten",
      "Eleven",
      "Twelve",
      "Thirteen",
      "Fourteen",
      "Fifteen",
      "Sixteen",
      "Seventeen",
      "Eighteen",
      "Nineteen",
    ];

    const tens = [
      "",
      "",
      "Twenty",
      "Thirty",
      "Forty",
      "Fifty",
      "Sixty",
      "Seventy",
      "Eighty",
      "Ninety",
    ];

    if (number === 0) return "Zero";

    let result = "";

    const hundred = Math.floor(number / 100);
    const remainder = number % 100;

    if (hundred > 0) {
      result += ones[hundred] + " Hundred";
      if (remainder > 0) {
        result += " and ";
      }
    }

    if (remainder > 0) {
      if (remainder < 10) {
        result += ones[remainder];
      } else if (remainder < 20) {
        result += teens[remainder - 10];
      } else {
        const ten = Math.floor(remainder / 10);
        const one = remainder % 10;
        result += tens[ten];
        if (one > 0) {
          result += " " + ones[one];
        }
      }
    }

    return result.trim();
  }
  


  function spellNumberIndo(number) {
    if (number < 0 || number > 999) {
      return "Masukkan harus berupa angka antara 0 dan 999.";
    }

    const satuan = [
      "Nol",
      "Satu",
      "Dua",
      "Tiga",
      "Empat",
      "Lima",
      "Enam",
      "Tujuh",
      "Delapan",
      "Sembilan",
      
    ];

    if (number === 0) return "Nol";

    let result = "";

    const ratus = Math.floor(number / 100);
    const sisa = number % 100;

    // Handle hundreds
    if (ratus > 0) {
      if (ratus === 1) {
        result += "Seratus";
      } else {
        result += satuan[ratus] + " Ratus";
      }
    }

    // Handle tens and units
    if (sisa > 0) {
      if (result) result += " ";

      if (sisa < 10) {
        result += satuan[sisa];
      } else if (sisa < 20) {
        if (sisa === 10) {
          result += "Sepuluh";
        } else if (sisa === 11) {
          result += "Sebelas";
        } else {
          result += satuan[sisa % 10] + " Belas";
        }
      } else {
        const puluh = Math.floor(sisa / 10);
        const satu = sisa % 10;
        result += satuan[puluh] + " Puluh";
        if (satu > 0) {
          result += " " + satuan[satu];
        }
      }
    }

    return result.trim();
  }
  

function spellNumber(number) {
  if (flag === "ENGLISH") {
    return spellNumberEnglish(number);
  } else {
    return spellNumberIndo(number);
  }
}