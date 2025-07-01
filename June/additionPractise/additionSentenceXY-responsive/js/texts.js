// texts.js
//LANGUAGE CHANGE FLAG

const flag = "INDONESIAN"; //<--- change this to change language it can be "ENGLISH" or "INDONESIAN"

// const flag = "ENGLISH";
// const flag = "INDONESIAN";


const texts = flag === "ENGLISH" ? textsEnglish : textsIndonesian;

const questions = questionsEnglish
const numberToText = flag === "ENGLISH" ? numberToTextEnglish : numberToTextIndonesian

const questionTexts = flag === "ENGLISH" ? questionTextsEnglish : questionTextsIndonesian

const itemPictures = {
  coin: `<img src="assets/coin.png" class="coin" />`,
};