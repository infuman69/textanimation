"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [word, setWord] = useState("");

  const router = useRouter();

  const [animationType, setAnimationType] = useState("swipe");

  const handleAnimate = () => {
    router.push(`/${animationType}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="mb-4">
        <label htmlFor="word" className="block text-gray-700 font-bold mb-2">
          Word:
        </label>
        <input
          type="text"
          id="word"
          name="word"
          value={word}
          onChange={() =>{
            setWord(word);
          }}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <span className="block text-gray-700 font-bold mb-2">
          Animation Type:
        </span>
        <div className="flex items-center">
          <label htmlFor="swipe" className="mr-4">
            <input
              type="radio"
              id="swipe"
              name="animationType"
              value="swipe"
              checked={animationType === "swipe"}
              onChange={() => {
                setAnimationType("swipe");
              }}
              className="mr-2"
            />
            Swipe
          </label>
          <label htmlFor="geometric">
            <input
              type="radio"
              id="geometric"
              name="animationType"
              value="geometric"
              checked={animationType === "geometric"}
              onChange={() => {
                setAnimationType("geometric");
              }}
              className="mr-2"
            />
            Geometric
          </label>
        </div>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleAnimate}
      >
        Animate
      </button>
    </div>
  );
}
