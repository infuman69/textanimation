import React, { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';

interface ML10Props {
  duration?: number;
  text?: string;
  isAnimating?: boolean;
}

const ML10: React.FC<ML10Props> = ({ duration = 1300, text = "Domino Dreams", isAnimating = true }) => {
  const letterRef = useRef<HTMLSpanElement>(null);
  const animationRef = useRef<anime.AnimeInstance | null>(null);

  useEffect(() => {
    if (letterRef.current) {
      letterRef.current.innerHTML = text.replace(/\S/g, "<span class='letter'>$&</span>");
    }
  }, [text]);

  useEffect(() => {
    const wrapper = document.querySelector('.ml10');
    const letters = document.querySelectorAll('.ml10 .letter');

    const resetAnimation = () => {
      if (wrapper && letters.length > 0) {
        wrapper.setAttribute('style', 'opacity: 1');
        letters.forEach(letter => {
          letter.setAttribute('style', 'opacity: 1; transform: rotateY(-90deg)');
        });
      }
    };

    const startAnimation = () => {
      resetAnimation();
      animationRef.current = anime.timeline({ loop: true })
        .add({
          targets: '.ml10 .letter',
          rotateY: [-90, 0],
          duration: duration,
          delay: (el, i) => 45 * i
        }).add({
          targets: '.ml10',
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
    <h1 className="ml10">
      <span className="text-wrapper">
        <span className="letters" ref={letterRef}>{text}</span>
      </span>
    </h1>
  );
};

export default ML10;