import * as THREE from "three";

import { useTexture } from "@react-three/drei";
import { useCallback } from "react";

import useModelResources from "../../hooks/useModelResources";

const Model = ({ item }) => {
  const model = useCallback(useModelResources(item.name), [item.name]);
  const texture = useCallback(useTexture(item.texture), [item.texture]);
  texture.flipY = false;

  return (
    <>
      <mesh geometry={model.geometry} position={model.position} rotation={model.rotation}>
        <meshBasicMaterial
          map={texture}
          side={
            (item.name === "trees_3" ||
              item.name === "trees_5" ||
              item.name === "trees_6" ||
              item.name === "boardBounds") &&
            THREE.DoubleSide
          }
        />
      </mesh>
    </>
  );
};

export default Model;
