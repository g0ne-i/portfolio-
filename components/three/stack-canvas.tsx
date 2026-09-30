'use client';

import { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, Line } from '@react-three/drei';
import { useReducedMotion } from 'framer-motion';
import * as THREE from 'three';
import { useCanvasVisibility } from '@/components/three/use-canvas-visibility';

type CategoryNode = {
  key: string;
  label: string;
  position: [number, number, number];
  technologies: string[];
};

type StackCanvasProps = {
  nodes: CategoryNode[];
  activeKey: string | null;
  setActiveKey: (key: string) => void;
  isMobile: boolean;
};

function StackNode({
  node,
  isActive,
  onClick,
  isMobile,
  reducedMotion,
}: {
  node: CategoryNode;
  isActive: boolean;
  onClick: () => void;
  isMobile: boolean;
  reducedMotion: boolean;
}) {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.position.y = node.position[1] + (reducedMotion ? 0 : Math.sin(t * 0.4 + node.position[0]) * 0.1);
    if (!reducedMotion) meshRef.current.rotation.y += 0.003;

    const targetScale = isActive ? 1.3 : hovered ? 1.15 : 1;
    meshRef.current.scale.x = THREE.MathUtils.lerp(meshRef.current.scale.x, targetScale, 0.08);
    meshRef.current.scale.y = THREE.MathUtils.lerp(meshRef.current.scale.y, targetScale, 0.08);
    meshRef.current.scale.z = THREE.MathUtils.lerp(meshRef.current.scale.z, targetScale, 0.08);
  });

  return (
    <group ref={meshRef} position={node.position}>
      <mesh
        onClick={(e) => { e.stopPropagation(); onClick(); }}
        onPointerOver={(e) => { e.stopPropagation(); setHovered(true); document.body.style.cursor = 'pointer'; }}
        onPointerOut={() => { setHovered(false); document.body.style.cursor = 'default'; }}
      >
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshPhysicalMaterial
          color={isActive ? '#2563EB' : hovered ? '#3B82F6' : '#93C5FD'}
          roughness={0.3} metalness={0.1} clearcoat={0.8} transparent opacity={0.9}
        />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.5, 0.52, 64]} />
        <meshBasicMaterial color={isActive ? '#3B82F6' : '#BFDBFE'} transparent opacity={isActive ? 0.8 : 0.3} side={THREE.DoubleSide} />
      </mesh>
      <Html center distanceFactor={8} position={[0, -0.6, 0]}>
        <div className="whitespace-nowrap text-sm font-semibold tracking-wider" style={{ color: isActive ? '#1D4ED8' : '#334155', pointerEvents: 'none' }}>
          {node.key}
        </div>
      </Html>
    </group>
  );
}

function CenterNode({ reducedMotion }: { reducedMotion: boolean }) {
  const meshRef = useRef<THREE.Group>(null);
  useFrame(() => {
    if (!meshRef.current) return;
    if (!reducedMotion) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.z += 0.002;
    }
  });
  return (
    <group ref={meshRef}>
      <mesh>
        <icosahedronGeometry args={[0.5, 0]} />
        <meshPhysicalMaterial color="#1D4ED8" roughness={0.2} metalness={0.2} clearcoat={1} />
      </mesh>
      <mesh scale={1.15}>
        <icosahedronGeometry args={[0.5, 0]} />
        <meshBasicMaterial color="#3B82F6" wireframe transparent opacity={0.2} />
      </mesh>
      <Html center distanceFactor={8} position={[0, -0.8, 0]}>
        <div className="whitespace-nowrap text-sm font-bold tracking-wider text-clean-blue" style={{ pointerEvents: 'none' }}>ISMAIL</div>
      </Html>
    </group>
  );
}

function StackScene({
  nodes,
  activeKey,
  setActiveKey,
  isMobile,
  reducedMotion,
}: StackCanvasProps & { reducedMotion: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = reducedMotion ? 0.15 : THREE.MathUtils.lerp(groupRef.current.rotation.y, 0.15, 0.02);
  });

  const connections: [number, number][] = [[0,1],[1,3],[3,2],[2,0],[4,0],[4,1],[5,2],[5,3]];

  return (
    <group ref={groupRef} scale={1.2}>
      <CenterNode reducedMotion={reducedMotion} />
      {nodes.map((node) => (
        <StackNode key={node.key} node={node} isActive={activeKey === node.key} onClick={() => setActiveKey(node.key)} isMobile={isMobile} reducedMotion={reducedMotion} />
      ))}
      {connections
        .filter(([from, to]) => nodes[from] && nodes[to])
        .map(([from, to], i) => (
          <Line key={`conn-${i}`} points={[new THREE.Vector3(...nodes[from].position), new THREE.Vector3(...nodes[to].position)]} color="#BFDBFE" lineWidth={0.8} transparent opacity={0.25} />
        ))}
    </group>
  );
}

export function StackCanvas(props: StackCanvasProps) {
  const { isMobile } = props;
  const reducedMotion = useReducedMotion() ?? false;
  const { ref, isVisible } = useCanvasVisibility<HTMLDivElement>();

  return (
    <div ref={ref} className="h-full w-full" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 7], fov: 50 }} dpr={[1, isMobile ? 1.5 : 2]} frameloop={isVisible ? 'always' : 'never'} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} />
        <pointLight position={[0, 0, 4]} intensity={0.3} color="#93C5FD" />
        <Suspense fallback={null}>
          <StackScene {...props} reducedMotion={reducedMotion} />
        </Suspense>
      </Canvas>
    </div>
  );
}
