import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

interface ML7Props {
  duration?: number;
  text?: string;
}

const ML7: React.FC<ML7Props> = ({ duration = 3000, text = "Reality is broken" }) => {
  useEffect(() => {
    const textWrapper = document.querySelector('.ml7 .letters');
    if (textWrapper) {
      textWrapper.innerHTML = textWrapper.textContent?.replace(/\S/g, "<span class='letter'>$&</span>") || '';

      anime.timeline({ loop: true })
        .add({
          targets: '.ml7 .letter',
          translateY: ["1.1em", 0],
          translateX: ["0.55em", 0],
          translateZ: 0,
          rotateZ: [180, 0],
          duration: 750,
          easing: "easeOutExpo",
          delay: (el, i) => 50 * i
        }).add({
          targets: '.ml7',
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000
        });
    }
  }, [duration, text]);

  return (
    <h1 className="ml7">
      <span className="text-wrapper">
        <span className="letters">{text}</span>
      </span>
    </h1>
  );
};

export default ML7;
