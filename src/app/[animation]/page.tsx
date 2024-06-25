"use client";
import ML1 from "../../components/ML/ML1";
import ML2 from "../../components/ML/ML2";
import ML3 from "../../components/ML/ML3";
import ML4 from "../../components/ML/ML4";
import ML5 from "../../components/ML/ML5";
import ML6 from "../../components/ML/ML6";
import ML7 from "../../components/ML/ML7";
import ML8 from "../../components/ML/ML8";
import ML9 from "../../components/ML/ML9";
import ML10 from "../../components/ML/ML10";
import { useState } from "react";

export default function Page({ params }: { params: { animation: number } }) {
  const [inputValue, setInputValue] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const handleAnimateClick = () => {
    setIsAnimating((prev) => !prev); // Toggle animation state
  };
  const movingLetters = [
    {
      index: 1,
      component: <ML1 text={inputValue} isAnimating={isAnimating} />,
      bgColor: "#4CAF50", // Green
    },
    {
      index: 2,
      component: <ML2 text={inputValue} isAnimating={isAnimating} />,
      bgColor: "#2196F3", // Blue
    },
    {
      index: 3,
      component: <ML3 text={inputValue} isAnimating={isAnimating}/>,
      bgColor: "#FFC107", // Amber
    },
    {
      index: 4,
      component: <ML4 text={inputValue} isAnimating={isAnimating}/>,
      bgColor: "#FF5722", // Deep Orange
    },
    {
      index: 5,
      component: <ML5 text={inputValue} isAnimating={isAnimating}/>,
      bgColor: "#9C27B0", // Purple
    },
    {
      index: 6,
      component: <ML6 text={inputValue} isAnimating={isAnimating} />,
      bgColor: "#E91E63", // Pink
    },
    {
      index: 7,
      component: <ML7 text={inputValue} isAnimating={isAnimating}/>,
      bgColor: "#00BCD4", // Cyan
    },
    {
      index: 8,
      component: <ML8 text={inputValue} isAnimating={isAnimating}/>,
      bgColor: "#FF9800", // Orange
    },
    {
      index: 9,
      component: <ML9 text={inputValue} isAnimating={isAnimating}/>,
      bgColor: "#795548", // Brown
    },
    {
      index: 10,
      component: <ML10 text={inputValue} isAnimating={isAnimating}/>,
      bgColor: "#607D8B", // Blue Grey
    },
  ];

  return (
    <div className="h-screen w-full flex flex-row items-center justify-center">
      <div
        className="w-1/2 h-full flex items-center justify-center "
        style={{
          backgroundColor: movingLetters[params.animation - 1].bgColor,
        }}
      >
        {movingLetters[params.animation - 1].component}
      </div>
      <div className="h-full w-1/2 flex flex-col items-center justify-center bg-white">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          placeholder="Enter text here..."
          className="w-full max-w-md px-4 py-2 text-lg border-2 border-gray-300 rounded-full focus:outline-none focus:border-blue-500 transition-colors duration-300"
        />
      </div>
      <button
        onClick={handleAnimateClick}
        className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300"
      >
        {isAnimating ? "Stop Animation" : "Start Animation"}
      </button>
    </div>
  );
}
