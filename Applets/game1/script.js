const bridgeX1 = 175,
  bridgeX2 = 505,
  bridgeY = 350,
  bridgeLength = bridgeX2 - bridgeX1,
  numberOfBlocks = 11,
  middleBlock = Math.floor(numberOfBlocks / 2),
  eachWidth = bridgeLength / numberOfBlocks,
  bridgeHeight = eachWidth,
  weightWidth = 30;
  const imgX = 300, imgY = 150;
  let questionIndex = 0,movingImg=null;
  
  const questions = [
    {
      numberOfBlocks: 11,
      q: [3, -2],
      a: -1,
      curr: 0,
    },
    {
      numberOfBlocks: 11,
      q: [4, -5],
      a: 1,
      curr: 0,
    },
    {
      numberOfBlocks: 11,
      q: [1, 3],
      a: -4,
      curr: 0,
    },
    {
      numberOfBlocks: 11,
      q: [5, -1],
      a: -4,
      curr: 0,
    },
  ];
  let problem = questions[questionIndex];
  const svg = document.getElementById("gameSvg");
  const bridge = document.getElementById("bridge");
  const overlay = document.getElementById("overlay");
  const finalOverlay = document.getElementById("finalOverlay");
createBlockChain(numberOfBlocks, bridgeX1, bridgeX2);
const texts = bridge.querySelectorAll("text");
function createBlockChain(count, x1, x2) {
  const bridge = document.getElementById("bridge");
  bridge.innerHTML = "";
  const half = Math.floor(count / 2);
  const spacing = (x2 - x1) / count;
  const blockWidth = spacing;
  const blockHeight = spacing;
  const yPosition = 350;

  for (let i = 0; i < count; i++) {
    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");

    // Block image
    const img = document.createElementNS("http://www.w3.org/2000/svg", "image");
    img.setAttributeNS(null, "href", "block.png");
    img.setAttributeNS(null, "x", x1 + i * spacing);
    img.setAttributeNS(null, "y", yPosition);
    img.setAttributeNS(null, "width", blockWidth);
    group.appendChild(img);

    // Index text
    const num = Math.abs(i - half);
    
        const text = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "text"
        );
        text.textContent = num!==0?num:"";
        text.setAttribute("x", x1 + i * spacing + blockWidth / 2);
        text.setAttribute("y", yPosition + blockHeight / 2 + 6); // Slight vertical centering
        text.setAttribute("text-anchor", "middle");
        text.setAttribute("font-size", "20");
        text.setAttribute("fill", "white");
        text.setAttribute("font-family", "sans-serif");
        group.appendChild(text);

    bridge.appendChild(group);
  }
}

function rotateGroup(id, angle) {
  groupElement = document.getElementById(id);
  const bbox = groupElement.getBBox();
  const cx =bridgeX1+ bridgeLength/2;
  const cy = bridgeY+bridgeHeight/2
  groupElement.setAttribute("transform", `rotate(${angle}, ${cx}, ${cy})`);
}

