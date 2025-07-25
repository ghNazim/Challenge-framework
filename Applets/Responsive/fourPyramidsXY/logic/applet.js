const container = document.getElementById("container");
const formSlider = document.getElementById("formSlider");
const heightSlider = document.getElementById("heightSlider");
const buttons = document.querySelectorAll(".lowerControls .btn");
const overlay = document.getElementById("labelOverlay");

const baseColor = 0x0077ff;
const surfaceColor = 0x0077ff;
const lineColor = 0x888888;
const PyramidTypes = {
  SQUARE: "square",
  RECTANGLE: "rectangle",
  CIRCLE: "circle",
  TRIANGLE: "triangle",
};
let baseType = PyramidTypes.SQUARE,
  currentPyramid = null,
  topMark = null,
  currentStep = 1,
  noteOn = false;
// Set up the scene ********************
const aspectRatio = container.clientWidth / container.clientHeight,
  d = 2;
let step = 1;
const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(
  -d * aspectRatio,
  d * aspectRatio,
  2 * d - 1,
  -1,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(container.clientWidth, container.clientHeight); // Initial size
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);
renderer.setClearColor(0xffffff); // White background
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(-5, 7, 5);
scene.add(directionalLight);
camera.position.set(0.5, 1.5, 5);
camera.lookAt(0, 0, 0);
camera.updateMatrixWorld();
camera.updateProjectionMatrix();
//********************* Scene set up end ************************ */

// **************** Set up Objects *********************

const baseMaterial = new THREE.MeshStandardMaterial({
  color: baseColor,
  roughness: 0.5,
  metalness: 0.2,
  side: THREE.DoubleSide,
});
const surfaceMaterial = new THREE.MeshStandardMaterial({
  color: surfaceColor,
  roughness: 0.5,
  metalness: 0.2,
  transparent: true,
  opacity: 0.6,
  side: THREE.DoubleSide,
});
const lineMaterial = new THREE.LineBasicMaterial({ color: lineColor });

function createPyramidFrustum(baseType, height, s) {
  height = height * s;
  const bottomRadius = 1,
    topRadius = bottomRadius * (1 - s);
  const sides = baseType === "square" ? 4 : baseType === "triangle" ? 3 : 64;
  const geometry = new THREE.CylinderGeometry(
    topRadius, // top radius (smaller than base)
    1, // bottom radius
    height, // height
    sides, // number of sides (square base),
    1,
    true
  );
  const pyramid = new THREE.Mesh(geometry, surfaceMaterial);
  scene.add(pyramid);
  if (baseType !== "circle") {
    const edges = new THREE.EdgesGeometry(geometry);
    const edgeLines = new THREE.LineSegments(
      edges,
      lineMaterial // black lines
    );
    pyramid.add(edgeLines);
  }

  const baseGeometry = new THREE.CircleGeometry(1, sides);

  const circle = new THREE.Mesh(baseGeometry, baseMaterial);
  pyramid.add(circle);
  circle.rotation.x = -Math.PI / 2;
  circle.position.y = -height / 2;
  if (baseType === "triangle") {
    circle.rotation.z = Math.PI / 6;
  }
  pyramid.position.y = height / 2;
  return pyramid;
}
function createRectangularFrustum(height, s) {
  const widthBottom = 2,
    depthBottom = 1;
  const widthTop = (1 - s) * widthBottom,
    depthTop = (1 - s) * depthBottom;
  const geometry = new THREE.BufferGeometry();
  height = height * s;

  // Define 8 vertices: 4 top, 4 bottom
  const halfHeight = height / 2;

  const vertices = new Float32Array([
    // Bottom rectangle (y = -halfHeight)
    -widthBottom / 2,
    -halfHeight,
    -depthBottom / 2,
    widthBottom / 2,
    -halfHeight,
    -depthBottom / 2,
    widthBottom / 2,
    -halfHeight,
    depthBottom / 2,
    -widthBottom / 2,
    -halfHeight,
    depthBottom / 2,

    // Top rectangle (y = +halfHeight)
    -widthTop / 2,
    halfHeight,
    -depthTop / 2,
    widthTop / 2,
    halfHeight,
    -depthTop / 2,
    widthTop / 2,
    halfHeight,
    depthTop / 2,
    -widthTop / 2,
    halfHeight,
    depthTop / 2,
  ]);
  geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));

  // Define faces (triangles) using indices
  const indices = [
    // Bottom face
    0,
    1,
    2,
    0,
    2,
    3,

    // Top face
    4,
    6,
    5,
    4,
    7,
    6,

    // Sides
    0,
    4,
    5,
    0,
    5,
    1, // front
    1,
    5,
    6,
    1,
    6,
    2, // right
    2,
    6,
    7,
    2,
    7,
    3, // back
    3,
    7,
    4,
    3,
    4,
    0, // left
  ];
  geometry.setIndex(indices);
  geometry.computeVertexNormals();

  const mesh = new THREE.Mesh(geometry, surfaceMaterial);
  scene.add(mesh);
  const edges = new THREE.EdgesGeometry(geometry);
  const edgeLines = new THREE.LineSegments(
    edges,
    lineMaterial // black lines
  );
  mesh.add(edgeLines);
  mesh.rotation.y = -Math.PI / 5;

  mesh.position.y = height / 2;
  return mesh;
}
function disposeMesh(mesh) {
  if (mesh) {
    scene.remove(mesh);
    mesh.traverse((child) => {
      if (child.geometry) child.geometry.dispose();
    });
  }
}

