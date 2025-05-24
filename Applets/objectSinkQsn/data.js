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

const beakerProp = {
  watermelon:{
    width:30,
    height:20
  },
  pumpkin:{
    width:40,
    height:30
  },
  coconut:{
    width:50,
    height:30
  }
}