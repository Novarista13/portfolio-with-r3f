import { useEffect, useRef } from "react";

const Intro = () => {
  const infoPanelRef = useRef();
  const infoModelRef = useRef();

  useEffect(() => {
    const checkPointerLock = () => {
      if (document.pointerLockElement) {
        infoModelRef.current.style.display = "none";
        infoPanelRef.current.style.height = "7rem";
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
      aria-hidden="true"
      className=" overflow-y-auto overflow-x-hidden fixed bottom-0 left-0 z-[200] justify-center flex items-center w-full h-full pb-28"
    >
      <div
        ref={infoModelRef}
        className="p-6 w-full max-w-lg bg-[#ffffff75] border-2 border-white rounded-lg"
      >
        <p className="text-base leading-relaxed text-[#3E3232]">
          🌟<span className="font-bold "> Welcome to my portfolio!</span> 🌟 I appreciate your visit
          and interest in my work.
          <br />
          <br />
          ⚠️ Please remember to press the{" "}
          <span className="p-1 bg-[#ffffff44] border-2 border-white rounded-lg">Esc</span> key
          before clicking any links to escape from pointerLock.
          <br />
          ⚠️ If discord invite link in "INFORMATION" section expires, you can find me with my
          username - "novarista_13".
          <br />
          <br />
          🖱️ Feel free to explore and enjoy the various projects and achievements showcased here. 🎨
          Your feedback and thoughts are always welcome.
          <br />
          💬 Thank you for stopping by, and I hope you find my portfolio inspiring and engaging!
          <br />
          <br />
          <span className="text-center block">
            🌟Click "?" on the bottom-left corner to reopen this!🌟
          </span>
        </p>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          infoModelRef.current.style.display = "block";
          infoPanelRef.current.style.height = "100%";
        }}
        className="p-1 bg-[#ffffff44] absolute bottom-[20px] left-[30px] border-2 border-white rounded-full"
      >
        <img className="w-8 h-8" src="./question.svg" />
      </button>
    </div>
  );
};

export default Intro;
