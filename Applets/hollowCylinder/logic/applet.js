const container = document.getElementById("container");
const openSlider = document.getElementById("open");
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");
const overlay = document.getElementById("labelOverlay");

const cylinderRadius = 1.5;
const cylinderHeight = 1;
const baseColor = 0x0077ff;
const surfaceColor = 0xff8800;
const lineColor = 0x888888;

// Set up the scene ********************
const aspectRatio = 650 / 400,
  d = 3;
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
renderer.setSize(650, 400);
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
  side: THREE.DoubleSide,
});
const lineMaterial = new THREE.LineBasicMaterial({ color: lineColor });

cylinderGroup = new THREE.Group();
scene.add(cylinderGroup);

// Top Base
const baseGeometry = new THREE.CircleGeometry(cylinderRadius, 32);
topBase = new THREE.Mesh(baseGeometry, baseMaterial);


// Bottom Base
bottomBase = new THREE.Mesh(baseGeometry.clone(), baseMaterial);


// Pivots for bases
topPivot = new THREE.Group();
topPivot.position.set(cylinderRadius, cylinderHeight / 2, 0); // Pivot point on circumference
cylinderGroup.add(topPivot);
topBase.position.set(-cylinderRadius, 0, 0); // Position base center relative to pivot's origin
topPivot.add(topBase);

bottomPivot = new THREE.Group();
bottomPivot.position.set(cylinderRadius, -cylinderHeight / 2, 0);
cylinderGroup.add(bottomPivot);
bottomBase.position.set(-cylinderRadius, 0, 0);
bottomPivot.add(bottomBase);

            
//********************* Objects set up end ****************** */

function handleNextClick() {
  return;
}
function handlePrevClick() {
  
}

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
