import { Canvas, useLoader } from "@react-three/fiber";
import Experience from "./Experience/Experience.jsx";
import { Leva, useControls } from "leva";
import { KeyboardControls } from "@react-three/drei";
import { Suspense, useState, useEffect } from "react";
import Interface from "./Experience/Interface.jsx";
import Loading from "./Loading.jsx";
import Intro from "./Experience/Intro.jsx";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const { cameraPosition } = useControls("camera", {
    cameraPosition: {
      value: { x: 15, y: -2.5, z: 23 },
      step: 0.01,
    },
  });

  const handleLoadingComplete = () => {
    setIsLoaded(true);
  };

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
      <Suspense fallback={<Loading />}>
        <Canvas
          flat
          onCreated={handleLoadingComplete}
          camera={{
            fov: 45,
            near: 0.1,
            far: 30,
            position: [cameraPosition.x, cameraPosition.y, cameraPosition.z],
            rotation: [0, 0, 0],
          }}
        >
          <Experience />
        </Canvas>

        {isLoaded && (
          <>
            <Intro />
            <Interface />
          </>
        )}
      </Suspense>
    </KeyboardControls>
  );
};

export default App;
