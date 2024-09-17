import useModelResources from "../../hooks/useModelResources";

const Links = () => {
  const linksModel = useModelResources("links");
  // const linksTexture = useTextureResources("links");

  return (
    <>
      <mesh
        geometry={linksModel.geometry}
        position={linksModel.position}
        rotation={linksModel.rotation}
      >
        {/* <meshBasicMaterial map={linksTexture} /> */}
      </mesh>
    </>
  );
};

export default Links;
