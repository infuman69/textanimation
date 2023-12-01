"use client";
import React, { useState, useRef } from "react";
import gsap from "gsap";

const Letters = () => {
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

    const letters = element.textContent?.split('');
    console.log(letters)
      element.textContent = ''; // Clear the text content

      letters?.forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter === ' ' ? '\u00A0' : letter;
        
        span.style.display = 'block';
        span.style.opacity = '0';
        span.style.position = 'relative';

        element.appendChild(span);

        gsap.to(span, {
            left: '-20px', // Move the letter upward
            // repeat: -1, // Repeat indefinitely
            right: '-20px', // Move the letter downward
            top: '-20px', // Move the letter to the left
            bottom: '-20px', // Move the letter to the right
            yoyo: true, // Reverse the animation (reset to default)
            duration: 0.5,
            delay: index * 0.1,
            opacity: 1,
          });
      });
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
};

export default Letters;
