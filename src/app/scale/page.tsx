"use client";
import gsap from "gsap";
import { useState, useRef } from "react";

export default function Scale() {
    const [word, setWord] = useState("");
    const [speed, setSpeed] = useState(1);

    const handleAnimation = () => {
        gsap.from(".word", {
            duration: speed,
            scale: 0.5,
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
                <div className="flex flex-col justify-center items-center h-1/2 w-72 p-5 bg-indigo-950 rounded-xl shadow-2xl">
                    <input
                        type="text"
                        value={word}
                        onChange={(e) => setWord(e.target.value)}
                        className="w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
                        placeholder="Enter a word"
                    />
                    <label htmlFor="speed" className="text-white">
                        Duration:
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

