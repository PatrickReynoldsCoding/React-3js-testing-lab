// Three.js imports
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// chatGPTPrompt:
// Initial prompt: can you create a new animation in 3js of a cube rotation around position 0,0,0 like a moon orbiting a planet
// 2nd prompt: i have some code where a cube rotates. Instead i want the cube to rotate avound a pivot point at 0,0,0. the cube should start at 1,1,1.

export const scene6orbitTest = () => {
  // Scene setup
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  // Render setup
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Cube geometry and material
  const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
  const cubeMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
  const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  cube.position.set(1, 1, 1);

  // Pivot point
  const pivot = new THREE.Object3D();
  pivot.add(cube);
  scene.add(pivot);

  // Lighting setup
  var light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(10, 10, 10);
  scene.add(light);

  // Render loop
  const render = () => {
    requestAnimationFrame(render);
    pivot.rotation.x += 0.01;
    pivot.rotation.y += 0.01;
    renderer.render(scene, camera);
  };
  render();
};
