import React from "react";
import ML1 from "./ML/ML1";
import ML2 from "./ML/ML2";
import ML3 from "./ML/ML3";
import ML4 from "./ML/ML4";
import ML5 from "./ML/ML5";
import ML6 from "./ML/ML6";
import ML7 from "./ML/ML7";
import ML8 from "./ML/ML8";
import ML9 from "./ML/ML9";
import ML10 from "./ML/ML10";
import Link from "next/link";

const GridComponent = () => {
  const movingLetters = [
    {
      index: 1,
      component: <ML1 />,
      bgColor: "#4CAF50", // Green
    },
    {
      index: 2,
      component: <ML2 />,
      bgColor: "#2196F3", // Blue
    },
    {
      index: 3,
      component: <ML3 />,
      bgColor: "#FFC107", // Amber
    },
    {
      index: 4,
      component: <ML4 />,
      bgColor: "#FF5722", // Deep Orange
    },
    {
      index: 5,
      component: <ML5 />,
      bgColor: "#9C27B0", // Purple
    },
    {
      index: 6,
      component: <ML6 />,
      bgColor: "#E91E63", // Pink
    },
    {
      index: 7,
      component: <ML7 />,
      bgColor: "#00BCD4", // Cyan
    },
    {
      index: 8,
      component: <ML8 />,
      bgColor: "#FF9800", // Orange
    },
    {
      index: 9,
      component: <ML9 />,
      bgColor: "#795548", // Brown
    },
    {
      index: 10,
      component: <ML10 />,
      bgColor: "#607D8B", // Blue Grey
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {movingLetters.map((item) => (
        <Link key={item.index} href={`/${item.index}`}>
          <div
            className={`text-center flex justify-center items-center h-80 transition-colors duration-300 ease-in-out transform hover:bg-opacity-30`}
            style={{ backgroundColor: `${item.bgColor}`, cursor: "pointer" }}
          >
            {item.component}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default GridComponent;
