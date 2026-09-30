'use client';

import { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, Line } from '@react-three/drei';
import { useReducedMotion } from 'framer-motion';
import * as THREE from 'three';
import { useCanvasVisibility } from '@/components/three/use-canvas-visibility';

function Node({
  position,
  index,
  targetPos,
  reducedMotion,
}: {
  position: [number, number, number];
  index: number;
  targetPos: [number, number, number];
  reducedMotion: boolean;
}) {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetPos[0], 0.05);
    const floatOffset = reducedMotion ? 0 : Math.sin(t * 0.5 + index) * 0.08;
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetPos[1] + floatOffset, 0.05);
    meshRef.current.position.z = THREE.MathUtils.lerp(meshRef.current.position.z, targetPos[2], 0.05);
    if (!reducedMotion) meshRef.current.rotation.y += 0.005;
  });

  return (
    <group ref={meshRef} position={position}>
      <mesh>
        <sphereGeometry args={[0.22, 24, 24]} />
        <meshPhysicalMaterial
          color={index === 4 ? '#0F172A' : '#3B82F6'}
          roughness={0.2} metalness={0.1} clearcoat={1} transparent opacity={0.9}
        />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.32, 0.34, 32]} />
        <meshBasicMaterial color="#BFDBFE" transparent opacity={0.3} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

function SignatureNodes({ rearrangeKey, reducedMotion }: { rearrangeKey: number; reducedMotion: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const [positions, setPositions] = useState<[number, number, number][]>([
    [-1.5, 0.8, 0], [1.5, 0.8, 0], [-1.5, -0.8, 0], [1.5, -0.8, 0], [0, 0, 0.5],
  ]);

  useEffect(() => {
    if (rearrangeKey === 0) return;
    const configs: [number, number, number][][] = [
      [[0, 1.2, 0], [1.2, 0, 0], [0, -1.2, 0], [-1.2, 0, 0], [0, 0, 0.8]],
      [[-1.8, 0, 0], [1.8, 0, 0], [0, 1.5, 0], [0, -1.5, 0], [0, 0, 1]],
      [[-1.5, 0.8, 0], [1.5, 0.8, 0], [-1.5, -0.8, 0], [1.5, -0.8, 0], [0, 0, 0.5]],
    ];
    setPositions(configs[rearrangeKey % configs.length]);
  }, [rearrangeKey]);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = reducedMotion ? 0 : Math.sin(t * 0.2) * 0.3;
    groupRef.current.rotation.x = reducedMotion ? 0 : Math.cos(t * 0.15) * 0.15;
  });

  const connections: [number, number][] = [[0,4],[1,4],[2,4],[3,4],[0,1],[2,3]];

  return (
    <group ref={groupRef}>
      {positions.map((pos, i) => (
        <Node key={i} position={pos} index={i} targetPos={pos} reducedMotion={reducedMotion} />
      ))}
      {connections.map(([from, to], i) => (
        <Line key={`sig-${i}`} points={[new THREE.Vector3(...positions[from]), new THREE.Vector3(...positions[to])]} color="#93C5FD" lineWidth={1} transparent opacity={0.4} />
      ))}
    </group>
  );
}

export function SignatureCanvas({ rearrangeKey }: { rearrangeKey: number }) {
  const reducedMotion = useReducedMotion() ?? false;
  const { ref, isVisible } = useCanvasVisibility<HTMLDivElement>();

  return (
    <div ref={ref} className="h-full w-full" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 2]} frameloop={isVisible ? 'always' : 'never'} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[3, 3, 3]} intensity={0.5} />
        <pointLight position={[0, 0, 3]} intensity={0.3} color="#93C5FD" />
        <Suspense fallback={null}>
          <SignatureNodes rearrangeKey={rearrangeKey} reducedMotion={reducedMotion} />
        </Suspense>
      </Canvas>
    </div>
  );
}
