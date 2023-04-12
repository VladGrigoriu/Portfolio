<template>
    <section id="interactive-container">
        <div id="interactive-ids" class="loader">
            <div class="loader__tile"></div>
            <div class="loader__tile"></div>
            <div class="loader__tile"></div>
            <div class="loader__tile"></div>
            <div class="loader__tile"></div>
        </div>

        <div id="env-container">
          <div id="env-renderer"></div>
        </div>

    </section>
</template>

<script>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default {
    data() {
      return {
        texture: null
      };
    },
    mounted(){
        setTimeout(() => {
            document.getElementById('interactive-ids').classList.add('loader--active');
        }, 500);
        // const renderer = this.$refs.renderer;
        // const box = this.$refs.box.mesh;
        // renderer.onBeforeRender(() => {
        //   box.rotation.x += 0.01;
        // });

        // Select the container for the scene
const container = document.getElementById('env-renderer');

// Create the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

// Load the panoramic image and create a texture
const loader = new THREE.TextureLoader();
const texture = loader.load('/assets/images/interactive_env.jfif');

// Create a spherical geometry and map the texture to it
const geometry = new THREE.SphereGeometry(500, 60, 40);

// Flip the geometry inside out
geometry.scale(-1, 1, 1);

const material = new THREE.MeshBasicMaterial({
    map: texture
});

const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// Set up the camera and controls
camera.position.set(0, 0, 0.1);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = false;
controls.enablePan = false;

controls.rotateSpeed = 0.3;

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

// Animation loop
let lastTime = 0;
const rotationSpeed = 0.00005;

function animate(time) {
    const delta = time - lastTime;
    lastTime = time;
    requestAnimationFrame(animate);

    sphere.rotation.y += rotationSpeed * delta;

    controls.update();
    renderer.render(scene, camera);
}

animate(0);
   
    }
}
</script>

<style scoped>
.loader {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 0;
  height: 100vh;
  transition: width 0s 1.4s ease;
}
.loader .loader__tile {
  position: absolute;
  left: 0;
  width: 0;
  height: 20%;
  background-color: var(--primary-color);
  transition: width 0.7s ease;
}
.loader .loader__tile:nth-child(0) {
  top: calc(-1 * 20%);
  transition-delay: -0.2s;
}
.loader .loader__tile:nth-child(1) {
  top: calc(0 * 20%);
  transition-delay: 0s;
}
.loader .loader__tile:nth-child(2) {
  top: calc(1 * 20%);
  transition-delay: 0.2s;
}
.loader .loader__tile:nth-child(3) {
  top: calc(2 * 20%);
  transition-delay: 0.4s;
}
.loader .loader__tile:nth-child(4) {
  top: calc(3 * 20%);
  transition-delay: 0.6s;
}
.loader .loader__tile:nth-child(5) {
  top: calc(4 * 20%);
  transition-delay: 0.8s;
}
.loader--active {
  width: 100%;
  transition-delay: 0s;
}
.loader--active .loader__tile {
  width: 100%;
}
.loader--active .loader__tile:nth-child(0) {
  transition-delay: -0.2s;
}
.loader--active .loader__tile:nth-child(1) {
  transition-delay: 0s;
}
.loader--active .loader__tile:nth-child(2) {
  transition-delay: 0.2s;
}
.loader--active .loader__tile:nth-child(3) {
  transition-delay: 0.4s;
}
.loader--active .loader__tile:nth-child(4) {
  transition-delay: 0.6s;
}
.loader--active .loader__tile:nth-child(5) {
  transition-delay: 0.8s;
}
#interactive-container{
    height: 100vh;
    background-color: var(--secondary-color);
}
#env-renderer{
  position: relative;
  z-index: 9999;
}
#env-container{
  position: relative;
  z-index: 9999;
  height: 90vh;
  width: 20px;
}
</style>