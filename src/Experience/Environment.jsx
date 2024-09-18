import { Sky } from "@react-three/drei";
import { useControls } from "leva";

const Environment = () => {
  const { sunPosition } = useControls("sky", {
    sunPosition: { value: [1, 2, 3] },
  });

  return (
    <>
      <Sky sunPosition={sunPosition} />
    </>
  );
};

export default Environment;
