"use client";
import styles from "./page.module.css";
import { useEffect } from "react";
import * as THREE from "three";
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
// import { VOXLoader } from 'three/examples/jsm/loaders/VOXLoader';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function Home() {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    let loader = new GLTFLoader();

    let object: any;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    loader.load(
      `079/scene.gltf`,
      (gltf) => {
        object = gltf.scene;
        scene.add(object);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100);
      },
      (error) => {
        console.error(error);
      }
    );

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    let container3D = document.getElementById("container3D") || null;
    if (container3D) {
      container3D.appendChild(renderer.domElement);
    }

    const topLight = new THREE.DirectionalLight(0xffffff, 1); // (color, intensity)
    topLight.position.set(500, 500, 500); //top-left-ish
    topLight.castShadow = true;
    scene.add(topLight);

    const ambientLight = new THREE.AmbientLight(0x333333, 1);
    scene.add(ambientLight);

    camera.position.x = 1;
    camera.position.y = 0;
    camera.position.z = 1;

    function animate() {
      requestAnimationFrame(animate);
      if (object) {
        object.rotation.x = mouseX * 0.0001;
        object.rotation.y = mouseY * 0.0001;
      }
      renderer.render(scene, camera);
    }
    window.addEventListener("resize", function () {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
    document.onmousemove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    animate();
  }, []);

  return <div id="container3D"></div>;
}
