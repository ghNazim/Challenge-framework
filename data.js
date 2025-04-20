const questioninfo = [
  {
    tag: "given",
    text: "diameter (d) = 12 m",
    spans: [1],
  },
  {
    tag: "given",
    text: "radius (r) = 6 m",
    spans: [2],
  },
  { tag: "constant", text: "π = 3.14", spans: [4] },
  { tag: "toFind", text: "Area = ?", spans: [3] },
];

const teacherNotes = [
  ["note 1", "note 2", "note 3", "note 4"],
  ["note 5", "note 6", "note 7", "note 8"],
  [
    "note 9",
    "note 10",
    "note 11",
    "note 12",
    "note 13",
    "note 14",
    "note 15",
    "note 16",
  ],
  ["note 17", "note 18"],
];
const connectQuestions = [
  {
    header: "Area",
    left: "Area = ?",
    question: "What is the formula for Area of a Circle?",
    postSolve: "Area of circle =  π × Radius2",
    options: ["option 1", "option 2", "option 3", "option 4"],
    answer: 3,
    correctText: "Thats right, diameter is twice the radius",
    wrongText: "Thats wrong, try to recall the formula",
    answered: false,
  },
  {
    header: "Radius",
    left: "Radius = ?",
    question: "What is the formula for Radius of a Circle?",
    postSolve: "Radius of circle =  Diameter / 2",
    options: ["option 1", "option 2", "option 3", "option 4"],
    answer: 2,
    correctText: "Thats right, radius is twice the radius",
    wrongText: "Thats wrong, try to recall the formula",
    answered: false,
  },
  {
    header: "Perimeter",
    left: "Perimeter = ?",
    question: "What is for perimeter of a Circle?",
    postSolve: "Perimeter = 2π × Radius",
    options: ["option 1", "option 2", "option 3", "option 4"],
    answer: 1,
    correctText: "Thats right, perimeter is twice the radius",
    wrongText: "Thats wrong, lorem ipsum!!!",
    answered: false,
  },
];
const connectCardInfo = {
  summary: [
    "Radius = Diameter / 2",
    "Area of circle = π × Radius",
    "Anything Random",
  ],
  text: "These are the summaries and this is the text that appears after it.",
};

const computeSteps = [
  {
    formula: "Area = π × Radius2",
    steps: [
      {
        left: "step 1",
        right: "Radius  =  Diameter/2",
        description: "Description one",
      },
      {
        left: "step 2",
        right: " = 12/2",
        description: "Description two.",
      },
      {
        left: "step 3",
        right: " = 6",
        description: "Description three.",
      },
    ],
  },
  {
    formula: "Radius = Diameter / 2",
    steps: [
      {
        left: "step 4",
        right: "Area  =  π × Radius2 ",
        description: "Description four",
      },
      {
        left: "step 5",
        right: " =  π × 62",
        description: "Description five.",
      },
      {
        left: "step 6",
        right: " = 3.14 × 62",
        description: "Description six.",
      },
      {
        left: "step 7",
        right: " = 3.14 × 36",
        description: "Description seven.",
      },
      {
        left: "step 8",
        right: " = 113.04 m",
        description: "Description eight.",
      },
    ],
  },
  {
    formula: "Radius = Anything Random",
    steps: [
      {
        left: "step 100",
        right: "Area  =  π × Radius2 ",
        description: "Description four",
      },
      {
        left: "step 500",
        right: " =  π × 62",
        description: "Description five.",
      },
      {
        left: "step 600",
        right: " = 3.14 × 62",
        description: "Description six.",
      },
    ],
  },
];
