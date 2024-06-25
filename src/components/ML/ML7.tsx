import React, { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';

interface ML7Props {
  duration?: number;
  text: string;
  isAnimating: boolean;
}

const ML7: React.FC<ML7Props> = ({ duration = 3000, text = "Reality is broken", isAnimating = true }) => {
  const letterRef = useRef<HTMLSpanElement>(null);
  const animationRef = useRef<anime.AnimeInstance | null>(null);

  useEffect(() => {
    if (letterRef.current) {
      letterRef.current.innerHTML = text.replace(/\S/g, "<span class='letter'>$&</span>");
    }
  }, [text]);

  useEffect(() => {
    const wrapper = document.querySelector('.ml7');
    const letters = document.querySelectorAll('.ml7 .letter');

    const resetAnimation = () => {
      if (wrapper && letters.length > 0) {
        wrapper.setAttribute('style', 'opacity: 1');
        letters.forEach(letter => {
          letter.setAttribute('style', 'opacity: 0; transform: translateY(1.1em) translateX(0.55em) rotateZ(180deg)');
        });
      }
    };

    const startAnimation = () => {
      resetAnimation();
      animationRef.current = anime.timeline({ loop: true })
        .add({
          targets: '.ml7 .letter',
          translateY: ["1.1em", 0],
          translateX: ["0.55em", 0],
          translateZ: 0,
          rotateZ: [180, 0],
          opacity: [0, 1],
          duration: 750,
          easing: "easeOutExpo",
          delay: (el, i) => 50 * i
        }).add({
          targets: '.ml7',
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000
        });
    };

    if (isAnimating) {
      startAnimation();
    } else if (animationRef.current) {
      animationRef.current.pause();
      resetAnimation();
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.pause();
      }
    };
  }, [isAnimating, text]);

  return (
    <h1 className="ml7">
      <span className="text-wrapper">
        <span className="letters" ref={letterRef}>{text}</span>
      </span>
    </h1>
  );
};

export default ML7;