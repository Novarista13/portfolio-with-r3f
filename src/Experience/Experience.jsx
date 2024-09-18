import * as THREE from "three";
import { Perf } from "r3f-perf";
import { Center, OrbitControls, PointerLockControls } from "@react-three/drei";
import { useControls } from "leva";

import World from "./world/World";
import Player from "./Player";
import Environment from "./Environment";

// mutalized items for performance
export const plane = new THREE.PlaneGeometry(1, 1, 1, 1);

export default function Experience() {
  const { position, scale, floorColor, perfVisible } = useControls("experience", {
    position: {
      value: { x: -15, z: 1 },
      step: 0.01,
      joystick: "invertY",
    },
    scale: {
      value: 150,
      step: 0.01,
      min: 0,
      max: 200,
    },
    color: "#c8d2de",
    floorColor: "#768a57",
    perfVisible: true,
  });

  return (
    <>
      {perfVisible && <Perf position="top-left" />}

      {/* <OrbitControls makeDefault /> */}
      <PointerLockControls makeDefault />
      <Player />

      <Environment />

      <Center>
        <World />

        <mesh
          geometry={plane}
          position={[position.x, -1, position.z]}
          rotation-x={-Math.PI * 0.5}
          scale={scale}
        >
          <meshBasicMaterial color={floorColor} />
        </mesh>
      </Center>
    </>
  );
}
