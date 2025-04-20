const handleNextClick = function () {
  if (step == 1) handleNextInComprehend();
  else if (step == 2) handleNextInConnect();
  else if (step == 3) handleNextInCompute();
  setGlobalSubstep();
  updateFooter();
};

document.addEventListener("DOMContentLoaded", function () {
  const nextButton = document.getElementById("nextBtn");
  if (nextButton) {
    nextButton.addEventListener("click", handleNextClick);
  }
});
updateTeacherNotes()
setupConnectSummary();
showConnectCard(false);
updateCompute(0);
