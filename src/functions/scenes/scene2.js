import * as THREE from "three";

// chatGPTPrompt:
// write me a three.js scene that is animated by the mouse scroll

export const scene2 = () => {
  // Set up the scene, camera, and renderer
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Create a cube and add it to the scene
  var geometry = new THREE.BoxGeometry(1, 1, 1);
  var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  var cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  // Position the camera
  camera.position.z = 5;

  // Animate the scene on mouse scroll
  var scrollSpeed = 0.1;
  document.addEventListener("wheel", function (event) {
    cube.rotation.x += event.deltaY * scrollSpeed;
    cube.rotation.y += event.deltaY * scrollSpeed;
  });

  // Render the scene
  function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
  }
  render();
};
