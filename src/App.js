
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useFBX } from "@react-three/drei";
import { Suspense } from "react";

const Scene = () => {
  const model1 = useFBX("Player.fbx");
  const model2 = useFBX("Player2.fbx");

  return (
    <>
      {model1 && <primitive object={model1} position={[-5, 0, 0]} />}
      {model2 && <primitive object={model2} position={[5, 0, 0]} />}
    </>
  );
};

export default function App() {
  return (
    <div className="App">
      <Canvas>
        <Suspense fallback={null}>
          <Scene />
          <OrbitControls />
          <Environment preset="sunset" background />
        </Suspense>
      </Canvas>
    </div>
  );
}
