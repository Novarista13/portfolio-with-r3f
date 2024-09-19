import { Html } from "@react-three/drei";

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
