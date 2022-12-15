import { useRef } from 'react';
import { useFrame } from "@react-three/fiber";
import { DirectionalLight } from 'three';

export default function Sunlight() {
  const light = useRef();

  useFrame(() => {
    // Rotate the light source to simulate the movement of the sun
    light.current.position.x = Math.sin(performance.now() / 1000) * 10;
    light.current.position.y = Math.cos(performance.now() / 1000) * 10;
  });

  return <DirectionalLight ref={light} intensity={1.5} />;
}