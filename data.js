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
  "Remind students about the relationship between diameter and radius for circles",
  "Recall students about the relationship between radius and area for circles",
  "Update students about the relationship between area and diameter for circles",
  "Verify students about the relationship between area and radius for circles",
]
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
  summary: ["Radius = Diameter / 2", "Area of circle = π × Radius","Anything Random"],
  text: "These are the summaries and this is the text that appears after it.",
};