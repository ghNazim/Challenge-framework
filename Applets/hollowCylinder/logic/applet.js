const container = document.getElementById("container");
const unwrapSlider = document.getElementById("unwrapSlider");
const radiusSlider = document.getElementById("radiusSlider");
const heightSlider = document.getElementById("heightSlider");
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");
const overlay = document.getElementById("labelOverlay");
const wrappper = document.getElementById("wrapper");

let radius = 1.5;
let height = 2;
const baseColor = 0x0077ff;
const surfaceColor = 0xadd8e6;
const lineColor = 0x888888;

// Set up the scene ********************
const aspectRatio = 800 / 500,
  d = 5;
let step = 1;
const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(
  -d * aspectRatio,
  d * aspectRatio,
  d,
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
  opacity: 0.8,
  side: THREE.DoubleSide,
});
const lineMaterial = new THREE.LineBasicMaterial({ color: lineColor });

const s = 0;

let surface = createSurface(scene, radius, height, s);
let [topPivot, bottomPivot] = createFlaps(scene, radius, height, 0);

//********************* Objects set up end ****************** *//

//********************* Create objects functions ****************** *//

function createSurface(scene, radius, height, s) {
  const data = getShapeData(s, radius);

  const group = new THREE.Group();
  scene.add(group);
  const planeGeo = new THREE.PlaneGeometry(2 * data.length, height);
  const plane = new THREE.Mesh(planeGeo, surfaceMaterial);
  group.add(plane);
  plane.position.z = -radius;

  const curvedSurfaceGeoRight = new THREE.CylinderGeometry(
    radius,
    radius,
    height,
    32,
    32,
    true,
    Math.PI,
    -data.angle
  );
  const curvedSurfaceGeoLeft = new THREE.CylinderGeometry(
    radius,
    radius,
    height,
    32,
    32,
    true,
    Math.PI,
    data.angle
  );
  const curvedSurfaceRight = new THREE.Mesh(
    curvedSurfaceGeoRight,
    surfaceMaterial
  );
  const curvedSurfaceLeft = new THREE.Mesh(
    curvedSurfaceGeoLeft,
    surfaceMaterial
  );

  curvedSurfaceRight.position.x = data.length;
  curvedSurfaceLeft.position.x = -data.length;

  group.add(curvedSurfaceRight);
  group.add(curvedSurfaceLeft);

  return group;
}
function removeSurface(scene, group) {
  disposeGroup(scene, group);
}
function createFlaps(scene, radius, height, p) {
  const flapGeo = new THREE.CircleGeometry(radius, 128);
  const topBase = new THREE.Mesh(flapGeo, baseMaterial);
  topBase.rotation.x = Math.PI / 2;
  topBase.position.set(0, 0, radius);

  const bottomBase = new THREE.Mesh(flapGeo.clone(), baseMaterial);
  bottomBase.rotation.x = -Math.PI / 2;
  bottomBase.position.set(0, 0, radius);

  const topPivot = new THREE.Group();
  topPivot.position.set(0, height / 2, -radius);
  const bottomPivot = new THREE.Group();
  bottomPivot.position.set(0, -height / 2, -radius);
  topPivot.add(topBase);
  bottomPivot.add(bottomBase);
  scene.add(topPivot);
  scene.add(bottomPivot);
  topPivot.rotation.x = (-p * Math.PI) / 2;
  bottomPivot.rotation.x = (p * Math.PI) / 2;

  return [topPivot, bottomPivot];
}
function removeFlaps(scene, topPivot, bottomPivot) {
  disposeGroup(scene, topPivot);
  disposeGroup(scene, bottomPivot);
}
function disposeGroup(scene, group) {
  group.traverse((child) => {
    if (child.isMesh) {
      if (child.geometry) child.geometry.dispose();
    }
  });
  scene.remove(group);
}

//********************* Event handlers *********************

