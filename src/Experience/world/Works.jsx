import { useCallback, useRef } from "react";
import useModelResources from "../../hooks/useModelResources";
import SingleWork from "./SingleWork";

const groupByOrder = (arr) => {
  const grouped = arr.reduce((acc, obj) => {
    const match = obj.name.match(/(boardPj_\d+)_/);
    if (match) {
      const key = match[1];

      if (!acc[key]) {
        acc[key] = [];
      }

      acc[key].push(obj);
    }
    return acc;
  }, {});

  return Object.keys(grouped)
    .sort((a, b) => {
      const numA = parseInt(a.split("_")[1], 10);
      const numB = parseInt(b.split("_")[1], 10);
      return numA - numB;
    })
    .map((key) => grouped[key]);
};

const Works = () => {
  const works = useCallback(useModelResources("works"), []);
  const groupedWorks = useCallback(groupByOrder(works), []);

  return (
    <>
      {groupedWorks.map((work, index) => (
        <SingleWork key={index} workArray={work} workIndex={index} />
      ))}
    </>
  );
};

export default Works;
