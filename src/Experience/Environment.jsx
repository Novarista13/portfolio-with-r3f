import * as THREE from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Clouds, Cloud, Sky } from "@react-three/drei";
import { useControls } from "leva";

const Environment = () => {
  const { sunPosition } = useControls("sky", {
    sunPosition: { value: [1, 2, 3] },
  });

  // const ref = useRef();
  // const cloud0 = useRef();
  // const { color, x, y, z, range, ...config } = useControls("clouds", {
  //   seed: { value: 1, min: 1, max: 100, step: 1 },
  //   segments: { value: 20, min: 1, max: 80, step: 1 },
  //   volume: { value: 6, min: 0, max: 100, step: 0.1 },
  //   opacity: { value: 0.8, min: 0, max: 1, step: 0.01 },
  //   fade: { value: 10, min: 0, max: 400, step: 1 },
  //   growth: { value: 4, min: 0, max: 20, step: 1 },
  //   speed: { value: 0.1, min: 0, max: 1, step: 0.01 },
  //   x: { value: 6, min: 0, max: 100, step: 1 },
  //   y: { value: 1, min: 0, max: 100, step: 1 },
  //   z: { value: 1, min: 0, max: 100, step: 1 },
  //   color: "white",
  // });

  // useFrame((state, delta) => {
  //   ref.current.rotation.y = Math.cos(state.clock.elapsedTime / 2) / 2;
  //   ref.current.rotation.x = Math.sin(state.clock.elapsedTime / 2) / 2;
  //   cloud0.current.rotation.y -= delta;
  // });

  return (
    <>
      <Sky sunPosition={sunPosition} />
      {/* <group ref={ref}>
        <Clouds material={THREE.MeshBasicMaterial} limit={400} range={range} texture="./cloud.png">
           <Cloud ref={cloud0} {...config} bounds={[x, y, z]} color={color} />
          <Cloud {...config} bounds={[x, y, z]} color="#eed0d0" seed={2} position={[15, 0, 0]} />
          <Cloud {...config} bounds={[x, y, z]} color="#d0e0d0" seed={3} position={[-15, 0, 0]} />
          <Cloud {...config} bounds={[x, y, z]} color="#a0b0d0" seed={4} position={[0, 0, -12]} />
          <Cloud {...config} bounds={[x, y, z]} color="#c0c0dd" seed={5} position={[0, 0, 12]} /> 
          <Cloud
            concentrate="outside"
            segments={3}
            growth={50}
            color="#ffccdd"
            opacity={1.25}
            bounds={[50, 10, 50]}
            volume={100}
            position={[0, 0, 0]}
          />
        </Clouds>
      </group> */}
    </>
  );
};

export default Environment;
