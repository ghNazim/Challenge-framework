let questionIndex = 4;
let unitIndex = 0,
  tenIndex = 0,
  hundredIndex = 0;
let cloned = null;
const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
const questions = [
  [
    [1, 4, 5],
    [3, 7, 8],
    [5, 2, 3],
  ],
  [
    [2, 6, 9],
    [1, 7, 4],
    [4, 4, 3],
  ],
  [
    [3, 8, 0],
    [0, 4, 7],
    [4, 2, 7],
  ],
  [
    [2, 3, 4],
    [3, 2, 1],
    [5, 5, 5],
  ],
  [
    [4, 0, 7],
    [1, 0, 2],
    [5, 0, 9],
  ],
  [
    [4, 5, 6],
    [0, 2, 3],
    [4, 7, 9],
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
