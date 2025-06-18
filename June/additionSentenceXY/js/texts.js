// texts.js
const flag = "INDONESIAN";
// const flag = "ENGLISH";
// const flag = "INDONESIAN";


const texts = flag === "ENGLISH" ? textsEnglish : textsIndonesian;

const questions = questionsEnglish
const numberToText = flag === "ENGLISH" ? numberToTextEnglish : numberToTextIndonesian

const questionTexts = flag === "ENGLISH" ? questionTextsEnglish : questionTextsIndonesian

const itemPictures = {
  coin: `<img src="assets/coin.png" class="coin" />`,
};