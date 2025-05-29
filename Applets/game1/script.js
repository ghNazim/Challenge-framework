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
  let stopZackVibing;
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
  
  const bgAudio = document.getElementById("bgAudio");
  

let texts;
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
        playAudio("correct");
        setTimeout(moveZackForward, 600);   
    }
    return {
        correct: result === 0,
        sameSide:result*addition>0
    }
}

let zackIndex = 0;
let zackX = 60; // initial x position
let zackY = 255; // y position on bridge level
let zackImage;
let isZackWalking = false;

function initializeZack() {
  if (!zackImage) {
    zackImage = document.createElementNS("http://www.w3.org/2000/svg", "image");
    zackImage.setAttributeNS(null, "href", `ZackVibin/vibe (${1}).png`); // set initial imageack/walk (${zackIndex}).png`);
    zackImage.setAttributeNS(null, "x", zackX);
    zackImage.setAttributeNS(null, "y", zackY);
    zackImage.setAttributeNS(null, "width", 100);
    zackImage.setAttributeNS(null, "height", 100);
    svg.appendChild(zackImage);
  }
}


function moveZackForward() {
stopZackVibing()
  
if(isZackWalking) return;
  isZackWalking = true;
  let distance = 660;
  let frames = 200;
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
    zackIndex = ((zackIndex) % 25) + 1; // loop from 1 to 25
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
    zackImage.setAttributeNS(null, "href", `ZackVibin/vibe (${1}).png`);
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
    setZackBack()
    stopZackVibing = animateZackVibin();
    
  }, 500); // Wait for fade-in to complete
}
function vibrateBridge(duration = 300, intensity = 3) {
    playAudio("wrong")
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

function showFinalOverlay() {
  const svg = document.getElementById("gameSvg");

  // --- Create blur filter ---
  const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
  const filter = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "filter"
  );
  filter.setAttribute("id", "blurFilter");

  const feGaussianBlur = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "feGaussianBlur"
  );
  feGaussianBlur.setAttribute("stdDeviation", "5");
  filter.appendChild(feGaussianBlur);
  defs.appendChild(filter);
  svg.appendChild(defs);

  // --- Blurred dark background ---
  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect.setAttribute("x", 0);
  rect.setAttribute("y", 0);
  rect.setAttribute("width", "100%");
  rect.setAttribute("height", "100%");
  rect.setAttribute("fill", "black");
  rect.setAttribute("opacity", "0.5");
  rect.setAttribute("filter", "url(#blurFilter)");

  // --- Group to apply scale transform ---
  const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
  group.setAttribute("transform", "scale(0.1)");
  group.setAttribute("opacity", "0");

  // --- Image inside group ---
  const img = document.createElementNS("http://www.w3.org/2000/svg", "image");
  img.setAttributeNS(null, "href", "congratulation.png");
  img.setAttributeNS(null, "x", 150);
  img.setAttributeNS(null, "y", 100);
  img.setAttributeNS(null, "width", 500);
  img.setAttributeNS(null, "height", 300);

  group.appendChild(img);

  svg.appendChild(rect);
  svg.appendChild(group);

  // --- Animate scale from 0.1 to 1 ---
  let start = null;
  const duration = 500; // ms
confettiBurst()
  function animate(timestamp) {
    if (!start) start = timestamp;
    const elapsed = timestamp - start;

    const progress = Math.min(elapsed / duration, 1);
    const scale = 0.1 + 0.9 * progress;
    group.setAttribute("transform", `scale(${scale})`);
    group.setAttribute("opacity", progress);

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  }

  requestAnimationFrame(animate);
}
  
  
function playAudio(id){
    const audio = document.getElementById(id);
    audio.currentTime = 0;
    audio.play();
}
function initializeGame(){
    createBlockChain(numberOfBlocks, bridgeX1, bridgeX2);
    texts = bridge.querySelectorAll("text");
    placeDraggableImage(svg, "w1.png", imgX, imgY);
    placeInitialWeights();
    initializeZack();
    svg.appendChild(overlay);
}

const playButton = document.getElementById("playButton");

let isBouncing = true;
let startTime = null;

function bounceButton(time) {
  if (!isBouncing) return;
  if (!startTime) startTime = time;

  const elapsed = time - startTime;
  const bounceY = Math.sin(elapsed / 200) * 3; // small bounce
  playButton.setAttribute("transform", `translate(0, ${bounceY})`);

  requestAnimationFrame(bounceButton);
}

// Start bouncing
requestAnimationFrame(bounceButton);

// Handle click
playButton.addEventListener("click", () => {
  isBouncing = false;
  playButton.remove();
  bgAudio.volume = 0.2
  bgAudio.play() 
  initializeGame();
  stopZackVibing = animateZackVibin()
});

function animateClouds() {
  const cloud1 = document.getElementById("cloud1");
  const cloud2 = document.getElementById("cloud2");

  let x1 = 0;
  let x2 = 800;
  const speed = 0.5;

  function move() {
    x1 -= speed;
    x2 -= speed;

    if (x1 <= -800) x1 = 800;
    if (x2 <= -800) x2 = 800;

    cloud1.setAttribute("x", x1);
    cloud2.setAttribute("x", x2);

    requestAnimationFrame(move);
  }

  move();
}
animateClouds();

function animateZackVibin(frameCount = 96, fps = 120) {
  const frameDuration = 4000 / fps;
  let lastTime = performance.now();
  let frame = 1;
  let stopped = false;

  function loop(currentTime) {
    if (stopped) return;

    if (currentTime - lastTime >= frameDuration) {
      zackImage.setAttributeNS(null, "href", `ZackVibin/vibe (${frame}).png`);
      frame = (frame % frameCount) + 1;
      lastTime = currentTime;
    }

    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);

  // Return a stop function
  return () => {
    stopped = true;
  };
}
  

function confettiBurst() {
  const duration = 2.5 * 1000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({ particleCount: 5, angle: 60, spread: 70, origin: { x: 0,y:.6 } });
    confetti({ particleCount: 5, angle: 120, spread: 70, origin: { x: .5,y:.6 } });
    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}
