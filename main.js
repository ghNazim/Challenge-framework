const handleNextClick = function () {
  if (step == 1) handleNextInComprehend();
  else if (step == 2) handleNextInConnect();
  else if (step == 3) handleNextInCompute();
  setGlobalSubstep();
  updateFooter();
};
const handlePrevClick = function () {
  if (step == 1) handlePrevInComprehend();
  if (step == 2) handlePrevInConnect();
  if (step == 3) handlePrevInCompute();

  setGlobalSubstep();
  updateFooter();
}
document.addEventListener("DOMContentLoaded", function () {
  const nextButton = document.getElementById("nextBtn");
  const prevButton = document.getElementById("prevBtn");
  if (nextButton) {
    nextButton.addEventListener("click", handleNextClick);
  }
  if (prevButton) {
    prevButton.addEventListener("click", handlePrevClick);
  }
});
updateTeacherNotes()
setupConnectSummary();
setupQuestion();
updateInfoConnect(0);
showConnectCard(false);
updateCompute(0);
enableButton("prevBtn", false);
enableButton("nextBtn", true);
