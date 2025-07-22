
//LANGUAGE CHANGE

const flag = "ENGLISH"; // <-- change this flag to"ENGLISH" or "INDONESIAN"


//--------------------------------------//

const overlayData = flag === "ENGLISH" ? overlayDataEnglish : overlayDataIndonesian;
const data = flag === "ENGLISH" ? dataEnglish : dataIndonesian;
const buttonText = flag === "ENGLISH" ? buttonTextsEnglish : buttonTextsIndonesian;

const headerArray = flag === "ENGLISH" ? headerArrayEnglish : headerArrayIndonesian;