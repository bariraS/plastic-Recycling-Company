// components/Logo3D.jsx
import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, PerspectiveCamera } from '@react-three/drei';

const LogoModel = React.forwardRef((props, ref) => {
  const { scene } = useGLTF('/logo-3d-hd.gltf'); // Update the path to your GLTF file
  return <primitive object={scene} ref={ref} {...props} />;
});

const TextModel = React.forwardRef((props, ref) => {
  const { scene } = useGLTF('/text-3d-hd.gltf'); // Update the path to your GLTF file
  return <primitive object={scene} ref={ref} {...props} />;
});

const RotatingLogo = (props) => {
  const logoRef = useRef();
  const textRef = useRef();

  useFrame(() => {
    if (logoRef.current) {
      logoRef.current.rotation.y += 0.01; // Adjust rotation speed here
    }
  });

  return (
    <group scale={[0.035,0.035,0.035]} position={[0,1,-1]}>
      <group scale={[2,2,2]}>
      <TextModel ref={textRef} position={[0, -45, 0]}/>
      </group>
      <group ref={logoRef} position={[0, 5, 0]}>
        <LogoModel scale={[1, 1, 1]} />
      </group>
    </group>
  );
};

const Logo3D = () => {
  return (
    <div className="w-28 h-24 relative">
      <Canvas shadows>
        <ambientLight intensity={7} />
       
        <Suspense fallback={null}>
          <RotatingLogo />
        </Suspense>
        <PerspectiveCamera makeDefault position={[0, 0, 9]} />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Logo3D;
