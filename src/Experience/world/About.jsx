import { useCallback } from "react";

import useModelResources from "../../hooks/useModelResources";
import { About1Content, About2Content } from "../Contents/About";
import CustomHtml from "./CustomHtml";

const About = () => {
  const abouts = useCallback(useModelResources("about"), []);

  const about1 = useCallback(
    abouts.find((child) => child.name === "boardAbout_1"),
    []
  );
  const about2 = useCallback(
    abouts.find((child) => child.name === "boardAbout_2"),
    []
  );

  return (
    <>
      <mesh position={about1.position} rotation={about1.rotation}>
        <CustomHtml
          position={[0, 0, 0.01]}
          style={{
            width: "143vh",
            height: "98vh",
          }}
        >
          <About1Content />
        </CustomHtml>
      </mesh>

      <mesh position={about2.position} rotation={about2.rotation}>
        <CustomHtml
          position={[0, 0, -0.01]}
          rotation={[0, Math.PI, 0]}
          style={{
            width: "163vh",
            height: "112vh",
          }}
        >
          <About2Content />
        </CustomHtml>
      </mesh>
    </>
  );
};

export default About;
