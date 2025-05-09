
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const QuantumParticles = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Create scene
    const scene = new THREE.Scene();
    
    // Create camera
    const camera = new THREE.PerspectiveCamera(
      75, 
      containerRef.current.clientWidth / containerRef.current.clientHeight, 
      0.1, 
      1000
    );
    camera.position.z = 5;
    
    // Create renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    containerRef.current.appendChild(renderer.domElement);
    
    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 500;
    
    const posArray = new Float32Array(particlesCount * 3);
    
    for(let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    // Material
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: '#FFFFFF',
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });
    
    // Mesh
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    // Connect with lines
    const lineMaterial = new THREE.LineBasicMaterial({ 
      color: '#1050CE',
      transparent: true,
      opacity: 0.2
    });
    
    const connections: THREE.Line[] = [];
    const maxDistance = 2; // Maximum distance for connection
    
    for (let i = 0; i < particlesCount; i++) {
      for (let j = i + 1; j < particlesCount; j++) {
        const x1 = posArray[i * 3];
        const y1 = posArray[i * 3 + 1];
        const z1 = posArray[i * 3 + 2];
        
        const x2 = posArray[j * 3];
        const y2 = posArray[j * 3 + 1];
        const z2 = posArray[j * 3 + 2];
        
        const distance = Math.sqrt(
          Math.pow(x2 - x1, 2) + 
          Math.pow(y2 - y1, 2) + 
          Math.pow(z2 - z1, 2)
        );
        
        if (distance < maxDistance) {
          const lineGeometry = new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(x1, y1, z1),
            new THREE.Vector3(x2, y2, z2)
          ]);
          
          const line = new THREE.Line(lineGeometry, lineMaterial);
          connections.push(line);
          scene.add(line);
        }
      }
    }
    
    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      particlesMesh.rotation.x += 0.001;
      particlesMesh.rotation.y += 0.001;
      
      connections.forEach(line => {
        line.rotation.x += 0.001;
        line.rotation.y += 0.001;
      });
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose resources
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      lineMaterial.dispose();
      connections.forEach(line => {
        (line.geometry as THREE.BufferGeometry).dispose();
      });
    };
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      className="w-full h-full bg-gray-900"
      style={{ position: 'absolute', top: 0, left: 0 }}
    />
  );
};

export default QuantumParticles;
