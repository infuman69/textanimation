import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

interface ml1Props {
  duration?: number;
  text?: string;
}

const ML1: React.FC<ml1Props> = ({ duration = 600, text = "Animate Your Text" }) => {
  useEffect(() => {
    // Wrap every letter in a span
    const textWrapper = document.querySelector('.ml1 .letters');
    if (textWrapper) {
      textWrapper.innerHTML = textWrapper.textContent?.replace(/\S/g, "<span class='letter'>$&</span>") || '';

      anime.timeline({ loop: true })
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
    }
  }, [duration]);

  return (
    <h1 className="ml1">
      <span className="text-wrapper">
        <span className="line line1"></span>
        <span className="letters">{text}</span>
        <span className="line line2"></span>
      </span>
    </h1>
  );
};

export default ML1;
