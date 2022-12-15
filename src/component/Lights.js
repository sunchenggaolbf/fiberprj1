import { useRef } from 'react';
import { useFrame } from "@react-three/fiber";

export default function Lights() {
    const lightRef = useRef();
  
    useFrame(({ clock }) => {
      const t = clock.getElapsedTime() * 0.5;
      lightRef.current.position.x = Math.sin(t) * 10;
      lightRef.current.position.z = Math.cos(t) * 10;
    });
  
    return (
      <>
        <ambientLight color={"#444444"} />
        <pointLight
          ref={lightRef}
          position={[5, 15, 5]}
          intensity={0.5}
          castShadow
          shadow-mapSize-height={1024}
          shadow-mapSize-width={1024}
          shadow-radius={3}
          shadow-bias={-0.0001}
        />
      </>
    );
  };