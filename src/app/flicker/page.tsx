// src/components/FlickerTextAnimation.tsx
"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../../components/styles/FlickerTextAnimation.css';

const FlickerTextAnimation: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const letters = containerRef.current!.querySelectorAll('.flicker-letter');
  
      letters.forEach((letter, index) => {
        gsap.timeline({ repeat: -1, repeatDelay: Math.random() })
          .to(letter, {
            opacity: 0,
            x: () => Math.random() * 20 - 10,
            y: () => Math.random() * 20 - 10,
            duration: 0.1,
            ease: 'none',
            delay: Math.random() * 0.5,
          })
          .to(letter, {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.1,
            ease: 'none',
            delay: Math.random() * 0.5,
          });
      });
    }, []);
  
    const splitText = (text: string) =>
      text.split('').map((char, index) => (
        <span key={index} className="flicker-letter">
          {char}
        </span>
      ));
  
    return (
      <div className="flicker-container" ref={containerRef}>
        <h1 className="flicker-text">{splitText('Flicker')}</h1>
        <h1 className="flicker-text">{splitText('Text')}</h1>
        <h1 className="flicker-text">{splitText('Animation')}</h1>
      </div>
    );
  };
  
  export default FlickerTextAnimation;
