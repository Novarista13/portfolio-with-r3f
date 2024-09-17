import * as THREE from "three";
import { useControls } from "leva";

import { Html, useTexture } from "@react-three/drei";
import { useCallback, useMemo } from "react";

import worksData from "../../libs/worksData";
import { WorkContent } from "../Contents/Works";
import { plane } from "../Experience";
import CustomHtml from "./CustomHtml";

const SingleWork = ({ workArray, workIndex }) => {
  const { scale } = useControls("workImage", {
    scale: {
      value: { x: 6.3, y: 4.3, z: 0 },
      step: 0.01,
    },
  });

  const [work1, work2] = useMemo(() => workArray, [workArray]);
  const work = useMemo(() => worksData[workIndex], [workIndex]);

  const image = useCallback(useTexture(work.img), [work.img]);
  image.minFilter = THREE.LinearFilter;

  return (
    <>
      <mesh
        geometry={plane}
        position={work1.position}
        rotation={[
          work1.rotation.x,
          workIndex === 0 || workIndex === 1 || workIndex === 7 || workIndex === 8
            ? work1.rotation.y + 0
            : work1.rotation.y + Math.PI,
          work1.rotation.z,
        ]}
        scale={[scale.x, scale.y, scale.z]}
      >
        <meshBasicMaterial map={image} />
      </mesh>

      <mesh position={work2.position} rotation={work2.rotation}>
        <CustomHtml
          position={
            workIndex === 0 || workIndex === 1 || workIndex === 2 || workIndex === 3
              ? [0, 0, -0.01]
              : [0, 0, 0.01]
          }
          rotation={
            workIndex === 0 || workIndex === 1 || workIndex === 2 || workIndex === 3
              ? [0, Math.PI, 0]
              : [0, 0, 0]
          }
          style={{
            width: "163vh",
            height: "112vh",
          }}
        >
          <WorkContent work={work} />
        </CustomHtml>
      </mesh>
    </>
  );
};

export default SingleWork;
