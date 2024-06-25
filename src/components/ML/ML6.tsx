import React, { useEffect, CSSProperties } from 'react';
import anime from 'animejs/lib/anime.es.js';
import { mLProps } from '@/types/movingLetter';


const ML6: React.FC<mLProps> = ({ duration = 750, text = "Beautiful Questions"}) => {
  useEffect(() => {
    // Wrap every letter in a span
    const textWrapper = document.querySelector('.ml6 .letters');
    if (textWrapper) {
      textWrapper.innerHTML = textWrapper.textContent?.replace(/\S/g, "<span class='letter'>$&</span>") || '';

      anime.timeline({ loop: true })
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
    }
  }, [duration]);

  return (
    <h1 className="ml6">
      <span className="text-wrapper">
        <span className="letters">{text}</span>
      </span>
    </h1>
  );
};

export default ML6;
