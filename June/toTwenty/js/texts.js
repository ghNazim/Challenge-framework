// texts.js

const texts = {
  html_title: "Addition Sentence",
  subtitle_text: "Write the addition sentence and find the sum",
  button_texts: {
    prev: "Previous",
    next: "Next",
    add_jar: "Add another Jar", // Text for the button when on the last shape
    start_over: "Start Over", // Text for the button on the summary page
  },

  instruction_general: {
    instruction_title: "Hello!",
    instruction_text:
      "Let’s have fun and continue to create bigger numbers together!",
  },
  next: {
    instruction_title: "",
    instruction_text: "Click the 'Next' button to continue.",
  },
  reminder: {
    instruction_title: "Reminder",
    instruction_text:
      "Just a reminder - this pink jar shows the Ones place. Each click adds one square!",
  },
  plus: {
    instruction_title: "Add Boxes",
    instruction_text:
      "Just Click on the “+” button once to see what happens!",
  },
  minus: {
    instruction_title: "Remove boxes",
    instruction_text:
      "Now just for fun, Click on the “-” button, see what happens to the boxes above and below",
  },

  keep_adding: {
    instruction_title: "Add more boxes",
    instruction_text:
      " Wasn’t that fun? Now let's keep adding squares to the box to see how many we can fill up.",
  },
  pink_unlike: {
    instruction_title: "Observe",
    instruction_text:
      "The Pink Jar Does not like having more than one Digit!",
  },
  blue_jar: {
    instruction_title: "Blue Jar",
    instruction_text:
      "This is a special blue Jar, you can use this jar when the pink jar fills up!",
  },
  move_left: {
    instruction_title: "",
    instruction_text: "Click on the arrow to see the magic happen",
  },
  move_right: {
    instruction_title: "",
    instruction_text:
      "Just for fun, click on the arrow to move the rod back into the pink jar and observe what happens",
  },
  move_left_again: {
    instruction_title: "",
    instruction_text: "Click the arrow to get back the rod. Isn’t it magic!",
  },
  number_ten: {
    instruction_title: "And we have Created the number 10 !!!",
    instruction_text: "",
  },

  comments: {
    number_disappeared:
      "Opps! the number disappeared! Looks like this number display box can’t show the count of that many squares.",
    add_jar: "The Way to resolve this is by adding another Jar!",
    rod: "Ten squares came together to form one rod!",
    rod_split:
      "one rod split to form ten squares! As the pink jar can hold only nine symbols, move the squares to the blue Jar",
  },
};
window.APP_TEXTS = texts;

const numberToText = [
  "Zero",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
];
