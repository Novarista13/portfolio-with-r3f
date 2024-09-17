import * as THREE from "three";
import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const CustomHtml = (props) => {
  const htmlRef = useRef();

  return (
    <Html
      ref={htmlRef}
      transform
      wrapperClass="htmlScreen"
      distanceFactor={3}
      occlude="blending"
      {...props}
    >
      {props.children}
    </Html>
  );
};

export default CustomHtml;
