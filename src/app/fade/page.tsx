"use client";
import React, { useState, useRef } from "react";
import gsap from "gsap";

export default function Fade() {
  const [duration, setDuration] = useState("1");
  const [opacity, setOpacity] = useState("1");
  const [text, setText] = useState("");

  const textRef = useRef<HTMLDivElement | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const element = textRef.current;
    event.preventDefault();
    if (!element) return;
    gsap.killTweensOf(element); // Clear any previous animations

    // Clear any previously animated properties on the element
    gsap.set(element, { clearProps: "all" });

    gsap.to(element, {
      opacity: opacity as unknown as number,
      duration: duration as unknown as number,
    });
    // gsap.to(element, { opacity: 1, duration: 1 });
    // console.log("Duration:", duration);
    // console.log("Opacity:", opacity);
    setDuration("1");
    setOpacity("1");
  };

  return (
    <div className="w-full h-screen">
      <h1 className="text-4xl text-center">Fade</h1>
      <div className="flex w-full h-full">
        <div className="w-1/2 flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center mt-8 w-1/2"
          >
            <label htmlFor="duration" className="mb-2">
              Enter a text
            </label>
            <input
              type="text"
              id="duration"
              value={text}
              onChange={(event) => setText(event.target.value)}
              className="border border-gray-400 rounded-md px-2 py-1 mb-4"
            />
            <label htmlFor="duration" className="mb-2">
              Duration:
            </label>
            <input
              type="text"
              id="duration"
              value={duration}
              onChange={(event) => setDuration(event.target.value)}
              className="border border-gray-400 rounded-md px-2 py-1 mb-4"
            />
            <label htmlFor="opacity" className="mb-2">
              Opacity:
            </label>
            <input
              type="text"
              id="opacity"
              value={opacity}
              onChange={(event) => setOpacity(event.target.value)}
              className="border border-gray-400 rounded-md px-2 py-1 mb-4"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Text-Fade
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center w-1/2" ref={textRef}>
          {text}
        </div>
      </div>
    </div>
  );
}
