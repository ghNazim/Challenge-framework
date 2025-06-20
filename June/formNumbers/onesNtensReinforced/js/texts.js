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
  overlay_text:
    "Hello! Let’s have some fun and create the first two digit number together!",
  instruction_general: {
    instruction_title: "Greetings!",
    instruction_text:
      "Ever wondered how numbers are made? <br>Let’s have some fun and find out together!",
  },
  next: {
    instruction_title: "",
    instruction_text: "Click the 'Next' button to continue.",
  },
  pink_jar: {
    instruction_title: "Instruction",
    instruction_text:
      "This is a special Pink Jar, We call it the ONES jar.<br>You can add and remove squares from here. Let's give it a try!",
  },
  sum_plus: {
    instruction_title: "",
    instruction_text:
      "Click on the “+” button, The Digit is displayed on the top box.<br>The bottom box tells us how we say it.",
  },
  plus: {
    instruction_title: "'+' Button",
    instruction_text:
      "Click on the “+” button to increase the number of cubes in the jar.",
  },
  top_num: {
    instruction_title: "",
    instruction_text: "The Digit is displayed on the top box.",
  },
  bottom_num: {
    instruction_title: "",
    instruction_text: "The bottom box tells us how we say it.",
  },
  minus: {
    instruction_title: "Remove boxes",
    instruction_text:
      "Now just for fun, Click on the “-” button, see what happens to the boxes above and below",
  },

  keep_adding: {
    instruction_title: "Add more boxes",
    instruction_text:
      " Wasn’t that fun? <br>Now let's keep adding cubes to the box to see how many we can fill up.",
  },
  wiggling: {
    instruction_title: "Whoa!",
    instruction_text:
      "Do you see that?<br> The Pink Jar is wiggling. It can’t hold more than 9 cubes!",
  },
  max_reached: {
    instruction_title: "",
    instruction_text:
      "Wasn’t that fun? <br> Now let's keep adding cubes to the box to see how many we can fill up.",
  },
  blue_jar: {
    instruction_title: "Blue Jar",
    instruction_text:
      "This is a special blue Jar, you can use this jar when the pink jar fills up!",
  },
  move_left: {
    instruction_title: "",
    instruction_text: "Click on the arrow to see the magic happen.",
  },
  move_right: {
    instruction_title: "",
    instruction_text:
      "Just for fun, click on the arrow to move the rod back into the pink jar and observe what happens.",
  },
  move_left_again: {
    instruction_title: "",
    instruction_text: "Click the arrow to get back the rod.<br> Isn’t it magic!",
  },
  number_ten: {
    instruction_title: "",
    instruction_text: `We have Created the first 2 digit number “10”.`,
  },

  comments: {
    keep_adding:"Now let's keep adding cubes to the box to see how many we can fill up.",
    number_disappeared:
      "Oops! the number disappeared! Looks like this number display box can’t show the count of that many cubes.",
    oops:"Oops! This Jar can only show one digit at a time.",
    add_jar: "The Way to resolve this is by adding another Jar!",
    blue_jar:"This is a special blue Jar, We call it the Tens jar. you can use this jar when the pink jar fills up!",
    rod: "Ten cubes came together to form one rod!",
    rod_split:
      "One rod split to form ten cubes! As the pink jar can hold only nine symbols, move the cubes to the blue jar.",
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
