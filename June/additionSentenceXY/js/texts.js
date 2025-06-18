//NOTE: Change Language 
// Change the variable 'flag' to "ENGLISH" or "INDONESIAN" to set the language 
// const flag = "ENGLISH";
// const flag = "INDONESIAN";



const flag = "ENGLISH";  // <----- change this to change the language



//DONT CHANGE ANYTHING ELSE UNLESS YOU KNOW WHAT YOU ARE DOING
//===========================================================================================================================================

const texts = flag === "ENGLISH" ? textsEnglish : textsIndonesian;

const questions = questionsEnglish
const numberToText = flag === "ENGLISH" ? numberToTextEnglish : numberToTextIndonesian

const questionTexts = flag === "ENGLISH" ? questionTextsEnglish : questionTextsIndonesian

const itemPictures = {
  coin: `<img src="assets/coin.png" class="coin" />`,
};