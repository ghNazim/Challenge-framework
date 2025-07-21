
//LANGUAGE CHANGE

const flag = "ENGLISH"; // <-- change this flag to"ENGLISH" or "INDONESIAN"


//--------------------------------------//
const firstStageQuestions = flag === "ENGLISH" ? firstStageQuestionsEnglish : firstStageQuestionsIndonesian;
const textPool = flag === "ENGLISH" ? textPoolEnglish : textPoolIndonesian;
const overlayData = flag === "ENGLISH" ? overlayDataEnglish : overlayDataIndonesian;

const buttonText = flag === "ENGLISH" ? buttonTextsEnglish : buttonTextsIndonesian;

const mcqData = flag === "ENGLISH" ? mcqDataEnglish : mcqDataIndonesian;
const headerArray = flag === "ENGLISH" ? headerArrayEnglish : headerArrayIndonesian;