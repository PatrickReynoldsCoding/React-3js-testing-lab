// Three.js imports
import * as THREE from "three";

export const scene6 = () => {
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
  let sphereGeometry = new THREE.IcosahedronGeometry(1, 5);
  let sphereMaterial = new THREE.MeshLambertMaterial({
    map: new THREE.TextureLoader().load("textures/sphere-texture.png"),
  });
  let sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphere.position.set(0, 0, 0);
  sphere.name = "sphere";
  scene.add(sphere);

  // Lighting setup
  let light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(10, 10, 10);
  scene.add(light);

  // Mouse wheel scroll event handler
  function rotateScene(movement) {
    scene.rotation.y += movement;
    scene.rotation.x += movement;
  }
  // Speed of rotation
  const rotationFactor = 0.0001;

  //
  document.addEventListener("wheel", (event) => {
    let movementY = event.deltaY * rotationFactor;
    rotateScene(movementY);
  });

  // Render loop
  let render = function () {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
  };
  render();
};
