

const container = document.getElementById("container");
const segmentSlider = document.getElementById("segments");
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");
const overlay = document.getElementById("labelOverlay");
const wrapper = document.getElementById("wrapper");
let numberOfSectors = 12;
const cylinderRadius = 1.5;
const cylinderHeight = 1;
let anglePerSector = (2 * Math.PI) / numberOfSectors;
const aspectRatio = 800 / 500,
  d = 3;
let step = 0;

 

const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(
  -d * aspectRatio,
  d * aspectRatio,
  d+.4,
  -d-.4,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(800, 500);
renderer.setPixelRatio(window.devicePixelRatio); // for crispness
container.appendChild(renderer.domElement);

renderer.setClearColor(0xffffff); // White background
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(5, 10, 7.5);
scene.add(directionalLight);

camera.up.set(0, 0, 1);
camera.position.set(-1, cylinderRadius * 2, cylinderHeight * 1.25);
camera.lookAt(0, 0, 0);
camera.updateMatrixWorld();
camera.updateProjectionMatrix();

let solidCylinderGroup = null;
function removeSolidCylinder() {
  if (solidCylinderGroup) {
    // Traverse the group to dispose of children's geometries and materials
    solidCylinderGroup.traverse(function (object) {
      if (object.isMesh || object.isLine) {
        if (object.geometry) {
          object.geometry.dispose();
        }
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach((mat) => mat.dispose());
          } else {
            object.material.dispose();
          }
        }
      }
    });
    scene.remove(solidCylinderGroup);
    solidCylinderGroup = null;
  }
}
function renderSolidCylinder(
  scene,
  radius,
  height,
  color = 0xe4f6f8,
  edgeColor = 0x666666,
  radialSegments = 32,
  circleSegments = 50
) {
  solidCylinderGroup = new THREE.Group();
  const cylinderBodyGeometry = new THREE.CylinderGeometry(
    radius, // radiusTop
    radius, // radiusBottom
    height, // height
    radialSegments // radialSegments
  );
  const cylinderBodyMaterial = new THREE.MeshStandardMaterial({
    color: color,
    roughness: 0.5,
    metalness: 0.2,
  });
  const cylinderBodyMesh = new THREE.Mesh(
    cylinderBodyGeometry,
    cylinderBodyMaterial
  );
  solidCylinderGroup.add(cylinderBodyMesh);

  const topEdgeCurve = new THREE.ArcCurve(
    0,
    0,
    radius * 1.001,
    0,
    2 * Math.PI,
    false
  );

  const topEdgePoints = topEdgeCurve.getPoints(circleSegments);
  const topEdgeGeometry = new THREE.BufferGeometry().setFromPoints(
    topEdgePoints
  );
  const topEdgeMaterial = new THREE.LineBasicMaterial({
    color: edgeColor,
    linewidth: 2,
  });
  const topEdgeLine = new THREE.Line(topEdgeGeometry, topEdgeMaterial);

  topEdgeLine.position.z = height / 2;
  solidCylinderGroup.add(topEdgeLine);

  cylinderBodyMesh.rotation.x = Math.PI / 2;

  solidCylinderGroup.position.z = height / 2;

  scene.add(solidCylinderGroup);

  return solidCylinderGroup;
}



