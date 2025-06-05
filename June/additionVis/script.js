const next = document.getElementById("nextButton");
const reset = document.getElementById("resetButton");
let step = 0;



reset.addEventListener("click", () => {
    location.reload();
})
// function callWithStep(step) {
//   if (step === 0) {
//     showChangeButtons(1, false);
//     showChangeButtons(2, false);
//     next.disabled = false;
//   } else if (step === 1) {
//     showChangeButtons(1, true);
//     next.disabled = true;
//   } else if (step == 2) {
//     animateUnits1();
//     setOpaque("units");
//   } else if (step == 3) {
//     animateUnits2();
//   } else if (step == 4) {
//     cloned = cloneAndTranslateElement("units");
//   } else if (step == 5) {
//     animateUnits2();
//   } else if (step == 6) {
//     animateElementToTarget(
//       cloned,
//       document.querySelector("#row-3 .ten-bar"),
//       () => {
//         paintActive("#row-3 .ten-bar", 1, "block-color-active");
//         tenIndex = 1;
//         cloned = null;
//         updateDigitLabel("units");
//         updateDigitLabel("tens");
//       }
//     );
    
//   }
//   else if(step==7){
//     triggerFlyText("units");
//   }
  
//   else if (step == 8) {
//     animateTens1();
//     setOpaque("tens");
//   } else if (step == 9) {
//     cloned = cloneAndTranslateElement("tens");
//   } else if (step == 10) {
//     animateTens2();
//   } else if (step == 11) {
//     animateElementToTarget(
//       cloned,
//       document.querySelector("#row-3 .hundred-block"),
//       () => {
//         paintActive("#row-3 .hundred-block", 1, "block-color-active");
//         hundredIndex = 1;
//         cloned = null;
//         updateDigitLabel("tens");
//         updateDigitLabel("hundreds");
//       }
//     );
    
//   }
//   else if(step==12){
//     triggerFlyText("tens");
//   }
//   else if (step == 13) {
//     setOpaque("hundreds");
//     animateHundredsToTarget(
//       document.querySelector("#row-1 .hundreds-cell>.actual-blocks"),
//       hundredIndex
//     );
//   } else if (step == 14) {
//     animateHundredsToTarget(
//       document.querySelector("#row-2 .hundreds-cell>.actual-blocks"),
//       hundredIndex,
//     );
//   }
//   else if(step==15){
//     triggerFlyText("hundreds", () => {
//       setAllOpaque();
//       highlightSum(3);
//     });
//   }
// }

// next.addEventListener("click", function () {
//   step++;
//   callWithStep(step);
// });

