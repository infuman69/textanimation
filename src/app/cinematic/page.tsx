"use client"
import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const CinematicTextAnimation: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [animatedText, setAnimatedText] = useState('');
  const textRef = useRef<HTMLDivElement>(null);

  const handleAnimate = () => {
    setAnimatedText(inputText);
  };

  useEffect(() => {
    if (animatedText) {
      const timeline = gsap.timeline();

      timeline
        .fromTo(
          textRef.current,
          { opacity: 0, y: 50, rotation: -10, scale: 0.8 },
          { opacity: 1, y: 0, rotation: 0, scale: 1, duration: 1.5, ease: 'power3.out' }
        )
        .to(
          textRef.current,
          { 
            textShadow: '0 0 20px #fff, 0 0 30px #ff00ff, 0 0 40px #ff00ff, 0 0 50px #ff00ff, 0 0 60px #ff00ff, 0 0 70px #ff00ff, 0 0 80px #ff00ff',
            repeat: -1, 
            yoyo: true, 
            duration: 2, 
            ease: 'power3.inOut' 
          }
        );
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
          <h1
            className="text-3xl font-bold text-center text-gray-900 cinematic-text"
            ref={textRef}
          >
            {animatedText}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CinematicTextAnimation;
