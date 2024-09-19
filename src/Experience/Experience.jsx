import * as THREE from "three";
import { Perf } from "r3f-perf";
import { Center, PointerLockControls } from "@react-three/drei";

import Environment from "./Environment";
import Player from "./Player";
import World from "./world/World";

// mutalized items for performance
export const plane = new THREE.PlaneGeometry(1, 1, 1, 1);

export default function Experience() {
  return (
    <>
      {<Perf position="top-left" />}

      <PointerLockControls makeDefault />
      <Player />

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
