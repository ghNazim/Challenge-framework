const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");
const resetButton = document.getElementById("resetButton");
const maxSteps = questions.length;
let currentQuestion = 0;
function init() {
  generateStepCounter(questions.length);
  loadWithStep(0)
  
}
init()
function loadWithStep(step){
    highlightCurrentStep(step);
    loadQuestion(step);
    loadImage(step);
    prevButton.disabled = (step === 0);
}
function handleNextClick(){
    if (currentQuestion == maxSteps - 1) {
      showFullScreenOverlay();
    }
    if(currentQuestion < maxSteps-1 && currentQuestion>=0){
        currentQuestion++;
        loadWithStep(currentQuestion);
    }
    
}
function handlePreviousClick(){
    if (currentQuestion < maxSteps && currentQuestion > 0) {
      currentQuestion--;
      loadWithStep(currentQuestion);
    }
}
function handleResetClick(){
    hideFullScreenOverlay();
    currentQuestion = 0;
    questions.forEach((q) => (q.answered = false));
    loadWithStep(currentQuestion);
}
nextButton.addEventListener("click", handleNextClick);
prevButton.addEventListener("click", handlePreviousClick);
resetButton.addEventListener("click", handleResetClick);

