// texts.js

const texts = {
  html_title: "Addition Sentence",
  subtitle_text: "Write the addition sentence and find the sum",
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
    instruction_text:
      "Thats not quite correct. Click on the 'Reveal Hint' button in the top right corner.",
  },
  hint_2: {
    instruction_title: "Hint",
    instruction_text:
      "Thats not quite correct. Click on the 'Reveal Hint' button in the top right corner.",
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
  "<span>Three coins</span>&nbsp;<span>added to</span>&nbsp;<span>two coins</span>&nbsp;<span>make</span>&nbsp;<span>how many coins ?</span>",
  "<span>Four coins</span>&nbsp;<span>added to</span>&nbsp;<span>one coin</span>&nbsp;<span>make</span>&nbsp;<span>how many coins ?</span>",
  "<span>Five coins</span>&nbsp;<span>added to</span>&nbsp;<span>zero coins</span>&nbsp;<span>make</span>&nbsp;<span>how many coins ?</span>",
  "<span>One coin</span>&nbsp;<span>added to</span>&nbsp;<span>three coins</span>&nbsp;<span>make</span>&nbsp;<span>how many coins ?</span>",
  "<span>Six coins</span>&nbsp;<span>added to</span>&nbsp;<span>two coins</span>&nbsp;<span>make</span>&nbsp;<span>how many coins ?</span>",
  "<span>Seven coins</span>&nbsp;<span>added to</span>&nbsp;<span>one coin</span>&nbsp;<span>make</span>&nbsp;<span>how many coins ?</span>",
  "<span>Two coins</span>&nbsp;<span>added to</span>&nbsp;<span>two coins</span>&nbsp;<span>make</span>&nbsp;<span>how many coins ?</span>",
];
