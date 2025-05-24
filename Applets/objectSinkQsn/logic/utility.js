function drawPrism(x0, y0, dx, dy, w, h) {
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
  setWaterLevelMarker("dynamicMarker", 450 - h);
}

function drawBeaker(x0, y0, dx, dy, w, h,initialWaterLevel) {
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
  addRuler(y0-h,y0,10,x0);
  setWaterLevelMarker("waterLevelMarker", 450-initialWaterLevel);
}
function addRuler(startY = 150, endY = 450, interval = 10, x = 250) {
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
  const svg = document.getElementById("beaker");
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
  initialWaterLevel,
  waterlevel,
  objectHeight,
  arr,cb
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
      drawPrism(...arr, initialWaterLevel + hh);
    }
    else if (newY >= htosink + pivot) {
      drawPrism(...arr, initialWaterLevel + waterlevel);
    }
    if (progress < 1) {
      requestAnimationFrame(animate);
    }
    if (progress >= 1) {
      cb();
    }
  }
  requestAnimationFrame(animate);
}

function showSelectedObject(currentObject) {
  const images = document.querySelectorAll("#svg image");

  images.forEach((image) => {
    if (image.id === currentObject) {
      image.style.display = "block";
    } else {
      image.style.display = "none";
    }
  });
}


function setWaterLevelMarker(id, y, x = 220) {
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

function setVolumeFormula(object) {
  const formulaContainer = document.querySelector("#volumeFormula");
  formulaContainer.innerHTML = appTextContent.volumeFormula[object]
    .map((line) => `<p>${line}</p>`)
    .join("");
}

function drawArrowSVG(svg, start, end, color = "blue") {
  const arrowHeadLength = 10; // Length of the arrowhead
  const arrowHeadWidth = 7; // Width of the arrowhead
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const angle = Math.atan2(dy, dx);

  // Create the line part of the arrow
  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", start.x);
  line.setAttribute("y1", start.y);
  line.setAttribute("x2", end.x);
  line.setAttribute("y2", end.y);
  line.setAttribute("stroke", color);
  line.setAttribute("stroke-width", 2);
  line.setAttribute("stroke-dasharray", "5,5");
  svg.appendChild(line);

  // Function to create an arrowhead
  function createArrowhead(x, y, angle, direction) {
    const headPoint1 = {
      x: x - direction * arrowHeadLength * Math.cos(angle - Math.PI / 6),
      y: y - direction * arrowHeadLength * Math.sin(angle - Math.PI / 6),
    };
    const headPoint2 = {
      x: x - direction * arrowHeadLength * Math.cos(angle + Math.PI / 6),
      y: y - direction * arrowHeadLength * Math.sin(angle + Math.PI / 6),
    };

    const arrowHead = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "polygon"
    );
    arrowHead.setAttribute(
      "points",
      `${x},${y} ${headPoint1.x},${headPoint1.y} ${headPoint2.x},${headPoint2.y}`
    );
    arrowHead.setAttribute("fill", color);
    svg.appendChild(arrowHead);
  }
  createArrowhead(end.x, end.y, angle, 1);
  createArrowhead(start.x, start.y, angle, -1);
}

function writeTextSVG(
  svg,
  point,
  label,
  anchor = "middle",
  size = "18",
  color = "blue"
) {
  const x = point.x,
    y = point.y;
  const ns = "http://www.w3.org/2000/svg";
  const text = document.createElementNS(ns, "text");
  text.setAttribute("x", x);
  text.setAttribute("y", y);
  text.setAttribute("fill", color);
  text.setAttribute("font-size", size);
  text.setAttribute("text-anchor", anchor);
  text.textContent = label;
  svg.appendChild(text);
}
function animateIn(element, type) {
  if (!element) return;
  const transformMap = {
    left: "translateX(-10px)",
    right: "translateX(10px)",
    top: "translateY(-10px)",
    bottom: "translateY(10px)",
  };
  element.animate(
    [
      { opacity: 0, transform: transformMap[type] },
      { opacity: 1, transform: "translateY(0)" },
    ],
    {
      duration: 300,
      delay: 0,
      easing: "ease-in-out",
      fill: "forwards",
    }
  );
}

function generateStepCounter(total) {
  const container = document.getElementById("dotsContainer");
  container.innerHTML = "";
  for (let i = 1; i <= total; i++) {
    const dot = document.createElement("div");
    dot.className = "dot";
    container.appendChild(dot);
  }
}

function highlightCurrentStep(step) {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === step);
  });
}

function setFocusOfMag(initialWaterLevel){
  const clipCircle = document.querySelector("#zoomClip circle");
  const clip = document.querySelector("#clip use");
  clipCircle.setAttribute("cy", 425-initialWaterLevel);
  clip.setAttribute("y", initialWaterLevel-200);
  
}