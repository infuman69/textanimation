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
    <main className="h-fit w-full">
      <div className="flex flex-row justify-center items-center h-screen w-full bg-blue-500 gap-5 p-5">
        <div className="w-1/2 flex justify-center rounded-lg py-5  bg-indigo-950">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col  w-1/2 font-epilogue"
          >
            <label htmlFor="duration" className="mb-2 text-white">
              Enter a text
            </label>
            <input
              type="text"
              id="duration"
              value={text}
              onChange={(event) => setText(event.target.value)}
              className="border border-gray-400  px-2 py-1 mb-4 bg-[#D9D9D9] rounded-full"
            />
            <label htmlFor="duration" className="mb-2 text-white">
              Duration:
            </label>
            <input
              type="text"
              id="duration"
              value={duration}
              onChange={(event) => setDuration(event.target.value)}
              className="border border-gray-400 px-2 py-1 mb-4 bg-[#D9D9D9] rounded-full"
            />
            <label htmlFor="opacity" className="mb-2 text-white">
              Opacity:
            </label>
            <input
              type="text"
              id="opacity"
              value={opacity}
              onChange={(event) => setOpacity(event.target.value)}
              className="border border-gray-400 px-2 py-1 mb-4 bg-[#D9D9D9] rounded-full"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Text-Fade
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center h-80 w-full rounded-2xl bg-[#D9D9D9]" >
          <div ref={textRef}>
          {text}
          </div>
        </div>
      </div>
    </main>
  );
}
