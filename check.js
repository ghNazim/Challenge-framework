let checkSubStep = 0;
function handlePrevInCheck(){
    if (checkSubStep <= 0) {
        step--;
        updatesWithStep();
        // If we're at the beginning, there's nothing to go back to
        return;
    }
}

function handlNextInCheck(){
    return;
}