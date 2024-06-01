"use client";
import gsap from "gsap";
import { useState, useRef } from "react";

export default function Scale() {
  const [word, setWord] = useState("");
  const [scale, setScale] = useState(0);
  const [speed, setSpeed] = useState(1);

  const handleAnimation = () => {
    gsap.from(".word", {
      duration: speed,
      scale: scale,
      delay: 1,
      ease: "elastic",
      force3D: true,
    });
    gsap.to(".word", {
      duration: speed,
      scale: 2,
      delay: 1,
      ease: "elastic",
      force3D: true,
    });
  };

  const handleSpeedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSpeed(parseFloat(e.target.value));
  };

  return (
    <main className="h-fit w-full">
      <div className="flex flex-row justify-center items-center h-screen w-full bg-blue-500 gap-5">
        <div className="flex flex-col justify-center items-center h-1/2 w-72 p-5 bg-indigo-950 rounded-xl shadow-2xl ">
          <input
            type="text"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            className="w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
            placeholder="Enter a word"
          />
          <div className="flex flex-col justify-center items-center h-20 w-full bg-indigo-950 rounded-xl shadow-2xl font-epilogue">
            <label htmlFor="speed" className="text-white">
              Duration:&nbsp;{speed}
            </label>
            <input
              type="range"
              min="0.1"
              max="5"
              step="0.1"
              value={speed}
              onChange={handleSpeedChange}
              id="speed"
              className="w-full"
            />
          </div>
          <div className="flex flex-col justify-center items-center h-20 w-full bg-indigo-950 rounded-xl shadow-2xl font-epilogue">
            <label htmlFor="scale" className="text-white">
              Scale:&nbsp;{scale}
            </label>
            <input
              type="range"
              min="0.1"
              max="1"
              step="0.1"
              value={scale}
              onChange={(e) => {
                setScale(parseFloat(e.target.value));
              }}
              id="scale"
              className="w-full"
            />
          </div>
          <button
            className="h-12 w-full bg-cyan-700 rounded-xl shadow-2xl hover:bg-white"
            onClick={handleAnimation}
          >
            Animate
          </button>
        </div>
        <div className="flex justify-center items-center h-1/2 w-1/2 bg-white rounded-lg text-7xl">
          <span className="word">{word}</span>
        </div>
      </div>
    </main>
  );
}