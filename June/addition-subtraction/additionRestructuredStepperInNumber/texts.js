const texts = {
  headings: {
    hundreds: "H",
    tens: "T",
    ones: "O",
  },
  buttons: {
    set1: "Set First Number",
    set2: "Set Second Number",
    next: "Next Question",
    add_unit: "Add Units Place",
    add_ten: "Add Tens Place",
    add_hundred: "Add Hundreds Place",
    carryOver_unit: "Carry Over to Tens",
    carryOver_ten: "Carry Over to Hundreds",
    start_over: "Start Over",
    submit: "Submit",
  },
  instructions: {
    start: "Click on the button at the bottom of your screen to proceed.",
    set1: "Use the '+' and '-' buttons to set the first number.",
    set2: "Use the '+' and '-' buttons to set the second number.",
    units1: "Bring the cubes at units place together to sum them up.",
    unitsCarry:
      "Ten ones equal one ten. So lets carry them over to the tens place.",
    tens1: "Bring the rods at tens place together to sum them up.",
    tensCarry:
      "Ten tens equal one hundreds. So lets carry them over to the hundreds place.",
    hundreds1: "Bring the flats at hundreds place together to sum them up.",
    result: "Sum of these two numbers is: ",
    tryNew: "Congratulations! You have added two numbers successfully.",
    finished: "Congratulations! You have added two numbers successfully.",
  },
};

const mcqObject = {
  questions: [
    {
      question: "Which place do we add first?",
      options: ["Units", "Tens", "Hundreds"],
      correctAnswer: 0,
    },
    {
      question:
        "Units place can not hold more than 9 cubes. What should we do next?",
      options: [
        "Ignore the extra cubes",
        "Break them into smaller cubes",
        "Carry 10 cubes over to the tens place.",
      ],
      correctAnswer: 2,
    },
    {
      question: "What place should we add next?",
      options: ["Units", "Tens", "Hundreds"],
      correctAnswer: 1,
    },
    {
      question:
        "Tens place can not hold more than 9 rods. What should we do next?",
      options: [
        "Put extra rods in the units place.",
        "Carry 10 rods over to the hundreds place.",
        "Throw away the extra rods.",
      ],
      correctAnswer: 1,
    },
  ],
  currentQuestionIndex: 0,
};
