function drawArrowSVG(overlay, start, end, color = "grey") {
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
  overlay.appendChild(line);

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
    overlay.appendChild(arrowHead);
  }
  createArrowhead(end.x, end.y, angle, 1);
  createArrowhead(start.x, start.y, angle , -1);
}

function writeTextSVG(overlay, x, y, label,size="16") {
    const ns = "http://www.w3.org/2000/svg";
    const text = document.createElementNS(ns, "text");
    text.setAttribute("x", x);
    text.setAttribute("y", y);
    text.setAttribute("fill", "grey");
    text.setAttribute("font-size", size);
    text.setAttribute("text-anchor", "middle");
    text.textContent = label;
    overlay.appendChild(text);
}
function get2Dfrom3D(anchor3D, camera, canvas) {
  const vector = anchor3D.clone();
  vector.project(camera);
  const x = (vector.x * 0.5 + 0.5) * canvas.width;
  const y = (1 - (vector.y * 0.5 + 0.5)) * canvas.height; 
  return { x, y };
}

function linearAnimate(obj, prop, start, end, duration) {
  let startTime = null;
  const change = end - start;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = timestamp - startTime;
    const t = Math.min(progress / duration, 1);
    obj[prop] = start + change * t;

    if (t < 1) {
      window.requestAnimationFrame(step);
    } else {
      obj[prop] = end;
    }
  }
  window.requestAnimationFrame(step);
}

const removeLabels = () => {
  const overlay = document.getElementById("labelOverlay");
  while (overlay.lastChild) {
    overlay.removeChild(overlay.lastChild);
  }
};

function getShapeData(s,r){
  const halfPerimeter = Math.PI*r
  const length = halfPerimeter*s
  const l = halfPerimeter - length;
  const T = l/r;
  return {
    angle: T,
    length
  }
}
