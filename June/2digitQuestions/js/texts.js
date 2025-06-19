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
  overlay_text: "Great job till now!<br> Now, let’s try something new with the Tens Jar!",
  
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


const questions = [
  {
    text: "Click on the ones box only to add digits and make the number seven",
    number: 7,
    feedback: {
      correctAnswer: "Yes! You made Seven—0 ten and 7 ones. Nice work!",
      nothingAdded:
        "Give it a try! Start adding cubes and rods to make the number.",
      tensWrong: "To make a single digit number, you don’t need a tens place",
      tensCorrectOnesWrong:
        "Try again, you need to add seven squares to the jar to get this right.",
    },
  },
  {
    text: "Click on the ones box only to add digits and make the number thirteen",
    number: 13,
    feedback: {
      correctAnswer: "Yes! You made thirteen—1 ten and 3 ones. Nice work!",
      randomTotalWrong:
        "Hmm… That number’s different. Check both tens and ones and try again!",
      onesCorrectTensWrong:
        "You got the ones right—3 ones! But check the tens again.",
      tensCorrectOnesWrong:
        "Your tens are spot on—1 ten! But your ones don’t match yet.",
      tooManyOnes:
        "Oops! The Pink Jar has too many! Remember—it likes just one digit. Try moving 10 ones to the tens place.",
      nothingAdded:
        "Give it a try! Start adding cubes and rods to make the number.",
    },
  },
  {
    text: "Click on the Tens box only to add digits and make the number thirty.",
    number: 30,
    feedback: {
      correctAnswer: "Yes! You made thirty—3 ten and 0 ones. Nice work!",
      randomTotalWrong:
        "Hmm… That number’s different. Check both tens and ones and try again!",
      onesWrong: "Observe the number, it has zero ones.",
      nothingAdded:
        "Give it a try! Start adding cubes and rods to make the number.",
      onesCorrectTensWrong:
        "You got the ones right—0 ones! But check the tens again.",
    },
  },
  {
    text: "Click on the tens box only to add digits and make the number eighteen.",
    number: 18,
    feedback: {
      correctAnswer: "Yes! You made eighteen—1 ten and 8 ones. Nice work!",
      randomTotalWrong:
        "Hmm… That number’s different. Check both tens and ones and try again!",
      onesCorrectTensWrong:
        "You got the ones right—3 ones! But check the tens again.",
      tensCorrectOnesWrong:
        "Your tens are spot on—1 ten! But your ones don’t match yet.",
      tooManyOnes:
        "Oops! The Pink Jar has too many! Remember—it likes just one digit. Try moving 10 ones to the tens place.",
      nothingAdded:
        "Give it a try! Start adding cubes and rods to make the number.",
    },
  },
  {
    text: "Click on the Tens box only to add digits and make the number twenty five",
    number: 25,
    feedback: {
      correctAnswer: "Yes! You made twenty five - 2 ten and 5 ones. Nice work!",
      randomTotalWrong:
        "Hmm… That number’s different. Check both tens and ones and try again!",
      onesCorrectTensWrong:
        "You got the ones right - 5 ones! But check the tens again.",
      tensCorrectOnesWrong:
        "Your tens are spot on - 2 ten! But your ones don’t match yet.",
      tooManyOnes:
        "Oops! The Pink Jar has too many! Remember - it likes just one digit. Try moving 10 ones to the tens place.",
      nothingAdded:
        "Give it a try! Start adding cubes and rods to make the number.",
    },
  },
  {
    text: "Click on the Tens box only to add digits and make the number sixteen",
    number: 16,
    feedback: {
      correctAnswer: "Yes! You made sixteen- 1 ten and 6 ones. Nice work!",
      randomTotalWrong:
        "Hmm… That number’s different. Check both tens and ones and try again!",
      onesCorrectTensWrong:
        "You got the ones right - 6 ones! But check the tens again.",
      tensCorrectOnesWrong:
        "Your tens are spot on - 1 ten! But your ones don’t match yet.",
      tooManyOnes:
        "Oops! The Pink Jar has too many! Remember - it likes just one digit. Try moving 10 ones to the tens place.",
      nothingAdded:
        "Give it a try! Start adding cubes and rods to make the number.",
    },
  },
  {
    text: "Click on the Tens box only to add digits and make the number forty",
    number: 40,
    feedback:{
      correctAnswer: "Yes! You made forty- 4 ten and 0 ones. Nice work!",
      randomTotalWrong:
        "Hmm… That number’s different. Check both tens and ones and try again!",
      onesCorrectTensWrong:
        "You got the ones right - 0 ones! But check the tens again.",
      tensCorrectOnesWrong:
        "Your tens are spot on - 4 ten! But your ones don’t match yet.",
      tooManyOnes:
        "Oops! The Pink Jar has too many! Remember - it likes just one digit. Try moving 10 ones to the tens place.",
      nothingAdded:
        "Give it a try! Start adding cubes and rods to make the number.",
    }
  },
];




