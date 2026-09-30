'use client';

import React, { useRef, useMemo, useState, useEffect } from 'react';
import Image from 'next/image';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, Line } from '@react-three/drei';
import { useReducedMotion } from 'framer-motion';
import * as THREE from 'three';
import { useCanvasVisibility } from '@/components/three/use-canvas-visibility';
import { withBasePath } from '@/lib/paths';

type NodeData = {
  label: string;
  sublabel: string;
  position: [number, number, number];
  color: string;
};

const NODES: NodeData[] = [
  { label: 'ERP', sublabel: 'ERP / Odoo', position: [-1.85, 1.4, -0.5], color: '#3B82F6' },
  { label: 'AI', sublabel: 'AI / Intelligent Systems', position: [1.85, 1.5, 0.3], color: '#3B82F6' },
  { label: 'DATA', sublabel: 'Data / Processing', position: [-1.75, -1.35, 0.8], color: '#3B82F6' },
  { label: 'AUTOMATION', sublabel: 'Automation / Workflows', position: [1.65, -1.3, -0.6], color: '#3B82F6' },
  { label: 'WEB', sublabel: 'Web / Full-Stack', position: [0, -1.95, 1.2], color: '#3B82F6' },
  { label: 'ISMAIL', sublabel: 'Ismail Ourdou', position: [0, 0, 0], color: '#1D4ED8' },
];

const CONNECTIONS: [number, number][] = [
  [5, 0], [5, 1], [5, 2], [5, 3], [5, 4],
  [0, 1], [1, 3], [3, 4], [4, 2], [2, 0],
];

