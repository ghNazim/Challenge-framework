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
      question:
        "Which of these describes the first step in adding the units column?",
      options: [
        "Combine the blocks from the top and middle rows into the bottom row.",
        "Carry over ten units to the tens column.",
        "Set the number for the second row.",
        "Add the hundreds column first.",
      ],
      correctAnswer: 0,
    },
    {
      question: "What happens when the sum of the units is 10 or more?",
      options: [
        "Nothing, you just write the number down.",
        "You lose the extra blocks.",
        "You group ten units together and carry them over as one ten.",
        "You start the problem over.",
      ],
      correctAnswer: 2,
    },
    {
      question: "After adding the units, which column should you add next?",
      options: [
        "The hundreds column.",
        "The units column again.",
        "The problem is finished.",
        "The tens column.",
      ],
      correctAnswer: 3,
    },
  ],
  currentQuestionIndex: 0,
};
