import React, { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';

interface ML9Props {
  duration?: number;
  text?: string;
  isAnimating?: boolean;
}

const ML9: React.FC<ML9Props> = ({ duration = 1500, text = "Coffee mornings", isAnimating = true }) => {
  const letterRef = useRef<HTMLSpanElement>(null);
  const animationRef = useRef<anime.AnimeInstance | null>(null);

  useEffect(() => {
    if (letterRef.current) {
      letterRef.current.innerHTML = text.replace(/\S/g, "<span class='letter'>$&</span>");
    }
  }, [text]);

  useEffect(() => {
    const wrapper = document.querySelector('.ml9');
    const letters = document.querySelectorAll('.ml9 .letter');

    const resetAnimation = () => {
      if (wrapper && letters.length > 0) {
        wrapper.setAttribute('style', 'opacity: 1');
        letters.forEach(letter => {
          letter.setAttribute('style', 'opacity: 1; transform: scale(0)');
        });
      }
    };

    const startAnimation = () => {
      resetAnimation();
      animationRef.current = anime.timeline({ loop: true })
        .add({
          targets: '.ml9 .letter',
          scale: [0, 1],
          duration: duration,
          elasticity: 600,
          delay: (el, i) => 45 * (i + 1)
        }).add({
          targets: '.ml9',
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
  }, [isAnimating, text, duration]);

  return (
    <h1 className="ml9">
      <span className="text-wrapper">
        <span className="letters" ref={letterRef}>{text}</span>
      </span>
    </h1>
  );
};

export default ML9;