//LANGUAGE CHANGE

const flag = "ENGLISH"; // <-- change this flag to"ENGLISH" or "INDONESIAN"

//--------------------------------------//

const texts = flag === "ENGLISH" ? textsEnglish : textsIndonesian;

const numberToText =
  flag === "ENGLISH" ? numberToTextEnglish : numberToTextIndonesian;

const questions = flag === "ENGLISH" ? questionsEnglish : questionsIndonesian;
const tags = flag === "ENGLISH" ? tagsEnglish : tagsIndonesian;
