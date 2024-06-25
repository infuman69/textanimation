import React, { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';

interface ML5Props {
  duration?: number;
  text?: string;
  isAnimating?: boolean;
}

const ML5: React.FC<ML5Props> = ({ duration = 4000, text = "Signal & Noise", isAnimating = true }) => {
  const [textLeft, textRight] = text.split(' & ');
  const animationRef = useRef<anime.AnimeInstance | null>(null);

  const resetAnimation = () => {
    const wrapper = document.querySelector('.ml5');
    const lines = document.querySelectorAll('.ml5 .line');
    const ampersand = document.querySelector('.ml5 .ampersand');
    const leftLetters = document.querySelector('.ml5 .letters-left');
    const rightLetters = document.querySelector('.ml5 .letters-right');

    if (wrapper && lines.length > 0 && ampersand && leftLetters && rightLetters) {
      wrapper.setAttribute('style', 'opacity: 1');
      lines.forEach(line => line.setAttribute('style', 'opacity: 0.5; transform: scaleX(0)'));
      ampersand.setAttribute('style', 'opacity: 0; transform: scaleY(0.5)');
      leftLetters.setAttribute('style', 'opacity: 0; transform: translateX(0.5em)');
      rightLetters.setAttribute('style', 'opacity: 0; transform: translateX(-0.5em)');
    }
  };

  const startAnimation = () => {
    resetAnimation();
    animationRef.current = anime.timeline({ loop: true })
      .add({
        targets: '.ml5 .line',
        opacity: [0.5, 1],
        scaleX: [0, 1],
        easing: "easeInOutExpo",
        duration: 700
      })
      .add({
        targets: '.ml5 .line',
        duration: 600,
        easing: "easeOutExpo",
        translateY: (el: any, i: number) => (-0.625 + 0.625 * 2 * i) + "em"
      }, '-=700')
      .add({
        targets: '.ml5 .ampersand',
        opacity: [0, 1],
        scaleY: [0.5, 1],
        easing: "easeOutExpo",
        duration: 600,
      }, '-=600')
      .add({
        targets: '.ml5 .letters-left',
        opacity: [0, 1],
        translateX: ["0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
      }, '-=300')
      .add({
        targets: '.ml5 .letters-right',
        opacity: [0, 1],
        translateX: ["-0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
      }, '-=600')
      .add({
        targets: '.ml5',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });
  };

  useEffect(() => {
    if (isAnimating) {
      startAnimation();
    } else if (animationRef.current) {
      animationRef.current.pause();
      resetAnimation();
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.pause();
      }
    };
  }, [isAnimating, text, duration]);

  return (
    <h1 className="ml5">
      <span className="text-wrapper">
        <span className="line line1"></span>
        <span className="letters letters-left">{textLeft}</span>
        <span className="letters ampersand">&amp;</span>
        <span className="letters letters-right">{textRight}</span>
        <span className="line line2"></span>
      </span>
    </h1>
  );
};

export default ML5;