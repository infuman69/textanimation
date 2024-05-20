// src/components/CinematicTextAnimation.tsx
"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../../components/styles/CinematicTextAnimation.css';

const CinematicTextAnimation: React.FC = () => {
  const textRefs = useRef<HTMLHeadingElement[]>([]);

  useEffect(() => {
    const timeline = gsap.timeline();

    timeline
      .fromTo(
        textRefs.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out', stagger: 0.3 }
      )
      .to(
        textRefs.current,
        { textShadow: '0 0 20px #fff, 0 0 30px #ff00ff, 0 0 40px #ff00ff, 0 0 50px #ff00ff, 0 0 60px #ff00ff, 0 0 70px #ff00ff, 0 0 80px #ff00ff', repeat: -1, yoyo: true, duration: 2, ease: 'power3.inOut', stagger: 0.3 }
      );
  }, []);

  return (
    <div className="container">
      <h1 className="cinematic-text" ref={(el) => (textRefs.current[0] = el!)}>Cinematic</h1>
      <h1 className="cinematic-text" ref={(el) => (textRefs.current[1] = el!)}>Text</h1>
      <h1 className="cinematic-text" ref={(el) => (textRefs.current[2] = el!)}>Animation</h1>
    </div>
  );
};

export default CinematicTextAnimation;
