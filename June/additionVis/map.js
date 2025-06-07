let questionIndex = 0;
let unitIndex = 0,
  tenIndex = 0,
  hundredIndex = 0;
let cloned = null;
const questions = [
  [
    [2, 9, 2],
    [0, 4, 5],
    [3, 3, 7],
  ],
];

const nums = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

const blockClasses = [
  ["#row-1 .hundred-block", "#row-1 .ten-bar", "#row-1 .unit-block"],
  ["#row-2 .hundred-block", "#row-2 .ten-bar", "#row-2 .unit-block"],
  ["#row-3 .hundred-block", "#row-3 .ten-bar", "#row-3 .unit-block"],
];

const u1 = questions[questionIndex][0][2];
const u2 = questions[questionIndex][1][2];
const u3 = questions[questionIndex][2][2];
const t1 = questions[questionIndex][0][1];
const t2 = questions[questionIndex][1][1];
const t3 = questions[questionIndex][2][1];
const h1 = questions[questionIndex][0][0];
const h2 = questions[questionIndex][1][0];
const h3 = questions[questionIndex][2][0];
