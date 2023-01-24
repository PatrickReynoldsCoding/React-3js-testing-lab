// Three.js imports
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

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
