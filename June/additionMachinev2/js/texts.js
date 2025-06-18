const texts = {
  button_texts: {
    prev: "Previous",
    next: "Next",
    check: "Check Answer",
    start_over: "Start Over",
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

};
window.APP_TEXTS = texts;

const questions = [
  [3,3,6],
  [5,4,9],
  [2,0,2],
  [3,2,5],
  [4,2,6],
  [6,3,9],
  [1,5,6]
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


