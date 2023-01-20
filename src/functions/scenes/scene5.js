// Three.js imports
import * as THREE from "three";

// chatGPTPrompt:
// write me a three.js script that shows the camera rotating around a white sphere when you scroll the mouse wheel. it should have a dark blue background and the sphere should have texture. add lighting from an angle.

export const scene5 = () => {
  var scene = new THREE.Scene();
  scene.background = new THREE.Color("darkblue");

  var camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Lights

  const pointLight = new THREE.PointLight(0xffffff);
  pointLight.position.set(5, 5, 5);

  const ambientLight = new THREE.AmbientLight(0xffffff);
  scene.add(pointLight, ambientLight);

  // Helpers

  const lightHelper = new THREE.PointLightHelper(pointLight);
  const gridHelper = new THREE.GridHelper(200, 50);
  scene.add(lightHelper, gridHelper);

  var sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
  var sphereMaterial = new THREE.MeshLambertMaterial({
    map: new THREE.TextureLoader().load("path/to/your/texture.jpg"),
  });
  var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  scene.add(sphere);

  var angle = 0;

  function animate() {
    requestAnimationFrame(animate);
    angle += 0.1;
    camera.position.x = Math.sin(angle) * 5;
    camera.position.y = Math.cos(angle) * 5;
    camera.lookAt(sphere.position);
    renderer.render(scene, camera);
  }

  animate();

  document.addEventListener("mousewheel", (event) => {
    camera.position.z += event.deltaY * 0.01;
  });
};
