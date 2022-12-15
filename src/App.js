import "./styles.css";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
// import { Suspense } from "react";
import Army from './component/Army'
// import Sunlight from './component/Sunlight';
import Lights from './component/Lights';



export default function App() {
  return (
    <div className="App">
      <Canvas>
        <Lights />
        <Army />
        <OrbitControls />
        <Environment preset="sunset" background />
      </Canvas>
    </div>
  );
}
