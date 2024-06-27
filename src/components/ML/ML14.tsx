import React, { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';

interface ML14Props {
  text?: string;
  isAnimating?: boolean;
}

const ML14: React.FC<ML14Props> = ({ text = "Find Your Element", isAnimating = true }) => {
  const lettersRef = useRef<HTMLSpanElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);
  const animationRef = useRef<anime.AnimeInstance | null>(null);

  useEffect(() => {
    if (lettersRef.current) {
      lettersRef.current.innerHTML = text.replace(/\S/g, "<span class='letter'>$&</span>");
    }
  }, [text]);

  useEffect(() => {
    const letters = document.querySelectorAll('.ml14 .letter');
    const line = lineRef.current;

    if (isAnimating && line) {
      // Reset styles
      line.style.transform = 'scaleX(0)';
      line.style.opacity = '0.5';
      letters.forEach(letter => {
        const l = letter as HTMLElement;
        l.style.opacity = '0';
        l.style.transform = 'translateX(40px) translateZ(0) scaleX(0.3)';
      });

      if (animationRef.current) {
        animationRef.current.pause();
      }

      animationRef.current = anime.timeline({ loop: true })
        .add({
          targets: '.ml14 .line',
          scaleX: [0, 1],
          opacity: [0.5, 1],
          easing: "easeInOutExpo",
          duration: 900
        }).add({
          targets: '.ml14 .letter',
          opacity: [0, 1],
          translateX: [40, 0],
          translateZ: 0,
          scaleX: [0.3, 1],
          easing: "easeOutExpo",
          duration: 800,
          offset: '-=600',
          delay: (el, i) => 150 + 25 * i
        }).add({
          targets: '.ml14',
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
  }, [isAnimating, text]);

  return (
    <h1 className="ml14">
      <span className="text-wrapper">
        <span className="letters" ref={lettersRef}>{text}</span>
        <span className="line" ref={lineRef}></span>
      </span>
    </h1>
  );
};

export default ML14;