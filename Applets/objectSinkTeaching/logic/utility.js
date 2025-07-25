

function drawPrism(height) {
  const dx = 80,
    dy = 40;
  const x0 = 250,
    y0 = 400,
    w = 300,
    h = height;
  function drawBottom() {
    const polygon = document.getElementById("bottom");
    const points = `${x0},${y0} ${x0 + w},${y0} ${x0 + w + dx},${y0 - dy} ${
      x0 + dx
    },${y0 - dy}`;

    polygon.setAttribute("points", points);
  }

  function drawTopBack() {
    const polygon = document.getElementById("topBack");
    const points = `${x0 + dx / 2},${y0 - h - dy / 2} ${x0 + w + dx / 2},${
      y0 - h - dy / 2
    } ${x0 + w + dx},${y0 - dy - h} ${x0 + dx},${y0 - dy - h}`;

    polygon.setAttribute("points", points);
  }
  function drawTopFront() {
    const polygon = document.getElementById("topFront");
    const points = `${x0},${y0 - h} ${x0 + w},${y0 - h} ${x0 + w + dx / 2},${
      y0 - dy / 2 - h
    } ${x0 + dx / 2},${y0 - dy / 2 - h}`;

    polygon.setAttribute("points", points);
  }
  function drawFront() {
    const polygon = document.getElementById("front");
    const points = `${x0},${y0} ${x0 + w},${y0} ${x0 + w},${y0 - h} ${x0},${
      y0 - h
    }`;

    polygon.setAttribute("points", points);
  }
  function drawBack() {
    const polygon = document.getElementById("back");
    const points = `${x0 + dx},${y0 - dy} ${x0 + w + dx},${y0 - dy} ${
      x0 + w + dx
    },${y0 - h - dy} ${x0 + dx},${y0 - h - dy}`;

    polygon.setAttribute("points", points);
  }
  function drawRight() {
    const polygon = document.getElementById("right");
    const points = `${x0 + w},${y0} ${x0 + dx + w},${y0 - dy} ${x0 + dx + w},${
      y0 - dy - h
    } ${x0 + w},${y0 - h}`;

    polygon.setAttribute("points", points);
  }
  function drawLeft() {
    const polygon = document.getElementById("left");
    const points = `${x0},${y0} ${x0 + dx},${y0 - dy} ${x0 + dx},${
      y0 - dy - h
    } ${x0},${y0 - h}`;

    polygon.setAttribute("points", points);
  }

  drawBottom();
  drawTopFront();
  drawTopBack();
  drawFront();
  drawBack();
  drawRight();
  drawLeft();
  setWaterLevelMarker("dynamicMarker", 400-height);
}

function drawBeaker() {
  const dx = 80,
    dy = 40;
  const x0 = 250,
    y0 = 400,
    w = 300,
    h = 300;
  function drawFront() {
    const polygon = document.getElementById("beakerFront");
    const points = `${x0},${y0} ${x0 + w},${y0} ${x0 + w},${y0 - h} ${x0},${
      y0 - h
    }`;

    polygon.setAttribute("points", points);
  }
  function drawBack() {
    const polygon = document.getElementById("beakerBack");
    const points = `${x0 + dx},${y0 - dy} ${x0 + w + dx},${y0 - dy} ${
      x0 + w + dx
    },${y0 - h - dy} ${x0 + dx},${y0 - h - dy}`;

    polygon.setAttribute("points", points);
  }
  drawLine(x0, y0, x0 + dx, y0 - dy);
  drawLine(x0 + w, y0, x0 + dx + w, y0 - dy);
  drawLine(x0, y0 - h, x0 + dx, y0 - dy - h);
  drawLine(x0 + w, y0 - h, x0 + dx + w, y0 - dy - h);
  drawFront();
  drawBack();
  addRuler()
  setWaterLevelMarker("waterLevelMarker", 200);
}
function addRuler(startY=100, endY=400, interval = 10, x = 250) {
  const rulerGroup = document.getElementById("ruler");
  const totalTicks = Math.floor((endY - startY) / interval);

  // Clear previous ticks if any
  rulerGroup.innerHTML = "";

  for (let i = 0; i <= totalTicks; i++) {
    const y = endY - i * interval;
    const label = i; // Or show real-world units if needed

    // Create tick line
    const tick = document.createElementNS("http://www.w3.org/2000/svg", "line");
    tick.setAttribute("x1", x);
    tick.setAttribute("x2", x + 10);
    tick.setAttribute("y1", y);
    tick.setAttribute("y2", y);
    tick.setAttribute("stroke", "black");
    tick.setAttribute("stroke-width", "1");
    rulerGroup.appendChild(tick);

    // Create label
    if (i % 5 === 0) {
      // Show label every 5 ticks (50 px)
      const text = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text"
      );
      text.setAttribute("x", x - 5);
      text.setAttribute("y", y + 4); // +4 to align baseline
      text.setAttribute("text-anchor", "end");
      text.setAttribute("font-size", "10");
      text.textContent = label;
      rulerGroup.appendChild(text);
    }
  }
}
function drawLine(x1, y1, x2, y2, color = "black") {
  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", x1);
  line.setAttribute("y1", y1);
  line.setAttribute("x2", x2);
  line.setAttribute("y2", y2);
  line.setAttribute("stroke", color);
  const svg = document.getElementById("svg");
  svg.appendChild(line);
}
function setImagePos(id, x, y) {
  const obj = document.getElementById(id);
  obj.setAttribute("x", x);
  obj.setAttribute("y", y);
}

