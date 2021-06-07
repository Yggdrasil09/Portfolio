import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import './Canvas.scss';

function Scene(): JSX.Element {
  const gltf = useLoader(GLTFLoader, './scene.gltf');
  // eslint-disable-next-line
  const gltfRef = useRef<any>(null);

  useEffect(() => {
    if (gltfRef.current !== null) {
      gltfRef.current.position.set(2.5, -1, 0);
      gltfRef.current.rotation.set(4.5, 1, -1);
    }
  });

  return <primitive ref={gltfRef} object={gltf.scene} scale={3} />;
}

function CanvasC(): JSX.Element {
  return (
    <Canvas className="canvas">
      <ambientLight intensity={1} />
      <spotLight
        intensity={0.2}
        position={[0, 0, 0]}
        angle={-4}
        castShadow
      />
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}

export default CanvasC;
