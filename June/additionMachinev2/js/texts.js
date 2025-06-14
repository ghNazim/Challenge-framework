// texts.js

const texts = {
  html_title: "Addition Machine",
  main_title_text: "Addition Machine",
  subtitle_text: "",
  button_texts: {
    prev: "Previous",
    next: "Next",
    check: "Check Answer",
    finish: "View Summary", // Text for the button when on the last shape
    start_over: "Start Over", // Text for the button on the summary page
  },

  instruction_general: {
    instruction_title: "Instruction",
    instruction_text:
      "Fill the blank spot in the machine with the correct number to complete the addition sentence.",
  },
  hint: {
    instruction_title: "Hint",
    instruction_text:
      "Thats not quite correct. Look just below the machine for a hint.",
  },
  correct: {
    instruction_title: "Correct!",
    instruction_text:
      "Thats correct! You have completed the addition sentence. Click on 'Next' to continue.",
  },

  final_step: {
    instruction_title: "Congratulations!",
    instruction_text: " You have answered all the questions successfully.",
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
  [3,3,6],
  [5,4,9],
  [2,0,2],
  [3,2,5],
  [4,2,6],
  [6,3,9],
];
const numberToText = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "plus",
  "equal",
];

const questionTexts = [
  "Gilang has 3 marbles and Hana has 3 marbles. How many marbles do they have altogether?",
  "Start at 5 and count on 4. What is the total ?",
  "Adi has 2 marbles. He adds no more marbles. How many marbles does he have now?",
  "Eka has 3 coins and finds 2 more. What is the total number of coins?",
  "Budi increases his score by 4 after scoring 2 more points. What is his new score?",
  "Eka has 6 balls and Fitri brings 3 more. How many altogether?",
];