//Create a pie group
function createPie(radius, startAngle, endAngle, height, index) {
  const color = index < numberOfSectors / 2 ? 0x90d6ff : 0xd1ffbd;
  const group = new THREE.Group();
  const shape = new THREE.Shape();
  shape.moveTo(0, 0);
  const x1 = radius * Math.cos(startAngle),
    y1 = radius * Math.sin(startAngle),
    x2 = radius * Math.cos(endAngle),
    y2 = radius * Math.sin(endAngle);
  shape.lineTo(x1, y1);
  shape.absarc(0, 0, cylinderRadius, startAngle, endAngle, false);
  shape.lineTo(0, 0);
  const extrudeSettings = {
    steps: 1,
    depth: height,
    bevelEnabled: false,
  };
  const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
  const material = new THREE.MeshStandardMaterial({
    color: color,
    roughness: 0.5,
    metalness: 0.2,
    side: THREE.DoubleSide, // Useful if there are tiny gaps, or if you want to see inside
  });
  const sectorMesh = new THREE.Mesh(geometry, material);

  // Define edge points
  const z0 = 0;
  const z1 = height,
    x1a = x1 * 1.001,
    y1a = y1 * 1.001,
    x2a = x2 * 1.001,
    y2a = y2 * 1.001;

  // Arc start and end points
  const p1 = new THREE.Vector3(x1a, y1a, z0);
  const p2 = new THREE.Vector3(x2a, y2a, z0);
  const p3 = new THREE.Vector3(x1a, y1a, z1);
  const p4 = new THREE.Vector3(x2a, y2a, z1);

  // Center top and bottom
  const c0 = new THREE.Vector3(0, 0, z0);
  const c1 = new THREE.Vector3(0, 0, z1);

  // Points to draw key edges
  const edgePoints = [c1, p3, p4, c1, p1, p3, p2, p4, c0, c1];

  const edgeGeometry = new THREE.BufferGeometry().setFromPoints(edgePoints);
  const lineMaterial = new THREE.LineBasicMaterial({ color: 0x666666 });
  const lines = new THREE.LineSegments(edgeGeometry, lineMaterial);
  group.add(lines);
  const arcCurve = new THREE.ArcCurve(
    0,
    0, // center (x, y)
    cylinderRadius, // radius
    startAngle,
    endAngle, // startAngle, endAngle (in radians)
    false // clockwise
  );

  const points = arcCurve
    .getPoints(30)
    .map((p) => new THREE.Vector3(p.x, p.y, height)); // More points = smoother curve
  const arcgeometry = new THREE.BufferGeometry().setFromPoints(points);

  const arc = new THREE.Line(arcgeometry, lineMaterial);
  group.add(arc);

  group.add(sectorMesh);
  return group;
}
// --- Parameters for the cylinder and sectors ---
let midAngles;
let pieArray, bottomHalf, topHalf;

function renderPies(val) {
  numberOfSectors = val;
  anglePerSector = (2 * Math.PI) / val;
  const pointsArray = Array.from(
    { length: numberOfSectors },
    (_, i) => (i * 2 * Math.PI) / numberOfSectors
  );
  midAngles = pointsArray.map((a) => a + anglePerSector / 2);
  pointsArray.push(pointsArray[0]);
  pieArray = Array.from({ length: numberOfSectors }, (_, i) =>
    createPie(
      cylinderRadius,
      pointsArray[i],
      pointsArray[i + 1],
      cylinderHeight,
      i
    )
  );
  bottomHalf = pieArray.slice(0, numberOfSectors / 2);
  topHalf = pieArray.slice(numberOfSectors / 2);
  pieArray.forEach((pie) => scene.add(pie));
}
function removePies(pieArray, scene) {
  if (!pieArray || !Array.isArray(pieArray)) return;

  pieArray.forEach((p) => {
    scene.remove(p);
    if (p.geometry) {
      p.geometry.dispose();
    }
    if (Array.isArray(p.material)) {
      p.material.forEach((material) => {
        if (material.dispose) {
          material.dispose();
        }
      });
    } else if (p.material && p.material.dispose) {
      p.material.dispose();
    }
  });
  pieArray.length = 0;
}
callWithStep(0);

function placePiesApart() {
  const halfWedgeWidth = cylinderRadius * Math.sin(anglePerSector / 2);
  const offsetx = (bottomHalf.length - 1) * halfWedgeWidth;
  bottomHalf.forEach((pie, i) => {
    pie.position.x = -2 * halfWedgeWidth * i + offsetx;
    pie.rotation.z = Math.PI / 2 - midAngles[i];
  });
  topHalf.forEach((pie, i) => {
    pie.position.x = 2 * halfWedgeWidth * i - offsetx + halfWedgeWidth;
    pie.rotation.z = Math.PI / 2 - midAngles[i];
  });
}
function placePiesTogether() {
  const offset = (cylinderRadius * Math.cos(anglePerSector / 2)) / 2;
  bottomHalf.forEach((pie, i) => {
    pie.position.y = -offset;
  });
  topHalf.forEach((pie, i) => {
    pie.position.y = offset;
  });
}

