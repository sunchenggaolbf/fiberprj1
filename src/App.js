import React, { useState, useRef, useEffect } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

extend({ OrbitControls });

const App = () => {
  const [score, setScore] = useState(0);
  const [life, setLife] = useState(3);
  const [pause, setPause] = useState(false);
  const [gunPosition, setGunPosition] = useState([0, 0, 0]);
  const [targetPosition, setTargetPosition] = useState([0, 0, 0]);

  const gunRef = useRef();
  const targetRef = useRef();
  const controls = useRef();

  const onKeyDown = e => {
    switch (e.keyCode) {
      case 32: // Space key
        setPause(!pause);
        break;
      default:
        break;
    }
  };

  useFrame(() => {
    controls.current.update();

    if (!pause) {
      // Update gun position
      setGunPosition(gunRef.current.position);

      // Update target position
      setTargetPosition(targetRef.current.position);

      // Check if the gun hits the target
      const distance = gunRef.current.position.distanceTo(targetRef.current.position);
      if (distance < 0.5) {
        setScore(score + 1);
        setTargetPosition([Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5]);
      }
    }
  });

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown, false);
    return () => {
      document.removeEventListener("keydown", onKeyDown, false);
    };
  }, []);

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight intensity={1} position={[10, 10, 10]} />
      <mesh ref={gunRef} onClick={() => setLife(life - 1)}>
        <GLTFLoader>
          {gltf => (
            <primitive object={gltf.scene} />
          )}
        </GLTFLoader>
      </mesh>
      <mesh ref={targetRef} position={targetPosition}>
        <boxGeometry attach="geometry" args={[1, 1, 1]} />
        <meshBasicMaterial attach="material" color="red" />
      </mesh>
      <planeGeometry attach="geometry" args={[100, 100]} />
      <meshBasicMaterial attach="material" color="#cccccc" />
      <OrbitControls ref={controls} args={[gunRef.current, gunRef.current.parent]} />
      <mesh position={[-5, 4, 0]}>
        <textGeometry attach="geometry" args={["Score: " + score, { font: "https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" }]} />
        <meshBasicMaterial attach="material" color="white" />
      </mesh>
      <mesh position={[5, 4, 0]}>
        <textGeometry attach="geometry" args={["Life: " + life, { font: "https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" }]} />
        <meshBasicMaterial attach="material" color="white" />
      </mesh>
      <mesh position={[0, 4, 0]}>
        <textGeometry attach="geometry" args={["Gun position: " + gunPosition.toString(), { font: "https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" }]} />
        <meshBasicMaterial attach="material" color="white" />
      </mesh>
    </Canvas>
  );
};

export default App;