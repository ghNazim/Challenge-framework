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
}

next.addEventListener("click",function(){
    step++;
    callWithStep(step);
});
previous.addEventListener("click",function(){
    step--;
    callWithStep(step);
});