function animateObjectPosition(
  object,
  start,
  end,
  duration,
  pivot,
  waterlevel,
  objectHeight
) {
  const htosink = objectHeight - waterlevel;
  const startTime = performance.now();
  function animate(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1); // Clamp between 0 and 1
    const newY = start + (end - start) * progress;

    setImagePos(object, 400, newY);
    if (newY >= pivot && newY <= htosink + pivot) {
      const hh = ((newY - pivot) / htosink) * waterlevel;
      drawPrism(200 + hh);
    }
    if (progress < 1) {
      requestAnimationFrame(animate);
    }
    if(progress>=1){
      addContextSection(4);
    }
  }
  requestAnimationFrame(animate);
}

 function showSelectedObject(currentObject){
  const images = document.querySelectorAll("#svg image");

  images.forEach((image) => {
    if (image.id === currentObject) {
      image.style.display = "block";
    } else {
      image.style.display = "none";
    }
  });
 }


 function revealVolumeFormula(cb) {
   const container = document.getElementById("volumeFormula");
   container.style.display = "block";
   const originalHTML = container.innerHTML;

   // Step 1: Extract text from child elements
   const lines = Array.from(container.children).map((p) => p.innerHTML);
   container.innerHTML = ""; // Clear for animation

   let allChars = [];

   // Step 2: Wrap each character in spans
   lines.forEach((line) => {
     const p = document.createElement("p");

     for (let char of line) {
       const span = document.createElement("span");
       span.textContent = char;
       p.appendChild(span);
       allChars.push(span);
     }

     container.appendChild(p);
   });

   // Step 3: Animate characters
   const delay = 30; // ms per character
   allChars.forEach((span, i) => {
     setTimeout(() => {
       span.classList.add("show");
     }, i * delay);
   });

   // Step 4: Restore original HTML after the animation
   const totalDuration = allChars.length * delay + 300; // Add buffer
   setTimeout(() => {
     container.innerHTML = originalHTML;
     cb()
   }, totalDuration);
 }

 function hideVolumeFormula() {
   const container = document.getElementById("volumeFormula");
   container.style.display = "none";
 }

 function setWaterLevelMarker(id,y, x = 220) {
   const marker = document.getElementById(id);
   marker.setAttribute("transform", `translate(${x}, ${y - 5})`);
 }
 
 function addContextSection(maxStep) {
   const sections = document.querySelectorAll(".context-section");
   if (maxStep < 1 || maxStep > sections.length) return;
   const section = sections[maxStep - 1];
   if (!section.classList.contains("visible")) {
     section.style.display = "block";
     void section.offsetWidth;
     section.classList.add("visible");
   }
   const box = document.querySelector(".contextBox");
   box.scrollTo({
     top: box.scrollHeight,
     behavior: "smooth",
   });
 }

 function setVolumeFormula(object){
  const formulaContainer = document.querySelector("#volumeFormula");
  formulaContainer.innerHTML = appTextContent.volumeFormula[object]
    .map((line) => `<p>${line}</p>`)
    .join("");
 }

