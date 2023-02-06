// Three.js imports
import * as THREE from "three";

export const scene8 = () => {
  // Three.js scene setup
  let scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000033);

  // Camera setup
  const camera = new THREE.OrthographicCamera(
    window.innerWidth / -2,
    window.innerWidth / 2,
    window.innerHeight / 2,
    window.innerHeight / -2,
    0,
    1000
  );
  camera.position.z = 5;

  // Render setup
  let renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Create 2D shapes
  const geometry1 = new THREE.CircleGeometry(50, 32);
  const material1 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  const circle = new THREE.Mesh(geometry1, material1);

  const geometry2 = new THREE.RectangleGeometry(100, 100);
  const material2 = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const rectangle = new THREE.Mesh(geometry2, material2);
  rectangle.position.x = -150;

  const geometry3 = new THREE.TriangleGeometry(100, 100);
  const material3 = new THREE.MeshBasicMaterial({ color: 0x0000ff });
  const triangle = new THREE.Mesh(geometry3, material3);
  triangle.position.x = 150;

  // Add shapes to the scene
  scene.add(circle);
  scene.add(rectangle);

  // Lighting setup
  let light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(10, 10, 10);
  scene.add(light);

  // Render loop
  let render = function () {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
  };
  render();
};
