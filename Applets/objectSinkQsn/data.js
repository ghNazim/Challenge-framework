const appTextContent = {
  titleBar: {
    heading: "Volume Measurement",
    subheading: "Measure the volume of irregular shapes",
  },
  contextSteps: [
    {
      title: "Instruction",
      text: "You will be given a few questions. Check out the diagram and solve the given problems. Click 'Next' to proceed.",
      highlights: [],
    },
    {
      title: "Choose the correct answer",
      text: "Select the correct answer from the given options and click on next to go to the next question.",
      highlights: [],
    },
  ],
  controls: {
    prevButton: "Previous",
    nextButton: "Next",
  },
  volumeFormula: {
    watermelon: [
      "Volume of the Displaced Water",
      "= Area of the base x Rise in water level",
      "= 30 x 20 x 4 cc",
      "= 2400 cc",
    ],
    pumpkin: [
      "Volume of the Displaced Water",
      "= Area of the base x Rise in water level",
      "= 30 x 20 x 3 cc",
      "= 1800 cc",
    ],
    coconut: [
      "Volume of the Displaced Water",
      "= Area of the base x Rise in water level",
      "= 30 x 20 x 2 cc",
      "= 1200 cc",
    ],
  },
};

const questions = [
  {
    question: "What is the volume of the stone ?",
    options: ["1200 cc", "1800 cc", "2400 cc", "3000 cc"],
    answer: 2,
    answered: false,
    correctFeedback: "That's correct! The volume of the stone is 20*30*4 cc.",
    wrongFeedback: "Oops! That's not the correct volume of the stone.",
  },
  {
    question: "What is the volume of the anchor ?",
    options: ["1200 cc", "1800 cc", "2400 cc", "3000 cc"],
    answer: 1,
    answered: false,
    correctFeedback: "That's correct! The volume of the anchor is 20*30*3 cc.",
    wrongFeedback: "Oops! That's not the correct volume of the anchor.",
  },
  {
    question: "What is the volume of the brick ?",
    options: ["1200 cc", "1800 cc", "2400 cc", "3000 cc"],
    answer: 0,
    answered: false,
    correctFeedback: "That's correct! The volume of the brick is 20*30*2 cc.",
    wrongFeedback: "Oops! That's not the correct volume of the brick.",
  },
];
