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