function createPyramid(baseType, height, s) {
  disposeMesh(currentPyramid);
  let node = null; // node
  if (baseType === PyramidTypes.RECTANGLE) {
    node = createRectangularFrustum(height, s);
  } else {
    node = createPyramidFrustum(baseType, height, s);
  }
  markTop(height);
  currentPyramid = node;
}
function markTop(h) {
  if (topMark) {
    scene.remove(topMark);
    topMark.geometry.dispose();
  }
  const point = new THREE.SphereGeometry(0.05);
  const sphere = new THREE.Mesh(point, baseMaterial);
  sphere.position.set(0, h, 0);
  scene.add(sphere);
  topMark = sphere;
}
// createPyramid(baseType, heightSlider.value, formSlider.value);
addContextSection(1);
//********************* Objects set up end ****************** *//

//********************* Create objects functions ****************** *//

//********************* Event handlers *********************//
function onSelectingBase() {
  currentStep = 2;
  addContextSection(2);
  heightSlider.parentElement.style.visibility = "visible";
  showDragFtue(heightSlider, 2 / 5);
  // heightSlider.parentElement.style.display = "block";
}
function onAdjustingheight() {
  currentStep = 3;
  addContextSection(3);
  formSlider.parentElement.style.visibility = "visible";
  showDragFtue(formSlider)
  // formSlider.parentElement.style.display = "block";
  heightSlider.removeEventListener("change", onAdjustingheight);
}

heightSlider.addEventListener("change", onAdjustingheight);
heightSlider.addEventListener("input", () => {
  playSound("click");
  if(currentStep === 2){
    hideDragFtue();
  }
  createPyramid(baseType, heightSlider.value, formSlider.value);
  render3();
});
formSlider.addEventListener("input", () => {
  playSound("click");
  if(currentStep===3){
    hideDragFtue()
  }
  createPyramid(baseType, heightSlider.value, formSlider.value);
  render3();
  if (baseType === PyramidTypes.CIRCLE && formSlider.value == 1 && !noteOn) {
    formSlider.disabled = true;
    noteOn = true;
    revealNote("note", () => {
      formSlider.disabled = false;
    });
  }
});
function markCurrentButtonActive(btn) {
  buttons.forEach((button) => {
    button.classList.remove("btn-primary");
    button.classList.add("btn-secondary");
  });
  btn.classList.remove("btn-secondary");
  btn.classList.add("btn-primary");
}
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playSound("click");
    if (currentStep === 1) {
      onSelectingBase();
      hideFtue();
    }
    if (noteOn) {
      noteOn = false;
      hideNote("note");
    }
    baseType = button.id;
    markCurrentButtonActive(button);
    heightSlider.value = 1.5;
    formSlider.value = 0;
    createPyramid(baseType, heightSlider.value, formSlider.value);
    render3();
  });
});

function render3() {
  renderer.render(scene, camera);
}
// Accordion functionality for context sections
document.querySelectorAll(".context-title-container").forEach((header) => {
  header.addEventListener("click", () => {
    const section = header.parentElement;
    const arrow = header.querySelector(".arrow-icon");

    section.classList.toggle("collapsed");
    arrow.classList.toggle("collapsed");
  });
});
showFtue(buttons[0]);
render3();
