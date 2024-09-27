import * as THREE from "three";
import { Perf } from "r3f-perf";
import { Center, PointerLockControls } from "@react-three/drei";

import Environment from "./Environment";
import Player from "./Player";
import World from "./world/World";
import GardenAudio from "./GardenAudio";

// mutalized items for performance
export const plane = new THREE.PlaneGeometry(1, 1, 1, 1);

export default function Experience() {
  return (
    <>
      {window.location.hash === "#perf" && <Perf position="top-left" />}

      <PointerLockControls makeDefault />
      <Player />

      <GardenAudio />
      <Environment />

      <Center>
        <World />

        <mesh geometry={plane} position={[-15, -0.1, 1]} rotation-x={-Math.PI * 0.5} scale={150}>
          <meshBasicMaterial color={"#768a57"} />
        </mesh>
      </Center>
    </>
  );
}
