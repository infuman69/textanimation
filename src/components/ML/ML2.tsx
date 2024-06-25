import React, { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';

interface ML2Props {
  duration?: number;
  text: string;
  isAnimating: boolean;
}

const ML2: React.FC<ML2Props> = ({ duration = 950, text = "Sunny mornings", isAnimating = true }) => {
  const letterRef = useRef<HTMLSpanElement>(null);
  const animationRef = useRef<anime.AnimeInstance | null>(null);

  useEffect(() => {
    if (letterRef.current) {
      letterRef.current.innerHTML = text.replace(/\S/g, "<span class='letter'>$&</span>");
    }
  }, [text]);

  useEffect(() => {
    const wrapper = document.querySelector('.ml2');
    const letters = document.querySelectorAll('.ml2 .letter');

    if (isAnimating && wrapper) {
      // Reset opacity and scale
      wrapper.setAttribute('style', 'opacity: 1');
      letters.forEach(letter => letter.setAttribute('style', 'opacity: 0; transform: scale(4)'));

      if (animationRef.current) {
        animationRef.current.pause();
      }

      animationRef.current = anime.timeline({ loop: true })
        .add({
          targets: '.ml2 .letter',
          scale: [4, 1],
          opacity: [0, 1],
          translateZ: 0,
          easing: "easeOutExpo",
          duration: duration,
          delay: (el, i) => 70 * i
        }).add({
          targets: '.ml2',
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000
        });
    } else if (!isAnimating && animationRef.current) {
      animationRef.current.pause();
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.pause();
      }
    };
  }, [duration, isAnimating, text]);

  return (
    <h1 className="ml2">
      <span className='text-wrapper'>
        <span className='letters' ref={letterRef}>
          {text}
        </span>
      </span>
    </h1>
  );
};

export default ML2;