import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";

const useModelResources = (model) => {
  const { nodes } = useMemo(() => {
    return useGLTF("./models/world.glb");
  }, []);

  const resources = useMemo(() => {
    if (!model) return null;
    let node;

    if (model === "about") {
      node = Object.values(nodes).filter((obj) => obj.name.includes("boardAbout"));
    } else if (model === "works") {
      node = Object.values(nodes).filter((obj) => obj.name.includes("boardPj"));
    } else if (model === "links") {
      node = Object.values(nodes).filter((obj) => obj.name.includes("link"));
    } else {
      node = nodes[model];
    }

    return node ? node : null;
  }, [model, nodes]);

  return resources;
};

useGLTF.preload("/world.glb");

export default useModelResources;
