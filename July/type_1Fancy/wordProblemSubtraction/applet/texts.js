
//LANGUAGE CHANGE

const flag = "ENGLISH"; // <-- change this flag to"ENGLISH" or "INDONESIAN"


//--------------------------------------//

const speechBubbleData = flag === "ENGLISH" ? speechBubbleDataEnglish : speechBubbleDataIndonesian;
const questionData = flag === "ENGLISH" ? questionDataEnglish : questionDataIndonesian;
const leftInstructions = flag === "ENGLISH" ? leftInstructionsEnglish : leftInstructionsIndonesian;
const overlayData = flag === "ENGLISH" ? overlayDataEnglish : overlayDataIndonesian;

const buttonText = flag === "ENGLISH" ? buttonTextsEnglish : buttonTextsIndonesian;

