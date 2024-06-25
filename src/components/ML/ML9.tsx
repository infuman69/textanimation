import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

interface ML9Props {
  text?: string;
}

const ML9: React.FC<ML9Props> = ({ text = "Coffee mornings" }) => {
  useEffect(() => {
    const textWrapper = document.querySelector('.ml9 .letters');
    if (textWrapper) {
      textWrapper.innerHTML = textWrapper.textContent?.replace(/\S/g, "<span class='letter'>$&</span>") || '';

      anime.timeline({ loop: true })
        .add({
          targets: '.ml9 .letter',
          scale: [0, 1],
          duration: 1500,
          elasticity: 600,
          delay: (el, i) => 45 * (i + 1)
        }).add({
          targets: '.ml9',
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000
        });
    }
  }, [text]);

  return (
    <h1 className="ml9">
      <span className="text-wrapper">
        <span className="letters">{text}</span>
      </span>
    </h1>
  );
};

export default ML9;
