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
  left_panel: {
    instruction_general: {
      instruction_title: "Great job till now!",
      instruction_text:
        "Now, let’s try something new with the Tens Jar!",
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
    mcq: {
      instruction_title: "",
      instruction_text:
        "I really want to continue counting higher, how can we resolve this? help me by clicking the right answer",
    },
    increase: {
      instruction_title: "",
      instruction_text:
        "Use the '+' button to increase the number of squares in the ones place.",
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
    one_more_rod: {
      instruction_title: "",
      instruction_text:
        "The Pink Jar won’t like this… but just for the sake of math learning, let’s try putting one more rod in. Click to continue!",
    },
    finally: {
      instruction_title: "Finally!",
      instruction_text: " All is fine now! We have created Twenty!",
    },
    one_more_click: {
      instruction_title: "",
      instruction_text: "One more click and the pink jar is all happy!",
    },
  },

  comments: {
    number_disappeared:
      "Opps! the number disappeared! Looks like this number display box can’t show the count of that many squares.",
    add_jar: "The Way to resolve this is by adding another Jar!",
    rod: "Ten squares came together to form one rod!",
    rod_split:
      "one rod split to form ten squares! As the pink jar can hold only nine symbols, move the squares to the blue Jar",
    wrong1:
      "Hmm… If we leave all 10 in the ones place, we can’t keep counting. Let’s see what happens when we move them to the tens place instead!",
    wrong3:
      "Oh no! We worked hard to count to 10 - we don’t need to erase. Let’s try a better idea: move them to the tens place!",
    correct:
      "Yes! 10 ones make 1 ten. Let’s merge them and move it to the tens place!",
    you_expert:
      "You are an expert now, you know what to do! Go ahead and click on the arrow to move ten ones to make one ten",
    twenty_ones:
      "Aha! We now have Twenty ones - that’s the same as Two tens! But the Pink Jar is not built for so many. Let’s regroup and make it happy again.",
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
  "Eleven",
  "Twelve",
  "Thirteen",
  "Fourteen",
  "Fifteen",
  "Sixteen",
  "Seventeen",
  "Eighteen",
  "Nineteen",
  "Twenty",
];
const mcqData = {
  options: [
    "Leave the 10 squares in the ones place.",
    "Move all 10 squares to the tens place as 1 ten.",
    "Erase all the squares and start over.",
  ],
  feedback: ["wrong1", "correct", "wrong3"],
  answer: 1,
  question: "",
};

const numberForm = [
  "",
  "One ten and One One makes Eleven",
  "One ten and Two Ones makes Twelve",
  "One ten and Three Ones makes Thirteen",
  "One ten and Four Ones makes Fourteen",
  "One ten and Five Ones makes Fifteen",
  "One ten and Six Ones makes Sixteen",
  "One ten and Seven Ones makes Seventeen",
  "One ten and Eight Ones makes Eighteen",
  "One ten and Nine Ones makes Nineteen",
  "Two tens makes Twenty!",
]

const questions = [
  {
    text: "Click on the ones box only to add digits and make the number seven",
    number: 7,
  },
  {
    text: "Click on the ones box only to add digits and make the number thirteen",
    number: 13,
  },
  {
    text: "Click on the Tens box only to add digits and make the number thirty.",
    number: 30,
  },
  {
    text: "Click on the tens box only to add digits and make the number eighteen.",
    number: 18,
  },
  {
    text: "Click on the Tens box only to add digits and make the number twenty five",
    number: 25,
  },
  {
    text: "Click on the Tens box only to add digits and make the number sixteen",
    number: 16,
  },
  {
    text: "Click on the Tens box only to add digits and make the number forty",
    number: 40,
  }
];