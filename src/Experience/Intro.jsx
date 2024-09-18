import React, { useEffect, useRef } from "react";

const Intro = () => {
  const infoPanelRef = useRef();

  useEffect(() => {
    const checkPointerLock = () => {
      if (document.pointerLockElement) {
        infoPanelRef.current.style.display = "none";
      }
    };
    document.addEventListener("pointerlockchange", checkPointerLock);
    return () => {
      document.removeEventListener("pointerlockchange", checkPointerLock);
    };
  }, []);

  return (
    <div
      ref={infoPanelRef}
      id="default-modal"
      aria-hidden="true"
      className=" overflow-y-auto overflow-x-hidden fixed top-0 left-0 z-[200] justify-center flex items-center w-full h-full pb-24"
    >
      <div className="p-8 w-full max-w-lg bg-[#ffffff44] border-2 border-white rounded-lg">
        <p className="text-base leading-relaxed text-[#3E3232]">
          With less than a month to go before the European Union enacts new consumer privacy laws
          for its citizens, companies around the world are updating their terms of service
          agreements to comply.
        </p>
      </div>
    </div>
  );
};

export default Intro;
