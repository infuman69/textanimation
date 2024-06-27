import React, { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';

interface ML1Props {
  duration?: number;
  text?: string;
  isAnimating?: boolean;
}

const ML1: React.FC<ML1Props> = ({ duration = 600, text = "animation", isAnimating = true }) => {
  const letterRef = useRef<HTMLSpanElement>(null);
  const animationRef = useRef<anime.AnimeInstance | null>(null);

  useEffect(() => {
    if (letterRef.current) {
      letterRef.current.innerHTML = text.replace(/\S/g, "<span class='letter'>$&</span>");
    }
  }, [text]);

  useEffect(() => {
    const wrapper = document.querySelector('.ml1');
    const letters = document.querySelectorAll('.ml1 .letter');
    const lines = document.querySelectorAll('.ml1 .line');

    if (isAnimating && letterRef.current) {
      // Reset opacity and scale
      if (wrapper) wrapper.setAttribute('style', 'opacity: 1');
      letters.forEach(letter => letter.setAttribute('style', 'opacity: 0; transform: scale(0.3)'));
      lines.forEach(line => line.setAttribute('style', 'opacity: 0; transform: scaleX(0)'));

      if (animationRef.current) {
        animationRef.current.pause();
      }

      animationRef.current = anime.timeline({ loop: true })
        .add({
          targets: '.ml1 .letter',
          scale: [0.3, 1],
          opacity: [0, 1],
          translateZ: 0,
          easing: "easeOutExpo",
          duration: duration,
          delay: (el, i) => 70 * (i + 1)
        }).add({
          targets: '.ml1 .line',
          scaleX: [0, 1],
          opacity: [0.5, 1],
          easing: "easeOutExpo",
          duration: 700,
          offset: '-=875',
          delay: (el, i, l) => 80 * (l - i)
        }).add({
          targets: '.ml1',
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
    <h1 className="ml1">
      <span className="text-wrapper">
        <span className="line line1"></span>
        <span className="letters" ref={letterRef}>{text}</span>
        <span className="line line2"></span>
      </span>
    </h1>
  );
};

export default ML1;