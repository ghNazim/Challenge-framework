function drawArrowSVG(overlay, start, end, color = "#bb3b0e") {
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
  line.setAttribute("stroke-dasharray", "5 5");
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
  createArrowhead(start.x, start.y, angle, -1);
}

function writeTextSVG(overlay, point, label, color = "#bb3b0e", size = "22") {
  const x = point.x,
    y = point.y;
  const ns = "http://www.w3.org/2000/svg";
  const text = document.createElementNS(ns, "text");
  text.setAttribute("x", x);
  text.setAttribute("y", y);
  text.setAttribute("fill", color);
  text.setAttribute("font-size", size);
  text.setAttribute("text-anchor", "middle");

  text.textContent = label;
  overlay.appendChild(text);
}
function vectorToScreenPosition(vector3, camera, canvas) {
  const vector = vector3.clone().project(camera);
  const widthHalf = 0.5 * canvas.clientWidth;
  const heightHalf = 0.5 * canvas.clientHeight;
  return {
    x: vector.x * widthHalf + widthHalf,
    y: -(vector.y * heightHalf) + heightHalf,
  };
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
function revealNote(note, callback) {
  const container = document.getElementById(note);
  container.style.display = "block";
  const originalHTML = container.innerHTML;
  const line = container.textContent;
  container.innerHTML = "";

  let allChars = [];
  for (let char of line) {
    const span = document.createElement("span");
    span.innerHTML = char;
    container.appendChild(span);
    allChars.push(span);
  }
  // Step 3: Animate characters
  const delay = 15; // ms per character
  allChars.forEach((span, i) => {
    setTimeout(() => {
      span.classList.add("show");
    }, i * delay);
  });
  // Step 4: Restore original HTML after the animation
  const totalDuration = allChars.length * delay + 300; // Add buffer
  setTimeout(() => {
    container.innerHTML = originalHTML;
    callback();
  }, totalDuration);
}

function hideNote(note) {
  const container = document.getElementById(note);
  container.style.display = "none";
}

function addContextSection(maxStep) {
  const sections = document.querySelectorAll(".context-section");

  // Collapse all sections
  sections.forEach((s, index) => {
    if (index + 1 < maxStep) {
      // only collapse previous sections
      s.classList.add("collapsed");
      const arrow = s.querySelector(".arrow-icon");
      if (arrow) {
        arrow.classList.add("collapsed");
      }
    }
  });

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

function showFtue(element) {
  if (!element) return;
  const handFtue = document.getElementById("hand-ftue");

  handFtue.classList.remove("hand-animating");
  element.classList.remove("ftue-highlight");

  const rect = element.getBoundingClientRect();

  handFtue.style.top = `${rect.top + rect.height / 2}px`;
  handFtue.style.left = `${rect.left + rect.width / 2}px`;
  handFtue.classList.add("hand-animating");
}
function hideFtue() {
  const handFtue = document.getElementById("hand-ftue");
  handFtue.classList.remove("hand-animating");
}
const audioCache = {};
const sounds = ["correct", "wrong", "click", "congrats"];
sounds.forEach((name) => {
  const audio = new Audio(`sound/${name}.mp3`);
  audio.load(); // Preloads the audio
  audioCache[name] = audio;
});
function playSound(filename) {
  if (!audioCache[filename]) {
    const audio = new Audio(`sound/${filename}.mp3`);
    audioCache[filename] = audio;
  }
  const sound = audioCache[filename].cloneNode(); // Clone so it can overlap itself
  sound.play();
}

function confettiBurst() {
  const duration = 200;
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

function showDragFtue(sliderElement, frac = 0) {
  if (!sliderElement) return;
  const handFtue = document.getElementById("hand-ftue");
  // const handFtue2 = document.getElementById("hand-ftue2");
  const rect = sliderElement.getBoundingClientRect();

  handFtue.style.top = `${rect.top + rect.height / 2}px`;
  handFtue.style.left = `${rect.left + rect.width * frac}px`;
  handFtue.classList.add("hand-dragging", "horizontal-drag");
}

function hideDragFtue() {
  const handFtue = document.getElementById("hand-ftue");
  handFtue.classList.remove("hand-dragging", "horizontal-drag");
}
