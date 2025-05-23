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
}

function drawBeaker(x0,y0,dx,dy,w,h) {
  
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

function animateObjectPosition(object, start, end, duration, pivot, waterlevel,objectHeight) {
    const htosink = objectHeight - waterlevel;
  const startTime = performance.now();
  function animate(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1); // Clamp between 0 and 1
    const newY = start + (end - start) * progress;

    setImagePos(object, 400, newY);
    if (newY >= pivot && newY <= htosink + pivot) {
        const hh = ((newY-pivot)/htosink)*waterlevel;
      drawPrism(200 + hh);
    }
    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  }

  requestAnimationFrame(animate);
}

 