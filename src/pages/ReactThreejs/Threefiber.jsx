
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei';


function Threefiber() {
    <mesh>
        <boxBufferGeometry attach="geometry"/>
        <meshLambertMaterial attach="material" color="hotpink"/>
    </mesh>
  return (
    <Canvas>
        <OrbitControls/>
        <Stars />
    <ambientLight intensity={0.5} />
    <pointLight position={[10, 10, 10]} />
    
  
  </Canvas>
  )
}

export default Threefiber