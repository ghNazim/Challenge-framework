const container = document.getElementById("container");
const openSlider = document.getElementById("unwrapSlider");
const radiusSlider = document.getElementById("radiusSlider");
const heightSlider = document.getElementById("heightSlider");
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");
const overlay = document.getElementById("labelOverlay");

let radius = 1.5;
let height = 2;
const baseColor = 0x0077ff;
const surfaceColor = 0xadd8e6;
const lineColor = 0x888888;

// Set up the scene ********************
const aspectRatio = 800 / 500,
  d = 5;
let step = 0;
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

// const geo = new THREE.CylinderGeometry(cylinderRadius, cylinderRadius, cylinderHeight, 32);
// const mesh = new THREE.Mesh(geo, baseMaterial);

// scene.add(mesh);
const s = 0;

//flaps
let surface = createSurface(scene, radius, height, s);
let [topPivot, bottomPivot] = createFlaps(scene, radius, height, 0);
// removeFlaps(scene, topPivot, bottomPivot);
// removeSurface(scene, surface);
// topPivot.rotation.x = -.4;
// bottomPivot.rotation.x = .4;

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
function removeSurface(scene,group) {
  disposeGroup(scene,group);
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
  disposeGroup(scene,topPivot);
  disposeGroup(scene,bottomPivot);
}
function disposeGroup(scene,group) {
  group.traverse((child) => {
    if (child.isMesh) {
      if (child.geometry) child.geometry.dispose();
    }
  });
  scene.remove(group);
}



//********************* Event handlers *********************

function updateCylinder(){
  const r = radiusSlider.value;
  const h = heightSlider.value;
  const t = openSlider.value;
  let p =Math.min(1,t);
  let s = Math.max(0,t-1);
  radius = r;
  height = h;
  removeFlaps(scene, topPivot, bottomPivot);
  [topPivot, bottomPivot] = createFlaps(scene, r, h, p);
  removeSurface(scene, surface);
  surface = createSurface(scene, r, h, s);
  camera.position.set(0, h * 1, r * 4);
  camera.lookAt(0, 0, 0);
}



radiusSlider.addEventListener("input", updateCylinder);
heightSlider.addEventListener("input", updateCylinder);
openSlider.addEventListener("input", updateCylinder);
function handleNextClick() {
  return;
}
function handlePrevClick() {}

nextButton.addEventListener("click", handleNextClick);
prevButton.addEventListener("click", handlePrevClick);
openSlider.addEventListener("input", () => {
  return;
});

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
