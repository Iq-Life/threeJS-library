import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import styles from './MyThreeScene.module.css';

const MyThreeScene: React.FC = () => {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    const renderer = new THREE.WebGLRenderer();

    // Set up a cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 'purple' });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Set up camera position
    camera.position.z = 5;

    // Add the renderer to the DOM
    if (sceneRef.current) {
      renderer.setSize(
        sceneRef.current.clientWidth,
        sceneRef.current.clientHeight,
      );
      sceneRef.current.appendChild(renderer.domElement);
    }

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the cube
      if (cube) {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
      }

      // Render the scene
      if (renderer && scene && camera) {
        renderer.render(scene, camera);
      }
    };

    animate();

    // Clean up on component unmount
    return () => {
      if (renderer && renderer.domElement) {
        sceneRef.current?.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div className={styles.convasContainer} ref={sceneRef} />;
};

export default MyThreeScene;
