import React, { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';

interface ML16Props {
  duration?: number;
  text?: string;
  isAnimating?: boolean;
}

const ML16: React.FC<ML16Props> = ({ duration = 3000, text = "Made with love", isAnimating = true }) => {
  const letterRef = useRef<HTMLSpanElement>(null);
  const animationRef = useRef<anime.AnimeInstance | null>(null);

  useEffect(() => {
    if (letterRef.current) {
      letterRef.current.innerHTML = text.replace(/\S/g, "<span class='letter'>$&</span>");
    }
  }, [text]);

  useEffect(() => {
    const wrapper = document.querySelector('.ml16');
    const letters = document.querySelectorAll('.ml16 .letter');

    const resetAnimation = () => {
      if (wrapper && letters.length > 0) {
        wrapper.setAttribute('style', 'opacity: 1');
        letters.forEach(letter => {
          letter.setAttribute('style', 'opacity: 1; transform: translateY(-100px)');
        });
      }
    };

    const startAnimation = () => {
      resetAnimation();
      animationRef.current = anime.timeline({ loop: true })
        .add({
          targets: '.ml16 .letter',
          translateY: [-100, 0],
          easing: "easeOutExpo",
          duration: 1400,
          delay: (el, i) => 30 * i
        }).add({
          targets: '.ml16',
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
    <h1 className="ml16">
      <span className="text-wrapper">
        <span className="letters" ref={letterRef}>{text}</span>
      </span>
    </h1>
  );
};

export default ML16;