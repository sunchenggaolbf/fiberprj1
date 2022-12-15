import { useRef } from 'react';
import { AnimationMixer, Clock } from 'three';
import { useFBX } from "@react-three/drei";

export default function Sodier(props) {

   const {position} = props;
    const fbx = useFBX("player.fbx");
    const clock = new Clock();

    // Create a reference to the animation mixer
    const mixer = useRef();
    // mixer.current = new AnimationMixer(fbx);
    mixer.current = new AnimationMixer(fbx, mixer.current);
    mixer.current.clipAction(fbx.animations[0]).play();

    const animate = () => {
        requestAnimationFrame(animate);
        mixer.current.update(clock.getDelta());
    };
    animate();

    // Render the FBX model using the animation mixer
    return (
        <mesh position = {position}>
            <primitive object={fbx} scale={0.02} />
        </mesh>
    );
}