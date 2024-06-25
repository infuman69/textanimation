import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

interface ML10Props {
  text?: string;
}

const ML10: React.FC<ML10Props> = ({ text = "Domino Dreams" }) => {
  useEffect(() => {
    const textWrapper = document.querySelector('.ml10 .letters');
    if (textWrapper) {
      textWrapper.innerHTML = textWrapper.textContent?.replace(/\S/g, "<span class='letter'>$&</span>") || '';

      anime.timeline({ loop: true })
        .add({
          targets: '.ml10 .letter',
          rotateY: [-90, 0],
          duration: 1300,
          delay: (el, i) => 45 * i
        }).add({
          targets: '.ml10',
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000
        });
    }
  }, [text]);

  return (
    <h1 className="ml10">
      <span className="text-wrapper">
        <span className="letters">{text}</span>
      </span>
    </h1>
  );
};

export default ML10;
