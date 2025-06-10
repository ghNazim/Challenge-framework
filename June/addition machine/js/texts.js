// texts.js

const texts = {
  html_title: "Addition Machine",
  main_title_text: "Addition Machine",
  subtitle_text: "",
  button_texts: {
    prev: "Previous",
    next: "Next",
    finish: "View Summary", // Text for the button when on the last shape
    start_over: "Start Over", // Text for the button on the summary page
  },

  instruction_general: {
    instruction_title: "Instruction",
    instruction_text:
      "Click on the empty box you want to fill, then click on any number on the right to fill the box with the number.",
  },
  hint_1: {
    instruction_title: "Hint",
    instruction_text: "Thats not quite correct. Let me give you a hint.",
    button: `<div><button class="btn btn-primary" id="hintButton1">Reveal hint</button></div>`,
  },
  hint_2: {
    instruction_title: "Hint",
    instruction_text: "Thats not quite correct. Let me give you another hint.",
    button: `<div><button class="btn btn-primary" id="hintButton2">Reveal hint</button></div>`,
  },
  hint1_shown: {
    instruction_title: "Hint Revealed",
    instruction_text:
      "Look at the hint below the question and try to answer the question again.",
  },
  hint2_shown: {
    instruction_title: "Hint Revealed",
    instruction_text:
      "Look at both the hints now and try to figure out the answer.",
  },
  final_step: {
    instruction_title: "Congratulations!",
    instruction_text: " You have completed the addition sentence.",
  },

  // Texts for overlay popups (triggered by clicking .highlight span elements)
  // You can expand this as needed.
  overlay_definitions: {
    "highlight-gold": {
      title: "Unit Cubes",
      content:
        "<p>A <strong>unit cube</strong> is a standard cube, typically with sides of 1 unit in length (e.g., 1cm, 1 inch).</p><p>We use unit cubes as building blocks to measure the volume of larger, more complex shapes.</p>",
    },
    "highlight-red": {
      title: "Consistent Volume",
      content:
        "<p>Even though all 10 shapes had different forms, each one required exactly <strong>8 unit cubes</strong> to be completely filled.</p><p>This highlights that volume is a measure of the total space occupied, not the specific dimensions or form of the object.</p>",
    },
    highlight: {
      title: "Volume",
      content:
        "<p>The measure of the amount of three-dimensional space an object occupies.</p>",
    },
  },
};
window.APP_TEXTS = texts;

const questions = [
  [3, 2],
  [4, 1],
  [5, 0],
  [1, 3],
  [6, 2],
  [7, 1],
  [2, 2],
];
const numberToText = [
  "ZERO",
  "ONE",
  "TWO",
  "THREE",
  "FOUR",
  "FIVE",
  "SIX",
  "SEVEN",
  "EIGHT",
  "NINE",
];
const itemPictures = {
  coin: `<img src="assets/coin.png" class="coin" />`,
};

const questionTexts = [
  "<span>Three coins</span>&nbsp;added to&nbsp;<span>two coins</span>&nbsp;make&nbsp;<span>how many coins</span>&nbsp;?",
  "<span>Four coins</span>&nbsp;added to&nbsp;<span>one coin</span>&nbsp;make&nbsp;<span>how many coins</span>&nbsp;?",
  "<span>Five coins</span>&nbsp;added to&nbsp;<span>zero coins</span>&nbsp;make&nbsp;<span>how many coins</span>&nbsp;?",
  "<span>One coin</span>&nbsp;added to&nbsp;<span>three coins</span>&nbsp;make&nbsp;<span>how many coins</span>&nbsp;?",
  "<span>Six coins</span>&nbsp;added to&nbsp;<span>two coins</span>&nbsp;make&nbsp;<span>how many coins</span>&nbsp;?",
  "<span>Seven coins</span>&nbsp;added to&nbsp;<span>one coin</span>&nbsp;make&nbsp;<span>how many coins</span>&nbsp;?",
  "<span>Two coins</span>&nbsp;added to&nbsp;<span>two coins</span>&nbsp;make&nbsp;<span>how many coins</span>&nbsp;?",
];