function callWithStep(step) {
  switch (step) {
    case 0:
      highlightContextSection(1)
      removePies(pieArray, scene);
      renderSolidCylinder(scene, cylinderRadius, cylinderHeight);
      break;
    case 1:
      highlightContextSection(2)
      removeSolidCylinder();
      removePies(pieArray, scene);
      renderPies(segmentSlider.value);
      prevButton.disabled = false;
      break;
    case 2:
      highlightContextSection(4)
      removeLabels()
      removePies(pieArray, scene);
      renderPies(segmentSlider.value);
      placePiesApart();
      break;
    case 3:
      highlightContextSection(5)
      removePies(pieArray, scene);
      renderPies(segmentSlider.value);
      placePiesApart();
      placePiesTogether();
      hideVolumeFormula();
      wrapper.style.transform = "translateX(0%)";
      nextButton.disabled = false;
      break;
    case 4:
      highlightContextSection(6)
      wrapper.style.transform = "translateX(-25%)";
      revealVolumeFormula();
      nextButton.disabled = true;
      break;
    default:
        return;
  }
}
function animateApart() {
  const halfWedgeWidth = cylinderRadius * Math.sin(anglePerSector / 2);
  const offsetx = (bottomHalf.length - 1) * halfWedgeWidth;
  bottomHalf.forEach((pie, i) => {
    linearAnimate(
      pie.position,
      "x",
      pie.position.x,
      -2 * halfWedgeWidth * i + offsetx,
      1000
    );
    linearAnimate(
      pie.rotation,
      "z",
      pie.rotation.z,
      Math.PI / 2 - midAngles[i],
      1000
    );
  });
  topHalf.forEach((pie, i) => {
    linearAnimate(
      pie.position,
      "x",
      pie.position.x,
      2 * halfWedgeWidth * i - offsetx + halfWedgeWidth,
      1000
    );
    linearAnimate(
      pie.rotation,
      "z",
      pie.rotation.z,
      Math.PI / 2 - midAngles[i],
      1000
    );
  });
}

function handleNextClick() {
  if (overlayUp) {
    closeOverlay();
    return;
  }
  step++;
  if (step === 2) {
    highlightContextSection(4)
    animateApart();
    return;
  }
  if (step === 3) {
    highlightContextSection(5)
    animateTogether();
    setTimeout(() => {
      drawLabels3(overlay);
    }, 1000);
    return;
  } else {
    callWithStep(step);
  }
}
function handlePrevClick() {
  if(overlayUp) {
    closeOverlay();
    return;
  }
  if(step==0) return;
  step--;
  callWithStep(step);
}

nextButton.addEventListener("click", handleNextClick);

function animateTogether() {
  const offset = (cylinderRadius * Math.cos(anglePerSector / 2)) / 2;
  bottomHalf.forEach((pie, i) => {
    linearAnimate(pie.position, "y", pie.position.y, -offset, 1000);
  });
  topHalf.forEach((pie, i) => {
    linearAnimate(pie.position, "y", pie.position.y, offset, 1000);
  });
}

prevButton.addEventListener("click", handlePrevClick);
segmentSlider.addEventListener("input", () => {
  switch (step) {
    case 1:
      highlightContextSection(3)
      removePies(pieArray, scene);
      renderPies(segmentSlider.value);
      break;
    case 2:
      removePies(pieArray, scene);
      renderPies(segmentSlider.value);
      placePiesApart();
      break;
    case 3:
      removePies(pieArray, scene);
      renderPies(segmentSlider.value);
      placePiesApart();
      placePiesTogether();
      drawLabels3(overlay)
      break;
    case 4:
      removePies(pieArray, scene);
      renderPies(segmentSlider.value);
      placePiesApart();
      placePiesTogether();
      drawLabels3(overlay)
      break;
  }
  
});
function drawLabels3(overlay) {
  removeLabels();
  const xx = (Math.PI * cylinderRadius) / 2,
    yy = cylinderRadius / 2,
    zz = cylinderHeight
  const offset = 0.2,s =cylinderRadius*Math.sin(anglePerSector/2) ;
  const labelAnchors3d = [
    new THREE.Vector3(xx, yy + .2, 0),
    new THREE.Vector3(-xx, yy + .2, 0),
    new THREE.Vector3(-xx - .1, yy, 0),
    new THREE.Vector3(-xx+s - .1, -yy, 0),
    new THREE.Vector3(-xx+s - .05, -yy, 0),
    new THREE.Vector3(-xx+s - .05, -yy, zz),
    new THREE.Vector3(0, yy + 1, 0),
    new THREE.Vector3(-xx -.22 +s/2, 0, 0),
    new THREE.Vector3(-xx -.13+s/2, -yy, zz / 2),
  ];
  const labelAnchors2d = labelAnchors3d.map((anchor3D) => {
    return vectorToScreenPosition(anchor3D, camera, renderer.domElement);
  }); 
  drawArrowSVG(overlay, labelAnchors2d[0], labelAnchors2d[1]);
  drawArrowSVG(overlay, labelAnchors2d[2], labelAnchors2d[3]);
  drawArrowSVG(overlay, labelAnchors2d[4], labelAnchors2d[5]);
  writeTextSVG(overlay, labelAnchors2d[6], "width = π r");
 writeTextSVG(overlay, labelAnchors2d[7], "r");
  writeTextSVG(overlay, labelAnchors2d[8], "h");
}

prevButton.disabled = true;
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
