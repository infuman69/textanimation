import React, { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';

interface ML6Props {
  duration?: number;
  text?: string;
  isAnimating?: boolean;
}

const ML6: React.FC<ML6Props> = ({ duration = 750, text = "Beautiful Questions", isAnimating = true }) => {
  const letterRef = useRef<HTMLSpanElement>(null);
  const animationRef = useRef<anime.AnimeInstance | null>(null);

  useEffect(() => {
    if (letterRef.current) {
      letterRef.current.innerHTML = text.replace(/\S/g, "<span class='letter'>$&</span>");
    }
  }, [text]);

  useEffect(() => {
    const wrapper = document.querySelector('.ml6');
    const letters = document.querySelectorAll('.ml6 .letter');

    if (isAnimating && wrapper) {
      // Reset opacity and translateY
      wrapper.setAttribute('style', 'opacity: 1');
      letters.forEach(letter => letter.setAttribute('style', 'opacity: 1; transform: translateY(1.1em)'));

      if (animationRef.current) {
        animationRef.current.pause();
      }

      animationRef.current = anime.timeline({ loop: true })
        .add({
          targets: '.ml6 .letter',
          translateY: ["1.1em", 0],
          translateZ: 0,
          duration: duration,
          delay: (el, i) => 50 * i
        }).add({
          targets: '.ml6',
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
    <h1 className="ml6">
      <span className="text-wrapper">
        <span className="letters" ref={letterRef}>
          {text}
        </span>
      </span>
    </h1>
  );
};

export default ML6;