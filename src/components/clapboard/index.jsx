import React, { useState } from "react";

import "./index.less";

const ClapBoard = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div className="w-full max-w-5xl mx-7 text-white flex flex-col">
      <div className="sticks">
        <div className="bg-black rounded-t-2xl pl-48 realtive">
          <div className="rainbow-item top-rainbow-item bg-brand-green"></div>
          <div className="rainbow-item top-rainbow-item bg-brand-yellow"></div>
          <div className="rainbow-item top-rainbow-item bg-bg-brand-blue"></div>
          <div className="rainbow-item top-rainbow-item bg-brand-red"></div>
          <div className="rainbow-item top-rainbow-item bg-white"></div>
          <div className="rainbow-item top-rainbow-item bg-gray-400"></div>
          <div className="rainbow-item top-rainbow-item bg-gray-600"></div>
        </div>
        <div className="bg-black pl-48 relative">
          <div className="rainbow-item bottom-rainbow-item bg-bg-brand-green"></div>
          <div className="rainbow-item bottom-rainbow-item bg-bg-brand-yellow"></div>
          <div className="rainbow-item bottom-rainbow-item bg-brand-blue"></div>
          <div className="rainbow-item bottom-rainbow-item bg-bg-brand-red"></div>
          <div className="rainbow-item bottom-rainbow-item bg-white"></div>
          <div className="rainbow-item bottom-rainbow-item bg-gray-400"></div>
          <div className="rainbow-item bottom-rainbow-item bg-gray-600"></div>
        </div>
      </div>
      <div className="board bg-black shadow-lg shadow-stone-900 rounded-b-2xl">
        <div className="border-b-4 border-white">
          <p className="mx-2 my-1 text-2xl">PRODUCTION</p>
          <p className="text-center mx-2 my-1 text-4xl">My Blockbuster Movie</p>
        </div>
        <div className="flex border-b-4 border-white">
          <div className=" flex-1">
            <p className="mx-2 my-1 text-2xl">ROLL</p>
            <p className="mx-2 my-1 pl-3 text-4xl">001</p>
          </div>
          <div className="flex-1 border-l-4 border-white">
            <p className="mx-2 my-1 text-2xl">SCENE</p>
            <p className="mx-2 my-1 pl-3 text-4xl">Coding</p>
          </div>
          <div className="flex-1 border-l-4 border-white">
            <p className="mx-2 my-1 text-2xl">TAKE</p>
            <p className="mx-2 my-1 pl-3 text-4xl">1</p>
          </div>
        </div>
        <div className="flex border-b-4 border-white">
          <div className="flex-1">
            <p className="mx-2 my-1 text-2xl">DIRECTOR</p>
            <p className="mx-2 my-1 pl-3 text-4xl">Cell</p>
          </div>
          <div className="flex-1 border-l-4 border-white">
            <p className="mx-2 my-1 text-2xl">CAMERA</p>
            <p className="mx-2 my-1 pl-3 text-4xl">Cell</p>
          </div>
        </div>
        <div className="flex border-white">
          <div className="w-1/3">
            <p className="mx-2 my-1 text-2xl">DATE</p>
            <p className="mx-2 my-1 pl-3 text-4xl">{new Date().toLocaleDateString()}</p>
          </div>
          <div className="flex-1 border-l-4 border-white">
            <p className="mx-2 my-1 text-2xl">NOTE</p>
            <p className="mx-2 my-1 pl-3 text-4xl">Coding vlog</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClapBoard;
