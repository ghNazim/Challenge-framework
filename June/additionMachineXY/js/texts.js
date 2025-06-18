//NOTE: Change Language
// Change the variable 'flag' to "ENGLISH" or "INDONESIAN" to set the language
// const flag = "ENGLISH";
// const flag = "INDONESIAN";

const flag = "ENGLISH"; // <----- change this flag to change the language

//DONT CHANGE ANYTHING ELSE UNLESS YOU KNOW WHAT YOU ARE DOING
//===========================================================================================================================================

const texts = flag === "ENGLISH" ? textsEnglish : textsIndonesian;

const questions = questionsEnglish;
const numberToText = numberToTextEnglish;
