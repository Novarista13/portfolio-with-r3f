import modelsData from "../../libs/modelsData";

import Model from "./Model";
import About from "./About";
import Works from "./Works";
import Links from "./Links";

export default function World(props) {
  return (
    <group {...props}>
      {modelsData.map((model) => (
        <Model key={model.name} item={model} />
      ))}
      <About />
      <Links />
      <Works />
    </group>
  );
}
