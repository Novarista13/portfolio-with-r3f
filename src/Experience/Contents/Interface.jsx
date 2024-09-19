import { useKeyboardControls } from "@react-three/drei";

const Interface = () => {
  const forward = useKeyboardControls((state) => state.forward);
  const backward = useKeyboardControls((state) => state.backward);
  const leftward = useKeyboardControls((state) => state.leftward);
  const rightward = useKeyboardControls((state) => state.rightward);

  return (
    <div className="interface">
      <div className="controls">
        <div className="raw">
          <div className={`key ${forward ? "active" : ""}`}>
            <img className="mt-[-1px]" src="./arrowUp.svg" alt="up" />
          </div>
        </div>
        <div className="raw">
          <div className={`key ${leftward ? "active" : ""}`}>
            <img className="ml-[-2px]" src="./arrowLeft.svg" alt="up" />
          </div>
          <div className={`key ${backward ? "active" : ""}`}>
            <img className="mt-[3px]" src="./arrowDown.svg" alt="up" />
          </div>
          <div className={`key ${rightward ? "active" : ""}`}>
            <img src="./arrowRight.svg" alt="up" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interface;
