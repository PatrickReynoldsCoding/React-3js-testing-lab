import * as THREE from "three";

export const createScene = () => {
  // set up scene, camera, and renderer
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

  // create abstract objects and add to scene
  var geometry = new THREE.IcosahedronGeometry(1, 0);
  var material = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    flatShading: true,
  });
  var mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  var geometry2 = new THREE.OctahedronGeometry(1, 0);
  var material2 = new THREE.MeshStandardMaterial({
    color: 0x00ff00,
    flatShading: true,
  });
  var mesh2 = new THREE.Mesh(geometry2, material2);
  mesh2.position.x = 2;
  scene.add(mesh2);

  // create lighting and add to scene
  var light = new THREE.DirectionalLight(0xffffff, 0.5);
  light.position.set(1, 1, 1);
  scene.add(light);

  var light2 = new THREE.DirectionalLight(0x00ff00, 0.5);
  light2.position.set(-1, -1, -1);
  scene.add(light2);

  camera.position.z = 5;

  // animate objects on mouse scroll
  document.addEventListener("wheel", function (e) {
    mesh.rotation.x += e.deltaY * 0.01;
    mesh.rotation.y += e.deltaY * 0.01;
    mesh2.rotation.x -= e.deltaY * 0.01;
    mesh2.rotation.y -= e.deltaY * 0.01;
  });

  // render scene
  var render = function () {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
  };
  render();
};
