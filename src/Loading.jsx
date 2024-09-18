import React from "react";

const Loading = () => {
  return (
    <div className="top-0 left-0 w-full h-full flex items-center justify-center">
      <h1 className="absolute text-[#3E3232]">Loading...</h1>
      <img src="./loading.svg" alt="loading" width={400} height={400} />
    </div>
  );
};

export default Loading;
