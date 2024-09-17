import * as THREE from "three";
import { useCallback, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";

const Player = () => {
  const [subscribeKeys, getKeys] = useCallback(useKeyboardControls(), []);

  const velocity = useRef(new THREE.Vector3());
  const direction = useMemo(() => new THREE.Vector3(), []);
  const travelSpeed = 200; // 50

  useFrame((state, delta) => {
    const { forward, backward, leftward, rightward } = getKeys();

    const control = state.controls;

    if (control) {
      velocity.current.x -= velocity.current.x * 10.0 * delta;
      velocity.current.z -= velocity.current.z * 10.0 * delta;

      direction.z = Number(forward) - Number(backward);
      direction.x = Number(rightward) - Number(leftward);
      direction.normalize();

      if (forward || backward) velocity.current.z -= direction.z * travelSpeed * delta;
      if (leftward || rightward) velocity.current.x -= direction.x * travelSpeed * delta;

      control.moveRight(-velocity.current.x * delta);
      control.moveForward(-velocity.current.z * delta);
    }
  });

  return null;
};

export default Player;
