
const handleNextClick = function (step) {
    if(step==1) handleNextInComprehend();
    else if(step==2) handleNextInConnect();
    else if(step==3) handleNextInCompute();
    setGlobalSubstep();
    updateFooter();
};


document.addEventListener("DOMContentLoaded", function () {
  const nextButton = document.getElementById("nextBtn");
  if (nextButton) {
    nextButton.addEventListener("click", function () {
      handleNextClick(step);
    });
  }
});
setupConnectSummary();
showConnectCard(false);
updateCompute(0);