function updateCylinder() {
  const r = radiusSlider.value;
  const h = heightSlider.value;
  const t = unwrapSlider.value;
  let p = Math.min(1, t);
  let s = Math.max(0, t - 1);
  radius = r;
  height = h;
  removeFlaps(scene, topPivot, bottomPivot);
  [topPivot, bottomPivot] = createFlaps(scene, r, h, p);
  removeSurface(scene, surface);
  surface = createSurface(scene, r, h, s);
  camera.position.set(0, h * 1, r * 4);
  camera.lookAt(0, 0, 0);
}

function atStep1() {
  highlightContextSection(1)
  unwrapSlider.parentElement.style.display = "none";
  prevButton.disabled = true;
}
function atStep2() {
  highlightContextSection(2)
  unwrapSlider.parentElement.style.display = "block";
  prevButton.disabled = true;
  nextButton.disabled = true;
  wrappper.style.transform = "translatex(0%)";
  removeLabels();
  hideVolumeFormula();
}
function atStep3() {
  highlightContextSection(3)
  unwrapSlider.parentElement.style.display = "none";
  nextButton.disabled = true;
  wrappper.style.transform = "translatex(-25%)";
  prevButton.disabled = false;
  revealVolumeFormula();
  drawLabels();
}

function drawLabels() {
  removeLabels();
  const r = parseFloat(radiusSlider.value);
  const h = parseFloat(heightSlider.value);
  const hw = Math.PI * r;
  const anchorPoints = [
    new THREE.Vector3(-hw, -h / 2 - 0.1, -r),
    new THREE.Vector3(hw, -h / 2 - 0.1, -r),
    new THREE.Vector3(hw + 0.1, -h / 2, -r),
    new THREE.Vector3(hw + 0.1, h / 2, -r),
    new THREE.Vector3(0, h / 2 + r, -r),
    new THREE.Vector3(r, h / 2 + r, -r),
    new THREE.Vector3(0, -(h / 2) - r, -r),
    new THREE.Vector3(r, -(h / 2) - r, -r), //arrrow end
    new THREE.Vector3(r / 2, h / 2 + r + 0.16, -r),
    new THREE.Vector3(r / 2, -(h / 2) - r - 0.4, -r),
    new THREE.Vector3(0, -h / 2 - 0.5, -r),
    new THREE.Vector3(hw + 0.42, 0, -r),
  ];

  const anchors2d = anchorPoints.map((p) => {
    return vectorToScreenPosition(p, camera, renderer.domElement);
  });
  drawArrowSVG(overlay, anchors2d[0], anchors2d[1]);
  drawArrowSVG(overlay, anchors2d[2], anchors2d[3]);
  drawArrowSVG(overlay, anchors2d[4], anchors2d[5]);
  drawArrowSVG(overlay, anchors2d[6], anchors2d[7]);
  writeTextSVG(overlay, anchors2d[8], "r");
  writeTextSVG(overlay, anchors2d[9], "r");
  writeTextSVG(overlay, anchors2d[10], "2πr");
  writeTextSVG(overlay, anchors2d[11], "h");
}
atStep1();

radiusSlider.addEventListener("input", updateCylinder);
heightSlider.addEventListener("input", updateCylinder);

function handleNextClick() {
  if (step == 3) return;
  step++;
  if (step == 2) {
    atStep2();
  } else if (step == 3) {
    nextButton.disabled = true;
    atStep3();
  }
}
function handlePrevClick() {
  if (step == 1) return;
  step--;
  if (step == 1) {
    atStep1();
  } else if (step == 2) {
    atStep2();
    nextButton.disabled = false;
  }
}

nextButton.addEventListener("click", handleNextClick);
prevButton.addEventListener("click", handlePrevClick);
radiusSlider.addEventListener("input", () => {
  if (unwrapSlider.value == 2) drawLabels();

  render3()
});
heightSlider.addEventListener("input", () => {
  if (unwrapSlider.value == 2) drawLabels();
  render3()
});
unwrapSlider.addEventListener("input", () => {
  updateCylinder();
  if (unwrapSlider.value == 2) {
    drawLabels();
    overlay.style.opacity = 1;
    nextButton.disabled = false;
  } else {
    removeLabels();
    nextButton.disabled = true;
  }
  render3()
});

function render3(){
  renderer.render(scene, camera);
}
render3()