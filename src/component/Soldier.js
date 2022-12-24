import { useRef } from 'react';
import { AnimationMixer, Clock } from 'three';
import { useFBX } from "@react-three/drei";
import { cloneElement } from 'react'

export default function Sodier(props) {

   const {position} = props;
    const fbx = useFBX("player.fbx");

    // Render the FBX model using the animation mixer
    return (
        <mesh position = {props.position}>
            <primitive object={fbx} scale={0.02} />
        </mesh>
    );
}