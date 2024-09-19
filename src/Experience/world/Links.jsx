import * as THREE from "three";

import { useTexture } from "@react-three/drei";
import { useCallback, useMemo } from "react";

import useModelResources from "../../hooks/useModelResources";
import socialLinks from "../../libs/socialLinks";
import CustomHtml from "./CustomHtml";

const linksMaterial = new THREE.MeshBasicMaterial();

const Links = () => {
  const linksModel = useCallback(useModelResources("links"), []);

  const linkBoards = useMemo(() => linksModel.find((item) => item.name === "linkBoards"), []);
  const linkBtns = useMemo(() => linksModel.filter((item) => item.name !== "linkBoards"), []);

  const linksTexture = useCallback(useTexture("./bakedPictures/links.webp"), []);
  linksTexture.flipY = false;
  linksMaterial.map = linksTexture;

  return (
    <>
      <mesh
        geometry={linkBoards.geometry}
        position={linkBoards.position}
        rotation={linkBoards.rotation}
        material={linksMaterial}
      />

      {linkBtns.map((item) => (
        <LinkBtn key={item.name} item={item} />
      ))}
    </>
  );
};

const LinkBtn = ({ item }) => {
  return (
    <mesh
      geometry={item.geometry}
      position={item.position}
      rotation={item.rotation}
      material={linksMaterial}
    >
      <CustomHtml rotation-x={Math.PI / 2} rotation-z={Math.PI / 4} position-y={-0.1}>
        <a
          className="bg-transparent block w-[33vh] h-[33vh]"
          target="_blank"
          href={socialLinks(item.name.slice(5))}
        ></a>
      </CustomHtml>
    </mesh>
  );
};

export default Links;
