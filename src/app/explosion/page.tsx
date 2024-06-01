"use client"
import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const ExplosionTextAnimation: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [animatedText, setAnimatedText] = useState('');
  const textRefs = useRef<HTMLSpanElement[]>([]);

  const handleAnimate = () => {
    setAnimatedText(inputText);
  };

  useEffect(() => {
    if (animatedText) {
      gsap.fromTo(textRefs.current, {
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        rotation: 0
      }, {
        opacity: 0,
        scale: 2,
        x: () => Math.random() * 200 - 100,
        y: () => Math.random() * 200 - 100,
        rotation: () => Math.random() * 360,
        duration: 1.5,
        ease: "expo.out",
        stagger: 0.02
      });
    }
  }, [animatedText]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="flex flex-col items-center">
        <div className="mb-5 flex">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter text"
            className="px-4 py-2 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={handleAnimate}
            className="ml-3 px-4 py-2 bg-indigo-500 text-white rounded-md text-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Animate
          </button>
        </div>
        <div className="p-5 border border-gray-300 rounded-lg shadow-md bg-white">
          <h1 className="text-3xl font-bold text-center text-gray-900 cinematic-text">
            {animatedText.split('').map((char, index) => (
              <span
                key={index}
                ref={(el) => textRefs.current[index] = el!}
                className="inline-block"
              >
                {char}
              </span>
            ))}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ExplosionTextAnimation;
