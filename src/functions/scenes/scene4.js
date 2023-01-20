// Three.js imports
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// chatGPTPrompt:
// write me a three.js script that shows the camera orbiting around a white polygon with a blue background

export const scene4 = () => {
  // Scene setup
  const scene = new THREE.Scene();
  scene.background = new THREE.Color("blue");

  // Camera setup
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  // Renderer setup
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Orbit controls
  const controls = new OrbitControls(camera, renderer.domElement);

  // White polygon geometry
  const geometry = new THREE.PlaneGeometry(2, 2, 32);
  const material = new THREE.MeshBasicMaterial({
    color: "white",
    side: THREE.DoubleSide,
  });
  const polygon = new THREE.Mesh(geometry, material);
  scene.add(polygon);

  // Render loop
  const render = () => {
    requestAnimationFrame(render);
    controls.update();
    renderer.render(scene, camera);
  };

  render();
};
