// Three.js imports
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// chatGPTPrompt:
// can you create a new animation in 3js of a cube rotation around position 0,0,0 like a moon orbiting a planet

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
  scene.add(cube);

  // Lighting setup
  var light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(10, 10, 10);
  scene.add(light);

  // Render loop
  const render = () => {
    requestAnimationFrame(render);
    cube.obj.rotation.x += 0.01;
    cube.obj.rotation.y += 0.01;
    renderer.render(scene, camera);
  };
  render();
};
