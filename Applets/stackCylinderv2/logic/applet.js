const container = document.getElementById("container");
const heightSlider = document.getElementById("heightSlider");
const radiusSlider = document.getElementById("radiusSlider");
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");
const overlay = document.getElementById("labelOverlay");
const wrapper = document.getElementById("wrapper");

let radius = 1.5;
let height = 2;

let stackedPlates = []; 
const plateRadius = 1;
const plateThickness = 0.001,plateSpacing=0.1;

// Set up the scene ********************
const aspectRatio = 800 / 500,
  d = 3;
let step = 1;
const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(
  -d * aspectRatio,
  d * aspectRatio,
  d+4,
  -d,
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
directionalLight.position.set(-10, 7, 5);
scene.add(directionalLight);
camera.position.set(0, height * 1, radius * 4);
camera.lookAt(0, 0, 0);

camera.updateMatrixWorld();
camera.updateProjectionMatrix();


//********************* Scene set up end ************************ */



// **************** Set up Objects *********************

const plateMaterial = new THREE.MeshStandardMaterial({
  color: 0x73b9ee,
  metalness: 0.2,
  roughness: 0.7,
  flatShading: false, // Use smooth shading for the plates
});
const edgeMaterial = new THREE.LineBasicMaterial({
  color: 0x003396,
  linewidth: 1,
});

function updateCylinder(numCircles,r) {

  stackedPlates.forEach((item) => {
    scene.remove(item.plate);
    item.plate.geometry.dispose();
    if (item.edges) {
      scene.remove(item.edges);
      item.edges.geometry.dispose();
    }
  });
  stackedPlates = [];

  if (numCircles <= 0) {
    renderer.render(scene, camera);
    return;
  }

  const startY = 0;

  for (let i = 0; i < numCircles; i++) {

    const plateGeometry = new THREE.CylinderGeometry(
      r,
      r,
      plateThickness,
      128
    );
     
    const plate = new THREE.Mesh(plateGeometry, plateMaterial);
    plate.position.y = startY + i * (plateThickness + plateSpacing);
    scene.add(plate);
    const sf = 1.005
    // Edges for the plate
    const edgesGeometry = new THREE.EdgesGeometry(plateGeometry.clone().scale(sf, sf, sf), 20); // Threshold angle of 1 degree
    const plateEdges = new THREE.LineSegments(
      edgesGeometry,
      edgeMaterial
    ); // Clone material if you might change it per edge later
    plateEdges.position.y = plate.position.y; // Position edges with the plate
    // No need to rotate edges if plate geometry is already oriented correctly
    scene.add(plateEdges);
    stackedPlates.push({ plate: plate, edges: plateEdges });
  }
}


//********************* Event handlers *********************
function drawLabels(){
  const points = getLabelPoints(parseInt(heightSlider.value),parseFloat(radiusSlider.value));
  drawArrowSVG(overlay, points[0], points[1]);
  drawArrowSVG(overlay, points[2], points[3]);
  writeTextSVG(overlay, points[4], "r");
  writeTextSVG(overlay, points[5], "h");
}

function getLabelPoints(n, r) {
  const h = (n - 1) * plateSpacing + plateThickness * n;
  const points = [
    new THREE.Vector3(0, h, 0),
    new THREE.Vector3(r, h, 0),
    new THREE.Vector3(r + 0.2, 0, 0),
    new THREE.Vector3(r + 0.2, h, 0),
    new THREE.Vector3(r/2, h, -.35),
    new THREE.Vector3(r+.4, h/2, 0)
  ];
  const points2d = points.map((p) =>
    vectorToScreenPosition(p, camera, renderer.domElement)
  );
  return points2d;
}
function atStep1(){
  highlightContextSection(1)
  wrapper.style.translate = '0%';
  overlay.style.opacity = 0;
  hideVolumeFormula();
}
function atStep2(){
  highlightContextSection(2)
  wrapper.style.translate = '-30%';
  setTimeout(() => {
    overlay.style.opacity = 1;
    revealVolumeFormula();
  },600)
  
}
function handleNextClick() {
  step++;
  if (overlayUp) {
    closeOverlay();
    return;
  }
  atStep2();
  nextButton.disabled = true;
  prevButton.disabled = false;
}
function handlePrevClick() {
  step--;
  if (overlayUp) {
    closeOverlay();
    return;
  }
  atStep1();
  nextButton.disabled = false;
  prevButton.disabled = true;
}

nextButton.addEventListener("click", handleNextClick);
prevButton.addEventListener("click", handlePrevClick);
atStep1();
prevButton.disabled = true;
nextButton.disabled = true;
updateCylinder(parseInt(heightSlider.value), parseFloat(radiusSlider.value));

heightSlider.addEventListener("input", function () {
  if(step==1){
  if(heightSlider.value > 1) nextButton.disabled = false;
  else nextButton.disabled = true;
  }

  updateCylinder(parseInt(heightSlider.value), parseFloat(radiusSlider.value));
  clearLabelOverlay();
  drawLabels();
  render3()
});
radiusSlider.addEventListener("input", function () {
  updateCylinder(parseInt(heightSlider.value), parseFloat(radiusSlider.value));
  clearLabelOverlay();
  drawLabels();
  render3()
});

function render3(){
  renderer.render(scene, camera);
}

render3()
