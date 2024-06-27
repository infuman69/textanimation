import React, { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';

interface ML13Props {
  text?: string;
  isAnimating?: boolean;
}

const ML13: React.FC<ML13Props> = ({ text = "Reality is broken", isAnimating = true }) => {
  const letterRef = useRef<HTMLSpanElement>(null);
  const animationRef = useRef<anime.AnimeInstance | null>(null);

  useEffect(() => {
    if (letterRef.current) {
      letterRef.current.innerHTML = text.replace(/\S/g, "<span class='letter'>$&</span>");
    }
  }, [text]);

  useEffect(() => {
    const letters = document.querySelectorAll('.ml13 .letter');

    if (isAnimating) {
      // Reset styles
      letters.forEach(letter => letter.setAttribute('style', 'opacity: 0; transform: translateY(100px) translateZ(0)'));

      if (animationRef.current) {
        animationRef.current.pause();
      }

      animationRef.current = anime.timeline({ loop: true })
        .add({
          targets: '.ml13 .letter',
          translateY: [100, 0],
          translateZ: 0,
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 1400,
          delay: (el, i) => 300 + 30 * i
        }).add({
          targets: '.ml13 .letter',
          translateY: [0, -100],
          opacity: [1, 0],
          easing: "easeInExpo",
          duration: 1200,
          delay: (el, i) => 100 + 30 * i
        });
    } else if (!isAnimating && animationRef.current) {
      animationRef.current.pause();
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.pause();
      }
    };
  }, [isAnimating, text]);

  return (
    <h1 className="ml13">
      <span className="text-wrapper">
        <span className="letters" ref={letterRef}>
          {text}
        </span>
      </span>
    </h1>
  );
};

export default ML13;