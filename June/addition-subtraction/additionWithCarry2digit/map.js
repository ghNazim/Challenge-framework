let questionIndex = 3;
let unitIndex = 0,
  tenIndex = 0,
  hundredIndex = 0;
let cloned = null;
const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
const questions = [
  [
    [0, 4, 5],
    [0, 1, 8],
    [0, 6, 3],
  ],
  [
    [0, 4, 9],
    [0, 3, 4],
    [0, 8, 3],
  ],
  [
    [0, 8, 5],
    [0, 0, 9],
    [0, 9, 4],
  ],
  [
    [0, 3, 4],
    [0, 2, 1],
    [0, 5, 5],
  ],
  [
    [0, 2, 7],
    [0, 3, 2],
    [0, 5, 9],
  ],
  [
    [0, 5, 6],
    [0, 2, 3],
    [0, 7, 9],
  ],
];

let nums = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

const blockClasses = [
  ["#row-1 .hundred-block", "#row-1 .ten-bar", "#row-1 .unit-block"],
  ["#row-2 .hundred-block", "#row-2 .ten-bar", "#row-2 .unit-block"],
  ["#row-3 .hundred-block", "#row-3 .ten-bar", "#row-3 .unit-block"],
];
let u1, u2, u3, t1, t2, t3, h1, h2, h3;
let unitOverflow, tenOverflow;

function setupConstants() {
  u1 = questions[questionIndex][0][2];
  u2 = questions[questionIndex][1][2];
  u3 = questions[questionIndex][2][2];
  t1 = questions[questionIndex][0][1];
  t2 = questions[questionIndex][1][1];
  t3 = questions[questionIndex][2][1];
  h1 = questions[questionIndex][0][0];
  h2 = questions[questionIndex][1][0];
  h3 = questions[questionIndex][2][0];
  unitOverflow = u1 + u2 >= 10;
  tenOverflow = t1 + t2 + unitOverflow >= 10;
}
