function checkAnswer() {
  const correctAnswer = questions[questionIndex].number;
  const answerInDigits = correctAnswer
    .toString()
    .split("")
    .reverse()
    .map(Number);
    const unitplace = answerInDigits[0];
    const tenplace = answerInDigits[1] || 0;
    
    
  const total = tenCount * 10 + unitCount;
  if (total === 0) {
    return "nothingAdded";
  }
  if (unitCount > 9) {
    return "tooManyOnes";
  }
  if (unitCount == unitplace && tenCount == tenplace) {
    return "correctAnswer";
  }
  if (unitCount == unitplace && tenCount != tenplace) {
    return "onesCorrectTensWrong";
  }
  if (unitCount != unitplace && tenCount == tenplace) {
    return "tensCorrectOnesWrong";
  }
  if (unitCount != unitplace && tenCount != tenplace) {
    return "randomTotalWrong";
  }
}

function addedCheckFor7(){
    if(tenCount>0){
        return "tensWrong"
    }
    return false;
}
function addedCheckFor30(){
    if(unitCount>0){
        return "onesWrong"
    }
    return false;
}

function finalCheckAnswer(){
    const number = questions[questionIndex].number;
    if(number==30){
        const result = addedCheckFor30()
        if(result){
            return result
        }
    }
    if(number==7){
        const result = addedCheckFor7()
        if(result){
            return result
        }
    }
    return checkAnswer()
}

function onSubmit(){
    const result = finalCheckAnswer()

    const comment = questions[questionIndex].feedback[result];
    
    showCommentTextVersion(comment);
    if(result=="correctAnswer"){
        if(questionIndex==questions.length-1){
            nextButton.textContent = T.button_texts.start_over
        }
        nextButton.disabled = false
        submitButton.disabled = true
        playSound("correct")
        return
    }
    playSound("wrong")
}
submitButton.addEventListener("click", onSubmit);