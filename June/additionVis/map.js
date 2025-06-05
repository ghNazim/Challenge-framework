let questionIndex = 1;
let unitIndex = 0,
  tenIndex = 0,
  hundredIndex = 0;
let cloned = null;
const questions = [
  [
    [2, 9, 5],
    [2, 4, 7],
    [5, 4, 2],
  ],
  [
    [2, 9, 2],
    [0, 4, 5],
    [3, 3, 7],
  ],
  [
    [1, 0, 9],
    [1, 0, 1],
    [2, 1, 0],
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
