import * as THREE from "three";

// chatGPTPrompt:
// write me a three.js scene that is animated by the mouse scroll

export const scene3 = () => {
  // Initialize scene, camera, and renderer
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

  // Create a sphere and add it to the scene
  var sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
  var sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
  var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  scene.add(sphere);

  // Position the camera
  camera.position.z = 5;

  // Create a variable to store the scroll position
  var scrollPos = 0;

  // Add an event listener for the mouse scroll
  window.addEventListener(
    "mousewheel",
    function (event) {
      // Update the scroll position
      scrollPos += event.deltaY;
      // Use the scroll position to animate the sphere
      sphere.rotation.x = scrollPos / 100;
      sphere.rotation.y = scrollPos / 50;
    },
    false
  );

  // Render the scene
  function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
  }
  render();
};