function placeDraggableImage(
  svg,
  href,
  x,
  y,
  width = weightWidth,
  height = weightWidth
) {
const bridge = document.getElementById("bridge");

  const img = document.createElementNS("http://www.w3.org/2000/svg", "image");
  img.setAttributeNS(null, "href", href);
  img.setAttributeNS(null, "x", x);
  img.setAttributeNS(null, "y", y);
  img.setAttributeNS(null, "width", width);
  img.setAttributeNS(null, "height", height);
  img.style.cursor = "grab";
  movingImg = img;
  svg.appendChild(img);
  const originalX = x;
  const originalY = y;

  let offsetX, offsetY;
  let isDragging = false;

  img.addEventListener("mousedown", (e) => {
    svg.appendChild(img);
    isDragging = true;
    offsetX = e.offsetX - parseFloat(img.getAttribute("x"));
    offsetY = e.offsetY - parseFloat(img.getAttribute("y"));
    img.style.cursor = "grabbing";
  });

  svg.addEventListener("mousemove", (e) => {
    if (isDragging) {
      const x = e.offsetX - offsetX;
      const y = e.offsetY - offsetY;
      img.setAttribute("x", x);
      img.setAttribute("y", y);
      const snapIndex = canBeSnapped(img);
      const qq = problem.q.map(i => i + middleBlock);
      if (snapIndex !== -1) {
        setTextsGreen(texts, [snapIndex,...qq]);
      }
      else{
        setTextsGreen(texts, [...qq]);
      }
    }
  });

  svg.addEventListener("mouseup", () => {
    if (!isDragging) return;
    isDragging = false;
    img.style.cursor = "grab";

    const snapIndex = canBeSnapped(img);
    if (snapIndex !== -1) {
      const centerX =
        bridgeX1 + eachWidth * snapIndex + eachWidth / 2 - width / 2;
      const belowY = bridgeY + bridgeHeight + 5;
      img.setAttribute("x", centerX);
      img.setAttribute("y", belowY);
      bridge.appendChild(img);
      problem.curr = snapIndex-middleBlock;
      
    } else {
      // Reset to original position
      setDraggableImage(img, originalX, originalY);
    }
    const incl = checkInclination(problem);
    const delay = incl.sameSide? 0: 500;
    if(!incl.correct ){
        setTimeout(vibrateBridge, delay);
    }
  });
  
}
function setDraggableImage(img=movingImg,x=imgX,y=imgY){
    svg.appendChild(movingImg);
    img.setAttribute("x", x);
    img.setAttribute("y", y);
    setTextsGreen(texts, problem.q.map(i => i + middleBlock));
}


placeDraggableImage(svg, "w1.png", imgX, imgY);


function placeWeight(path, targetX, targetY) {
  const startX = 300;
  const startY = 600;
  const duration = 500; // ms
  const startTime = performance.now();

  const img = document.createElementNS("http://www.w3.org/2000/svg", "image");
  img.setAttributeNS(null, "href", path);
  img.setAttributeNS(null, "width", weightWidth);
  img.setAttributeNS(null, "height", weightWidth);
  img.setAttributeNS(null, "x", startX);
  img.setAttributeNS(null, "y", startY);
  bridge.appendChild(img);

  function animateWeight(currentTime) {
    const elapsed = currentTime - startTime;
    const t = Math.min(elapsed / duration, 1); // 0 to 1

    // Easing (optional): easeOutQuad
    const ease = 1 - (1 - t) * (1 - t);

    const newX = startX + (targetX - startX) * ease;
    const newY = startY + (targetY - startY) * ease;

    img.setAttributeNS(null, "x", newX);
    img.setAttributeNS(null, "y", newY);

    if (t < 1) {
      requestAnimationFrame(animateWeight);
    }
  }

  requestAnimationFrame(animateWeight);
}
  
function placeInitialWeights(){
    if(questionIndex>0){
        setTextsGreen(texts,[])
    }
    const hangingWeights = document.querySelectorAll('image[href="w2.png"]');
    hangingWeights.forEach((img) => bridge.removeChild(img));
    problem.q.forEach((d) => {
      const XX =
        bridgeX1 + eachWidth * (5 + d) + eachWidth / 2 - weightWidth / 2;
      placeWeight("w2.png", XX, bridgeY + 5 + eachWidth);
    });
    setTimeout(() => {
        setTextsGreen(texts, problem.q.map(i => i + middleBlock));
        checkInclination(problem); 
    },600)
}
placeInitialWeights()


function canBeSnapped(img) {
  const imgBBox = img.getBBox();
  const centerX = imgBBox.x + imgBBox.width / 2;
  const centerY = imgBBox.y + imgBBox.height / 2;
  const distance = centerX - bridgeX1;
  const isInside =
    centerX > bridgeX1 &&
    centerX < bridgeX2 &&
    centerY > bridgeY &&
    centerY < bridgeY + bridgeHeight * 2;
  if (isInside) {
    const i = Math.floor(distance / eachWidth);
    if (i !== Math.floor(numberOfBlocks / 2)) {
      return i;
    }
  }
  return -1;
}

