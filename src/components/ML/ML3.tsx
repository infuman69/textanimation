import React, { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';

interface ML3Props {
  duration?: number;
  text?: string;
  isAnimating?: boolean;
}

const ML3: React.FC<ML3Props> = ({ duration = 2250, text = "Great Thinkers", isAnimating = true }) => {
  const letterRef = useRef<HTMLSpanElement>(null);
  const animationRef = useRef<anime.AnimeInstance | null>(null);

  useEffect(() => {
    if (letterRef.current) {
      letterRef.current.innerHTML = text.replace(/\S/g, "<span class='letter'>$&</span>");
    }
  }, [text]);

  useEffect(() => {
    const wrapper = document.querySelector('.ml3');
    const letters = document.querySelectorAll('.ml3 .letter');

    if (isAnimating && wrapper) {
      // Reset opacity
      wrapper.setAttribute('style', 'opacity: 1');
      letters.forEach(letter => letter.setAttribute('style', 'opacity: 0'));

      if (animationRef.current) {
        animationRef.current.pause();
      }

      animationRef.current = anime.timeline({ loop: true })
        .add({
          targets: '.ml3 .letter',
          opacity: [0, 1],
          easing: "easeInOutQuad",
          duration: duration,
          delay: (el, i) => 150 * (i + 1)
        }).add({
          targets: '.ml3',
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
    <h1 className="ml3">
      <span ref={letterRef}>{text}</span>
    </h1>
  );
};

export default ML3;