function NetworkNode({
  data,
  index,
  mouse,
  isMobile,
  reducedMotion,
  lang,
}: {
  data: NodeData;
  index: number;
  mouse: React.MutableRefObject<{ x: number; y: number }>;
  isMobile: boolean;
  reducedMotion: boolean;
  lang: 'fr' | 'en';
}) {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const isCenter = data.label === 'ISMAIL';
  const displayLabel = lang === 'fr' ? ({ AI: 'IA', DATA: 'DONNÉES', AUTOMATION: 'AUTOMATISATION' }[data.label] ?? data.label) : data.label;
  const displaySublabel = lang === 'fr'
    ? ({ AI: 'IA / Systèmes intelligents', DATA: 'Données / Traitement', AUTOMATION: 'Automatisation / Workflows', WEB: 'Web / Full-Stack' }[data.label] ?? data.sublabel)
    : data.sublabel;

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), isCenter ? 200 : 400 + index * 150);
    return () => clearTimeout(timer);
  }, [index, isCenter]);

  const baseScale = isCenter ? 1.25 : 0.82;
  const targetScale = hovered ? baseScale * 1.35 : baseScale;

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    const motionScale = reducedMotion ? 0 : isMobile ? 0.45 : 1;
    const floatY = Math.sin(t * (isMobile ? 0.3 : 0.5) + index) * 0.12 * motionScale;
    const floatX = Math.cos(t * (isMobile ? 0.18 : 0.3) + index * 0.7) * 0.08 * motionScale;

    meshRef.current.position.x = data.position[0] + floatX;
    meshRef.current.position.y = data.position[1] + floatY;
    meshRef.current.position.z = data.position[2];

    const currentScale = meshRef.current.scale.x;
    const newScale = THREE.MathUtils.lerp(currentScale, visible ? targetScale : 0, 0.08);
    meshRef.current.scale.setScalar(newScale);

    if (!reducedMotion) meshRef.current.rotation.y += isMobile ? 0.0008 : 0.002;
  });

  const nodeColor = isCenter ? '#1D4ED8' : hovered ? '#2563EB' : '#3B82F6';
  const radius = isCenter ? 0.48 : 0.32;

  return (
    <group ref={meshRef} position={data.position}>
      <mesh
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = 'default';
        }}
      >
        <sphereGeometry args={[radius, 32, 32]} />
        <meshPhysicalMaterial
          color={nodeColor}
          roughness={0.2}
          metalness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          transparent
          opacity={0.92}
        />
      </mesh>

      {/* Outer ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[radius * 1.4, radius * 1.5, 64]} />
        <meshBasicMaterial
          color={hovered ? '#3B82F6' : '#93C5FD'}
          transparent
          opacity={hovered ? 0.6 : 0.25}
          side={THREE.DoubleSide}
        />
      </mesh>

      {isCenter ? (
        <Html
          center
          distanceFactor={isMobile ? 10 : 8}
          position={[0, 0, radius + 0.08]}
          style={{ pointerEvents: 'none' }}
        >
          <div className="relative h-24 w-24 overflow-hidden rounded-full border-[3px] border-blue-700 bg-soft-blue shadow-[0_10px_32px_-12px_rgba(29,78,216,0.8)]">
            <Image
              src={withBasePath('/images/ismail-ourdou.jpeg')}
              alt={lang === 'fr' ? 'Portrait d’Ismail Ourdou' : 'Portrait of Ismail Ourdou'}
              fill
              sizes="96px"
              className="object-cover object-center"
              priority
            />
          </div>
        </Html>
      ) : null}

      <Html
        center
        distanceFactor={isMobile ? 10 : 8}
        position={[0, radius + 0.55, 0]}
        style={{
          pointerEvents: 'none',
          transition: 'opacity 0.3s ease',
          opacity: hovered ? 1 : isCenter ? 0.95 : 0.82,
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-inter), system-ui, sans-serif',
            fontSize: isCenter ? '15px' : '14px',
            fontWeight: isCenter ? 700 : 600,
            letterSpacing: '0.12em',
            color: isCenter ? '#1D4ED8' : '#2563EB',
            whiteSpace: 'nowrap',
            textTransform: 'uppercase',
            transform: 'translateY(-4px)',
          }}
        >
          {hovered && !isCenter ? displaySublabel : displayLabel}
        </div>
      </Html>
    </group>
  );
}

function ConnectionLine({
  start,
  end,
  delay,
  index,
  reducedMotion,
}: {
  start: [number, number, number];
  end: [number, number, number];
  delay: number;
  index: number;
  reducedMotion: boolean;
}) {
  const [progress, setProgress] = useState(reducedMotion ? 1 : 0);

  useEffect(() => {
    if (reducedMotion) {
      setProgress(1);
      return;
    }
    const timer = setTimeout(() => setProgress(1), delay);
    return () => clearTimeout(timer);
  }, [delay, reducedMotion]);

  const points = useMemo(() => {
    const s = new THREE.Vector3(...start);
    const e = new THREE.Vector3(...end);
    return [s, e];
  }, [start, end]);

  const currentEnd = useMemo(() => {
    const s = new THREE.Vector3(...start);
    const e = new THREE.Vector3(...end);
    const lerped = s.clone().lerp(e, progress);
    return [s, lerped];
  }, [start, end, progress]);

  return (
    <Line
      points={currentEnd}
      color="#93C5FD"
      lineWidth={1}
      transparent
      opacity={0.4}
    />
  );
}

function Scene({
  mouse,
  isMobile,
  reducedMotion,
  lang,
}: {
  mouse: React.MutableRefObject<{ x: number; y: number }>;
  isMobile: boolean;
  reducedMotion: boolean;
  lang: 'fr' | 'en';
}) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!groupRef.current) return;
    const targetY = reducedMotion ? 0 : mouse.current.x * 0.3;
    const targetX = reducedMotion ? 0 : -mouse.current.y * 0.2;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY, 0.04);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.04);
  });

  return (
    <group ref={groupRef}>
      {NODES.map((node, i) => (
        <NetworkNode key={node.label} data={node} index={i} mouse={mouse} isMobile={isMobile} reducedMotion={reducedMotion} lang={lang} />
      ))}
      {CONNECTIONS.map(([from, to], i) => (
        <ConnectionLine
          key={`line-${i}`}
          start={NODES[from].position}
          end={NODES[to].position}
          delay={600 + i * 120}
          index={i}
          reducedMotion={reducedMotion}
        />
      ))}
    </group>
  );
}

export default function HeroNetwork({ isMobile = false, lang = 'fr' }: { isMobile?: boolean; lang?: 'fr' | 'en' }) {
  const mouseRef = useRef({ x: 0, y: 0 });
  const reducedMotion = useReducedMotion() ?? false;
  const { ref, isVisible } = useCanvasVisibility<HTMLDivElement>();

  useEffect(() => {
    if (isMobile) return;
    const handleMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [isMobile]);

  const accessibleLabel = lang === 'fr'
    ? 'Réseau interactif reliant ERP, IA, données, automatisation et web autour d’Ismail'
    : 'Interactive network connecting ERP, AI, data, automation and web around Ismail';

  return (
    <div ref={ref} className="h-full w-full" role="img" aria-label={accessibleLabel}>
      <Canvas
        camera={{ position: [0, 0, isMobile ? 8.6 : 6.6], fov: 45 }}
        dpr={[1, isMobile ? 1.5 : 2]}
        frameloop={isVisible ? 'always' : 'never'}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={0.6} />
        <directionalLight position={[-5, -5, -5]} intensity={0.3} color="#3B82F6" />
        <pointLight position={[0, 0, 3]} intensity={0.4} color="#93C5FD" />
        <Scene mouse={mouseRef} isMobile={isMobile} reducedMotion={reducedMotion} lang={lang} />
      </Canvas>
    </div>
  );
}
