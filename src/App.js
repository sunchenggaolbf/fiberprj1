import "./styles.css";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls} from "@react-three/drei";
import { Suspense } from "react";
import Player from './component/Player'



export default function App() {
  return (
    <div className="App">
      <Canvas>
        <Suspense fallback={null}>
          <Player />
          <OrbitControls />
          <Environment preset="sunset" background />
        </Suspense>
      </Canvas>
    </div>
  );
}
