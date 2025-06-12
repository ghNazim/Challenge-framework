let activeFunnel = 1,
  hintvisible = false;


function setImage(tag, num) {
  if (tag === 0) {
    return;
  }
  const id = `img${tag}`;
  const image = document.getElementById(id);
  if (num < 0) {
    image.src = "";
    return;
  }
  image.src = `assets/${num}.png`;
}
function setMachineImage(num) {
  const machine = document.getElementById("actualMachine");
  machine.src = `assets/highlight${num}.png`;
}

let currentAnswer = [0, 0, 0];
let correctAnswer = [3, 3, 6];

function fillDots(id, n) {
  const cells = document.querySelectorAll(`#${id} .cell`);
  cells.forEach((cell, index) => {
    cell.innerHTML = ""; // Clear previous dots
    if (index < n) {
      const dot = document.createElement("div");
      dot.className = "dot";
      cell.appendChild(dot);
    }
  });
}

function setActiveFunnel(num) {
  if (num < 0 || num > 3) {
    activeFunnel = 0;
  } else {
    activeFunnel = num;
  }
  setMachineImage(activeFunnel);
}

function handleNumpadClick(number) {
  if (activeFunnel > 0) {
    setImage(activeFunnel, number);
    currentAnswer[activeFunnel - 1] = parseInt(number);
    activeFunnel = nextFunnel();
    setActiveFunnel(activeFunnel);
  }
}

function nextFunnel() {
  if (activeFunnel <= 0) {
    return 0;
  }
  let index = activeFunnel - 1;
  let nextIndex = index + 1;
  while (true) {
    if (currentAnswer[nextIndex] !== correctAnswer[nextIndex]) {
      return nextIndex+1;
    }
    if (nextIndex > 2) {
      return 0;
    }
    nextIndex++;
  }
}

document.querySelectorAll(".option").forEach((numButton) => {
  numButton.addEventListener("click", function () {
    const number = this.getAttribute("data-value");
    handleNumpadClick(number);
  });
});

nextButton.addEventListener("click", checkAnswer);

function initiate() {
  activeFunnel = 1;
  setActiveFunnel(activeFunnel);
  setFramesValues();
}
initiate();

function setFramesValues(){
    fillDots("frame1", correctAnswer[0]);
    fillDots("frame2", correctAnswer[1]);
    fillDots("frame3", correctAnswer[2]);
}
function show2Tenframes(){
    const frames = document.querySelectorAll("#frame1,#frame2");
    frames.forEach((frame) => {
      frame.style.display = "grid";
    });
}
function hideAllTenFrames(){
    const frames = document.querySelectorAll(".ten-frame");
    frames.forEach((frame) => {
      frame.style.display = "none";
    });
}
function showThirdTenFrame(){
    const frame = document.querySelector("#frame3");
    frame.style.display = "grid";
}


function checkAnswer(){
    const true1= currentAnswer[0] === correctAnswer[0];
    const true2= currentAnswer[1] === correctAnswer[1];
    const true3= currentAnswer[2] === correctAnswer[2];
    const correct = true1 && true2 && true3;
    if(correct){
        show2Tenframes();
        showThirdTenFrame();
        confettiBurst()
        return;
    }
    else{
        const ind = getFirstWrongIndex();
        setActiveFunnel(ind+1);
        show2Tenframes();
    }
    
}

function getFirstWrongIndex() {
  for (let i = 0; i < 3; i++) {
    if (currentAnswer[i] !== correctAnswer[i]) {
      return i;
    }
  }
  return -1;
}


function confettiBurst() {
  const duration = 2.5 * 1000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 360,
      origin: { x: 0.5, y: 0.5 },
    });
    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}
  