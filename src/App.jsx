import { Canvas } from "@react-three/fiber";
import Experience from "./Experience/Experience.jsx";
import { Leva, useControls } from "leva";
import { KeyboardControls } from "@react-three/drei";
import { Suspense } from "react";

const App = () => {
  const { cameraPosition } = useControls("camera", {
    cameraPosition: {
      value: { x: 15, y: -2.5, z: 33 },
      step: 0.01,
    },
  });

  return (
    <KeyboardControls
      map={[
        { name: "forward", keys: ["ArrowUp", "KeyW"] },
        { name: "backward", keys: ["ArrowDown", "KeyS"] },
        { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
        { name: "rightward", keys: ["ArrowRight", "KeyD"] },
      ]}
    >
      <Leva collapsed />
      <Suspense fallback={<h1>Loading</h1>}>
        <Canvas
          flat
          // performance={{ min: 0.5 }}
          camera={{
            fov: 45,
            near: 0.1,
            // far: 200,
            far: 30,
            position: [cameraPosition.x, cameraPosition.y, cameraPosition.z],
          }}
        >
          <Experience />
        </Canvas>
      </Suspense>
    </KeyboardControls>
  );
};

export default App;
