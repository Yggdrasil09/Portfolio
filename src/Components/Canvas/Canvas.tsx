import React, { useRef, useMemo, Suspense } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';

import JSONfont from '../../Utilities/Roboto_Regular.json';
import './Canvas.scss';

interface Props {
    text: string
    size: number
    position: any
}

const roundedSquareWave = (
  t: number,
  delta: number,
  a: number,
  f: number,
): number => (
  ((2 * a) / Math.PI) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta)
);

function Text({ text, size = 1.5, position }: Props): JSX.Element {
  const font = new THREE.FontLoader().parse(JSONfont);

  const textOptions = {
    font,
    size: 5,
    height: 1.5,
  };

  const mesh = useRef<THREE.Mesh | null>(null);

  return (
    <group position={position} scale={[0.1 * size, 0.1 * size, 0.3]}>
      <mesh ref={mesh}>
        <textGeometry attach="geometry" args={[text, textOptions]} />
        <meshNormalMaterial attach="material" />
      </mesh>
    </group>
  );
}

function CanvasC(): JSX.Element {
  return (
    <Canvas className="canvas">
      <Suspense fallback={null}>
        <ambientLight intensity={1} />
        <spotLight
          intensity={0.2}
          position={[0, 0, 0]}
          angle={-4}
          castShadow
        />
        <Text position={[0, 1, 0]} text="three.js" size={2} />
        <Text position={[0, -1, 0]} text="three.js" size={2} />
        <Text position={[0, -2, 0]} text="three.js" size={2} />
      </Suspense>
    </Canvas>
  );
}

export default CanvasC;
