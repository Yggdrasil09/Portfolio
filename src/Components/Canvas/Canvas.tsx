import React, { useRef, useMemo, Suspense } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';

import './Canvas.scss';

interface dotProperties {
  vec: THREE.Vector3,
  transform: THREE.Matrix4,
  positions: THREE.Vector3[],
  distances: number[]
}

const roundedSquareWave = (
  t: number,
  delta: number,
  a: number,
  f: number,
): number => ((2 * a) / Math.PI) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta);

function getdotProperties(): dotProperties {
  const vec = new THREE.Vector3();
  const transform = new THREE.Matrix4();

  const positions = [...Array(10000)].map((_, i) => {
    const position = new THREE.Vector3();

    position.x = (i % 50) - 25;
    position.y = Math.floor(i / 50) - 25;

    position.y += (i % 2) * 0.5;

    position.x += Math.random() * 0.3;
    position.y += Math.random() * 0.3;

    position.z = -10;
    return position;
  });

  const right = new THREE.Vector3(1, 0, 0);
  const distances = positions.map((pos) => pos.length() + Math.cos(pos.angleTo(right) * 4) * 0.5);
  return {
    vec, transform, positions, distances,
  };
}

function Dots(): JSX.Element {
  const ref = useRef<THREE.InstancedMesh | null>(null);

  const {
    vec, transform, positions, distances,
  }: dotProperties = useMemo(() => getdotProperties(), []);

  useFrame(({ clock }) => {
    for (let i = 0; i < 10000; i += 1) {
      const dist = distances[i];

      const t = clock.elapsedTime - dist / 5;

      const wave = roundedSquareWave(
        t,
        0.15 + (0.2 * dist) / 72,
        0.4,
        1 / 3.8,
      );

      vec.copy(positions[i]).multiplyScalar(wave + 1.3);

      transform.setPosition(vec);

      if (ref.current !== null) ref.current.setMatrixAt(i, transform);
    }
    if (ref.current !== null) ref.current.instanceMatrix.needsUpdate = true;
  });

  return (
    // eslint-disable-next-line
    <instancedMesh ref={ref} args={[null as any, null as any, 10000]}>
      <circleBufferGeometry args={[0.05]} />
      <meshBasicMaterial color="#B4DFE5" />
    </instancedMesh>
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
        <Dots />
      </Suspense>
    </Canvas>
  );
}

export default CanvasC;