function colorGreen(text){
  text.setAttribute("fill", "green");
  text.setAttribute("font-size", "24");
  text.setAttribute("font-weight", "bold");
}
function removeGreen(text){
  text.setAttribute("fill", "white");
  text.setAttribute("font-size", "20");
  text.setAttribute("font-weight", "none");
}

function setTextsGreen(texts,arr){
    texts.forEach(i => {
        removeGreen(i);
    });
    arr.forEach(i => {
        colorGreen(texts[i]);
    });
}

function checkInclination(problem){
    
    const addition = problem.q.reduce((prev,curr) => prev + curr);
    const result = addition + problem.curr;
    if(result<0){
        rotateGroup("bridge", -10);
    }
    else if(result>0){
        rotateGroup("bridge", 10);
    }
    else{
        rotateGroup("bridge", 0);
        setTimeout(moveZackForward, 600);   
    }
    return {
        correct: result === 0,
        sameSide:result*addition>0
    }
}

let zackIndex = 9;
let zackX = 60; // initial x position
let zackY = 250; // y position on bridge level
let zackImage;
let isZackWalking = false;

function initializeZack() {
  if (!zackImage) {
    zackImage = document.createElementNS("http://www.w3.org/2000/svg", "image");
    zackImage.setAttributeNS(null, "href", `zack/walk (${zackIndex}).png`);
    zackImage.setAttributeNS(null, "x", zackX);
    zackImage.setAttributeNS(null, "y", zackY);
    zackImage.setAttributeNS(null, "width", 100);
    zackImage.setAttributeNS(null, "height", 100);
    svg.appendChild(zackImage);
  }
}
initializeZack();

function moveZackForward() {
  
if(isZackWalking) return;
  isZackWalking = true;
  let distance = 560;
  let frames = 300; // total frames of motion
  let step = distance / frames;
  let frame = 0;

  const animation = () => {
    if (frame >= frames) {
      isZackWalking = false;
      setTimeout(() => {
        setProblem(++questionIndex);
      }, 600);
      return;
    }

    // Animate walk
    zackIndex = ((zackIndex - 1 + 1) % 25) + 1; // loop from 1 to 25
    zackImage.setAttributeNS(null, "href", `zack/walk (${zackIndex}).png`);

    // Move forward
    zackX += step;
    zackImage.setAttributeNS(null, "x", zackX);

    frame++;
    requestAnimationFrame(animation);
  };

  animation();
}

function setZackBack(){
    zackIndex = 9;
    zackImage.setAttributeNS(null, "href", `zack/walk (${zackIndex}).png`);
    zackX = 60;
    zackImage.setAttributeNS(null, "x", zackX);
}

function setProblem(idx) {
    if(idx>=questions.length){
        showFinalOverlay()
        return;
    }
  overlay.setAttribute("opacity", "1"); // Fade to black

  setTimeout(() => {
    overlay.setAttribute("opacity", "0");
    svg.appendChild(movingImg)
    // Update problem while black
    problem = questions[idx];
    setDraggableImage(movingImg, imgX, imgY);
    placeInitialWeights();
    checkInclination(problem);
    setZackBack();
    
  }, 500); // Wait for fade-in to complete
}
svg.appendChild(overlay);


// const nextButton = document.getElementById("nextButton");
// nextButton.addEventListener("click", () => {
//   setProblem(++questionIndex);
// });

function vibrateBridge(duration = 300, intensity = 3) {
  const bridgeGroup = document.querySelector("#bridgeWrapper");
  const startTime = performance.now();

  function animate(time) {
    const elapsed = time - startTime;

    if (elapsed < duration) {
      const dx = Math.sin(elapsed * 40) * intensity;
      bridgeGroup.setAttribute("transform", `translate(${dx}, 0)`);
      requestAnimationFrame(animate);
    } else {
      bridgeGroup.setAttribute("transform", `translate(0, 0)`); // Reset
      
      problem.curr = 0;
      checkInclination(problem);
      setDraggableImage();
    }
  }

  requestAnimationFrame(animate);
  
}

function showFinalOverlay(){
    finalOverlay.style.display = "flex";
    void finalOverlay.offsetHeight
    finalOverlay.style.scale=1
}
