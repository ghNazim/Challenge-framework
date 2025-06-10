function createDashedLine(element1, element2, svgElement, options = {}) {
  // Default options
  const {
    strokeColor = "orange",
    strokeWidth = 1,
    dashArray = "3,3",
    lineId = null,
  } = options;

  // Get bounding rectangles
  const rect1 = element1.getBoundingClientRect();
  const rect2 = element2.getBoundingClientRect();

  // Calculate points
  const startX = rect1.left + rect1.width / 2;
  const startY = rect1.bottom;
  const endX = rect2.left + rect2.width / 2;
  const endY = rect2.top;

  // Create or update line element
  let line;
  if (lineId) {
    line = svgElement.querySelector(`#${lineId}`);
  }

  if (!line) {
    line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    if (lineId) {
      line.setAttribute("id", lineId);
    }
    svgElement.appendChild(line);
  }

  // Set line attributes
  line.setAttribute("x1", startX);
  line.setAttribute("y1", startY);
  line.setAttribute("x2", endX);
  line.setAttribute("y2", endY);
  line.setAttribute("stroke", strokeColor);
  line.setAttribute("stroke-width", strokeWidth);
  line.setAttribute("stroke-dasharray", dashArray);
  line.setAttribute("fill", "none");

  return line;
}
