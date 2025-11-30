"use client";

import { useEffect, useRef } from "react";

export function SphereEffect() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sphereAppRef = useRef<any>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Load Three.js and create sphere effect
    const script = document.createElement("script");
    script.type = "module";
    script.textContent = `
      import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';
      
      const container = document.getElementById('sphere-container');
      if (!container) return;

      // Scene setup
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        container.clientWidth / container.clientHeight,
        0.1,
        1000
      );
      
      const renderer = new THREE.WebGLRenderer({ 
        alpha: true,
        antialias: true 
      });
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      container.appendChild(renderer.domElement);

      // Create sphere geometry
      const geometry = new THREE.SphereGeometry(2, 64, 64);
      
      // Create material with gradient effect
      const material = new THREE.MeshStandardMaterial({
        color: 0x3b82f6,
        metalness: 0.7,
        roughness: 0.3,
        emissive: 0x1e40af,
        emissiveIntensity: 0.2,
      });

      const sphere = new THREE.Mesh(geometry, material);
      scene.add(sphere);

      // Add wireframe
      const wireframe = new THREE.WireframeGeometry(geometry);
      const line = new THREE.LineSegments(
        wireframe,
        new THREE.LineBasicMaterial({ 
          color: 0x60a5fa, 
          opacity: 0.3,
          transparent: true 
        })
      );
      scene.add(line);

      // Add lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);
      
      const pointLight1 = new THREE.PointLight(0x3b82f6, 1, 100);
      pointLight1.position.set(5, 5, 5);
      scene.add(pointLight1);
      
      const pointLight2 = new THREE.PointLight(0x60a5fa, 0.8, 100);
      pointLight2.position.set(-5, -5, -5);
      scene.add(pointLight2);

      camera.position.z = 5;

      // Animation loop
      let mouseX = 0;
      let mouseY = 0;
      
      const handleMouseMove = (event) => {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      };
      
      window.addEventListener('mousemove', handleMouseMove);

      let rotationX = 0;
      let rotationY = 0;
      let targetRotationX = 0;
      let targetRotationY = 0;

      function animate() {
        requestAnimationFrame(animate);
        
        // Smooth rotation following mouse
        targetRotationY = mouseX * 0.5;
        targetRotationX = mouseY * 0.5;
        
        rotationY += (targetRotationY - rotationY) * 0.05;
        rotationX += (targetRotationX - rotationX) * 0.05;
        
        sphere.rotation.y += 0.005 + rotationY * 0.01;
        sphere.rotation.x += 0.003 + rotationX * 0.01;
        line.rotation.y = sphere.rotation.y;
        line.rotation.x = sphere.rotation.x;

        // Auto-rotate camera slightly
        camera.position.x = Math.sin(Date.now() * 0.0005) * 0.5;
        camera.position.y = Math.cos(Date.now() * 0.0003) * 0.3;
        camera.lookAt(0, 0, 0);

        renderer.render(scene, camera);
      }

      animate();

      // Handle resize
      const handleResize = () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
      };
      window.addEventListener('resize', handleResize);

      // Store for cleanup
      window.__sphereApp = {
        dispose: () => {
          window.removeEventListener('mousemove', handleMouseMove);
          window.removeEventListener('resize', handleResize);
          renderer.dispose();
          geometry.dispose();
          material.dispose();
          if (container && renderer.domElement.parentNode) {
            container.removeChild(renderer.domElement);
          }
        }
      };
    `;

    document.body.appendChild(script);

    return () => {
      if (window.__sphereApp && window.__sphereApp.dispose) {
        window.__sphereApp.dispose();
      }
      if (script.parentNode) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="sphere-container"
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: -12 }}
    />
  );
}

declare global {
  interface Window {
    __sphereApp?: {
      dispose: () => void;
    };
  }
}

