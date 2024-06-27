import React, { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';

interface ML11Props {
  text?: string;
  isAnimating?: boolean;
  duration?: number;
}

const ML11: React.FC<ML11Props> = ({duration =700, text = "Hello Goodbye", isAnimating = true }) => {
  const letterRef = useRef<HTMLSpanElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);
  const animationRef = useRef<anime.AnimeInstance | null>(null);

  useEffect(() => {
    if (letterRef.current) {
      letterRef.current.innerHTML = text.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
    }
  }, [text]);

  useEffect(() => {
    const wrapper = document.querySelector('.ml11');
    const line = lineRef.current;
    const letters = document.querySelectorAll('.ml11 .letter');

    if (isAnimating && wrapper && line) {
      // Reset styles
      wrapper.setAttribute('style', 'opacity: 1');
      line.setAttribute('style', 'transform: scaleY(0); opacity: 0.5');
      letters.forEach(letter => letter.setAttribute('style', 'opacity: 0'));

      if (animationRef.current) {
        animationRef.current.pause();
      }

      animationRef.current = anime.timeline({ loop: true })
        .add({
          targets: '.ml11 .line',
          scaleY: [0, 1],
          opacity: [0.5, 1],
          easing: "easeOutExpo",
          duration: duration
        })
        .add({
          targets: '.ml11 .line',
          translateX: [0, letterRef.current?.getBoundingClientRect().width ?? 0 + 10],
          easing: "easeOutExpo",
          duration: 700,
          delay: 100
        })
        .add({
          targets: '.ml11 .letter',
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 600,
          offset: '-=775',
          delay: (el, i) => 34 * (i + 1)
        })
        .add({
          targets: '.ml11',
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
    <h1 className="ml11">
      <span className="text-wrapper">
        <span className="line line1" ref={lineRef}></span>
        <span className="letters" ref={letterRef}>
          {text}
        </span>
      </span>
    </h1>
  );
};

export default ML11;