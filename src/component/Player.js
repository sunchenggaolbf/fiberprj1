import { useFBX } from "@react-three/drei";
const Player = () => {
    const fbx = useFBX("player.fbx");
  
    return <primitive object={fbx} scale={0.01} />;
  };

export default Player;