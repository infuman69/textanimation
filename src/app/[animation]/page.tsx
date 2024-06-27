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
import ML11 from "@/components/ML/ML11";
import ML12 from "@/components/ML/ML12";
import ML13 from "@/components/ML/ML13";
import ML14 from "@/components/ML/ML14";
import ML15 from "@/components/ML/ML15";
import ML16 from "@/components/ML/ML16";
import { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";
import gifshot from "gifshot";

function captureElementScreenshot(elementId: any) {
  return new Promise((resolve, reject) => {
    const element = document.getElementById(elementId);
    html2canvas(element!)
      .then((canvas) => {
        const imageData = canvas.toDataURL("image/png");
        resolve(imageData);
      })
      .catch(reject);
  });
}

export default function Page({ params }: { params: { animation: number } }) {
  const [inputValue, setInputValue] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const animatedDivRef = useRef<HTMLDivElement>(null);

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
      component: <ML3 text={inputValue} isAnimating={isAnimating} />,
      bgColor: "#FFC107", // Amber
    },
    {
      index: 4,
      component: <ML4 text={inputValue} isAnimating={isAnimating} />,
      bgColor: "#FF5722", // Deep Orange
    },
    {
      index: 5,
      component: <ML5 text={inputValue} isAnimating={isAnimating} />,
      bgColor: "#9C27B0", // Purple
    },
    {
      index: 6,
      component: <ML6 text={inputValue} isAnimating={isAnimating} />,
      bgColor: "#E91E63", // Pink
    },
    {
      index: 7,
      component: <ML7 text={inputValue} isAnimating={isAnimating} />,
      bgColor: "#00BCD4", // Cyan
    },
    {
      index: 8,
      component: <ML8 text={inputValue} isAnimating={isAnimating} />,
      bgColor: "#FF9800", // Orange
    },
    {
      index: 9,
      component: <ML9 text={inputValue} isAnimating={isAnimating} />,
      bgColor: "#795548", // Brown
    },
    {
      index: 10,
      component: <ML10 text={inputValue} isAnimating={isAnimating} />,
      bgColor: "#607D8B", // Blue Grey
    },
    {
      index : 11,
      component : <ML11 text={inputValue} isAnimating={isAnimating} />,
      bgColor: "#E8C3B9",
    },
    {
      index : 12,
      component: <ML12 text={inputValue} isAnimating={isAnimating} />,
      bgColor: "#9BA5B5",
    },
    {
      index : 13,
      component: <ML13 text={inputValue} isAnimating={isAnimating} />,
      bgColor: "#98BEC8",
    },
    {
      index : 14,
      component: <ML14 text={inputValue} isAnimating={isAnimating} />,
      bgColor: "#45383C",
    },
    {
      index : 15,
      component : <ML15 text={inputValue} isAnimating={isAnimating} />,
      bgColor : "#C1605C",
    },
    {
      index :16,
      component : <ML16 text={inputValue} isAnimating={isAnimating} />,
      bgColor: "#F3E9C6"
    }
  ];

  const handleDownloadClick = () => {
    const captureInterval = 10; // 10 frames per second
    const totalDuration = 10000; // 5 seconds total
    const screenshots: any = [];

    const captureScreenshot = async () => {
      try {
        const image = await captureElementScreenshot("someShit");
        screenshots.push(image);
      } catch (error) {
        console.error("Error capturing screenshot:", error);
      }
    };

    const intervalId = setInterval(captureScreenshot, captureInterval);

    // Stop capturing after totalDuration
    setTimeout(() => {
      clearInterval(intervalId);

      // Function to send chunks of data
      const sendChunks = async (data: any, chunkSize = 5) => {
        const chunks = [];
        for (let i = 0; i < data.length; i += chunkSize) {
          chunks.push(data.slice(i, i + chunkSize));
        }

        const results = [];
        for (let i = 0; i < chunks.length; i++) {
          const response = await fetch("/api/save_png", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              imgArray: chunks[i],
              chunkIndex: i,
              totalChunks: chunks.length,
            }),
          });
          const result = await response.json();
          results.push(result);
        }

        return results;
      };

      console.log(screenshots);

      const div = animatedDivRef.current;

      gifshot.createGIF(
        {
          images: screenshots,
          gifWidth: div!.clientWidth,
          gifHeight: div!.clientHeight,
          interval: 0.1,
        },
        (obj) => {
          if (!obj.error) {
            const image = obj.image;
            const a = document.createElement("a");
            a.href = image;
            a.download = "animation.gif";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
          } else {
            console.error("Error creating GIF:", obj.error);
          }
        }
      );

      // sendChunks(screenshots)
      //   .then((results) => {
      //     console.log("All chunks sent successfully:", results);

      //   })
      //   .catch((error) => {
      //     console.error("Error sending image data to backend:", error);
      //   });
    }, totalDuration);
  };

  return (
    <div className="h-screen w-full flex flex-row items-center justify-center">
      <div
        className="w-1/2 h-full flex items-center justify-center "
        style={{
          backgroundColor: movingLetters[params.animation - 1].bgColor,
        }}
        id="someShit"
        ref={animatedDivRef}
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
      <button
        onClick={handleDownloadClick}
        className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300"
        style={{
          marginTop: "1rem",
        }}
      >
        Download GIF
      </button>
    </div>
  );
}
