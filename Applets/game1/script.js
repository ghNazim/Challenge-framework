const bridgeX1 = 175,
  bridgeX2 = 505,
  bridgeY = 350,
  bridgeLength = bridgeX2 - bridgeX1,
  numberOfBlocks = 11,
  middleBlock = Math.floor(numberOfBlocks / 2),
  eachWidth = bridgeLength / numberOfBlocks,
  bridgeHeight = eachWidth,
  weightWidth = 30;
  const problem1 = {
    numberOfBlocks: 11,
    q: [3, -2],
    a: -1,
    curr:0,
  };
  const svg = document.getElementById("gameSvg");
  const bridge = document.getElementById("bridge");
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
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.textContent = Math.abs(i - half);
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
  const cx = bbox.x + bbox.width / 2;
  const cy = bbox.y + bbox.height / 2;
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
      const qq = problem1.q.map(i => i + middleBlock);
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
      problem1.curr = snapIndex-middleBlock;
    } else {
      // Reset to original position
      img.setAttribute("x", originalX);
      img.setAttribute("y", originalY);
    }
  });
  
}
  


placeDraggableImage(svg, "w1.png", 300, 150);


function placeWeight(path, x, y) {
  const img = document.createElementNS("http://www.w3.org/2000/svg", "image");
  img.setAttributeNS(null, "href", path);
  img.setAttributeNS(null, "x", x);
  img.setAttributeNS(null, "y", y);
  img.setAttributeNS(null, "width", weightWidth);
  img.setAttributeNS(null, "height", weightWidth);
  bridge.appendChild(img);
}
function placeInitialWeights(){
    problem1.q.forEach((d) => {
      const XX =
        bridgeX1 + eachWidth * (5 + d) + eachWidth / 2 - weightWidth / 2;
      placeWeight("w2.png", XX, bridgeY + 5 + eachWidth);
    });
    setTextsGreen(texts, problem1.q.map(i => i + middleBlock));
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
    }
}

function update(){
    checkInclination(problem1);
    requestAnimationFrame(update)
}

update();