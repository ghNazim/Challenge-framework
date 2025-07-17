
//LANGUAGE CHANGE

const flag = "ENGLISH"; // <-- change this flag to"ENGLISH" or "INDONESIAN"


//--------------------------------------//

const textPool = flag === "ENGLISH" ? textPoolEnglish : textPoolIndonesian;
const overlayData = flag === "ENGLISH" ? overlayDataEnglish : overlayDataIndonesian;

const buttonText = flag === "ENGLISH" ? buttonTextsEnglish : buttonTextsIndonesian;

const mcqData = flag === "ENGLISH" ? mcqDataEnglish : mcqDataIndonesian;