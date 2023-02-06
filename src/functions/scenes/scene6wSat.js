// Three.js imports
import * as THREE from "three";

export const scene6wSat = () => {
  // Three.js scene setup
  let scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000033);

  // Camera setup
  let camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  // Render setup
  let renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Sphere setup
  let sphereGeometry = new THREE.IcosahedronGeometry(1, 4);
  let sphereMaterial = new THREE.MeshLambertMaterial({
    map: new THREE.TextureLoader().load("textures/sphere-texture.png"),
  });
  let sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphere.position.set(0, 0, 0);
  sphere.name = "sphere";
  scene.add(sphere);

  // Create satellites: Pre-loop Setup

  // container for all satellites to handle individual rotation
  const satelliteGroup = new THREE.Object3D();
  satelliteGroup.name = "satelliteGroup";

  // Number of satellites in this render
  let numSatellites = Math.floor(Math.random() * 19) + 12; // between 12 and 30

  // Random Colours
  let satelliteColours = [
    "#FDB813",
    "#6A5ACD",
    "#7FFFD4",
    "#F4A460",
    "#ADD8E6",
  ];

  // Create satellites: Creation Loop

  for (let i = 0; i < numSatellites; i++) {
    // Pick random colour
    let satelliteColour =
      satelliteColours[Math.floor(Math.random() * satelliteColours.length)];
    let satelliteMaterial = new THREE.MeshStandardMaterial({
      color: satelliteColour,
    });

    // Pick random geometry
    let satelliteGeometry = new THREE.IcosahedronGeometry(
      Math.random() * (0.2 - 0.05) + 0.05, // size
      Math.floor(Math.random() * 2) // detail between 0 and 1
    );

    // create satellite
    let satellite = new THREE.Mesh(satelliteGeometry, satelliteMaterial);

    // set position
    satellite.position.set(
      Math.random() * (1.7 - -1.7) + -1.7,
      Math.random() * (1.2 - -1.2) + -1.2,
      Math.random() * (3 - -2) + -2
    );
    // speed of orbit
    const satelliteSpeeds = [0.025, -0.025, -0.05];

    const pivot = new THREE.Object3D();
    pivot.orbitSpeed =
      satelliteSpeeds[Math.floor(Math.random() * satelliteSpeeds.length)];
    pivot.add(satellite);
    satelliteGroup.add(pivot);
  }
  sphere.add(satelliteGroup);

  // Lighting setup
  let light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(10, 10, 10);
  scene.add(light);

  // Mouse wheel scroll event handler

  function rotateScene(movement) {
    scene.rotation.y += movement;
    scene.rotation.x += movement;
  }

  function rotateSphere(movement) {
    satelliteGroup.rotation.y += movement;
  }
  const rotationFactor = 0.0001;
  document.addEventListener("wheel", function (event) {
    let movementY = event.deltaY * rotationFactor;
    console.log(movementY);
    rotateScene(movementY);
    rotateSphere(-movementY);
  });
  console.log(satelliteGroup.children);
  // Render loop

  let render = function () {
    requestAnimationFrame(render);

    satelliteGroup.children.forEach((child) => {
      child.rotation.y += child.orbitSpeed;
    });
    renderer.render(scene, camera);
  };
  render();
};
