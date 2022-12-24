
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useFBX } from "@react-three/drei";
import { Suspense } from "react";

const Scene = () => {
  const fbx = useFBX("Player.fbx");
  return <primitive object={fbx} position={[-5,0,0]} scale={0.005} />;
};
const Scene2 = () => {
  const fbx = useFBX("Player2.fbx");

  return <primitive object={fbx} position={[5,0,0]} scale={0.005} />;
};
export default function App() {
  return (
    <div className="App">
      <Canvas>
        <Suspense fallback={null}>
          <Scene />
          <Scene2 />
          <OrbitControls />
          <Environment preset="sunset" background />
        </Suspense>
      </Canvas>
    </div>
  );
}