// const dialogs7 = {
//   correctAnswer: "Yes! You made Seven—0 ten and 7 ones. Nice work!",
//   nothingAdded:
//     "Give it a try! Start adding cubes and rods to make the number.",
//   tensWrong: "To make a single digit number, you don’t need a tens place",
//   tensCorrectOnesWrong:
//     "Try again, you need to add seven squares to the jar to get this right.",
// };
// const dialogs13 = {
//   correctAnswer: "Yes! You made thirteen—1 ten and 3 ones. Nice work!",
//   randomTotalWrong:
//     "Hmm… That number’s different. Check both tens and ones and try again!",
//   onesCorrectTensWrong:
//     "You got the ones right—3 ones! But check the tens again.",
//   tensCorrectOnesWrong:
//     "Your tens are spot on—1 ten! But your ones don’t match yet.",
//   tooManyOnes:
//     "Oops! The Pink Jar has too many! Remember—it likes just one digit. Try moving 10 ones to the tens place.",
//   nothingAdded:
//     "Give it a try! Start adding cubes and rods to make the number.",
// };
// const dialogs30 = {
//   correctAnswer: "Yes! You made thirty—3 ten and 0 ones. Nice work!",
//   randomTotalWrong:
//     "Hmm… That number’s different. Check both tens and ones and try again!",
//   onesWrong: "Observe the number, it has zero ones.",
//   nothingAdded:
//     "Give it a try! Start adding cubes and rods to make the number.",
//   onesCorrectTensWrong:
//     "You got the ones right—0 ones! But check the tens again.",
// };

// const dialogs18 = {
//   correctAnswer: "Yes! You made eighteen—1 ten and 8 ones. Nice work!",
//   randomTotalWrong:
//     "Hmm… That number’s different. Check both tens and ones and try again!",
//   onesCorrectTensWrong:
//     "You got the ones right—3 ones! But check the tens again.",
//   tensCorrectOnesWrong:
//     "Your tens are spot on—1 ten! But your ones don’t match yet.",
//   tooManyOnes:
//     "Oops! The Pink Jar has too many! Remember—it likes just one digit. Try moving 10 ones to the tens place.",
//   nothingAdded:
//     "Give it a try! Start adding cubes and rods to make the number.",
// };

// const dialogs25 = {
//   correctAnswer: "Yes! You made twenty five - 2 ten and 5 ones. Nice work!",
//   randomTotalWrong:
//     "Hmm… That number’s different. Check both tens and ones and try again!",
//   onesCorrectTensWrong:
//     "You got the ones right - 5 ones! But check the tens again.",
//   tensCorrectOnesWrong:
//     "Your tens are spot on - 2 ten! But your ones don’t match yet.",
//   tooManyOnes:
//     "Oops! The Pink Jar has too many! Remember - it likes just one digit. Try moving 10 ones to the tens place.",
//   nothingAdded:
//     "Give it a try! Start adding cubes and rods to make the number.",
// };
// const dialogs16 = {
//   correctAnswer: "Yes! You made sixteen- 1 ten and 6 ones. Nice work!",
//   randomTotalWrong:
//     "Hmm… That number’s different. Check both tens and ones and try again!",
//   onesCorrectTensWrong:
//     "You got the ones right - 6 ones! But check the tens again.",
//   tensCorrectOnesWrong:
//     "Your tens are spot on - 1 ten! But your ones don’t match yet.",
//   tooManyOnes:
//     "Oops! The Pink Jar has too many! Remember - it likes just one digit. Try moving 10 ones to the tens place.",
//   nothingAdded:
//     "Give it a try! Start adding cubes and rods to make the number.",
// };
// const dialogs40 = {
//   correctAnswer: "Yes! You made forty- 4 ten and 0 ones. Nice work!",
//   randomTotalWrong:
//     "Hmm… That number’s different. Check both tens and ones and try again!",
//   onesCorrectTensWrong:
//     "You got the ones right - 0 ones! But check the tens again.",
//   tensCorrectOnesWrong:
//     "Your tens are spot on - 4 ten! But your ones don’t match yet.",
//   tooManyOnes:
//     "Oops! The Pink Jar has too many! Remember - it likes just one digit. Try moving 10 ones to the tens place.",
//   nothingAdded:
//     "Give it a try! Start adding cubes and rods to make the number.",
// };