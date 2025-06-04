const next = document.getElementById("nextButton");
const previous = document.getElementById("previousButton");
let step =0;
function callWithStep(step){
    if(step===0){
        showChangeButtons(1,false);
        showChangeButtons(2,false);
        next.disabled = false;
        previous.disabled = true;
    }
    else if(step===1){
        console.log("step 1");
        showChangeButtons(1,true);
        next.disabled = true;
        previous.disabled = false;
    }
    else if(step==2){
        animateUnits1()
    }
    else if(step==3){
        animateunits2();
    }
    else if(step==4){
        cloned = cloneAndTranslateElement("units");
    }
    else if(step==5){
        animateunits2()
    }
    else if(step==6){
        animateElementToTarget(cloned, document.querySelector("#row-3 .ten-bar"),()=>{
            paintActive("#row-3 .ten-bar", 1, "block-color-active");
            tenIndex = 1;
        });
    }
    
}

next.addEventListener("click",function(){
    step++;
    callWithStep(step);
});
previous.addEventListener("click",function(){
    animateHundredsToTarget(
      document.querySelector("#row-1 .hundreds-cell>.actual-blocks"),
      3
    );
});