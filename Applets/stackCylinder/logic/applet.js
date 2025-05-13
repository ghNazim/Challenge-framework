const container = document.getElementById("container");
const heightSlider = document.getElementById("heightSlider");
const radiusSlider = document.getElementById("radiusSlider");
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");
const overlay = document.getElementById("labelOverlay");

let radius = 1.5;
let height = 2;

let stackedPlates = []; 
const plateRadius = 1;
const plateThickness = 0.001,plateSpacing=0.1;

// Set up the scene ********************
const aspectRatio = 800 / 500,
  d = 3;
let step = 0;
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

//********************* Scene set up end ************************ */



// **************** Set up Objects *********************

function updateCylinder(numCircles,r) {

  stackedPlates.forEach((item) => {
    scene.remove(item.plate);
    item.plate.geometry.dispose();
    item.plate.material.dispose();
    if (item.edges) {
      scene.remove(item.edges);
      item.edges.geometry.dispose();
      item.edges.material.dispose();
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

function handleNextClick() {
  return;
}
function handlePrevClick() {}

nextButton.addEventListener("click", handleNextClick);
prevButton.addEventListener("click", handlePrevClick);

function animate() {
  updateCylinder(parseInt(heightSlider.value),parseFloat(radiusSlider.value));
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
