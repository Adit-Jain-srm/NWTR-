"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface GoldParticlesProps {
  count?: number;
  spread?: number;
}

export function GoldParticles({ count = 60, spread = 4 }: GoldParticlesProps) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * spread;
      pos[i * 3 + 1] = (Math.random() - 0.5) * spread;
      pos[i * 3 + 2] = (Math.random() - 0.5) * spread * 0.5;
      vel[i * 3] = (Math.random() - 0.5) * 0.002;
      vel[i * 3 + 1] = Math.random() * 0.003 + 0.001;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.001;
    }
    return [pos, vel];
  }, [count, spread]);

  useFrame(() => {
    if (!pointsRef.current) return;
    const posArray = pointsRef.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      posArray[i * 3] += velocities[i * 3];
      posArray[i * 3 + 1] += velocities[i * 3 + 1];
      posArray[i * 3 + 2] += velocities[i * 3 + 2];

      if (posArray[i * 3 + 1] > spread / 2) {
        posArray[i * 3 + 1] = -spread / 2;
        posArray[i * 3] = (Math.random() - 0.5) * spread;
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <float32BufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#C9A961"
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export function VaultMesh() {
  const groupRef = useRef<THREE.Group>(null);
  const ringRef1 = useRef<THREE.Mesh>(null);
  const ringRef2 = useRef<THREE.Mesh>(null);
  const ringRef3 = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
    }
    if (ringRef1.current) {
      ringRef1.current.rotation.x += delta * 0.3;
      ringRef1.current.rotation.z += delta * 0.1;
    }
    if (ringRef2.current) {
      ringRef2.current.rotation.y += delta * 0.25;
      ringRef2.current.rotation.x -= delta * 0.15;
    }
    if (ringRef3.current) {
      ringRef3.current.rotation.z += delta * 0.2;
      ringRef3.current.rotation.y += delta * 0.1;
    }
  });

  const goldMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#C9A961",
        metalness: 0.9,
        roughness: 0.2,
        emissive: "#C9A961",
        emissiveIntensity: 0.15,
        wireframe: true,
      }),
    []
  );

  return (
    <group ref={groupRef}>
      {/* Central icosahedron - the "vault" */}
      <mesh>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#C9A961"
          metalness={0.95}
          roughness={0.15}
          emissive="#C9A961"
          emissiveIntensity={0.2}
          wireframe
        />
      </mesh>

      {/* Orbiting rings */}
      <mesh ref={ringRef1}>
        <torusGeometry args={[1.6, 0.015, 16, 64]} />
        <primitive object={goldMaterial} attach="material" />
      </mesh>
      <mesh ref={ringRef2} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1.9, 0.012, 16, 64]} />
        <primitive object={goldMaterial} attach="material" />
      </mesh>
      <mesh ref={ringRef3} rotation={[0, Math.PI / 4, Math.PI / 6]}>
        <torusGeometry args={[2.2, 0.01, 16, 64]} />
        <primitive object={goldMaterial} attach="material" />
      </mesh>

      {/* Ambient gold particles */}
      <GoldParticles count={80} spread={5} />
    </group>
  );
}
