// Three.js imports
import * as THREE from "three";

export const scene7 = () => {
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    100
  );

  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  var cubes = [];
  var size = 1;
  var cubeGeometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
  var cubeMaterial = new THREE.MeshDepthMaterial();

  var gap = 0.1;
  for (var x = -size; x <= size; x += 0.1 + gap) {
    for (var y = -size; y <= size; y += 0.1 + gap) {
      for (var z = -size; z <= size; z += 0.1 + gap) {
        var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cube.position.set(x, y, z);
        scene.add(cube);
        cubes.push(cube);
      }
    }
  }

  camera.position.z = 5;

  var animate = function () {
    requestAnimationFrame(animate);

    scene.rotation.x += 0.01;
    scene.rotation.y += 0.01;
    scene.position.x = Math.cos(Date.now() * 0.00011) * 6;
    /* scene.position.x = Math.sin(Date.now() * 0.001) * 2 */ /*     scene.position.x += 0.01; */

    renderer.render(scene, camera);
  };

  animate();
};
