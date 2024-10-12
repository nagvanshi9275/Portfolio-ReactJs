import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeD = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(new THREE.Color('rgb(14, 15, 15)'), 1);
    mountRef.current.appendChild(renderer.domElement);

    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 500;
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const particleColors = [
      new THREE.Color('rgb(171, 76, 152)'),
      new THREE.Color('#364bde'),
      new THREE.Color('rgba(240, 134, 68, 0.8)')
    ];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

      const color = particleColors[i % 3];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true
    });

    const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particleSystem);

    const mouse = new THREE.Vector2();
    const threshold = 2; // Increased for more prominent effect

    const pushParticles = (x, y) => {
      mouse.x = (x / window.innerWidth) * 2 - 1;
      mouse.y = -(y / window.innerHeight) * 2 + 1;

      for (let i = 0; i < particleCount; i++) {
        const dx = mouse.x * 5 - positions[i * 3];
        const dy = mouse.y * 5 - positions[i * 3 + 1];
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < threshold) {
          const force = (threshold - distance) * 0.2; // Increased force for stronger push effect
          velocities[i * 3] -= force * dx * 2; // Increased speed for horizontal direction
          velocities[i * 3 + 1] -= force * dy * 2; // Increased speed for vertical direction
        }
      }
    };

    const onMouseMove = (event) => {
      pushParticles(event.clientX, event.clientY);
    };

    const onTouchMove = (event) => {
      if (event.touches.length > 0) {
        const touch = event.touches[0];
        pushParticles(touch.clientX, touch.clientY);
      }
    };

    const animate = () => {
      requestAnimationFrame(animate);

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] += velocities[i * 3];
        positions[i * 3 + 1] += velocities[i * 3 + 1];

        velocities[i * 3] *= 0.92; // Slowed down the decay for smoother movement
        velocities[i * 3 + 1] *= 0.92;
      }

      particlesGeometry.attributes.position.needsUpdate = true;
      particleSystem.rotation.x += 0.001;
      particleSystem.rotation.y += 0.001;
      renderer.render(scene, camera);
    };

    animate();
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('resize', () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    });

    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, []);

  return <div className="threeD-background-container" ref={mountRef} />;
};

export default ThreeD;
