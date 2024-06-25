import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

interface ml3Props {
  duration?: number;
  text?: string;
}

const ML3: React.FC<ml3Props> = ({ duration = 2250, text = "Great Thinkers" }) => {
  useEffect(() => {
    // Wrap every letter in a span
    const textWrapper = document.querySelector('.ml3');
    if (textWrapper) {
      textWrapper.innerHTML = textWrapper.textContent?.replace(/\S/g, "<span class='letter'>$&</span>") || '';

      anime.timeline({ loop: true })
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
    }
  }, [duration]);

  return (
    <h1 className="ml3">
      {text}
    </h1>
  );
};

export default ML3;
