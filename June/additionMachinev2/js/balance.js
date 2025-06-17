const base = document.getElementById("base");
const beam = document.getElementById("beam");
const leftPan = document.getElementById("left-pan");
const rightPan = document.getElementById("right-pan");
const balance = document.getElementById("balance");
const radius = 10;
const ix = 4.4,
  iy = 5.2;
const balanceProps = {
  left: 0,
  right: 0,
  currentAngle: 0,
  answer: 0,
};

function setupBalance() {
  hideAllTenFramesBalance();
  balanceProps.left = [
    questions[questionIndex][0],
    questions[questionIndex][1],
  ];
  balanceProps.right = 0;
  balanceProps.answer = balanceProps.left[0] + balanceProps.left[1];
  const tasks = [
    [1, balanceProps.left[0]],
    [4, 10],
    [2, balanceProps.left[1]],
    [5, 11],
  ];
  balanceProps.currentAngle = 0;

  tasks.forEach((id, index) => {
    gsap.delayedCall(index * 0.1, () => {
      setWeightImage(...id);
    });
  });
  setWeightImage(3, -1);
  setBalanceBasedOnLeftAndRight();

  hintbtn.style.display = "block";
}
function rotateBalance(ang) {
  const dely = radius * Math.sin(ang);
  beam.style.rotate = ang + "rad";
  leftPan.style.bottom = iy + dely + "em";
  rightPan.style.bottom = iy - dely + "em";
}
function animateBalance(targetAngle) {
  gsap.to(
    { angle: balanceProps.currentAngle },
    {
      angle: targetAngle,
      duration: 0.8,
      ease: "power2.out",
      onUpdate: function () {
        currentAngle = this.targets()[0].angle;
        rotateBalance(currentAngle);
      },
    }
  );
}

function setBalanceBasedOnLeftAndRight() {
  const leftTotal = balanceProps.left[0] + balanceProps.left[1];
  const rightTotal = balanceProps.right;
  let angle;
  if (leftTotal > rightTotal) {
    angle = -Math.PI / 12;
  } else if (leftTotal < rightTotal) {
    angle = Math.PI / 12;
  } else {
    angle = 0;
  }
  animateBalance(angle);
  balanceProps.currentAngle = angle;
}
async function setWeightImage(tag, num) {
  if (tag === 0) return;
  const id = `weight${tag}`;
  const image = document.getElementById(id);

  return new Promise((resolve) => {
    const animateIn = () => {
      image.src = num < 0 ? "" : `assets/${numberToText[num]}.png`;

      gsap.fromTo(
        image,
        { opacity: 0, scale: 0.1 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: "back.out(1.7)",
          onComplete: resolve, // Resolve when animation finishes
        }
      );
    };

    if (image.src.includes(".png")) {
      console.log("inside gsap");
      gsap.to(image, {
        opacity: 0,
        scale: 0.1,
        duration: 0.3,
        onComplete: animateIn,
      });
    } else {
      animateIn();
    }
  });
}
function putWeightOnBalance(num) {
  setWeightImage(3, num);
  balanceProps.right = Number(num);
  setBalanceBasedOnLeftAndRight();
}

function hideAllTenFramesBalance() {
  hintvisible = false;
  fillDots("frame4", 0);
  fillDots("frame5", 0);
  fillDots("frame6", 0);
}

async function showTenFramesBalance() {
  if (hintvisible) return;
  await fillDots("frame4", balanceProps.left[0]);
  await fillDots("frame5", balanceProps.left[1]);
  await fillDots("frame6", balanceProps.answer);
  hintbtn.style.display = "none";
  hintvisible = true;
}

async function checkAnswerBalance() {
  checkButtonBalance.disabled = true;
  const correct = balanceProps.answer === balanceProps.right;
  if (correct) {
    await onCorrect(showTenFramesBalance);
    if (questionIndex === questions.length - 1) {
      setNextButtonText("start_over");
      updateInstructions("final_step");
    }
  } else {
    await onWrong(balance, showTenFramesBalance);
    checkButtonBalance.disabled = false;
  }
}
