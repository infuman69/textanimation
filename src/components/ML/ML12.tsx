import React, { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';

interface ML12Props {
  text?: string;
  isAnimating?: boolean;
}

const ML12: React.FC<ML12Props> = ({ text = "A new production", isAnimating = true }) => {
  const textWrapperRef = useRef<HTMLHeadingElement>(null);
  const animationRef = useRef<anime.AnimeInstance | null>(null);

  useEffect(() => {
    if (textWrapperRef.current) {
      textWrapperRef.current.innerHTML = text.replace(/\S/g, "<span class='letter'>$&</span>");
    }
  }, [text]);

  useEffect(() => {
    const letters = document.querySelectorAll('.ml12 .letter');

    if (isAnimating) {
      // Reset styles
      letters.forEach(letter => letter.setAttribute('style', 'opacity: 0; transform: translateX(40px)'));

      if (animationRef.current) {
        animationRef.current.pause();
      }

      animationRef.current = anime.timeline({ loop: true })
        .add({
          targets: '.ml12 .letter',
          translateX: [40, 0],
          translateZ: 0,
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 1200,
          delay: (el, i) => 500 + 30 * i
        }).add({
          targets: '.ml12 .letter',
          translateX: [0, -30],
          opacity: [1, 0],
          easing: "easeInExpo",
          duration: 1100,
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
    <h1 className="ml12" ref={textWrapperRef} style={{
      fontWeight: 200,
      fontSize: '1.8em',
      textTransform: 'uppercase',
      letterSpacing: '0.5em'
    }}>
      {text}
    </h1>
  );
};

export default ML12;