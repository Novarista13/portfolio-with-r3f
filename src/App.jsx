import { Canvas, useLoader } from "@react-three/fiber";
import Experience from "./Experience/Experience.jsx";
import { KeyboardControls } from "@react-three/drei";
import { Suspense, useState, useEffect } from "react";
import Interface from "./Experience/Contents/Interface.jsx";
import Loading from "./Loading.jsx";
import Intro from "./Experience/Contents/Intro.jsx";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

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
      <Suspense fallback={<Loading />}>
        <Canvas
          flat
          onCreated={handleLoadingComplete}
          camera={{
            fov: 45,
            near: 0.1,
            far: 30,
            position: [15, -2.5, 23],
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
