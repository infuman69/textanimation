import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

interface ml2Props {
  duration?: number;
  text?: string;
}

const ML2: React.FC<ml2Props> = ({ duration = 950, text = "Sunny mornings" }) => {
  useEffect(() => {
    // Wrap every letter in a span
    const textWrapper = document.querySelector('.ml2');
    if (textWrapper) {
      textWrapper.innerHTML = textWrapper.textContent?.replace(/\S/g, "<span class='letter'>$&</span>") || '';

      anime.timeline({ loop: true })
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
    }
  }, [duration]);

  return (
    <h1 className="ml2">
      {text}
    </h1>
  );
};

export default ML2;
