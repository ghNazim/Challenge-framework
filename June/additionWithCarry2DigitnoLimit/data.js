const nextButtonTexts = [
  "Start",
  "Next",
  "Next",
  "Add Units Place",
  "Add Tens Place",
  "Carry Over to the Hundreds Place",
  "Add Hundreds Place",
  "Find the Answer",
  "Try New"
];
const instructions = [
  "Click on the button at the bottom of your screen to proceed.",
  "Use the '+' and '-' buttons to set the first number.",
  "Use the '+' and '-' buttons to set the second number.",
  "Bring the cubes at units place together to sum them up.",
  "Bring the rods at tens place together to sum them up.",
  "Ten tens equal one hundreds. So lets carry them over to the hundreds place.",
  "Bring the flats at hundreds place together to sum them up.",
  "Combine the digits to get the answer.",
  "Congratulations! You have added two numbers successfully.",
];


const stepsInfo = {
  start: {
    buttonText: "Start",
    instruction: "Click on the button at the bottom of your screen to proceed.",
  },
  set1: {
    buttonText: "Next",
    instruction: "Use the '+' and '-' buttons to set the first number.",
  },
  set2: {
    buttonText: "Next",
    instruction: "Use the '+' and '-' buttons to set the second number.",
  },
  units1: {
    buttonText: "Add Units Place",
    instruction: "Bring the cubes at units place together to sum them up.",
  },
  unitsCarry: {
    buttonText: "Carry Over to the Tens Place",
    instruction: "Ten ones equal one ten. So lets carry them over to the tens place.",
  },
  tens1: {
    buttonText: "Add Tens Place",
    instruction: "Bring the rods at tens place together to sum them up.",
  },
  tensCarry: {
    buttonText: "Carry Over to the Hundreds Place",
    instruction:
      "Ten tens equal one hundreds. So lets carry them over to the hundreds place.",
  },
  hundreds1: {
    buttonText: "Add Hundreds Place",
    instruction: "Bring the flats at hundreds place together to sum them up.",
  },
  combine: {
    buttonText: "Find the Answer",
    instruction: "Combine the digits to get the answer.",
  },
  tryNew: {
    buttonText: "Try New",
    instruction: "Congratulations! You have added two numbers successfully.",
  },
  finished: {
    buttonText: "Finish",
    instruction: "You have completed all three additions.",
  },
};
