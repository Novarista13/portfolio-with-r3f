import * as THREE from "three";
import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const CustomHtml = ({ style, ...props }) => {
  return (
    <Html
      transform
      wrapperClass="htmlScreen"
      zIndexRange={[100, 0]}
      distanceFactor={3}
      style={{
        cursor: "pointer",
        ...style,
      }}
      occlude="blending"
      {...props}
    >
      {props.children}
    </Html>
  );
};

export default CustomHtml;
